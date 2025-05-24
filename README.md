# UltraShip TMS Skill Test

A web application based on React, GraphQL and Postgres to manage students, built to showcase my full stack skills for UltraShip.

## Video Walkthrough of the Good and Bad

https://youtu.be/dskL--VJ0hM

### Video Summary

- The grid and the header are responsive and show well on a phone.
- The student info pop could be optimized for mobile by making it full screen. We must very verify the usefulness of mobile usage before optimizing layouts for mobile.
- The menus are accessible through keyboard because of [Radix UI library][2].
- React Suspense is used for a better user experience by showing a loading indicator instead of a frozen screen.
- [StyledDropdownMenu][3] is a good component because it's reusable.
- [StudentPopup][4] could be improved by extracting a reusable Dialog component.
- GraphQL API supported authentication and authorization. I used the [GraphQL Shield library][5] to implement this which makes the solution scalable.
- Cursor-based pagination is supported based on the assumption that page number based fetching is not required.
- GetStudent operation is optimized by ensuring indexes are available for the associated DB queries.
- We can either choose to run independent queries or a table join depending on the nature of operations.
- Sorts are expensive and we must be careful and support only the necessary sort operations.

## Frontend

Frontend deployment: https://carefree-cat-production.up.railway.app/

## Backend

GraphQL Backend deployment with introspection enabled: https://mock-school-production.up.railway.app/ (Please use Apollo Studio for verifying operations not listed below). I have created two users for experimenting:

| Role    | Email                  | Password |
| ------- | ---------------------- | -------- |
| Admin   | admin@mockschool.com   | admin    |
| Student | student@mockschool.com | student  |

Please note that not all the operations are protected because I have used the API from the frontend where login page is not implemented.

### Operations to try

#### Login

```sh
curl https://mock-school-production.up.railway.app \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "query": "mutation Login($email: String!, $password: String!) { login(email: $email, password: $password) { token user { role email name } } }",
    "variables": {
      "email": "admin@mockschool.com",
      "password": "admin"
    }
  }'
```

#### Add Student With Access

Below command already has a bearer token representing an admin user. You can also use the token from the above API in the below operation.

```sh
curl https://mock-school-production.up.railway.app \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1vY2tzY2hvb2wuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ4MTIwMTU5LCJleHAiOjE3NDg3MjQ5NTl9.1XtFqT5VU5hjNY-zUB1OIi_Dq-fxGfvLHIZCLfRYiw0" \
  -d '{
    "query": "mutation AddStudent($name: String!, $age: Int!) { addStudent(name: $name, age: $age) { id name age } }",
    "variables": {
      "name": "Alice",
      "age": 22
    }
  }'
```

#### Add Student Without Access (Expect error)

Below command is missing the JWT token, so you'll see an error.

```sh
curl https://mock-school-production.up.railway.app \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "query": "mutation AddStudent($name: String!, $age: Int!) { addStudent(name: $name, age: $age) { id name age } }",
    "variables": {
      "name": "Alice",
      "age": 22
    }
  }'
```

## More Ideas

### Nested Query Performance

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

### Other Solutions Considered

I could have used Supabase or Postgraphile for CRUD operations that have better scalability. It wouldn't have limited our flexibility because we can still build custom GraphQL resolvers on top of them. However, I chose Prisma and Apollo server to showcase my skills in building a GraphQL API.

[1]: https://github.com/graphql/dataloader
[2]: https://www.radix-ui.com/primitives/docs/components/dropdown-menu
[3]: https://github.com/andrewnessinjim/mock-school/blob/main/client/src/components/StyledDropdownMenu/StyledDropdownMenu.tsx
[4]: https://github.com/andrewnessinjim/mock-school/blob/main/client/src/components/StudentPopup/StudentPopup.tsx
[5]: https://the-guild.dev/graphql/shield
