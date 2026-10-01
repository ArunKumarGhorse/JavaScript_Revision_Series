console.log("Start");       // 1. Synchronous → Call Stack → Execute

setTimeout(() => {
console.log("This is Async Task");
}, 2000);                   // 2. Timer registered → Node.js/libuv handles it

console.log("End");         // 3. Synchronous → Call Stack → Execute

// After 2 seconds:
// Timer completes
// → Callback becomes ready
// → Event Loop checks Call Stack
// → Callback moves to Call Stack
// → "This is Async Task" executes

// Output:

// Start
// End
// This is Async Task
