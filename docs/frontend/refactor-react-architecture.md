# Frontend Full Refactor — React Architecture

Project: LearnMate Frontend  
Stack: React 19 + Vite + Tailwind v4 + React Router v7

---

## IMPORTANT

You MUST use the React skill inside `.agents`.

Use modern React best practices.
Use feature-based architecture.
Follow naming conventions strictly.
Do not produce partial refactors.

---

## CURRENT PROBLEMS

The src codebase currently has structural and architectural issues:

1. File naming is inconsistent:
   - Some files PascalCase
   - Some camelCase
   - Some lowercase
   - Routes named inconsistently

2. Routes are not standardized:
   - Mixed naming conventions
   - Layout usage inconsistent
   - Hard to trace nested routes

3. UI is not properly componentized:
   - Pages too large
   - Repeated JSX blocks
   - No atomic breakdown
   - No separation between container and presentational components

4. Shared components duplicated across features

5. Some feature folders mix responsibilities (pages + business logic + layout logic)

6. Hooks inconsistent in structure and error handling

---

## REFACTOR OBJECTIVES

1. Standardize file naming:

- Pages: PascalCasePage.jsx
- Components: PascalCase.jsx
- Hooks: useCamelCase.js
- Routes: PascalCaseRoute.jsx
- Data: camelCase.data.js

2. Standardize route structure:

- Each feature has one <FeatureName>Route.jsx
- Nested routes clearly declared
- Layout wrappers isolated and reusable

3. Component decomposition:

- Split large pages into:
  - Layout
  - Section components
  - Small UI components
- Move reusable UI into src/shared/ui/

4. Enforce feature isolation:

features/<feature>/
components/
pages/
hooks/
data/
routes/

5. Extract shared layout logic into src/shared/layout/

6. Improve hook pattern:

All hooks must return:
{ data, loading, error }

Use consistent async pattern.

7. Remove dead code.

8. Improve readability and scalability.

---

## TASK

Perform a full structural refactor of src/:

1. Audit entire src folder
2. List architectural problems found
3. Propose improved folder structure
4. Show rename plan (old → new filenames)
5. Refactor representative files
6. Standardize route registration
7. Improve component decomposition
8. Ensure imports use "@/"

---

## OUTPUT FORMAT

1. Architecture audit summary
2. New proposed folder tree
3. Rename mapping table
4. Refactored route structure
5. Refactored sample feature
6. Guidelines for remaining refactor
7. Risks and migration notes

Do NOT give generic advice.
Work directly against the existing project structure.
Generate real code where needed.
