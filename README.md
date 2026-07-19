<<<<<<< HEAD
# Todoist Automation Assignment

## Overview

This repository contains the automation solution for the Todoist Assignment using **Playwright** and **TypeScript**.

The automation framework follows the **Page Object Model (POM)** design pattern and covers the core Todoist task management functionalities.

## Automated Test Scenarios

* Create a Todo Task
* Update an Existing Todo Task
* Delete a Todo Task

> **Note:** The "Mark as Completed" functionality was identified as a product/UI limitation during testing. Since there is no reliable way to validate a completed task through the application's UI, this scenario has been documented separately as a defect instead of being included in the automation suite.

---

# Technology Stack

* Playwright
* TypeScript
* Node.js
* npm
* Visual Studio Code

---

# Project Structure

```text
todoist-playwright/
│
├── pages/                  # Page Object classes
├── tests/                  # Test files
│   ├── baseTest.ts
│   └── createTask.spec.ts
├── utils/                  # Test data and constants
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

---

# Prerequisites

Please install the following before running the project:

* Node.js (LTS Version)
* npm (Comes with Node.js)
* Visual Studio Code (Recommended)

Verify installation:

```bash
node -v
npm -v
```

---

# Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate to the project folder:

```bash
cd todoist-playwright
```

---

# Install Dependencies

Install all required packages:

```bash
npm install
```

---

# Install Playwright Browsers

```bash
npx playwright install
```

---

# Configure Test Credentials

Open the following file:

```text
utils/testData.ts
```

Update the Todoist credentials:

```typescript
export const TEST_EMAIL = "your_email";
export const TEST_PASSWORD = "your_password";
```

---

# Execute the Tests

Run all tests:

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run only Chromium:

```bash
npx playwright test --project=chromium
```

---

# View HTML Report

After execution:

```bash
npx playwright show-report
```

---

# Framework Design

The framework follows the **Page Object Model (POM)** design pattern.

### pages/

Contains all page locators and reusable methods.

### tests/

Contains the automated CRUD test scenarios.

A shared **baseTest.ts** file initializes the `TodoPage` object and performs the login before every test, avoiding duplicate login code across test cases.

### utils/

Contains:

* Test data
* Application constants
* User credentials

---

# Assumptions

* A valid Todoist account is available.
* Internet connection is required.
* The application is accessible during execution.
* Google Chrome (Chromium) is used for execution.

---

# Notes

* A unique task name is generated during execution using a timestamp to avoid duplicate task names.
* Screenshots, traces, and videos are captured automatically for failed test cases.
* The framework is built for demonstration purposes as part of this assignment.

---

# Deliverables

This repository contains:

* Manual Test Cases
* Playwright Automation Framework
* CRUD Automation Scenarios
* Page Object Model Implementation
* HTML Test Report Support
* README Documentation

---

# Author

**Shalini N**
=======
# QA_Engineer_Assessment
Manual, API, and automated testing suite (Playwright/TypeScript, Postman) for a ReactJS + Node.js Todo App — QA Engineer coding challenge submission.
>>>>>>> 1bab1640edf730859549325a58f96d97d893454e
