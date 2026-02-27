# On The Basis Of Love Case Study

## Problem Statement

Over the past few weeks, I had a task to complete for rise academy and the task was to build something that "shows love or expresses love to someone" cause it was valentines season.

## Solution Design

The goal of this application was to lower the barrier to emotional expression for users who struggle with creativity, or intentional with romantic gestures while still delivering an experience that feels thoughtful and meaningful to the recipient.

#### Feature Logic

The product is designed as a single-page web application to keep the experience lightweight, and emotionally focused. The feature set mirrors the natural progression of how peoples typically express affection:

1. Poems: This section serves as the emotional entry point. Poetry is a universally accepted medium for expressing love, even when it isn’t personally written. Including poems allows users to communicate depth of feeling without having exceptional writing skills.
2. Reasons Why I Love You: This section adds specificity and personalization. While the poems establish emotion, the “reasons” section grounds that emotion in tangible affirmations helping the recipient feel seen and appreciated. Even when generalized, these statements are relatable enough to feel intentional.
3. Virtual Gift: The virtual gift functions as a symbolic closer to the experience. It introduces an element of surprise and playfulness, reinforcing the idea of giving something even in a digital form rather than just saying something "No body likes people who are all talk and no substance ".

#### Flow Design

The application follows a **linear, scroll-based flow**, guiding the user through an emotional narrative:

1. **Warm emotional introduction** (Poems)
2. **Personal reinforcement** (Reasons why I love you)
3. **Memorable takeaway** (Virtual gift)

#### Why I Chose This ?

The solution prioritizes **accessibility over perfection**. It acknowledges that not every user is highly expressive or intentional, but still deserves a way to show care. By abstracting effort into a clean, emotionally structured experience, the application transforms minimal user input into maximum emotional impact.

Ultimately, the design ensures that even a “lazy” act of sharing the page can still result in a genuine “aww” moment for the recipient.

## UI Design System

The design of the application is intentionally simple, emotional, and universally romantic. The design system focuses on using color and typography to evoke warmth, affection, and intimacy.

A centralized design system was created and documented externally to ensure visual consistency across the application and to allow for easy iteration and scalability, you can have a look at it [here](https://on-the-basis-of-love.netlify.app/design-system).

#### Color Palette

The color palette is anchored by a **bold crimson red**, supported by neutral tones for balance and readability.

- **Primary Red (`#c8102e`)**  
   Acts as the emotional core of the application. It is used for key highlights, accents, and moments that require emotional emphasis.
- **Neutral Background (`#f5f5f5`)**  
   Provides a soft, calm canvas that allows emotional content to breathe without visual noise.
- **Black & Dark Grey (`#000000`, `#333333`)**  
   Used for body text and structural elements to maintain clarity, contrast, and accessibility.

#### Typography

The typography system pairs expressiveness with clarity:

- **Heartland**  
   Used for headings and key emotional phrases. Its hand-drawn, playful nature mimics handwritten love notes, adding personality and warmth to the experience.
- **Oswald**  
   Used for body text and supporting content. Oswald’s clean, modern structure provides readability and contrast, grounding the emotional display font and preventing the interface from feeling overly decorative.

#### Why I Went With This Emotional Design

The application is designed specifically for the month of love, a time associated with romance, vulnerability, and emotional expression. The aesthetic choices reflect this.

Crimson Red was chosen as the dominant color due to its strong association with love, desire, and affection. However, rather than using multiple vibrant colors, the design relies on a simple color scheme to keep the focus on the message rather than the interface.

The handwritten display font reinforces intimacy and sincerity, while the structured sans-serif body font ensures the experience still feels polished when the content itself is simple.

## HTML & Structural Approach

The Application was structured with semantic HTML in mind to ensure accessibility, readability and best SEO practices. Given the product is content heavy keeping to semantic HTML provides the best experiences for both the users and the developer

Semantic HTML decisions:

- Using `<header>`, `<main>`, `<section>`, and `<footer>` elements to clearly define the page layout and content hierarchy.
- Structuring each major feature (Poems, Reasons Why I Love You, Virtual Gift) as its own `<section>` with descriptive headings.
- Maintaining a logical heading order (`<h1>` → `<h2>`) to improve screen-reader navigation and search engine understanding.
- Using `<button>` elements for interactive actions instead of styled `<div>`s to preserve keyboard accessibility.
- Providing meaningful `alt` text for decorative and symbolic imagery where applicable.

## CSS Architecture

The CSS architecture was built around reusablility through strong emphasis on design tokens and layout techniques.

#### CSS variables

My css variables were defined at the root level to centralize control over the design system:

```css
:root {
  --background-color: #f5f5f5;
  --text-color: black;
  --primary-color: #c8102e;
}
```

#### Layout Strategy

I used mainly flexbox for the flow of the application, mainly because the content of the website is vertically stacked

## JS Case Study

The application uses vanilla JavaScript across four files, with `localStorage` as the data layer.

#### JavaScript File Breakdown

| File           | Purpose                                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| `sign-up.js`   | Collects user credentials and saves them to `localStorage`                                                        |
| `login.js`     | Validates credentials against `localStorage` and sets a session flag                                              |
| `dashboard.js` | Handles the create modal, builds poem/reason lists dynamically, and saves the love message data to `localStorage` |
| `preview.js`   | Reads saved data from `localStorage` and renders the shareable love message page                                  |

#### Logic Flow

```
User signs up → credentials stored in localStorage
        ↓
User logs in → credentials validated → authentication flag ("isLoggedIn") set
        ↓
Dashboard loads → auth guard checks authentication flag → redirects if missing
        ↓
User fills in create modal → poems & reasons pushed to arrays → renderList() updates DOM
        ↓
Form submitted → validation → all inputs bundled into formData → saved to localStorage ("loveMessageData")
        ↓
Preview page loads → reads "loveMessageData" from localStorage → populates DOM (falls back to fetching JSON defaults if no saved data)
        ↓
User interacts → poem navigation updates currentPoemIndex → reason button picks a random non-repeating index → DOM text updated
```

## Reflections

This project was completed within a limited time-frame due to personal constraints, which influenced both the scope and depth of the final implementation. While the core idea and execution successfully communicate the intended emotional experience, there are several areas I would expand on if given more time.

### Future Improvements

1. **Added Personalization**: A key improvement would be the introduction of personalization features. Users would be able to access a simple dashboard to customize content, such as names, messages, and selected sections, personalizing the experience specifically to their loved one. Once configured, the users would generate a unique shareable link that leads to a personalized version of the page, increasing emotional impact and user ownership.
2. **Expanded Content**: The current version prioritizes structure and emotional flow, but the content on show is intentionally minimal. In a future iteration, I would expand the content by adding features such as an image gallery, a dedicated letter-writing section, or additional curated messages. This would allow users to express affection in multiple formats while keeping the experience engaging.
3. **Enhanced Animations and Visual Polish**: While the styling is clean and functional, additional polish could elevate the experience. Subtle animations, transitions, and micro-interactions would enhance the user experience

Link to Project: https://on-the-basis-of-love.netlify.app/
Link to Blog Post: https://dev.to/vaden89/case-study-of-valentines-day-project-k45
Link to Presentation: https://www.canva.com/design/DAHCglyfGAg/JDhjgdOmrE4iJpc_0lbsnw/edit?utm_content=DAHCglyfGAg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
