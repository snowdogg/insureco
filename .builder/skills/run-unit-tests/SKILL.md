---
name: run-unit-tests
description: Run the unit test suite for this project. Use this skill when the user asks to run tests, check if tests pass, verify a change didn't break anything, or see test results.
---

# Run Unit Tests

## Commands

**Single run (CI-style, shows results and exits):**
```bash
npm run test:run
```

**Watch mode (re-runs on file save):**
```bash
npm test
```

**With coverage report:**
```bash
npm run test:coverage
```

## Stack

- **Runner**: Vitest v4
- **Component rendering**: `@testing-library/react`
- **Extra matchers**: `@testing-library/jest-dom` (loaded globally via `src/__tests__/setup.js`)
- **Environment**: jsdom (no real browser required)

## Test file locations

```
src/__tests__/
├── setup.js                        # Global setup — imports jest-dom matchers
├── __mocks__/                      # Reusable stubs (Carbon icons, Leaflet)
├── utils/
│   └── businessHelpers.test.js     # Pure utility function tests
├── components/                     # Component-level tests
└── pages/                          # Page/flow tests
```

## Interpreting results

A passing run looks like:
```
✓ src/__tests__/utils/businessHelpers.test.js > formatCurrency > formats a positive number
Test Files  1 passed (1)
     Tests  3 passed (3)
```

A failing run shows the assertion diff inline — check the `Expected` vs `Received` values.

## Writing new tests

- Test files must match `**/*.{test,spec}.{js,jsx}`
- Wrap React components in `<ThemeProvider>` from `src/contexts/ThemeContext.jsx`
- Wrap routed pages in `<MemoryRouter>` from `react-router-dom`
- Mock Carbon icons by creating a stub in `src/__tests__/__mocks__/carbon-icons.js`
- CSS and SCSS imports are ignored automatically (`css: false` in `vite.config.js`)
