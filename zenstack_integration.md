# Zenstack Integration

## Setup

Monorepo setup https://zenstack.dev/docs/faq#how-to-use-zenstack-in-a-monorepo-setup

```
cd apps/db
bunx zenstack@latest init
```

This creates a `schema.zmodel` file in the `apps/db` directory.


Now let's exclude the `auth schema` models before generation.

```
cd apps/db
bunx zenstack generate 
```


To make sure the schemas are aligned, now run this command to create a migration file. The resulting migration should be empty.

```
bunx prisma migrate dev --create-only
```


## Migrations

When you run `zenstack generate` it generates a standard Prisma schema file that can be used with Prisma migration.

