# Posts

This repository contains a React/Vite frontend and an Express/MongoDB backend.

## Local development

1. Copy `backend/.env.example` to `backend/.env` and set `MONGODB_URI` and
   `IMAGEKIT_PRIVATE_KEY`.
2. In `backend`, run `npm ci` and `npm start`.
3. In `Frontend/vite-project`, run `npm ci` and `npm run dev`.
4. The frontend uses `http://localhost:3000` by default. Override it with
   `VITE_API_URL` in `Frontend/vite-project/.env` if needed.

## Deploying to Render

The root `render.yaml` defines a Render web service for the API and a static
site for the frontend. In Render, create a Blueprint from this GitHub
repository and provide `MONGODB_URI` and `IMAGEKIT_PRIVATE_KEY` when prompted.
The frontend's `VITE_API_URL` is connected to the API service automatically.

Set these values only in Render's environment-variable settings, never in
source files or Git. Credentials previously committed to this repository must
be revoked/rotated before deployment.
