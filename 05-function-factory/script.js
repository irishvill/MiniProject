// Starter examples (function output expectations are provided in README)

// Start coding here...
 const makeMultiplier = factor => number => number * factor;

    const double = makeMultiplier(2);
    const triple = makeMultiplier(3);

    const result1 = `double(5) = ${double(5)}`;  // 10
    const result2 = `triple(4) = ${triple(4)}`;  // 12
    document.getElementById("multiplierOutput").innerHTML = `${result1}<br>${result2}`;

    // Task 2: makeGreeter
    const makeGreeter = greeting => name => `${greeting}, ${name}!`;

    const sayHi = makeGreeter("Hi");
    const sayHello = makeGreeter("Hello");

    const greet1 = sayHi("Mia");        // "Hi, Mia!"
    const greet2 = sayHello("Liam");    // "Hello, Liam!"
    document.getElementById("greeterOutput").innerHTML = `${greet1}<br>${greet2}`;
