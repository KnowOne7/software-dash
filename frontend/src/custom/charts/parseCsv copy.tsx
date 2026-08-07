export type Row = Record<string, string>;

export function splitCSVLine(line: string): string[] {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      const next = line[i + 1];
      if (inQuotes && next === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      out.push(cur);
      cur = "";
    } else {
      cur += ch;
    }
  }
  out.push(cur);
  return out.map((s) => s.trim());
}

export function parseCSV(csvText: string): Row[] {
  const rows: Row[] = [];
  const lines = csvText
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")
    .filter((l) => l.trim().length > 0);

  if (!lines.length) return rows;

  const header = splitCSVLine(lines[0]).map((h) => h.trim());
  for (let i = 1; i < lines.length; i++) {
    const cells = splitCSVLine(lines[i]);
    const obj: Row = {};
    for (let c = 0; c < header.length; c++) obj[header[c]] = (cells[c] ?? "").trim();
    rows.push(obj);
  }
  return rows;
}

export function num(v: unknown): number {
  const x = typeof v === "number" ? v : Number(v);
  return Number.isFinite(x) ? x : 0;
}
