import express from "express";
import cors from "cors";
import pkg from "pg";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const { Pool } = pkg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Connect to PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const templatesDir = path.resolve(__dirname, "../frontend/mnt/task-templates");

const normalizeTemplateName = (value) =>
  String(value || "")
    .trim()
    .replace(/[^a-zA-Z0-9._-]+/g, "_");

const readTemplateFile = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(content);
    return parsed && typeof parsed === "object" ? parsed : { jsonName: "", tasks: [] };
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return { jsonName: "", tasks: [] };
    }
    throw error;
  }
};

app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database query failed" });
  }
});

app.post("/api/task-templates", async (req, res) => {
  try {
    const { jsonName, task } = req.body;

    if (!jsonName) {
      return res.status(400).json({ error: "jsonName is required" });
    }

    const safeName = normalizeTemplateName(jsonName);
    if (!safeName) {
      return res.status(400).json({ error: "jsonName is invalid" });
    }

    await fs.mkdir(templatesDir, { recursive: true });

    const filePath = path.join(templatesDir, `${safeName}.json`);
    const existingTemplate = await readTemplateFile(filePath);
    const existingTasks = Array.isArray(existingTemplate.tasks) ? existingTemplate.tasks : [];

    const nextTasks = task ? [...existingTasks, task] : existingTasks;
    const template = {
      jsonName: safeName,
      tasks: nextTasks,
    };

    await fs.writeFile(filePath, JSON.stringify(template, null, 2), "utf8");

    res.json({ success: true, filePath, template });
  } catch (error) {
    console.error("Task template save failed:", error);
    res.status(500).json({ error: "Task template save failed" });
  }
});

app.get("/api/task-templates/:jsonName", async (req, res) => {
  try {
    const safeName = normalizeTemplateName(req.params.jsonName);
    if (!safeName) {
      return res.status(400).json({ error: "jsonName is invalid" });
    }

    const filePath = path.join(templatesDir, `${safeName}.json`);
    const template = await readTemplateFile(filePath);
    res.json(template);
  } catch (error) {
    console.error("Task template read failed:", error);
    res.status(500).json({ error: "Task template read failed" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
