
---

### How to Run Locally:

1. Git clone the repository.

2. Open the project in VS Code.

3. Type this in the terminal: `npm i` (to install packages).

4. Provide the environment file with the following contents:

   - `NODE_ENV=development`
   - `PORT=3000`
   - `DATABASE_URL='your_database_url'`

5. Local server: `http://localhost:3000`

6. Live server: `https://backend-ecom-sandy.vercel.app/`

7. See routes in `app.ts`.

8. To run in development mode, use: `npm run start:dev`.

9. To run in production mode, use: `npm run start`.

10. To deploy the server, use: `vercel --prod`.