# scott-gpt-backend
Backend for scott-gpt written in Express/Node.js

ScottGPT is yet another ChatGPT chatbot made using the OpenAI API.

OpenAI API reference: https://platform.openai.com/docs/api-reference/

Note: 
- No longer in use after migrating to vercel serverless functions.
- Uses the old v3 SDK, see migration guide: https://github.com/openai/openai-node/discussions/217
- CORS enabled for all due to errors when selectively enabling for specific domains.

## Deploy in 3 Easy Steps
1. Fork or clone this repo
2. Deploy to render.com as a web service (or your platform of choice)
3. Add your OpenAI API Keys as an environment variable in render.com

Frontend: https://github.com/bk7312/scott-gpt
