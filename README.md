# Task Management Dashboard

A feature-rich task management SPA built with Angular 21.

**Live demo:** https://waseem-isaac.github.io/task-management-dashboard/dashboard

---

## Overview

Kanban-style dashboard for managing tasks across three status columns (To Do, In Progress, Done) with drag-and-drop reordering, real-time filtering and search, and summary statistics.

### Architecture decisions

| Decision | Choice | Reason |
|---|---|---|
| State management | Signals + `computed()` | No NgRx needed for this scale; signals are fine-grained and co-locate state with services |
| HTTP layer | `HttpClient` + cache interceptor | `httpResource` used for read-only statistics; `HttpClient` used for tasks because in-memory mutations must not be overwritten by re-fetches |
| Search | `Subject` + `debounceTime` in `SearchService` → `toSignal` | Decouples header input from task list; RxJS handles debounce cleanly |
| Routing | Lazy-loaded feature routes | Dashboard feature is loaded on demand |
| Change detection | `OnPush` on all list/card components | Safe because all inputs are signals or immutable objects |
| Styling | SCSS + Angular Material | Material provides accessible UI primitives; custom SCSS for layout and theming |
| Code quality | ESLint + Prettier + Husky pre-commit | Enforced on staged files only via `lint-staged` |
| Deployment | GitHub Actions → `gh-pages` branch | Automated on every push to `main` |

---

## Setup

**Prerequisites:** Node.js ≥ 22, npm ≥ 11

```bash
# Install dependencies
npm install

# Generate mock data (tasks + statistics JSON)
npm run generate:data

# Start dev server → http://localhost:4200
npm start
```

---

## Scripts

| Script | Description |
|---|---|
| `npm start` | Start development server |
| `npm run build` | Production build |
| `npm test` | Run unit tests |
| `npm run lint` | Check all `src/**/*.{ts,html}` with ESLint |
| `npm run lint:fix` | Auto-fix ESLint violations |
| `npm run format` | Format all source files with Prettier |
| `npm run generate:data` | Regenerate `public/tasks.json` and `public/statistics.json` mock data |

Deployment is handled automatically by the CI pipeline on push to `main`. No manual deploy command is needed.


To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
