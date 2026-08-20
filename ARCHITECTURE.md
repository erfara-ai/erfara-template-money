# How this app fits together

Small on purpose. Read this once and you will know where to put things.

## The shape

```
index.html          the page shell — two empty elements the app fills
  └── src/main.ts   the entry point: reads config, loads data, mounts views
        ├── src/config.ts     the product name, the pitch, and the page size
        ├── src/api/          where data comes from
        │     ├── types.ts    the shape of a Goal
        │     └── client.ts   the only place that knows how data is fetched
        ├── src/lib/          pure functions — no DOM, easy to test
        │     ├── format.ts   numbers to the words people actually use
        │     └── filter.ts   filtering and sorting
        └── src/views/        functions that return DOM elements
              ├── list.ts     the list of goals
              ├── detail.ts   one goal, expanded
              └── empty.ts    what the screen says when there is nothing
```

## The rules we keep

**Views do not fetch.** A view is handed data and returns an element. If a view
needs something, `main.ts` gets it and passes it in. This is why the views have
no tests that need a network.

**`src/api/client.ts` is the only file that knows where data lives.** The
client fetches `/api/sessions` from the backend at runtime and returns it in a
`Page<T>` wrapper. Everything else just calls `listGoals()`. When the data
source changes, this file changes and nothing else does.

**`src/lib/` is pure.** No DOM, no fetch, no globals. That is what makes it the
easiest part of the codebase to test, and it is where most bugs are cheapest to
catch.

**Config comes from one place.** `src/config.ts`. Anything read from the
environment is read there, never scattered through the app.

## How a deploy happens

1. You open a pull request. `ci.yml` runs lint, types, tests and build.
2. Nadia reviews it. `main` will not accept a merge without an approval.
3. You merge. `deploy.yml` runs on `main`, builds, and publishes to GitHub
   Pages.

There is no staging environment. `main` is what is live.
