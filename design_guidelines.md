# Design Guidelines: Tantra Intuitions Rigdzin

## Design Approach
**Reference-Based Approach**: Draw inspiration from wellness and spiritual platforms like Calm, Headspace, and premium e-learning sites. This is an experience-focused, visual-rich application where emotional connection and spiritual aesthetic are paramount.

## Core Design Principles
- **Spiritual Elegance**: Sophisticated, calming design that conveys wisdom and intimacy
- **Mature Audience**: Refined aesthetic targeting couples 40+
- **Sacred Imagery**: Use symbolic elements (lotus, chakras, sacred geometry) thoughtfully
- **Breathing Space**: Generous whitespace for contemplative feel

## Typography
**Font Families** (via Google Fonts):
- Headings: 'Cormorant Garamond' or 'Playfair Display' (serif, elegant)
- Body: 'Montserrat' or 'Inter' (clean, readable)

**Hierarchy**:
- H1: 3.5rem (desktop) / 2.5rem (mobile), serif, font-weight 600
- H2: 2.5rem (desktop) / 2rem (mobile), serif, font-weight 500
- H3: 1.75rem, serif, font-weight 500
- Body: 1.125rem, sans-serif, font-weight 400, line-height 1.75
- Accent text: 0.875rem, uppercase, letter-spacing 0.1em

## Layout System
**Tailwind Spacing**: Use units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-20 (desktop), py-12 (mobile)
- Container: max-w-7xl with px-6
- Card spacing: gap-8 for grids
- Element margins: mb-6 for paragraphs, mb-12 for sections

## Component Library

### Navigation
- Fixed header with transparent-to-solid on scroll
- Logo left, menu items center, language toggle (FR/EN) right
- Desktop: Horizontal menu with hover underline effects
- Mobile: Hamburger menu with full-screen overlay

### Hero Section
- Split layout: Left side features book cover image with subtle shadow
- Right side: Title, subtitle, author name, CTA button
- Background: Subtle gradient or texture overlay
- Height: 85vh

### Content Cards
**"Couples Reliés au Sacré" Cards**:
- Two-column grid (stacks on mobile)
- Each card: Centered icon, heading, descriptive text
- Soft border, subtle hover lift effect
- Padding: p-8

### Quote Sections
- Full-width background (deep purple)
- Centered quote text in large serif font
- Author attribution below
- Max-width: max-w-4xl

### "Accompagnement Complet" Section
- Four-column grid (2 cols tablet, 1 col mobile)
- Icon + title + description format
- Equal height cards with flex layout

### Book/Seminar Presentation
- Image left, content right (reverses on alternate sections)
- Title, description, bullet points, CTA button
- Images: subtle rounded corners (rounded-lg)

### Contact Form
- Single column, max-w-2xl centered
- Input fields with subtle borders
- Full-width textarea for message
- Primary CTA button
- Display email: rigdzin@wanadoo.fr prominently

## Images

**Required Images**:
1. **Hero**: Book cover "Jamais sans ma liberté" - professional product shot with soft shadow
2. **Couple in meditation**: Serene couple practicing tantra meditation together
3. **Lotus flower**: Close-up of purple/pink lotus symbolizing spiritual awakening
4. **Chakra illustration**: Seven chakras visualization in watercolor style
5. **Sacred geometry**: Subtle mandala or flower of life patterns
6. **Seminar photos**: Authentic workshop/retreat imagery

**Image Treatment**:
- Soft rounded corners (rounded-lg or rounded-xl)
- Subtle overlays on background images for text readability
- Maintain aspect ratios: 16:9 for banners, 4:3 for cards, 1:1 for profile

## Buttons & CTAs
- Primary: Medium-large size (px-8 py-4), rounded-full
- Background blur for buttons over images
- Hover: subtle scale transform
- Text: 1rem, font-weight 600, letter-spacing wide

## Language Toggle
- Small pill-style buttons (FR | EN)
- Active state clearly distinguished
- Fixed position in header

## Animations
**Minimal, purposeful animations only**:
- Subtle fade-in on scroll for sections
- Smooth transitions on navigation
- Card hover lift (transform: translateY(-4px))
- No distracting parallax or complex scroll effects

## Accessibility
- Maintain 4.5:1 contrast ratio on purple backgrounds
- Focus states with visible outlines
- Semantic HTML structure
- Alt text for all spiritual imagery
- Form labels clearly associated

This design balances spiritual sophistication with modern web standards, creating an inviting space for couples seeking sacred intimacy guidance.