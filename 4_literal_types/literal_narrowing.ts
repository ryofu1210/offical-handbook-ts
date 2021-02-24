// We're making a guarantee that this variable
// helloWorld will never change, by using const.

// So, TypeScript sets the type to be "Hello World", not string
const helloWorld = "Hello World";

// On the other hand, a let can change, and so the compiler declares it a string
let hiWorld = "Hi World";