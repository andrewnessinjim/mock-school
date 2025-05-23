# UltraShip TMS Skill Test

A web application based on React, GraphQL and Postgres to manage students, built to showcase my full stack skills for UltraShip.

## Frontend

## Backend

## Nested Query Performance

I wanted to use [data loader][1] to batch requests to the database, but I noticed Prisma already batched the request! When I make a request such as this:

```graphql
query Students($sort: [SortOrder!], $pageSize: Int, $cursor: Int) {
  students(sort: $sort, pageSize: $pageSize, cursor: $cursor) {
    items {
      id
      name
      class {
        description
      }
    }
  }
}
```

Here is the Postgres logs proving that the request was batched:

```log
db-1  | 2025-05-23 05:31:59.756 UTC [91] LOG:  execute s1: SELECT "public"."classes"."id", "public"."classes"."description" FROM "public"."classes" WHERE "public"."classes"."id" IN ($1,$2,$3,$4,$5) OFFSET $6
db-1  | 2025-05-23 05:31:59.756 UTC [91] DETAIL:  Parameters: $1 = 'CLS101', $2 = 'CLS102', $3 = 'CLS103', $4 = 'CLS104', $5 = 'CLS101', $6 = '0'
```

Due to timing constraints, I didn't explore this further, but I believe Prisma is already doing a great job of batching requests to the database. 

### Further Improvements

### Alternate Solutions Considered

I could have used Supabase or Postgraphile for CRUD operations that have better scalability. It wouldn't have limited our flexibility because we can still build custom GraphQL resolvers on top of them. However, I chose Prisma and Apollo server to showcase my skills in building a GraphQL API.

[1]: https://github.com/graphql/dataloader
