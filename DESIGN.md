# Tharwa FinTech Landing Page — Design System


**Project:** Angular 21 Junior Frontend Developer Assignment

## 1. Product Context

Tharwa is a fictional regional FinTech company offering accessible digital financial services to individuals and businesses.

The landing page has one primary purpose:

> Introduce Tharwa, explain its services, build trust, and encourage potential customers to explore the company or make contact.

### Target Audience

* Individuals looking for simple digital financial services
* Small and medium-sized businesses
* Merchants requiring payment solutions
* Potential corporate partners
* Customers across the region

## 2. Brand Personality

Tharwa should feel:

* Optimistic
* Trustworthy
* Modern
* Clear
* Approachable
* Growth-focused
* Regionally relevant
* Professional without feeling traditional or overly corporate

The interface should avoid the dark navy-and-gold appearance commonly associated with traditional banking. Tharwa uses a bright, fresh palette to communicate financial opportunity and progress.

## 3. Brand Name and Meaning

The name **Tharwa** is associated with prosperity and wealth.

The brand connects financial growth with freedom, simplicity, and accessibility.

### Primary Hero Message

> Grow money. Move freely.

### Supporting Brand Line

> A brighter financial tomorrow.

## 4. Logo System

The primary logo is a text-based wordmark:

**THARWA.**

### Logo Characteristics

* Uppercase serif wordmark
* Forest green lettering
* Small fresh-lime dot
* Elegant but approachable
* Simple enough to reproduce using HTML, CSS, or SVG
* Highly legible at desktop and mobile sizes

### Logo Colours

* Wordmark: Forest Green `#19532B`
* Logo dot: Fresh Lime `#9ABC04`

### Logo Rules

* Maintain clear space around the wordmark.
* Do not stretch or distort the logo.
* Do not apply shadows or gradients.
* Do not place the logo on visually noisy backgrounds.
* Use the cream or white version of the background whenever possible.
* On a forest-green background, use a warm-cream wordmark with a lime dot.
* Do not add a separate shield, coin, currency symbol, or banking crest.

## 5. Colour Palette

| Token                  | Colour          |       Hex | Intended Use                                      |
| ---------------------- | --------------- | --------: | ------------------------------------------------- |
| `--color-primary`      | Forest Green    | `#19532B` | Main buttons, logo, headings, footer              |
| `--color-primary-dark` | Deep Ink        | `#183126` | Body text, dark surfaces, hover states            |
| `--color-accent`       | Fresh Lime      | `#9ABC04` | Growth accents, secondary actions, highlights     |
| `--color-highlight`    | Sunshine Yellow | `#FFCA26` | Decorative highlights and selected visual modules |
| `--color-background`   | Warm Cream      | `#F3E8CC` | Main page background                              |
| `--color-surface`      | Soft Ivory      | `#FFFDF7` | Cards, forms, and elevated surfaces               |
| `--color-emphasis`     | Tangerine       | `#F86915` | Small emphasis details and selected icons         |
| `--color-border`       | Soft Olive      | `#D7D7B7` | Borders, separators, and input outlines           |
| `--color-muted`        | Muted Green     | `#60725E` | Secondary text                                    |
| `--color-error`        | Deep Red        | `#B42318` | Validation errors only                            |
| `--color-success`      | Forest Green    | `#19532B` | Successful form feedback                          |

### Colour Usage Rules

* Forest Green is the dominant brand colour.
* Warm Cream is the dominant background colour.
* Fresh Lime should be used as an accent, not as a large text colour.
* Sunshine Yellow and Tangerine should be used sparingly.
* Fresh Lime, Sunshine Yellow, and Tangerine should use dark text for adequate contrast.
* White or cream text may be used on Forest Green.
* Error messages must use Deep Red and cannot rely on colour alone.
* Avoid using too many bright colours in the same component.

## 6. Typography

### Display Typeface

**Cormorant Garamond**

Used for:

* THARWA wordmark
* Main hero heading
* Major section headings
* Important quotations or brand statements

Recommended weights:

* `600` for headings
* `700` for high-emphasis display text

### Body Typeface

**Manrope**

Used for:

* Navigation
* Paragraphs
* Buttons
* Form labels
* Statistics
* Captions
* Validation messages

Recommended weights:

* `400` for body text
* `500` for navigation and labels
* `600` for buttons
* `700` for statistics

### Font Fallbacks

```css
--font-display: "Cormorant Garamond", Georgia, serif;
--font-body: "Manrope", "Segoe UI", Arial, sans-serif;
```

### Type Scale

| Role            | Desktop Size | Mobile Size |
| --------------- | -----------: | ----------: |
| Hero heading    |    `80–96px` |   `48–56px` |
| Section heading |    `48–56px` |   `36–42px` |
| Card heading    |    `22–26px` |   `20–22px` |
| Body large      |    `18–20px` |   `17–18px` |
| Body            |       `16px` |      `16px` |
| Small label     |    `12–14px` |      `12px` |

Responsive typography should use CSS `clamp()` where appropriate.

### Typography Rules

* Use sentence case for navigation and buttons.
* Keep paragraphs readable with a maximum width of approximately 65 characters.
* Use uppercase text only for short labels and eyebrow headings.
* Uppercase labels may use wider letter spacing.
* Avoid long paragraphs and overly promotional language.

## 7. Layout System

### Container

* Maximum content width: `1200px`
* Desktop horizontal padding: `32px`
* Mobile horizontal padding: `20px`
* Content should remain centred on wide screens.

### Section Spacing

* Large desktop section spacing: `96px`
* Tablet section spacing: `72px`
* Mobile section spacing: `56px`

### Spacing Scale

```text
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
```

Spacing should use this scale consistently rather than arbitrary values.

### Grid

* Desktop: up to 12 conceptual columns
* Service cards: three columns on large screens
* Service cards: two columns on tablets
* Service cards: one column on mobile
* Hero: two-column layout on desktop
* Hero: stacked layout on mobile

## 8. Shape and Surface System

### Border Radius

| Component                   |  Radius |
| --------------------------- | ------: |
| Small controls              |  `10px` |
| Buttons and inputs          |  `14px` |
| Cards                       |  `20px` |
| Large feature panels        |  `28px` |
| Pills and circular controls | `999px` |

### Borders

* Use thin, low-contrast borders.
* Default border: `1px solid #D7D7B7`
* Focused controls use Forest Green.
* Decorative rules may use Fresh Lime or Tangerine.

### Shadows

Shadows should be soft and restrained:

```css
--shadow-card: 0 12px 32px rgba(24, 49, 38, 0.08);
--shadow-hover: 0 18px 42px rgba(24, 49, 38, 0.12);
```

Avoid dark or dramatic shadows.

## 9. Button System

### Primary Button

* Forest Green background
* Warm Cream text
* Rounded shape
* Clear hover, pressed, focus, and disabled states
* Used for the main action

Example label:

> Explore services

### Secondary Button

* Transparent or Soft Ivory background
* Forest Green border and text
* Used for secondary navigation

Example label:

> Contact us

### Accent Button

* Fresh Lime background
* Deep Ink text
* Used sparingly

### Button Behaviour

* Minimum height: `48px`
* Minimum touch target: `44 × 44px`
* Visible keyboard focus ring
* Pointer cursor when enabled
* Slight upward movement on hover
* No layout movement when pressed
* Disabled buttons must appear unavailable
* Button labels must describe the resulting action

## 10. Navigation

The header should contain:

* THARWA wordmark
* About
* Services
* Impact
* How it works
* Contact
* Primary call-to-action

### Desktop Navigation

* Horizontal navigation
* Wordmark aligned left
* Links centred or right-aligned
* Primary CTA positioned at the right
* Header may become slightly elevated when scrolling

### Mobile Navigation

* Wordmark aligned left
* Accessible menu button aligned right
* Menu opens as a clear vertical navigation panel
* Menu closes after selecting a link
* Menu button exposes its expanded state using `aria-expanded`
* Keyboard focus must remain visible

## 11. Hero Section

### Content

Eyebrow:

> A brighter financial tomorrow

Heading:

> Grow money. Move freely.

Description:

> Simple, secure financial tools designed for everyday life, growing businesses, and a more prosperous future.

Primary action:

> Explore services

Secondary action:

> Contact us

### Hero Layout

* Text content appears on the left on desktop.
* The Prosperity Ecosystem appears on the right.
* The hero uses a bright Warm Cream background.
* Decorative rounded colour shapes may appear near the edges.
* On mobile, the content and ecosystem stack vertically.
* The main call-to-action appears before the secondary action.

## 12. Signature Visual: Prosperity Ecosystem

The Prosperity Ecosystem is Tharwa’s main visual signature.

### Concept

A central Forest Green circle contains a simple `T` representing Tharwa. Six surrounding rounded modules represent the company’s six financial services:

1. Digital Payments
2. Money Transfers
3. Merchant Solutions
4. Bill Payments
5. Digital Wallet
6. Payment Gateway

The modules are connected with a circular path representing secure movement through one financial ecosystem.

### Visual Rules

* Central module: Forest Green with a cream `T`
* Surrounding modules: Forest Green, Fresh Lime, Sunshine Yellow, and one restrained Tangerine module
* Icons: simple line icons with consistent stroke width
* No currency symbols
* No cryptocurrency imagery
* No literal coins or bank buildings
* The illustration should remain geometric rather than botanical
* The visual should not appear childish or resemble a flower illustration

### Angular Implementation

The six service modules should be generated from static TypeScript data using Angular’s `@for` control flow rather than manually duplicating the HTML.

This makes the visual consistent with the data-driven services section and demonstrates reusable Angular implementation.

## 13. Motion

Motion should support the design without distracting users.

Permitted motion:

* Gentle hero entrance
* Small hover lift on cards
* Subtle movement of the Prosperity Ecosystem modules
* Smooth scrolling between page sections
* Small navigation transition

Motion rules:

* Keep durations between `150ms` and `500ms` for interactions.
* The ambient ecosystem animation may use a slow duration of `6–8 seconds`.
* Avoid excessive animations across every section.
* Respect `prefers-reduced-motion`.
* Disable non-essential movement for users requesting reduced motion.

## 14. Cards

Service cards should contain:

* Service icon
* Service title
* Short description
* Optional directional arrow or “Learn more” text

Card rules:

* Soft Ivory background
* Thin border
* Rounded corners
* Consistent internal padding
* Equal visual height within each row
* Subtle hover lift
* Visible focus state when interactive
* Icons use the approved colour palette
* Cards must remain readable without hover

## 15. Forms

The contact form should use:

* Soft Ivory form surface
* Persistent visible labels
* Clear input borders
* Forest Green focus states
* Text-based validation messages
* Stable spacing for errors
* A clear successful-submission state

Form fields:

* Name
* Email
* Phone number
* Message

Form rules:

* Labels must be connected to their inputs.
* Required fields must be identified.
* Invalid fields must use `aria-invalid`.
* Error messages must explain how to correct the field.
* Entered values should not disappear after validation errors.
* The submit button should not allow duplicate submissions.
* The form will simulate submission because no backend is required.

## 16. Icons

Icons should be:

* Simple line icons
* Consistent in stroke width
* Easy to understand
* Used with text where meaning may be unclear
* Decorative only when they do not communicate essential information

Icon-only buttons must include accessible names.

## 17. Responsive Breakpoints

The following breakpoints guide the design:

| Breakpoint         | Target       |
| ------------------ | ------------ |
| Below `480px`      | Small mobile |
| `480–767px`        | Large mobile |
| `768–1023px`       | Tablet       |
| `1024–1279px`      | Laptop       |
| `1280px` and above | Desktop      |

Content must also remain usable between these breakpoints.

### Responsive Requirements

* No horizontal page scrolling
* No clipped text or controls
* No fixed-width content that breaks on mobile
* Navigation transforms into a mobile menu
* Hero changes from two columns to a stacked layout
* Cards reduce from three columns to two and then one
* Buttons may become full-width on small mobile screens
* Forms use the available width
* Decorative elements must not cover content
* Text remains readable at 200% browser zoom

## 18. Accessibility

The target is WCAG 2.2 AA.

The interface must include:

* Semantic HTML elements
* One primary `h1`
* Logical heading order
* Accessible navigation labels
* Visible keyboard focus
* Sufficient colour contrast
* Proper form labels
* Text-based validation feedback
* Accessible menu state
* Descriptive alternative text for meaningful images
* Reduced-motion support
* Touch-friendly controls

Colour must never be the only method of communicating meaning.

## 19. Content Voice

Tharwa’s language should be:

* Clear
* Direct
* Reassuring
* Positive
* Human
* Professional

Use active language such as:

* Explore services
* Contact us
* Start transacting
* Grow your business
* Send money securely

Avoid vague labels such as:

* Submit
* Click here
* Learn everything
* Discover more now

## 20. Page Structure

The landing page will follow this order:

1. Header and navigation
2. Hero
3. About Tharwa
4. Mission and vision
5. Financial services
6. Company statistics
7. How it works
8. Contact form
9. Footer

## 21. Design Principles

The implementation should:

* Feel visually distinctive without becoming distracting.
* Prioritize clarity and readability.
* Use repeated components consistently.
* Use the approved design tokens instead of isolated colour values.
* Work equally well on desktop, tablet, and mobile.
* Make all interactive elements recognizable.
* Maintain stable layouts during validation and interaction.
* Use decoration only when it strengthens the Tharwa identity.

## 22. Final Design Checklist

Before the interface is considered complete, confirm:

* The THARWA wordmark is consistent.
* Approved colours are stored as reusable CSS variables.
* Typography follows the defined roles.
* Buttons include hover, focus, pressed, and disabled states.
* The Prosperity Ecosystem contains all six services.
* Repeated content is rendered from typed static data.
* Navigation works with mouse, touch, and keyboard.
* The mobile menu is accessible.
* The layout works from 360px to large desktop screens.
* Reduced-motion preferences are respected.
* Form errors are readable and correctly associated.
* The website maintains sufficient colour contrast.
* The production build completes successfully.
