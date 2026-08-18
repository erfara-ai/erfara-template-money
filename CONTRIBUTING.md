# How we work in this repository

## Branches

One branch per ticket, named after it:

```
tmp-3-first-deployable-version
```

Lowercase, hyphens, the ticket key first. It makes the branch list readable
without opening anything.

## Commits

One line, present tense, saying what changed and why it changed:

```
Show the pitch from config so the name and pitch cannot drift apart
```

Not `fix`, not `update`, not `wip`. A month from now the log is the only
account of what happened.

## Pull requests

- Small ones get read the same day. Large ones wait. This is not a rule anyone
  enforces; it is just how attention works.
- Fill in the template. "How I checked it" is the part reviewers read first.
- `main` is protected: it takes changes only through a pull request with one
  approving review. That applies to everyone, including whoever owns the
  repository.

## Review

Nadia reviews every pull request on this squad. She will usually ask for
something. That is what review is for, and it is not a mark against you.

When she asks a question about your diff, answer it — the answer is the point
of the question, not a formality. If you disagree with a comment, say so and
say why. A reviewer who is wrong would rather find out in the thread.

## Using an AI assistant

Fine, and most of the squad does. The rule is that you can explain every line
you ship, because you will be asked about one of them. If you cannot explain it
yet, do not ship it yet.
