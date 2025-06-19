# 🎬 Fruteka Movie App - Tech Challenge

A responsive movie browsing app built with **Next.js**, **TypeScript**, and **Styled Components**, using **TMDB API** to fetch movie data. This challenge focuses on rendering movie lists and detail pages with proper functionality, search, pagination, and basic styling.

---

## ✅ Features Implemented

### 🧠 Functionality

- **Movie List Page** with:
  - Grid layout
  - **Client-side search** by title
  - **Pagination** (8 movies per page)
- **Movie Detail Page** with:
  - Poster image, title, overview, and metadata
  - Back navigation
  - Static meta section (director, stars, genres)
- API integration with TMDB

### 💄 Styling

- Layout styled using **inline styles** for faster iteration
- Mobile-first approach considered
- Grid layout for responsiveness

### 📦 Technologies

- Next.js (with SSR using `getServerSideProps`)
- TypeScript
- Styled Components
- Axios for API requests
- Jest + React Testing Library for unit tests
- ESLint + Prettier for code formatting

---

## 🔍 How to Use

### 1. Clone the repo
```bash
git clone https://github.com/monaeslah/Fruteka
cd Fruteka
```
### 2. Install dependencies
```bash
npm install
```
### 3. Setup environment variables
```bash
TMDB_API_KEY=your_tmdb_api_key_here
```
### 4. Run the development server
```bash
npm run dev
```
### 🧪 Testing
```bash
npm test
```
### ⚠️ Notes and Limitations
With more time, these inline styles could be refactored into a shared theme using styled-components or a design system.
🖼️ Design limitations:

The desktop mockup for the movie detail page was unclear.

Due to lack of a Figma or visual design source, I placed metadata (director, stars) below the overview instead of over the poster.

🧾 Hardcoded data:

Some fields like director, stars, and genres were hardcoded because they were not available in the API response.

🎨 Inline styles were only used in the **Movies List Page** to speed up development and focus on functionality first. Other parts of the app use styled-components with SSR.

🧪 Testing is currently basic, with unit tests written for major components. More coverage could be added (e.g. for pagination logic or input behavior).

### 🌱 Improvements for the Future
If this were built from scratch or more time was available, I would:

Implement a theme-based styling system using Styled Components ThemeProvider

Add a global design system with reusable UI components (e.g. Button, Input)

Use Figma specs (if provided) to match design exactly

Fetch more detailed metadata using additional API endpoints (e.g. credits, genres)

Add pagination indicators (e.g. page numbers)

Improve accessibility with proper ARIA labels and tab indexes

Add E2E tests using Cypress or Playwright