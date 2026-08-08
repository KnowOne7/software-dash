import { useEffect, useState } from "react";

type TemplateSummary = {
  jsonName: string;
  fileName: string;
  taskCount: number;
};

type TemplateDocument = {
  jsonName: string;
  tasks?: Array<Record<string, unknown>>;
  [key: string]: unknown;
};

const API_BASE_URL = "http://localhost:5000";

const parseJsonResponse = async (response: Response) => {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new Error(text);
  }
};

const PipelineList = () => {
  const [templates, setTemplates] = useState<TemplateSummary[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateDocument | null>(null);
  const [editorText, setEditorText] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const loadTemplates = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/task-templates`);
      const data = await parseJsonResponse(response);
      if (!response.ok) {
        throw new Error(data?.error || "Unable to load template list.");
      }
      setTemplates(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
      setStatusMessage(error instanceof Error ? error.message : "Unable to load templates.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadTemplates();
  }, []);

  const handleSelectTemplate = async (jsonName: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/task-templates/${encodeURIComponent(jsonName)}`);
      const data = await parseJsonResponse(response);
      if (!response.ok) {
        throw new Error(data?.error || "Unable to load template.");
      }
      setSelectedTemplate(data);
      setEditorText(JSON.stringify(data, null, 2));
      setStatusMessage(`Loaded ${jsonName}`);
    } catch (error) {
      console.error(error);
      setStatusMessage(error instanceof Error ? error.message : "Unable to load template.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveTemplate = async () => {
    if (!selectedTemplate) return;

    try {
      const parsed = JSON.parse(editorText);
      const response = await fetch(`${API_BASE_URL}/api/task-templates/${encodeURIComponent(selectedTemplate.jsonName)}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed),
      });
      const data = await parseJsonResponse(response);
      if (!response.ok) {
        throw new Error(data?.error || "Unable to update template.");
      }
      setSelectedTemplate(data.template || parsed);
      setStatusMessage(`Updated ${selectedTemplate.jsonName}`);
      await loadTemplates();
    } catch (error) {
      console.error(error);
      setStatusMessage(error instanceof Error ? error.message : "Unable to update template.");
    }
  };

  const handleDeleteTemplate = async (jsonName: string) => {
    if (!window.confirm(`Delete ${jsonName}?`)) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/task-templates/${encodeURIComponent(jsonName)}`, {
        method: "DELETE",
      });
      const data = await parseJsonResponse(response);
      if (!response.ok) {
        throw new Error(data?.error || "Unable to delete template.");
      }
      setSelectedTemplate(null);
      setEditorText("");
      setStatusMessage(`Deleted ${jsonName}`);
      await loadTemplates();
    } catch (error) {
      console.error(error);
      setStatusMessage(error instanceof Error ? error.message : "Unable to delete template.");
    }
  };

  return (
    <div className="mt-6 rounded-xl border border-borderColor bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h4 className="text-lg font-semibold text-gray-900">Saved task templates</h4>
          <p className="text-sm text-gray-500">Select a saved JSON template to edit or delete it.</p>
        </div>
        <button
          type="button"
          onClick={() => void loadTemplates()}
          className="rounded-lg border border-borderColor px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Refresh
        </button>
      </div>

      {statusMessage ? (
        <div className="mb-4 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-700">
          {statusMessage}
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="rounded-lg border border-borderColor bg-gray-50 p-3">
          {loading && templates.length === 0 ? (
            <p className="text-sm text-gray-500">Loading templates...</p>
          ) : templates.length === 0 ? (
            <p className="text-sm text-gray-500">No saved templates yet.</p>
          ) : (
            <ul className="space-y-2">
              {templates.map((template) => (
                <li key={template.fileName}>
                  <button
                    type="button"
                    onClick={() => void handleSelectTemplate(template.jsonName)}
                    className={`w-full rounded-lg border px-3 py-2 text-left transition ${selectedTemplate?.jsonName === template.jsonName ? "border-primary bg-primary/10" : "border-transparent bg-white hover:border-primary/40"}`}
                  >
                    <div className="text-sm font-medium text-gray-900">{template.jsonName}</div>
                    <div className="text-xs text-gray-500">{template.taskCount} task{template.taskCount === 1 ? "" : "s"}</div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="rounded-lg border border-borderColor bg-white p-3">
          {selectedTemplate ? (
            <>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h5 className="text-sm font-semibold text-gray-900">Editing {selectedTemplate.jsonName}</h5>
                  <p className="text-xs text-gray-500">Edit the JSON template below and save when ready.</p>
                </div>
                <button
                  type="button"
                  onClick={() => void handleDeleteTemplate(selectedTemplate.jsonName)}
                  className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>

              <textarea
                value={editorText}
                onChange={(event) => setEditorText(event.target.value)}
                rows={16}
                className="w-full rounded-lg border border-borderColor px-3 py-2 font-mono text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => void handleSaveTemplate()}
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                  Save changes
                </button>
              </div>
            </>
          ) : (
            <div className="flex h-full min-h-[220px] items-center justify-center rounded-lg border border-dashed border-borderColor bg-gray-50 px-4 text-center text-sm text-gray-500">
              Choose a saved template to edit it.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PipelineList;
