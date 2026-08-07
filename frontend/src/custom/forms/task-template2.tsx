import React, { useMemo, useState } from "react";

type Task = {
  taskName: string;
  note: string;
  daysTillDue: number;
  dueDate: string; // local YYYY-MM-DD
  adaptive: boolean;
};

const CreateTaskScheduler = () => {
  const [form, setForm] = useState({
    // Editable until first Save
    jsonName: "",

    // Task fields
    taskName: "",
    note: "",
    daysTillDue: "",
    adaptive: true,
  });

  const [savedJsonName, setSavedJsonName] = useState<string>("");

  const [tasks, setTasks] = useState<Task[]>([]);

  const computedDueDate = useMemo(() => {
    if (form.daysTillDue === "") return "";
    const days = Number(form.daysTillDue);
    if (!Number.isFinite(days) || days < 0) return "";

    const d = new Date();
    d.setDate(d.getDate() + days);

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`; // local date
  }, [form.daysTillDue]);

  const jsonOutput = useMemo(() => {
    // "won't write anything till first save"
    if (!savedJsonName || tasks.length === 0) return "";

    return JSON.stringify(
      {
        jsonName: savedJsonName,
        tasks: tasks.map((t) => ({
          taskName: t.taskName,
          dueDate: t.dueDate,
          adaptive: t.adaptive,
        })),
      },
      null,
      2
    );
  }, [savedJsonName, tasks]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdaptiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, adaptive: e.target.checked }));
  };

  const jsonNameLocked = !!savedJsonName;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const taskName = form.taskName.trim();
    if (!taskName) {
      alert("Task Name is required.");
      return;
    }

    if (form.daysTillDue === "") {
      alert("Number of days till due is required.");
      return;
    }

    const daysNum = Number(form.daysTillDue);
    if (!Number.isFinite(daysNum) || daysNum < 0) {
      alert("Days till due must be a non-negative number.");
      return;
    }

    if (!computedDueDate) {
      alert("Enter a valid days till due.");
      return;
    }

    // Lock jsonName on the first Save
    if (!savedJsonName) {
      const name = form.jsonName.trim();
      if (!name) {
        alert("JSON Name is required on the first Save.");
        return;
      }
      setSavedJsonName(name);
    }

    const newTask: Task = {
      taskName,
      note: form.note.trim(),
      daysTillDue: daysNum,
      dueDate: computedDueDate, // local YYYY-MM-DD
      adaptive: !!form.adaptive,
    };

    setTasks((prev) => [...prev, newTask]);

    // Reset task inputs only; keep jsonName locked via savedJsonName
    setForm((prev) => ({
      ...prev,
      taskName: "",
      note: "",
      daysTillDue: "",
      adaptive: true,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="w-full max-w-[95vw] rounded-xl border border-borderColor bg-white p-5 shadow-sm sm:max-w-[90vw] sm:p-6 md:max-w-[75vw] lg:max-w-[50vw] lg:p-8">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              Create Task Scheduler
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Create tasks and generate a JSON with local computed due dates.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSave}>
            {/* JSON Name */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                JSON Name
              </label>
              <input
                type="text"
                name="jsonName"
                value={form.jsonName}
                onChange={handleChange}
                disabled={jsonNameLocked}
                className="w-full rounded-lg border border-borderColor px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
                placeholder="e.g. tasksForAcme"
              />
              <p className="mt-1 text-xs text-gray-500">
                Required on the first Save; then it becomes fixed.
              </p>
            </div>

            {/* Task Title */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Task Title
              </label>
              <input
                type="text"
                name="taskName"
                value={form.taskName}
                onChange={handleChange}
                className="w-full rounded-lg border border-borderColor px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="e.g. Call supplier"
              />
            </div>

            {/* Adaptive checkbox */}
            <div className="flex items-center justify-between gap-3 rounded-lg border border-borderColor p-3">
              <div>
                <p className="text-sm font-medium text-gray-700">Adaptive</p>
                <p className="text-xs text-gray-500">
                  This is prefilled.
                </p>
              </div>
              <input
                type="checkbox"
                checked={form.adaptive}
                onChange={handleAdaptiveChange}
                className="h-4 w-4 accent-primary"
              />
            </div>

            {/* Note */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Notes / Description (optional)
              </label>
              <textarea
                rows={4}
                name="note"
                value={form.note}
                onChange={handleChange}
                className="w-full rounded-lg border border-borderColor px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Optional details..."
              />
            </div>

            {/* Days till due */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Number of days till due
              </label>
              <input
                type="number"
                min={0}
                name="daysTillDue"
                value={form.daysTillDue}
                onChange={handleChange}
                className="w-full rounded-lg border border-borderColor px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="e.g. 7"
              />
              <p className="mt-1 text-xs text-gray-500">
                Local due date preview: {computedDueDate || "—"}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="rounded-lg border border-borderColor px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => {
                  setTasks([]);
                  setSavedJsonName("");
                  setForm({
                    jsonName: "",
                    taskName: "",
                    note: "",
                    daysTillDue: "",
                    adaptive: true,
                  });
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                Create Task
              </button>
            </div>
          </form>

          {/* JSON output */}
          <div className="mt-6">
            <h4 className="mb-2 text-sm font-semibold text-gray-800">Tasks JSON</h4>
            <pre className="max-h-72 overflow-auto rounded-lg bg-gray-900 p-4 text-xs text-gray-100">
              {jsonOutput || ""}
            </pre>
          </div>

          {/* Optional: quick visual list */}
          {tasks.length > 0 && (
            <div className="mt-5">
              <h4 className="mb-2 text-sm font-semibold text-gray-800">Task List</h4>
              <ul className="space-y-2">
                {tasks.map((t, idx) => (
                  <li
                    key={`${t.taskName}-${idx}`}
                    className="rounded-lg border border-borderColor bg-white p-3"
                  >
                    <div className="text-sm font-medium text-gray-900">
                      {t.taskName}
                    </div>
                    <div className="text-xs text-gray-600">
                      Due: {t.dueDate} • Adaptive: {t.adaptive ? "true" : "false"}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateTaskScheduler;
