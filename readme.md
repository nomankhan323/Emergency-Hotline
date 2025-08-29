1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById- when selecting by *id*.  
getElementsByClassName- for multiple elements with same class.  
querySelector/querySelectorAll- when you need *flexibility with CSS selectors*.


2. How do you create and insert a new element into the DOM?
Answer: *`document.createElement("tagName")`* to create a new element.
 *text/content* using `.textContent` or `.innerHTML`.
 *attributes or classes* using `.setAttribute()` or `.classList.add()`.
  Insert it into the DOM using methods like:
    `appendChild()`
    `prepend()`
    `insertBefore()`


3. What is Event Bubbling and how does it work?
Answer: Event Bubbling is the process where an event starts from the target element and bubbles up to its parent elements in the DOM tree.

Example: If you click a button inside a div, the event first fires on the button, then moves to the parent div, then the body, and so on.


4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation means attaching a single event listener to a parent element instead of adding listeners to each child.

It works because of event bubbling.

Useful:
Improves performance (fewer event listeners).
Automatically handles dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() → Prevents the default behavior of an element.
Example: Stop a form from submitting or stop a link from opening.

stopPropagation() → Stops the event from bubbling up to parent elements.
Example: Click on a button inside a div but prevent the div's click event from firing.
