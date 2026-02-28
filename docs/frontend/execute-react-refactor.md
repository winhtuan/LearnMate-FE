# Execute React Refactor — Based on Architectural Audit

Project: LearnMate Frontend  
Stack: React 19 + Vite + Tailwind + React Router v7

You MUST use the React skill in .agents.

Do NOT perform random refactors.
Refactor strictly based on the architectural audit findings.

===========================================================
PHASED REFACTOR STRATEGY (MANDATORY)
===========================================================

Refactor in controlled phases.

Do NOT refactor everything at once.

---

## PHASE 1 — Critical Runtime & Navigation Fixes

Fix immediately:

1. Replace all internal <a href="/..."> with:
   - <Link>
   - <NavLink>
     (Only for internal navigation. Do not change external URLs.)

2. Fix missing useState import:
   src/features/teacher/pages/management/classStudentViewByTutor.jsx

3. Remove all unnecessary `import React from 'react'`
   (Only where React namespace is unused.)

After completing Phase 1:

- Show diff summary
- Confirm app still compiles
- Stop and wait

---

## PHASE 2 — Structural Layout Cleanup

Refactor header duplication problem:

Current situation:

- 5 Header implementations

Goal:

- Create unified layout system:

src/shared/layout/
MainHeader.jsx
AdminHeader.jsx
TeacherHeader.jsx
StudentHeader.jsx

Replace feature-level Header components with layout wrappers.

Eliminate:

- shared/components/Header.jsx
- shared/components/layout/Header.jsx duplication
- Hardcoded avatar URLs

Introduce:

- Header receives user data via props or context

---

## PHASE 3 — Route-Level Code Splitting

Convert all top-level routes to:

const DashboardPage = React.lazy(() => import(...));

Wrap route tree in <Suspense fallback={...}>

Ensure:

- No circular imports
- Layout routes still function
- Lazy loading per feature

---

## PHASE 4 — Dashboard Data Waterfall Fix

Refactor dashboard hooks:

Instead of:
useDashboardData()
useCourses()
useSchedule()
useNotifications()

Create:
useDashboardBundle()

Implement:
Promise.all()

Return:
{ data, loading, error }

Reduce multiple renders to single render.

---

## PHASE 5 — Context Layer Introduction

Create:

src/app/context/AuthContext.jsx

Move:

- User identity
- Avatar
- Role

Remove duplicated user data across:

- dashboardUser.data.js
- studentProfile.data.js
- teachers.data.js

Use:
useAuth()

---

## PHASE 6 — Naming & Import Standardization

1. Rename all lowercase page files to PascalCasePage.jsx
2. Standardize route files
3. Replace all relative imports with "@/"

Show rename mapping table.

---

## PHASE 7 — Component Decomposition

Split oversized pages (>200 lines) into:

- Page container
- Section components
- Small UI components

Move reusable UI to:
src/shared/ui/

---

===========================================================
RULES
===========================================================

- Preserve functionality
- Do NOT change visual output unintentionally
- Do NOT remove features
- Do NOT modify business logic
- Refactor incrementally
- After each phase: summarize changes

===========================================================
OUTPUT FORMAT
===========================================================

For each phase:

1. Files modified
2. Code changes
3. Explanation
4. Risk notes

STOP after each phase and wait for confirmation.
