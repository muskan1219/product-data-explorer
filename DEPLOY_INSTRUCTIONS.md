# How to push repo to GitHub and deploy (quick guide)

1. Initialize git and push:
   git init
   git add .
   git commit -m "Initial scaffold"
   # create repo on GitHub (web or gh cli)
   git remote add origin git@github.com:<your-username>/product-data-explorer.git
   git branch -M main
   git push -u origin main

2. Deploy backend
   - Option A: Railway / Render — connect your GitHub repo and set environment variables:
     - DATABASE_URL
     - REDIS_URL
     - PLAYWRIGHT_BROWSERS_PATH or install Playwright in build
   - Option B: Docker on VPS / Fly.io

3. Deploy frontend
   - Vercel: link repo, set `NEXT_PUBLIC_API_URL` to your backend URL
   - Alternatively build and serve with Docker

4. Run locally (docker-compose)
   docker-compose up --build

5. Add a production DB migration (e.g., TypeORM or prisma) before scraping live site.
