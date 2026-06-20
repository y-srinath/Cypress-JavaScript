# Cypress-JavaScript 🌲

An end-to-end test automation framework built with **Cypress** and **JavaScript**, featuring UI tests, custom commands, and data-driven testing.

---

## 🛠️ Tech Stack

- Cypress
- JavaScript
- Node.js
- Mocha / Chai (built-in)

---

## 📁 Project Structure

```
Cypress/
│
├── cypress/
│   ├── e2e/                 # Test specs
│   │   ├── spec.cy.js
│   │   └── test.cy.js
│   │
│   ├── fixtures/            # Test data (JSON)
│   │   └── example.json
│   │
│   └── support/             # Custom commands and helpers
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js        # Cypress configuration
├── package.json
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/y-srinath/Cypress-JavaScript.git
cd Cypress-JavaScript
```

### 2. Install dependencies

```bash
npm install
```

---

## 🚀 Running Tests

```bash
# Open Cypress Test Runner (GUI)
npx cypress open

# Run all tests headlessly
npx cypress run

# Run a specific test file
npx cypress run --spec "cypress/e2e/test.cy.js"

# Run tests in a specific browser
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge

# Run in headed mode (see browser)
npx cypress run --headed
```

---

## 📊 Reports

Cypress automatically generates:

- **Videos** of test runs in `cypress/videos/`
- **Screenshots** on failures in `cypress/screenshots/`

For HTML reports, install Mochawesome:

```bash
npm install --save-dev mochawesome
```

---

## 🌐 Browser Support

| Browser  | Supported    |
| -------- | ------------ |
| Chrome   | ✅           |
| Firefox  | ✅           |
| Edge     | ✅           |
| Electron | ✅ (default) |

---

## 🔑 Key Features

- **Real Browser Testing** — runs tests in actual browsers, not simulated
- **Time Travel** — see snapshots of every step in the Test Runner
- **Automatic Waiting** — no need for manual waits, Cypress waits intelligently
- **Network Stubbing** — mock API requests easily
- **Custom Commands** — extend Cypress with reusable functions
- **Fixtures** — manage test data through JSON files

---

## 🧩 Example Test

```javascript
/// <reference types="cypress" />

describe("Google Search", () => {
  it("Visits Google", () => {
    cy.visit("https://google.com");
    cy.get('input[name="q"]').type("Cypress testing{enter}");
    cy.url().should("include", "search");
  });
});
```

---

## 💡 Useful Commands

| Command                | Purpose           |
| ---------------------- | ----------------- |
| `cy.visit(url)`        | Navigate to a URL |
| `cy.get(selector)`     | Find an element   |
| `cy.contains(text)`    | Find by text      |
| `cy.click()`           | Click element     |
| `cy.type(text)`        | Type into input   |
| `cy.url()`             | Get current URL   |
| `cy.should(assertion)` | Make an assertion |

---

## 👤 Author

**Srinath**
[GitHub](https://github.com/y-srinath)

---

## 📄 License

This project is for learning and practice purposes.
