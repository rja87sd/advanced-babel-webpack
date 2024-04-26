
document.getElementById("myButton").addEventListener("click", async () => {
  const greeting = await import("./greeting.js");
  greeting.greet(); // Call the exported function from greeting.js
});
