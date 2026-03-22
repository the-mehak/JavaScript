# 📘 Advanced CSS Cheatsheet

---

## 🔹 1. Selectors

| Selector         | Example                     | Description              |
| ---------------- | --------------------------- | ------------------------ |
| Universal        | `* { margin:0; }`           | Sab elements target      |
| Type             | `div {}`                    | Specific HTML tag        |
| Class            | `.menu {}`                  | Class select             |
| ID               | `#header {}`                | Unique element           |
| Descendant       | `nav ul li {}`              | Nested elements          |
| Adjacent sibling | `h1 + p {}`                 | Next sibling only        |
| General sibling  | `h1 ~ p {}`                 | All siblings after       |
| Attribute        | `[type="text"] {}`          | Elements with attribute  |
| Pseudo-class     | `a:hover {}`                | Mouse hover, focus, etc. |
| Pseudo-element   | `p::after { content:"★"; }` | Before / After           |

---

## 🔹 2. Box Model & Layout

| Property   | Example                    | Notes                             |
| ---------- | -------------------------- | --------------------------------- |
| margin     | `margin: 10px;`            | Outside spacing                   |
| padding    | `padding: 5px;`            | Inside spacing                    |
| border     | `border: 2px solid black;` | Element border                    |
| box-sizing | `box-sizing: border-box;`  | Include padding & border in width |

---

## 🔹 3. Positioning

| Property                 | Values                                        | Notes                                     |
| ------------------------ | --------------------------------------------- | ----------------------------------------- |
| position                 | static / relative / absolute / fixed / sticky | Placement control                         |
| top, right, bottom, left | `top:10px;`                                   | Works with relative/absolute/fixed/sticky |
| z-index                  | `z-index:10;`                                 | Stack order                               |

---

## 🔹 4. Flexbox (Modern Layout)

```css id="flexexample"
.container {
  display: flex;
  flex-direction: row; /* row/column */
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
```

| Property                   | Notes                                    |
| -------------------------- | ---------------------------------------- |
| flex-direction             | row, column, reverse                     |
| justify-content            | start, center, end, space-between/around |
| align-items                | start, center, stretch, baseline         |
| flex-wrap                  | nowrap / wrap / wrap-reverse             |
| flex-grow / shrink / basis | Control space allocation                 |

---

## 🔹 5. CSS Grid

```css id="gridexample"
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 10px;
}
```

| Property                    | Notes                   |
| --------------------------- | ----------------------- |
| grid-template-columns       | Column sizes            |
| grid-template-rows          | Row sizes               |
| gap / grid-gap              | Space between items     |
| grid-area                   | Name grid items         |
| justify-items / align-items | Items inside grid cells |

---

## 🔹 6. Typography

| Property       | Example                              | Notes                 |
| -------------- | ------------------------------------ | --------------------- |
| font-family    | `font-family: Arial, sans-serif;`    | Font selection        |
| font-size      | `font-size:16px;`                    | Text size             |
| font-weight    | `font-weight:bold;`                  | Boldness 100–900      |
| font-style     | `italic / normal`                    | Italics               |
| text-align     | `center / left / right / justify`    | Text alignment        |
| letter-spacing | `2px`                                | Space between letters |
| line-height    | `1.5`                                | Spacing between lines |
| text-transform | `uppercase / lowercase / capitalize` | Transform text        |

---

## 🔹 7. Colors & Backgrounds

| Property            | Example                             | Notes           |
| ------------------- | ----------------------------------- | --------------- |
| color               | `color: #333;`                      | Text color      |
| background-color    | `background-color: #f5f5f5;`        | Element bg      |
| background-image    | `background-image: url("img.jpg");` | Image bg        |
| background-size     | `cover / contain / auto`            | Image size      |
| background-position | `center / top / left`               | Image placement |
| opacity             | `0.5`                               | Transparency    |

---

## 🔹 8. Pseudo-classes & Pseudo-elements

| Selector     | Example                      | Notes                 |
| ------------ | ---------------------------- | --------------------- |
| :hover       | `a:hover {}`                 | Mouse hover           |
| :focus       | `input:focus {}`             | Input focus           |
| :first-child | `li:first-child {}`          | First child element   |
| :last-child  | `li:last-child {}`           | Last child element    |
| ::before     | `p::before { content:"★"; }` | Insert before content |
| ::after      | `p::after { content:"★"; }`  | Insert after content  |

---

## 🔹 9. Transitions & Animations

### Transition

```css id="transitionexample"
button {
  background: blue;
  transition:
    background 0.3s ease,
    transform 0.5s;
}
button:hover {
  background: red;
  transform: scale(1.1);
}
```

### Keyframe Animation

```css id="keyframeexample"
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
.box {
  animation: bounce 2s infinite;
}
```

---

## 🔹 10. Media Queries (Responsive)

```css id="mediaexample"
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

## 🔹 11. CSS Variables

```css id="variableexample"
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

## 🔹 12. Advanced Properties

| Property    | Example                              | Notes                  |
| ----------- | ------------------------------------ | ---------------------- |
| clip-path   | `clip-path: circle(50%);`            | Shapes & masks         |
| object-fit  | `object-fit: cover;`                 | Image fit inside box   |
| filter      | `filter: blur(5px) brightness(0.8);` | Image effect           |
| overflow    | `hidden / scroll / auto`             | Handle overflow        |
| cursor      | `pointer / grab`                     | Cursor style           |
| user-select | `none / text`                        | Disable text selection |

---

## 🔹 13. CSS Specificity & Important

| Rule                         | Notes                                    |
| ---------------------------- | ---------------------------------------- |
| Inline style                 | Most priority                            |
| ID selector                  | High priority                            |
| Class/attribute/pseudo-class | Medium priority                          |
| Element/pseudo-element       | Low priority                             |
| `!important`                 | Override all other rules (use sparingly) |

---

## 🔹 14. Cheat Tips

- Always use **external CSS** for maintainability
- Use **shorthand properties**: `margin: 10px 5px 15px;`
- Prefer **classes** over IDs for styling
- Use **variables** for theme colors
- Use **Flex + Grid combination** for complex layouts
- Comment your CSS: `/* Header Section */`

---

## 🔹 15. Real-world Example

```css id="realworldexample"
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: var(--main-color);
  color: white;
  padding: 15px;
  text-align: center;
}

nav ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  background: #eee;
  margin: 0;
  padding: 10px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  transition: 0.3s;
}

nav ul li a:hover {
  background-color: var(--main-color);
  color: white;
  border-radius: 5px;
}
```

---
