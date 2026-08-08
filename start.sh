#!/usr/bin/env bash
docker-compose -f docker-compose-backend.yml up -d
cd ./frontend
npm run dev


# cd /c/repos/react_crm/react-tailwind/software-dash/backend && npm start
# npm notice run backend@1.0.0 start
# npm notice run node server.js