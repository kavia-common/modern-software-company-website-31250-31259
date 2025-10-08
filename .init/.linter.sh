#!/bin/bash
cd /home/kavia/workspace/code-generation/modern-software-company-website-31250-31259/frontend_react
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

