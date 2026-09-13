# Tharwa FinTech Landing Page

Tharwa is a modern, responsive FinTech corporate landing page built with Angular. It introduces a fictional regional financial-technology company, presents its services and values, and provides an accessible contact experience.

This project was created for the Angular Junior Developer practical assignment.

## Features

- Responsive header with desktop and mobile navigation
- Hero section with clear calls to action
- Company mission, vision and guiding principles
- Six FinTech services rendered from typed static data
- Responsive company statistics section
- Three-step How It Works timeline
- Contact form with Angular Reactive Forms validation
- Responsive footer with navigation and social links
- Custom Tharwa design system and favicon
- Accessible semantic HTML and visible focus states
- Reduced-motion support
- Desktop, tablet and mobile layouts

## Technology Used

- Angular 21.2.23
- Angular CLI 21.2.24
- TypeScript 5.9.3
- RxJS 7.8.2
- SCSS
- Angular Reactive Forms
- Angular signals
- Angular built-in template control flow
- Inline SVG icons

## Development Environment

The project was developed and tested using:

- Node.js 24.15.0
- npm 11.3.0
- Windows 10
- Visual Studio Code

## Installation

Clone the repository:

```bash
git clone https://github.com/alaahmed1/tharwa-fintech-landing-page.git
```

Enter the project directory:

```bash
cd tharwa-fintech-landing-page
```

Install the dependencies:

```bash
npm install
```

## Run the Development Server

Start the local development server:

```bash
npm start
```

Open the application at:

```text
http://localhost:4200
```

Angular automatically reloads the application when source files are changed.

## Production Build

Create an optimized production build:

```bash
npm run build
```

The generated files are stored in:

```text
dist/fintech-landing-page
```

## Running Tests

Run the Angular unit tests with Vitest:

```bash
npm test
```

## Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── services/
│   │   ├── statistics/
│   │   ├── how-it-works/
│   │   ├── contact/
│   │   └── footer/
│   ├── data/
│   │   └── services.data.ts
│   ├── models/
│   │   └── service.model.ts
│   ├── app.html
│   ├── app.scss
│   └── app.ts
├── index.html
└── styles.scss
```

## Technical Approach

The application uses Angular’s standalone architecture. Each landing-page section is separated into a reusable component with its own TypeScript, HTML and SCSS files.

Service information is stored as typed static data and rendered using Angular’s `@for` control flow. TypeScript interfaces restrict the accepted data structure and service colour or icon values.

The Contact section uses Angular Reactive Forms with required-field, email-format and text-length validation. A signal controls the local success state after valid submission.

Global SCSS variables define the colour palette, typography, spacing, borders and responsive layout rules. Component styles use these shared design tokens to maintain consistency.

## Design Direction

Tharwa uses a bright regional FinTech identity inspired by financial growth and accessibility.

Main visual choices include:

- Forest green for trust and financial stability
- Lime green for growth and progress
- Yellow for energy and optimism
- Cream for warmth and readability
- Orange for selected accents
- Cormorant Garamond for expressive headings
- Manrope for clear body text

## Accessibility

Accessibility considerations include:

- Semantic sections, headings, lists and navigation
- Associated form labels and validation messages
- `aria-invalid` and `aria-describedby` on invalid fields
- Accessible navigation labels
- Decorative icons hidden from screen readers
- Visible keyboard focus states
- Sufficient colour contrast
- Responsive text and layouts
- Reduced-motion support

## Responsive Behaviour

The website was manually reviewed across:

- Large desktop layouts
- Tablet layouts
- iPhone 12 Pro
- iPhone SE at 375 × 667

Grid layouts adapt from multiple columns to a single column on smaller screens. The desktop navigation changes into a mobile menu, service cards stack vertically, and the How It Works timeline changes from horizontal to vertical.

## Third-Party Libraries

No third-party UI framework or component library was used. The interface was created with Angular, custom SCSS and inline SVG icons.

## Assumptions and Limitations

- Tharwa is a fictional company created for this assignment.
- Company statistics are illustrative static values.
- No backend or API integration is included.
- Contact-form submission is demonstrated locally and does not transmit data.
- Social links lead to the main social-platform websites because fictional Tharwa accounts do not exist.
- The website is a single-page corporate landing page.
- Financial transactions and account creation are outside the assignment scope.

## AI-Assisted Development

AI-assisted development tools were used to support planning, design iteration, debugging and code review. All final code was reviewed, tested and organized for this project, and the implementation decisions can be explained during the technical discussion.

## Repository

[GitHub repository](https://github.com/alaahmed1/tharwa-fintech-landing-page)