// Credit to ChatGPT for assistance and code comments.
// Add an event listener to the element with the id "myButton"
document.getElementById("myButton").addEventListener("click", async () => {
  // Use dynamic import to asynchronously load the module "./greeting.js"
  const greeting = await import("./greeting.js");
  
  // Call the greet function exported from greeting.js
  greeting.greet();
});
