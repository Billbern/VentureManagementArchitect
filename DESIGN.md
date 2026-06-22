---

# VENTURE MANAGEMENT ARCHITECT (VMA)

## Creative Direction & Development Handoff

### Version 1.0

---

# PROJECT OVERVIEW

This is **NOT** a redesign of an existing website.

This is a complete repositioning of Venture Management Architect into a **world-class Enterprise Venture Architecture firm**.

The benchmark is **not local consulting firms**.

The benchmark is:

* Apple
* Stripe
* McKinsey
* BCG X
* IDEO
* BlackRock
* Foster + Partners
* Linear
* Vercel
* Notion
* Pentagram

The finished website should feel like a premium international consulting company.

---

# BRAND POSITIONING

Old Position

> Business Consulting

New Position

> Enterprise Venture Architecture

VMA does not simply provide consulting.

VMA designs businesses.

The website must communicate that VMA builds enterprises from concept to scale.

---

# DESIGN PHILOSOPHY

Keywords

* Editorial
* Architectural
* Premium
* Timeless
* Corporate Luxury
* Minimal
* Strategic
* Intelligent
* Clean
* Confident

Avoid

* Generic agency websites
* Bootstrap appearance
* Template appearance
* Excessive gradients
* Overused icons
* Cheap illustrations

---

# VISUAL REFERENCES

Research these websites before writing code.

Apple

Stripe

BlackRock

McKinsey

BCG

IDEO

Foster + Partners

Linear

Vercel

Monocle

Financial Times

Harvard Business Review

Do NOT copy.

Study

* spacing
* typography
* hierarchy
* rhythm
* motion
* layouts

---

# WEBSITE GOALS

Communicate

Authority

Trust

Expertise

Transformation

Innovation

Enterprise Architecture

---

# TARGET AUDIENCE

Governments

Development Agencies

Corporations

Founders

Investors

SMEs

NGOs

Multinationals

---

# SITE MAP

```
Home

Our Philosophy

Enterprise Capabilities

Industries

Transformation Stories

Leadership

Knowledge Centre

Resources

Contact
```

---

# FUTURE FEATURES

Leave architecture ready for

Client Portal

Enterprise Assessment

Knowledge Portal

Downloads

Research Library

Events

Courses

Authentication

Django CMS

---

# TECHNOLOGY STACK

Pure HTML5

CSS3

Vanilla JavaScript

No Bootstrap

No Tailwind

No jQuery

Use

CSS Grid

Flexbox

CSS Variables

clamp()

Intersection Observer

GSAP-ready architecture

Lenis-ready scrolling

Swiper-ready sliders

---

# FOLDER STRUCTURE

```
project/

index.html

about.html

capabilities.html

industries.html

industry-single.html

stories.html

story-single.html

leadership.html

insights.html

article.html

resources.html

contact.html

404.html

assets/

css/

01-reset.css

02-tokens.css

03-grid.css

04-typography.css

05-layout.css

06-components.css

07-utilities.css

08-animations.css

09-home.css

10-pages.css

main.css

js/

navigation.js

scroll.js

hero.js

counter.js

slider.js

cursor.js

accordion.js

app.js

images/

icons/

fonts/

svg/
```

---

# DESIGN SYSTEM

Everything must be component based.

Buttons

Cards

Forms

Navigation

Footer

Hero

Timeline

Sections

Statistics

Industry Cards

Leadership Cards

Insight Cards

Case Study Cards

CTA

Every component must be reusable.

---

# TYPOGRAPHY

Editorial typography.

Large headlines.

Huge whitespace.

Never make everything the same width.

Hierarchy should resemble Apple.

Use

Inter

General Sans

IBM Plex Sans

---

# COLOUR SYSTEM

Primary

```
#08121F
```

Accent

```
#C8A15A
```

Background

```
#FFFFFF
```

Surface

```
#F7F8FA
```

Dark Surface

```
#0F1722
```

Text

```
#101828
```

Muted

```
#667085
```

Never overuse the gold.

---

# GRID

1440px container

Large whitespace

8pt spacing system

Editorial layouts

Alternate left/right layouts

Magazine style

No repetitive sections

---

# HOMEPAGE STRUCTURE

```
Navigation

Hero

Impact Numbers

Philosophy

Enterprise Blueprint

Capabilities

Industries

Transformation Story

Leadership

Knowledge Centre

Client Logos

CTA

Footer
```

---

# INNER PAGES

Each page should begin with

Large Hero

↓

Story Section

↓

Content

↓

CTA

↓

Footer

---

# ANIMATION

Keep subtle.

No gimmicks.

Use

fade

slide

mask reveals

image zoom

parallax

number counters

scroll progress

navigation transitions

Prefer GSAP.

---

# PERFORMANCE

Aim for

95+

PageSpeed

Lazy load images

Responsive images

SVG icons

Modern image formats

Minimal JS

Semantic HTML

---

# ACCESSIBILITY

WCAG AA

Keyboard navigation

ARIA labels

Proper heading hierarchy

Visible focus states

Alt text

---

# SEO

Every page should include

Meta description

OG tags

Twitter tags

Canonical

Structured Data

Breadcrumb schema

Organization schema

Article schema

---

# DJANGO READINESS

Structure HTML so it becomes

```
base.html

includes/

navigation.html

footer.html

cta.html

hero.html

sections/

```

Avoid repeating code.

Everything should become includes.

---

# COMPONENT NAMING

Use BEM.

Example

```
hero

hero__content

hero__title

hero__subtitle

hero__actions

hero--dark
```

Do not use random class names.

---

# IMAGES

Large photography.

Editorial crops.

Architecture.

Infrastructure.

Business.

People.

Industry.

Avoid stock-photo appearance.

---

# CONTENT TONE

Never say

"We provide..."

Instead say

"We architect..."

"We design..."

"We transform..."

"We enable..."

"We build..."

---

# CAPABILITIES

Enterprise Architecture

Investment Readiness

Corporate Governance

Business Transformation

Digital Transformation

Research & Intelligence

Training

Commercialisation

Business Systems

Performance Management

---

# INDUSTRIES

Agriculture

Technology

Energy

Infrastructure

Manufacturing

Government

Healthcare

Finance

Education

Logistics

---

# PAGE QUALITY

Each page should feel unique.

Avoid copy-paste layouts.

Alternate

editorial

magazine

split

immersive

storytelling

layouts.

---

# CODING STANDARD

Semantic HTML5

No inline styles

No inline JS

CSS Variables

Modular CSS

ES6 Modules

Reusable components

Well commented

Production ready

---

# FINAL DELIVERABLE

Produce

13 HTML pages

11 CSS files

10 JavaScript modules

Reusable component library

Responsive layouts

Dark sections

Light sections

Animations

SEO

Accessibility

Django-ready architecture

---

# FINAL CREATIVE DIRECTION

The finished website should make visitors think:

> "This company looks like it advises governments and billion-dollar enterprises."

It should **not** feel like a marketing agency.

It should feel like a cross between:

* Apple
* McKinsey
* Foster + Partners
* BlackRock
* Financial Times

with an emphasis on **enterprise architecture, precision, authority, and trust**.

---

# Cursor Implementation Instructions

You are acting as a **Senior Creative Director, Senior UX Designer, Senior Frontend Architect, and Senior Django Frontend Engineer**.

Your task is to build the entire VMA website from scratch following the design system and creative direction above.

Requirements:

1. Build one page at a time, completing each page before moving to the next.
2. Never use Bootstrap, Tailwind, or premade templates.
3. Create reusable, semantic components that can later be converted into Django template partials.
4. Maintain a consistent design language across all pages.
5. Ensure every page is fully responsive, accessible (WCAG AA), SEO-ready, and production quality.
6. Write clean, well-documented code with BEM naming conventions.
7. Prioritize editorial layouts, generous whitespace, premium typography, and subtle motion inspired by Apple, Stripe, McKinsey, and Foster + Partners.
8. After all pages are complete, perform a final "Creative Polish Pass" to improve motion, layouts, micro-interactions, and visual hierarchy to award-quality standards without changing the content architecture.

This document provides the design vision, architecture, standards, and implementation strategy. Treat it as the single source of truth throughout development.
