#!/usr/bin/env bash
set -euo pipefail

backend_dir="./backend"
frontend_dir="./frontend"

# Commands to run inside each directory
backend_cmd="${1:-npm start}"
frontend_cmd="${2:-npm run dev}"

backend_log="backend.log"
frontend_log="frontend.log"

# Convert cmd -> a loose grep pattern for stopping later
cmd_to_pattern() {
  # strip leading "npm " for better matching
  echo "$1" | sed -E 's/^[[:space:]]*npm[[:space:]]+//; s/[[:space:]]+/[[:space:]]+/g'
}

BACKEND_PATTERN="$(cmd_to_pattern "$backend_cmd")"
FRONT_PATTERN="$(cmd_to_pattern "$frontend_cmd")"

start_with_background() {
  local dir="$1" cmd="$2" log="$3" label="$4"
  (
    cd "$dir"
    # Background it; keep writing to log
    bash -lc "$cmd" >"$log" 2>&1 &
    pid=$!
    echo "$label PID: $pid"
  )
}

start_with_nohup() {
  local dir="$1" cmd="$2" log="$3" label="$4"
  (
    cd "$dir"
    nohup bash -lc "$cmd" >"$log" 2>&1 &
    pid=$!
    echo "$label PID: $pid"
  )
}

start_with_tmux() {
  local dir="$1" cmd="$2" log="$3" session="$4" label="$5"
  if command -v tmux >/dev/null 2>&1; then
    tmux new-session -d -s "$session" "cd \"$dir\" && nohup bash -lc '$cmd' >>\"$log\" 2>&1"
    echo "$label tmux session: $session"
  else
    echo "tmux not found; skipping $label."
  fi
}

echo "=== Starting backend: $backend_cmd (in $backend_dir) ==="
start_with_background "$backend_dir" "$backend_cmd" "$backend_log" "backend(background)"
start_with_nohup      "$backend_dir" "$backend_cmd" "$backend_log" "backend(nohup)"
start_with_tmux       "$backend_dir" "$backend_cmd" "$backend_log" "backend" "backend(tmux)"

echo "=== Starting frontend: $frontend_cmd (in $frontend_dir) ==="
start_with_background "$frontend_dir" "$frontend_cmd" "$frontend_log" "frontend(background)"
start_with_nohup      "$frontend_dir" "$frontend_cmd" "$frontend_log" "frontend(nohup)"
start_with_tmux       "$frontend_dir" "$frontend_cmd" "$frontend_log" "frontend" "frontend(tmux)"

echo "Done."


# cd /c/repos/react_crm/react-tailwind/software-dash/backend && npm start
# npm notice run backend@1.0.0 start
# npm notice run node server.js