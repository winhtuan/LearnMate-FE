LEARNMATE – UI REFACTOR & ARCHITECTURE STANDARDIZATION
Context

This is a Vite + React project using feature-based structure.

Current root:
d:\CODE\dotNet\LearnMate-Project\learnmate

The project already contains a shared/components/ui folder but UI components are inconsistent, duplicated across features, and not fully reusable.

The goal is to:

Standardize folder architecture

Extract reusable UI components

Remove duplication

Make shared UI usable across entire project

Enforce consistent conventions

PHASE 1 – ARCHITECTURE RESTRUCTURE

1. Target Folder Structure

Refactor src into this structure:

src/
│
├── app/
│ ├── providers/
│ ├── routes/
│ └── context/
│
├── core/
│ ├── constants/
│ ├── theme/
│ ├── types/
│ └── utils/
│
├── components/
│ ├── ui/
│ │ ├── button/
│ │ ├── field/
│ │ ├── select/
│ │ ├── modal/
│ │ ├── card/
│ │ ├── table/
│ │ ├── tabs/
│ │ └── index.js
│ │
│ ├── layout/
│ │ ├── container/
│ │ ├── section/
│ │ ├── sidebar/
│ │ ├── header/
│ │ └── index.js
│ │
│ └── feedback/
│ ├── spinner/
│ ├── empty-state/
│ ├── error-state/
│ └── index.js
│
├── features/
│ ├── admin_dashboard/
│ ├── auth/
│ ├── class/
│ ├── dashboard/
│ ├── home/
│ ├── learningFlow/
│ └── teacher/
│
├── shared/ (only pure cross-feature logic, no UI duplication)
│
├── assets/
├── styles/
└── main.jsx 2. Required Rules
Rule 1

No feature may contain generic UI like:

Button

Modal

Table

Card

Tabs

Pagination

Sidebar (generic)

Header (generic)

If found → move to components/

Rule 2

Features may contain:

Feature-specific composition components

Business logic

Hooks

Data files

But must NOT define reusable UI primitives.

Rule 3

Remove duplication:

Examples currently duplicated:

Multiple Sidebar components

Multiple StatCard components

Multiple Header components

Multiple Table components

Multiple Modal implementations

Unify them.

PHASE 2 – SHARED UI SYSTEM REFACTOR

Refactor and standardize:

Currently exists:

src/shared/components/ui/

Move and normalize into:

src/components/ui/
PHASE 3 – COMPONENT STANDARDS

All UI components must follow this structure:

Example:

components/ui/button/
│
├── Button.jsx
├── button.module.css (or styled file)
└── index.js

1. Button Standard

Must support:

variant: primary | secondary | outline | danger | ghost

size: sm | md | lg

loading

disabled

fullWidth

icon (left/right)

type

Must NOT contain business logic.

Must be fully reusable across project.

2. Field Standard

Replace:

PasswordField

DateOfBirthField

OtpInput (wrap if needed)

Create base Field:

Props:

label

error

helperText

required

leftIcon

rightIcon

Other fields must extend base Field.

3. Modal Standard

Unify all:

ConfirmModal

BookingModal

CancelLessonModal

SuccessModal

AccountLoginModal

ForgotPasswordModal

UserModal

CVDetailsModal

Create base Modal:

Props:

open

onClose

title

size

footer

closeOnBackdrop

Feature-specific modal = composition over base Modal.

4. Table Standard

There are many:

UserTable

ViolationTable

AssignmentTable

StudentRosterTable

TransactionTable

Create generic Table component with:

columns config

data

pagination

loading

empty state

sortable

PHASE 4 – CLEANUP INSIDE FEATURES

For each feature:

Remove duplicated primitives

Import from components/ui

Keep feature folder clean:

components

pages

hooks

data

services

PHASE 5 – NAMING CONVENTIONS

Enforce:

PascalCase for components

camelCase for hooks

kebab-case for folders inside ui

No default exports for utility files

Index barrel export for each component folder

PHASE 6 – MIGRATION STRATEGY

Start with:

Button

Modal

Table

Card

Replace usages feature by feature

Delete legacy duplicates

Run ESLint fix

Ensure no circular imports

PHASE 7 – OUTPUT REQUIREMENTS

Claude must:

Identify duplicated components

Propose unified version

Provide refactored code for:

Button

Field

Modal

Table

Show migration example in one feature (example: admin_dashboard)

List anti-patterns found

Ensure no breaking changes

IMPORTANT CONSTRAINTS

Do not rewrite business logic

Do not modify routes behavior

Do not change API structure

Refactor incrementally

Maintain working state after each phase

START TASK

Analyze current folder tree

Identify duplicated UI

Propose new components/ structure

Implement Button first

Stop and wait for review before continuing
