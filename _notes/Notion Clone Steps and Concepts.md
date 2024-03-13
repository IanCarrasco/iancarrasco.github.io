
1. Create-next-app 
	1. Install drizzle-orm, postgres, dotenv ([[Object Resource Mapping (ORM)]], [[Postgres]])
2. Grab supabase credentials 
	1. Supabase will host the database (Firebase clone)
3. Setup table schemas and migrations
	1. Migrations need to occur such that any schema changes are kept in sync with the hosted database.
		1. Generate a migrations file (drizzle-kit generate:pg)
		2. Then run the migration script
		3. Row level security, who can read/write/update tables access
		4. Run pull if you change schema or add tables from supabase to update local schemas (introspect:pg)