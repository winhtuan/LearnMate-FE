---
description: Convert HTML to React JSX with component extraction
---

# HTML to React JSX Conversion Workflow

## Input Required

- **Base HTML File**: Path to the HTML file (e.g., `base_html/base.html`)
- **Target Feature**: Feature name (e.g., `class`, `lesson`, `home`)
- **Target Page**: Page component name (e.g., `ClassPage`, `LessonPage`)

---

## Step 1: Analyze HTML Structure

**Action**: Read and analyze the base HTML file to identify:

- Main sections and components
- Reusable UI patterns (cards, navigation, headers, stats)
- Data that should be extracted to variables
- Existing components that can be reused

**Commands**:

```bash
# View the HTML file
view_file <path-to-html>
```

**Output**: Mental map of:

- What components to create
- What components already exist
- What data to extract

---

## Step 2: Check Existing Components

**Action**: List existing components in the target feature folder to identify reusable components

**Commands**:

```bash
# Check existing components
list_dir src/features/<feature-name>/components
list_dir src/features/<feature-name>/data
list_dir src/features/<feature-name>/hooks
```

**Output**: List of existing components to reuse (Sidebar, Breadcrumb, SearchBar, etc.)

---

## Step 3: Create Data File

**Action**: Extract all static/dynamic data from HTML into a centralized data file

**File**: `src/features/<feature-name>/data/<page-name>.data.js`

**Template**:

```javascript
export const <page-name>Data = {
  user: {
    name: "...",
    role: "...",
    avatar: "..."
  },
  navigation: [
    { icon: "...", label: "...", href: "...", active: false },
    // ...
  ],
  // Other data arrays/objects
};
```

**Key Points**:

- Extract all text content as variables
- Create arrays for repeated items (cards, lists, etc.)
- Include all image URLs, links, and metadata

---

## Step 4: Identify and Create New Components

**Action**: Create new reusable components that don't exist yet

**Component Types to Look For**:

1. **Card Components**: Repeated card patterns (ClassCard, ProductCard, etc.)
2. **Filter/Tab Components**: Navigation tabs, filter buttons
3. **Stats/Metric Components**: Dashboard stats cards
4. **List Components**: Any repeated list items

**Naming Convention**:

- Use PascalCase: `ComponentName.jsx`
- Be descriptive: `ClassCard` not `Card`
- Follow pattern: `<Feature><Element>.jsx`

**Template**:

```javascript
export default function ComponentName({ data }) {
  const { prop1, prop2 } = data;

  return <div className="...">{/* Component JSX */}</div>;
}
```

**Location**: `src/features/<feature-name>/components/<ComponentName>.jsx`

---

## Step 5: Create Main Page Component

**Action**: Create the main page component using created/existing components

**File**: `src/features/<feature-name>/pages/<PageName>.jsx`

**Template**:

```javascript
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumb";
import SearchBar from "../components/SearchBar";
import NewComponent from "../components/NewComponent";
import { pageData } from "../data/<page-name>.data";

export default function PageName() {
  const { user, navigation, items } = pageData;

  const breadcrumbItems = [
    { label: "Parent", href: "#", active: false },
    { label: "Current", href: "#", active: true },
  ];

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex overflow-x-hidden transition-colors duration-300">
      <Sidebar user={user} navigation={navigation} />

      <main className="flex-1 flex flex-col pl-32 pr-6 md:pr-10 py-6 min-w-0 transition-all duration-300">
        <header className="flex items-center justify-between mb-8 gap-4">
          <Breadcrumb items={breadcrumbItems} />
          <SearchBar placeholder="Search..." />
        </header>

        {/* Page-specific content */}
        <section className="...">
          {items.map((item) => (
            <NewComponent key={item.id} data={item} />
          ))}
        </section>
      </main>
    </div>
  );
}
```

---

## Step 6: Update/Create Routes

**Action**: Update routing configuration to support the new page

### 6a. Create/Update Feature Route

**File**: `src/app/routes/<Feature>Route.jsx`

**For List + Detail Pattern**:

```javascript
import { Route, Routes } from "react-router-dom";
import ListPage from "@/features/<feature>/pages/ListPage";
import DetailPage from "@/features/<feature>/pages/DetailPage";

const FeatureRoute = () => {
  return (
    <Routes>
      <Route index element={<ListPage />} />
      <Route path=":id" element={<DetailPage />} />
    </Routes>
  );
};

export default FeatureRoute;
```

**For Single Page**:

```javascript
import PageName from "@/features/<feature>/pages/PageName";

const FeatureRoute = () => {
  return <PageName />;
};

export default FeatureRoute;
```

### 6b. Register in Main Routes

**File**: `src/app/routes/index.jsx`

Add:

```javascript
import FeatureRoute from "./FeatureRoute";

// Inside Routes:
<Route path="/<feature-name>/*" element={<FeatureRoute />} />;
```

**Important**: Use `/*` for nested routes!

---

## Step 7: Add Navigation Links

**Action**: Update navigation links to use React Router Link

**Pattern**:

```javascript
import { Link, useNavigate } from "react-router-dom";

// For declarative navigation (titles, links):
<Link to="/path">Label</Link>;

// For programmatic navigation (buttons):
const navigate = useNavigate();
<button onClick={() => navigate("/path")}>Action</button>;
```

**Update Breadcrumb component** if needed to use `Link` instead of `<a>`.

---

## Step 8: Handle Dynamic Detail Pages

**Action**: If page has detail view, set up dynamic data loading

### 8a. Update Detail Page

**File**: `src/features/<feature>/pages/DetailPage.jsx`

```javascript
import { useParams } from "react-router-dom";
import { useHook } from "../hooks/useHook";

export default function DetailPage() {
  const { id } = useParams();
  const { data } = useHook(id);

  // Rest of component
}
```

### 8b. Update Hook

**File**: `src/features/<feature>/hooks/useHook.js`

```javascript
export function useHook(itemId) {
  const itemData = dataMap[itemId] || dataMap[1]; // Fallback to first item

  return {
    data: itemData,
    // other data
  };
}
```

### 8c. Convert Data to Map

**File**: `src/features/<feature>/data/detail.data.js`

```javascript
export const dataMap = {
  1: { id: 1, name: "..." /* ... */ },
  2: { id: 2, name: "..." /* ... */ },
  // ...
};
```

---

## Step 9: HTML → JSX Conversion Rules

**Apply these transformations**:

1. **Remove HTML wrapper tags**: `<html>`, `<head>`, `<body>`, `<script>`, `<link>`, `<meta>`, `<title>`

2. **Attributes**:
   - `class` → `className`
   - `for` → `htmlFor`
   - `onclick` → `onClick`
   - Remove `data-*` if not needed

3. **Inline Styles**:

   ```html
   <!-- HTML -->
   <div style="background-image: url('...');"></div>

   <!-- JSX -->
   <div style={{ backgroundImage: `url('...')` }}></div>
   ```

4. **Self-closing tags**:

   ```html
   <img src="..." />
   <input type="text" />
   <br />
   ```

5. **Remove dark mode classes**:
   - Remove all `dark:*` utility classes
   - Keep only light mode styles
   - Force light mode in root

6. **Comments**: Remove HTML comments or convert to `{/* JSX comment */}`

---

## Step 10: Verification Checklist

**Before completing, verify**:

- [ ] All components are properly exported/imported
- [ ] No console errors in terminal
- [ ] Navigation works (list → detail → back)
- [ ] Breadcrumbs link correctly
- [ ] Data displays correctly for all items
- [ ] Light mode only (no dark mode artifacts)
- [ ] Material Icons render properly
- [ ] Routes use `/*` for nested routing
- [ ] Links use `<Link>` not `<a>`
- [ ] Buttons use `onClick` with `navigate()`

**Test Commands**:

```bash
# Check dev server
npm run dev

# Check for errors
# Read terminal output
```

---

## Quick Reference: File Structure

```
src/features/<feature-name>/
├── components/
│   ├── ExistingComponent.jsx (reuse)
│   ├── NewComponent1.jsx (create)
│   └── NewComponent2.jsx (create)
├── data/
│   └── <page-name>.data.js (create)
├── hooks/
│   └── useHook.js (update if detail page)
└── pages/
    ├── ListPage.jsx (create)
    └── DetailPage.jsx (update)

src/app/routes/
├── <Feature>Route.jsx (create/update)
└── index.jsx (update)
```

---

## Example Usage

**Input**:

```
Base HTML: base_html/products.html
Feature: product
Page: ProductPage
```

**Execute**:

1. Analyze `base_html/products.html`
2. Check `src/features/product/components/`
3. Create `src/features/product/data/productList.data.js`
4. Create components: `ProductCard.jsx`, `ProductFilter.jsx`
5. Create `src/features/product/pages/ProductPage.jsx`
6. Update `src/app/routes/ProductRoute.jsx`
7. Update `src/app/routes/index.jsx` add `/products/*`
8. Verify and test

---

## Common Patterns

### Pattern 1: List Page

- Extract array data
- Create card component
- Map over data in page

### Pattern 2: List + Detail

- Create data map with IDs
- Use `useParams()` in detail page
- Update hook to accept ID parameter

### Pattern 3: Reusing Existing Components

- Always check existing components first
- Sidebar, Breadcrumb, SearchBar are usually reusable
- Update props as needed

---

## Troubleshooting

**Problem**: White screen after navigation
**Solution**: Check route path matches Link `to` prop exactly

**Problem**: Data not showing
**Solution**: Verify import path and data structure

**Problem**: "X is not defined"
**Solution**: Check all imports at top of file

**Problem**: Navigation not working
**Solution**: Ensure routes use `/*` wildcard and `<Link>` components

---

## Notes

- Always use light mode only (remove `dark:*` classes)
- Use Material Icons (`material-symbols-outlined`)
- Follow existing component patterns
- Keep data separate from UI components
- Use semantic component names
- Test navigation thoroughly
