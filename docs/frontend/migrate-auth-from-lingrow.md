# Migrate Frontend Authentication from Lingrow to LearnMate

You MUST use the React skill from `.agents`.

This task is a controlled migration — NOT a blind copy.

Source project:
D:\CODE\dotNet\LearnMate-Project\lingrow-fe

Target project:
D:\CODE\dotNet\LearnMate-Project\learnmate

Target directory:
src/features/auth

===========================================================
OBJECTIVE
===========================================================

Copy and adapt the entire frontend authentication module
from Lingrow FE into LearnMate.

Authentication includes:

- Register (multi-step)
- Login (email/password)
- Login with Google (Cognito Hosted UI)
- Forgot password
- Logout
- Token handling
- Auth context / hooks

The result must follow LearnMate architecture conventions.

===========================================================
MANDATORY RULES
===========================================================

1. USE React skill.

2. Do NOT copy files blindly.
   Audit Lingrow auth first.

3. Adapt code to LearnMate:
   - Use path alias "@/"
   - Follow feature-based structure
   - Follow naming conventions:
     Pages: PascalCasePage.jsx
     Hooks: useCamelCase.js
     Components: PascalCase.jsx

4. Place everything under:

   src/features/auth/

   Structure:

   auth/
   components/
   pages/
   hooks/
   services/
   context/
   routes/

5. Do NOT introduce relative import chaos.
   All imports must use "@/".

6. Do NOT modify other features yet.

===========================================================
PHASED MIGRATION PROCESS (REQUIRED)
===========================================================

PHASE 1 — Audit Lingrow Auth

- Locate all auth-related files in Lingrow FE
- List dependencies (Cognito config, env vars, utilities)
- Identify reusable components
- Identify Lingrow-specific code that must be removed

Stop and summarize before proceeding.

---

PHASE 2 — Extract Core Auth Logic

Migrate:

- Cognito integration
- Token storage
- useAuth hook
- AuthContext
- login / register services
- logout logic

Adapt environment variables for LearnMate.

---

PHASE 3 — Migrate UI Pages

Migrate and adapt:

- LoginPage
- RegisterPage
- ForgotPasswordPage
- AuthCallbackPage (if exists)

Ensure:

- React Router v7 compatible
- No hardcoded Lingrow branding
- No Lingrow-specific route paths
- No Lingrow-specific API endpoints

---

PHASE 4 — Integrate with LearnMate Router

- Create AuthRoute.jsx
- Register routes in src/app/routes
- Ensure no route conflicts
- Use lazy loading for auth pages

---

PHASE 5 — Context & Global Integration

- Integrate AuthContext into src/app/providers
- Ensure user state accessible globally
- Prepare for backend /api/auth/me sync

---

===========================================================
OUTPUT FORMAT
===========================================================

For each phase:

1. Files analyzed or created
2. Folder structure changes
3. Code adapted
4. Lingrow-specific code removed
5. Migration risks

STOP after each phase and wait for confirmation.
Do NOT perform all phases in one execution.

===========================================================

CRITICAL

- Do NOT overwrite LearnMate code.
- Do NOT break existing routes.
- Do NOT mix Lingrow naming.
- Refactor while migrating.
