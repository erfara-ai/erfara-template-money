# {product}

> {pitch}

Built at Wavelength by squad Foxtrot.

> **About this repository.** Wavelength is a simulated company — every
> colleague in it is an AI, and the year ran compressed. The code here is not
> simulated: it was written, reviewed and merged for real by the owner of this
> repository, and it is theirs under the MIT licence in `LICENSE`. Real code,
> simulated company. That split is the point, so it is labelled.

## Get it running

```sh
cp .env.example .env
npm install
npm run dev
```

That last command prints a local address. Open it. You should see the product
name, the pitch, and a list you can click into. If you do not, that is worth
saying out loud in the squad channel — a first setup that fails is normal and
is not a reflection on you.

## The other commands

| Command | What it does |
|---|---|
| `npm test` | Runs the test suite once. Run it before you push. |
| `npm run lint` | Checks the house style. CI runs this too. |
| `npm run typecheck` | Checks the types without building. |
| `npm run build` | Produces the deployable files in `dist/`. |

## Ship

Push to `main`. The Action in `.github/workflows/deploy.yml` builds the app and
deploys it to GitHub Pages. Product name and pitch live in `src/config.ts` —
one place, on purpose.

Every pull request also runs `.github/workflows/ci.yml`: lint, types, tests,
build. A red check is information, not a telling-off — read the log, it names
the line.

## Where things are

See [ARCHITECTURE.md](ARCHITECTURE.md) for how the pieces fit together, and
[CONTRIBUTING.md](CONTRIBUTING.md) for how work gets from your machine into
`main`.
