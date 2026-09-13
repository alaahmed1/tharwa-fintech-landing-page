# Tharwa FinTech Landing Page — Development Log

# Phase 1: Environment Setup and Project Initialization
* Selected **Visual Studio Code** as the development editor for the Angular project.
* Installed the Angular Language Service extension for template validation, code completion, and error detection.
* Verified the installed development tools:
  * Node.js: `24.15.0`
  * npm: `11.3.0`
  * Git: `2.51.0.windows.1`
* Created a dedicated project location at:
  ```text
  C:\Projects
  ```
* Created the project outside OneDrive to avoid file synchronization and package-locking problems.
* Generated an Angular 21 application using:
  ```powershell
  npx -p @angular/cli@21 ng new fintech-landing-page --standalone --style=scss --strict --routing=false --ssr=false
  ```
* Used Angular’s standalone application structure.
* Selected SCSS for component and global styling.
* Enabled strict TypeScript checking to identify coding errors earlier.
* Disabled routing because the assignment requires a single-page corporate landing page.
* Disabled server-side rendering because the project only requires a static frontend.
* Encountered an npm dependency installation error:
  ```text
  Cannot read properties of null (reading 'edgesOut')
  ```
* Resolved the error by removing the incomplete dependency installation, verifying the npm cache, and running:
  ```powershell
  npm install
  ```
* Verified the installed Angular versions:
  * Angular CLI: `21.2.24`
  * Angular: `21.2.23`
  * TypeScript: `5.9.3`
  * RxJS: `7.8.2`
* Started the Angular development server using:
  ```powershell
  npm start
  ```
* Confirmed that the application ran successfully at:
  ```text
  http://localhost:4200/
  ```
* Learned that Angular watch mode automatically rebuilds the application after saved code changes.
* Initialized Git manually because the first failed package installation prevented automatic Git setup:
  ```powershell
  git init
  git branch -M main
  ```
* Verified that `.gitignore` excluded generated folders such as `node_modules`.
* Created the initial project checkpoint:
  ```powershell
  git add .
  git commit -m "chore: initialize Angular 21 standalone application"
  ```
* Confirmed that the project installed, compiled, and ran correctly before beginning the interface design.



# Phase 2: Design System, Header, and Hero
* Selected **Tharwa** as the fictional FinTech company name.
* Created a bright visual identity using forest green, lime, yellow, cream, and small orange accents.
* Designed a simple text-based **THARWA.** logo using an elegant serif font and lime dot.
* Created `DESIGN.md` to document the approved colours, typography, spacing, responsive behavior, and accessibility rules.
* Installed Cormorant Garamond for headings and Manrope for body text:
  ```powershell
  npm install @fontsource/cormorant-garamond @fontsource/manrope
  ```
* Added reusable CSS variables for colours, fonts, spacing, borders, shadows, and animations.
* Created shared primary, accent, and outline button styles.
* Added global keyboard focus styles and reduced-motion support.
* Generated standalone components for Header, Hero, About, Services, Statistics, How It Works, Contact, Footer, and the Prosperity Ecosystem.
* Connected the main components to the root Angular application.
* Built a responsive Header containing the THARWA logo, navigation links, and Contact button.
* Added a mobile navigation menu using an Angular signal to store its open and closed state.
* Added functionality to close the mobile menu after selecting a link, pressing Escape, or returning to desktop width.
* Created a TypeScript `Service` interface to define the required structure of each financial service.
* Stored the six financial services as typed static data instead of hardcoding them separately in the templates.
* Created the Prosperity Ecosystem to visually represent Tharwa and its six connected financial services.
* Used Angular `@for` to generate the six service modules from static data.
* Used Angular `@switch` to display a different SVG icon for each service.
* Added a subtle floating animation to the ecosystem and disabled it for users who prefer reduced motion.
* Built a responsive Hero containing the main heading, description, calls to action, trust points, and Prosperity Ecosystem.
* Adjusted the ecosystem size, hero spacing, and heading size after desktop and mobile testing.
* Tested the interface on desktop and at a mobile viewport of `375 × 667`.
* Ran successful production builds using:
  ```powershell
  npm run build
  ```
* Committed and pushed each completed development checkpoint to GitHub.



# Phase 3 — Main Content and Functionality
* Added the About section with company introduction, mission, vision and guiding principles.
* Improved card spacing to keep the content balanced and remove excessive empty space.
* Added the Services section using reusable typed service data.
* Used Angular @for to generate service cards automatically.
* Used Angular @switch to display the correct SVG icon for each service.
* Added the Impact section with four typed statistics.
* Added a responsive How It Works timeline with three ordered steps.
* Connected the How It Works button to the Contact section.
* Built a functional contact form using Angular Reactive Forms.
* Added required-field, email-format and minimum-length validation.
* Used an Angular signal to display the successful validation message.
* Clearly indicated that the demonstration form does not send data to a backend.
* Added a responsive footer with generated navigation links.
* Added an automatically updating copyright year.
* Used semantic HTML and accessibility attributes throughout the sections.
* Tested the page on desktop, iPhone SE and iPhone 12 Pro layouts.
* Ran successful production builds after each major section.
* Committed and pushed all Phase 3 changes to GitHub.