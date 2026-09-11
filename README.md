# 🚀 DevStack — Build Your Ideal Development Stack

A modern, interactive, and responsive web application designed for developers to explore technology options, compare them, and visually build their customized development stack.

---

## 💻 Tech Stack Used

- **Frontend Library:** React.js (ES6+)
- **Styling:** Tailwind CSS & DaisyUI
- **Build Tool:** Vite
- **Data Source:** Local JSON (`data.json`)
- **Notifications:** React-Toastify

---

## ✨ Key Features

1. 🧰 **Interactive Tech Stack Builder:** Users can browse technologies, add them to their personal stack with duplicate prevention, and remove items individually or clear all at once.
2. ⚡ **Dynamic Data Loading with Spinner:** Fetches technology data dynamically from a local JSON file using React hooks, displaying a loading state until the data is fully loaded.
3. 📱 **Responsive & Glassmorphism Navigation:** Features a fixed, sticky navbar with mobile hamburger menu, smooth scrolling, and a unified brand gradient theme.

---

## ❓ React Questions & Answers

### Question 1: What is JSX, and why is it used in React?
**Answer:**  
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside JavaScript code. It is used in React because it makes component templates visually clear, easier to write, and simpler to maintain compared to traditional JavaScript DOM methods.

---

### Question 2: What is the difference between props and state?
**Answer:**  
- **Props (Properties):** Read-only data passed down from a parent component to a child component. They cannot be modified by the receiving child component.
- **State:** Internal, mutable data managed within a component itself. When state changes, React re-renders the component to reflect the updated UI.

---

### Question 3: What does the useState hook do, and where did you use it in this project?
**Answer:**  
The `useState` hook is used to declare state variables in functional components. It returns the current state value and a function to update it. In this project, I used `useState` in `Technologies.jsx` to manage the list of technologies (`techData`), the selected items in the sidebar (`stack`), and the loading indicator (`isLoading`).

---

### Question 4: What does the useEffect hook do, and why did you need it to load the JSON data?
**Answer:**  
The `useEffect` hook handles side effects in functional components, such as fetching data or interacting with the DOM. I used it to fetch the `data.json` file when the component first renders on the screen, updating the state once the data is fetched successfully.

---

### Question 5: Why does every item in a .map() list need a unique key prop?
**Answer:**  
The `key` prop helps React track and identify which items in a list have been added, updated, or removed. Giving each list item a unique `key` optimizes DOM re-rendering performance and prevents bugs when updating dynamically generated elements.

---

### Question 6: What is conditional rendering? Show one place you used it.
**Answer:**  
Conditional rendering is the ability to show different UI elements based on specific logical conditions. In this project, I used conditional rendering in the "Your Stack" sidebar to show `"Your stack is empty."` when `stack.length === 0`, and render the list of selected technology cards when items exist in the stack.

---

### Question 7: How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**  
- **Parent to Child:** Data is passed down from a parent component to a child component using **props**.
- **Child to Parent:** The parent passes a callback function down to the child as a prop. When an event occurs in the child, it invokes that callback function and passes the necessary data back up to the parent as arguments.