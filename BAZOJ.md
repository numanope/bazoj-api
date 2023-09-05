# Bazoj #

Bazoj is a set of libraries (mostly wrappers) with various functionalities, including creating APIs, authentication, cryptographic functions, database connections, and field validation.
Everything is developed using functional and minimalist tools, aiming to be as simple and lightweight as possible.
I aim to facilitate my own daily personal work with simple wrappers on awesome tools.
It is more of a custom toolset than a tool.

This toolkit must improve! 🛠️

## How do I get set up? ##

Install the specific wanted tool using

```
npm install <package name>
```
and import in the code using

```
import <package name> from '<package name>';
// or
const <local name> = require('<package name>');
```

## Contribution guidelines ##

* Each must repository do a single task.
* Aim for simplicity of use.
* Keep it basic, simple and lightweight.
* Avoid syntactic sugar.
* Exception handling is for exceptions.
* Exception handling should use "try-catch" when possible, else use "return codes".
* Use single exit point (just one `return` per function).
* Write cleanest code posible.
* Use PascalCase for class names. Use camelCase everywhere else.
* Indentation should always be tabs.
* Keep lines below 100 characters whenever posible.

Also helps:
* Write tests: Contribute by writing tests. (I'm not good at it, yet.)
* Code review: Review and suggest improvements to the code.
* Feel fre to fix what I mess... This is all about improvement. :]
