## Steps

1. Add `DATABASE_URL` and `OPTIMIZE_API_KEY` in a `.env` file in packages/database directory.
2. Add `DATABASE_URL` in a `.env` file in apps/web directory.
3. Run `npm install` in the root directory to install dependencies.
4. Run `npx turbo db:migrate` to create the tables in the database.
5. Run `npx turbo db:generate` to generate the prisma client.
6. Start recording in Optimize dashboard.
7. Run `npx turbo run dev --filter=web` to start the app. The queries would show up in Optimize dashboard.
