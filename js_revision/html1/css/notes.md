# 📘 CSS Notes – Beginner to Advanced

---

# 🔹 1. CSS Kya Hai?

**CSS** (Cascading Style Sheets) ek stylesheet language hai jo **HTML elements ko style** karne ke liye use hoti hai.

### 🔹 Purpose:

- Colors, fonts, spacing, layout control
- Responsive design
- Visual presentation HTML se separate

---

# 🔹 2. CSS Syntax

```css
selector {
  property: value;
  property2: value2;
}
```

**Example:**

```css
p {
  color: blue;
  font-size: 16px;
}
```

---

# 🔹 3. CSS Types / Ways

| Type     | Syntax                           | Example                                    |
| -------- | -------------------------------- | ------------------------------------------ |
| Inline   | `<tag style="property:value;">`  | `<p style="color:red;">Text</p>`           |
| Internal | `<style>...</style>` in `<head>` | `<style>p{color:blue;}</style>`            |
| External | Separate .css file               | `<link rel="stylesheet" href="style.css">` |

---

# 🔹 4. CSS Selectors

| Selector   | Example            | Description             |
| ---------- | ------------------ | ----------------------- |
| Universal  | `* { margin:0; }`  | Sab elements ko target  |
| Type       | `p {}`             | Specific HTML tag       |
| Class      | `.className {}`    | HTML class              |
| ID         | `#idName {}`       | Unique element          |
| Group      | `h1, h2, p {}`     | Multiple elements       |
| Descendant | `div p {}`         | Nested elements         |
| Attribute  | `[type="text"] {}` | Elements with attribute |

---

# 🔹 5. CSS Colors

- Named: `red`, `blue`, `green`
- Hex: `#ff0000`, `#00ff00`
- RGB: `rgb(255,0,0)`
- RGBA: `rgba(255,0,0,0.5)` (opacity)
- HSL: `hsl(120, 100%, 50%)`

---

# 🔹 6. CSS Units

| Unit    | Type               | Example          |
| ------- | ------------------ | ---------------- |
| px      | Pixels             | `font-size:16px` |
| em      | Relative to parent | `2em`            |
| rem     | Relative to root   | `1.5rem`         |
| %       | Percentage         | `width:50%`      |
| vh / vw | Viewport           | `height:50vh`    |

---

# 🔹 7. Box Model

Every HTML element = Box

```
+--------------------+
|     Margin         |
|  +-------------+   |
|  | Border      |   |
|  | +---------+ |   |
|  | | Padding | |   |
|  | | Content | |   |
|  | +---------+ |   |
|  +-------------+   |
+--------------------+
```

| Property | Purpose              |
| -------- | -------------------- |
| content  | Actual content       |
| padding  | Space inside border  |
| border   | Edge around element  |
| margin   | Space outside border |

---

# 🔹 8. CSS Positioning

| Property | Description                           |
| -------- | ------------------------------------- |
| static   | Default                               |
| relative | Relative to itself                    |
| absolute | Relative to nearest positioned parent |
| fixed    | Fixed in viewport                     |
| sticky   | Scroll + fixed combination            |

---

# 🔹 9. CSS Display & Visibility

| Property   | Values                                        |
| ---------- | --------------------------------------------- |
| display    | block, inline, inline-block, flex, grid, none |
| visibility | visible, hidden, collapse                     |

---

# 🔹 10. CSS Flexbox (Modern Layout)

```css
.container {
  display: flex;
  justify-content: center; /* main axis */
  align-items: center; /* cross axis */
}
```

| Property        | Description                                   |
| --------------- | --------------------------------------------- |
| flex-direction  | row / column / row-reverse / column-reverse   |
| justify-content | start / center / space-between / space-around |
| align-items     | flex-start / center / stretch / baseline      |
| flex-wrap       | wrap / nowrap                                 |

---

# 🔹 11. CSS Grid (Advanced Layout)

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 10px;
}
```

| Property              | Description                  |
| --------------------- | ---------------------------- |
| grid-template-rows    | Define row sizes             |
| grid-template-columns | Define column sizes          |
| grid-gap / gap        | Space between grid items     |
| grid-area             | Assign names for positioning |

---

# 🔹 12. CSS Typography

| Property        | Example                             |
| --------------- | ----------------------------------- |
| font-family     | `font-family: Arial, sans-serif;`   |
| font-size       | `font-size:16px;`                   |
| font-weight     | `normal, bold, 100–900`             |
| font-style      | `normal, italic, oblique`           |
| text-align      | `left, center, right, justify`      |
| text-decoration | `underline, overline, line-through` |
| line-height     | `1.5, 150%`                         |
| letter-spacing  | `2px`                               |

---

# 🔹 13. CSS Pseudo-classes & Pseudo-elements

| Selector     | Example                      | Description                   |
| ------------ | ---------------------------- | ----------------------------- |
| :hover       | `a:hover {}`                 | Mouse hover effect            |
| :focus       | `input:focus {}`             | Input focus                   |
| :first-child | `li:first-child {}`          | First element                 |
| :last-child  | `li:last-child {}`           | Last element                  |
| ::before     | `p::before { content:"★"; }` | Insert content before element |
| ::after      | `p::after { content:"★"; }`  | Insert content after element  |

---

# 🔹 14. CSS Transitions & Animations

### Transition

```css
button {
  background: blue;
  transition: background 0.5s ease;
}
button:hover {
  background: red;
}
```

### Keyframe Animation

```css
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}
.box {
  animation: slide 2s infinite alternate;
}
```

---

# 🔹 15. CSS Media Queries (Responsive Design)

```css
/* Mobile */
@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}

/* Tablet */
@media (min-width: 601px) and (max-width: 1024px) {
  body {
    font-size: 16px;
  }
}

/* Desktop */
@media (min-width: 1025px) {
  body {
    font-size: 18px;
  }
}
```

---

# 🔹 16. CSS Variables (Custom Properties)

```css
:root {
  --main-color: #3498db;
  --padding: 10px;
}

div {
  color: var(--main-color);
  padding: var(--padding);
}
```

---

# 🔹 17. Advanced CSS Concepts

| Concept               | Description                                       |
| --------------------- | ------------------------------------------------- |
| CSS Specificity       | Inline > ID > Class > Tag                         |
| !important            | Override other rules                              |
| z-index               | Stack order of elements                           |
| calc()                | Dynamic calculations: `width: calc(100% - 20px);` |
| clip-path             | Shapes and masks for elements                     |
| CSS variables         | Reusable values                                   |
| CSS Grid + Flex combo | Complex layouts                                   |

---

# 🔹 18. CSS Best Practices

- Separate CSS in external `.css` file
- Use classes instead of IDs for styling
- Use semantic HTML for maintainable CSS
- Avoid inline styles
- Use shorthand properties (`margin: 10px 5px;`)
- Comment sections for readability (`/* Header */`)

---

# 🔹 19. CSS Frameworks (Optional)

- **Bootstrap** – Responsive grid + components
- **Tailwind CSS** – Utility-first CSS
- **Bulma** – Modern lightweight framework
- **Materialize** – Material design components

---
