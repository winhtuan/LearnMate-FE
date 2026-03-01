# Login Page Rendering Issue

**Issue Description:**
When accessing the route `/login`, the DOM fails to load, resulting in a completely blank white screen. There is no visible UI content rendered on the page.

**Symptoms:**

- Navigating to `http://localhost:5173/login` (or the respective dev server port) displays a blank screen.
- Expected UI elements (Left panel, Sign in form, Social buttons, etc.) are missing.

**Context:**

- This issue was encountered after migrating the Auth code from Lingrow and integrating `AuthRoute.jsx`, `GuestRoute.jsx` and `LoginPage.jsx`.
- Build command (`npm run build`) succeeds without emitting any syntax or compilation errors, suggesting this is a runtime error or a routing configuration issue rather than a compile-time bug.
- Suspicion falls on how `AuthRoute` is lazy-loaded in `AppRoutes`, or potentially an unhandled exception within the hook `useLogin` or `usePasswordLogin` causing the React component tree to crash without an Error Boundary to catch it.

**Next Steps to Investigate:**

1. Check the Browser Console for any uncaught React rendering exceptions (e.g. `Invalid hook call`, `Cannot read properties of undefined`).
2. Verify if `AuthRoute` correctly registers inside the nested `/*` path in `AppRoutes`.
3. Check if any imports in `LoginPage.jsx` (like components `AuthLeft`, `PasswordField`, `Field` etc.) are failing to resolve at runtime or crashing during the initial render loop.
4. Verify if `GuestRoute` is properly receiving and rendering its children.
