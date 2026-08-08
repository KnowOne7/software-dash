import { useState } from "react";

const CreateTaskScheduler = () => {
  const [form, setForm] = useState({
    title: "",
    assignee: "",
    startDate: "",
    endDate: "",
    priority: "Medium",
    recurrence: "None",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="w-full max-w-[95vw] rounded-xl border border-borderColor bg-white p-5 shadow-sm sm:max-w-[90vw] sm:p-6 md:max-w-[75vw] lg:max-w-[50vw] lg:p-8">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900">Create Task Scheduler</h3>
            <p className="mt-1 text-sm text-gray-500">
              Plan a task with a responsive, centered form layout.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Task Title
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full rounded-lg border border-borderColor px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="e.g. Sprint Review"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Assignee
              </label>
              <input
                type="text"
                name="assignee"
                value={form.assignee}
                onChange={handleChange}
                className="w-full rounded-lg border border-borderColor px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Name"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-borderColor px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={form.endDate}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-borderColor px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Priority
                </label>
                <select
                  name="priority"
                  value={form.priority}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-borderColor px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Recurrence
                </label>
                <select
                  name="recurrence"
                  value={form.recurrence}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-borderColor px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="None">None</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Notes
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-borderColor px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Optional details..."
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                className="rounded-lg border border-borderColor px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
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
        </div>
      </div>
    </div>
  );
};

export default CreateTaskScheduler;
