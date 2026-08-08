#!/usr/bin/env bash
set -euo pipefail

backend_dir="./backend"
frontend_dir="./frontend"

find_pids_by_pattern() {
  local pattern="$1"
  ps -eo pid=,args= 2>/dev/null \
    | grep -E "$pattern" \
    | grep -v grep \
    | awk '{print $1}' \
    | tr '\n' ' ' \
    | sed 's/[[:space:]]*$//' \
    || true
}

# Stop heuristics: match common node/npm command lines
stop_in_dir_by_patterns() {
  local dir="$1"; shift
  local patterns=("$@")

  (
    cd "$dir"
    for pat in "${patterns[@]}"; do
      pids="$(find_pids_by_pattern "$pat")"
      if [ -n "${pids:-}" ]; then
        echo "Stopping processes in $dir matching: $pat"
        for pid in $pids; do
          kill "$pid" 2>/dev/null || true
        done
        sleep 1
        for pid in $pids; do
          kill -9 "$pid" 2>/dev/null || true
        done
      fi
    done
  )
}

# Backend: npm start / node server.js / server.js
stop_in_dir_by_patterns "$backend_dir" \
  "npm[[:space:]]+start" \
  "server\\.js" \
  "node[[:space:]]+server\\.js"

# Frontend: npm run dev / common dev servers
stop_in_dir_by_patterns "$frontend_dir" \
  "npm[[:space:]]+(run[[:space:]]+dev|start)" \
  "vite" \
  "webpack" \
  "react-scripts" \
  "next dev"

echo "Done."
