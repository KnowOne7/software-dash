export type Row = Record<string, string>;

export type CsvTable = {
  headers: string[];
  rows: Row[];
};

export type ParseCsvOptions = {
  delimiter?: string;
  skipEmptyLines?: boolean;
  trim?: boolean;
};

function splitCsvLine(line: string, delimiter: string): string[] {
  const out: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];

    if (ch === '"') {
      const next = line[i + 1];
      if (inQuotes && next === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === delimiter && !inQuotes) {
      out.push(current);
      current = "";
    } else {
      current += ch;
    }
  }

  out.push(current);
  return out.map((s) => s.trim());
}

export function parseCsv(csvText: string, options: ParseCsvOptions = {}): CsvTable {
  const delimiter = options.delimiter ?? ",";
  const skipEmptyLines = options.skipEmptyLines ?? true;
  const trim = options.trim ?? true;

  const lines = csvText
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")
    .filter((line) => (skipEmptyLines ? line.trim().length > 0 : true));

  if (!lines.length) {
    return { headers: [], rows: [] };
  }

  const headers = splitCsvLine(lines[0], delimiter).map((h) => (trim ? h.trim() : h));
  const rows: Row[] = [];

  for (let i = 1; i < lines.length; i++) {
    const cells = splitCsvLine(lines[i], delimiter);
    const row: Row = {};

    headers.forEach((header, index) => {
      const value = cells[index] ?? "";
      row[header] = trim ? value.trim() : value;
    });

    rows.push(row);
  }

  return { headers, rows };
}

export function parseCSV(csvText: string, options: ParseCsvOptions = {}): CsvTable {
  return parseCsv(csvText, options);
}

export function splitCSVLine(line: string, delimiter = ","): string[] {
  return splitCsvLine(line, delimiter);
}

export function sliceRows(table: CsvTable, start = 0, end = table.rows.length): CsvTable {
  const from = Math.max(0, start);
  const to = Math.min(table.rows.length, Math.max(from, end));

  return {
    headers: [...table.headers],
    rows: table.rows.slice(from, to),
  };
}

export function selectColumns(table: CsvTable, columns: string | string[]): CsvTable {
  const selected = Array.isArray(columns) ? columns : [columns];

  const headers = selected.filter((col) => table.headers.includes(col));
  const rows = table.rows.map((row) => {
    const out: Row = {};
    headers.forEach((col) => {
      out[col] = row[col] ?? "";
    });
    return out;
  });

  return { headers, rows };
}

export function filterRows(
  table: CsvTable,
  predicate: (row: Row, index: number) => boolean
): CsvTable {
  return {
    headers: [...table.headers],
    rows: table.rows.filter((row, index) => predicate(row, index)),
  };
}

export function getColumn(table: CsvTable, column: string): string[] {
  return table.rows.map((row) => row[column] ?? "");
}

export function num(v: unknown): number {
  const x = typeof v === "number" ? v : Number(v);
  return Number.isFinite(x) ? x : 0;
}
