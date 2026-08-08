#!/usr/bin/env bash
docker-compose -f docker-compose-backend.yml down


# If back end dows not stop, you can manually find and kill the process using the following commands:
# PowerShell  
# Get-NetTCPConnection -LocalPort 5000 | Select-Object -Property LocalAddress,LocalPort,OwningProcess
# Stop-Process -Id <PID> -Force

# Bash
# kill -9 "$(lsof -t -i :5000)"