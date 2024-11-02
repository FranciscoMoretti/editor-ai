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
```









## Migrations

When you run `zenstack generate` it generates a standard Prisma schema file that can be used with Prisma migration.
