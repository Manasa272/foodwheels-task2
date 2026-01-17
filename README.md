# Internship Task 2 – FoodWheels

## Home Page Screenshot
![FoodWheels Home Page](./src/assets/homepage.png)

---

## Objective
Recreate **Internship Task-1** using a **strict mandatory tech stack** with a templating engine and build system.

---

## Tech Stack Used
- **Templating Engine:** Nunjucks  
- **Bundler / Build Tool:** Vite  

---

## Folder Structure

- `docs/`  
  Contains the compiled HTML output generated after build.  

  > The `docs/` folder is used instead of `dist/` to enable GitHub Pages live preview.

- `src/templates/`  
  Contains all Nunjucks template files (`.njk`).

- `src/assets/`  
  Contains CSS, JavaScript, images, and screenshots.

---

## How to Run

Run the following commands step-by-step in your terminal:

```bash
# Install all dependencies
npm install

# Build the project
npm run build

# Open the output file in browser

# Option 1: Open manually
# docs/index.html

# Option 2: macOS / Linux
open docs/index.html
---

## Output
After running the build command, the project generates a static HTML file inside the `docs/` folder.  
The generated output accurately matches the **Internship Task-1** document.

The build process uses **Nunjucks templates** with the **Vite build system**, ensuring that all original elements are preserved, including:

- Page formatting  
- Emojis  
- Styling and layout  
- Clickable links  

The final output file can be viewed by opening `docs/index.html` in a web browser.

---

## Live Preview
The project is deployed using **GitHub Pages** for live access.

You can view the hosted version of the project at the following link:  
👉 https://manasa272.github.io/foodwheels-task2/

# Option 3: Windows PowerShell
start docs/index.html
