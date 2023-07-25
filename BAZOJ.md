# Bazoj #

Bazoj is a set of libraries with various functionalities, including creating APIs, authentication, cryptographic functions, database connections, and field validation.
Everything is developed using functional and minimalist tools, aiming to be as simple and lightweight as possible.
I aim to facilitate my own daily personal work with simple wrappers on awesome tools.
It is more of a custom toolset than a tool.

Feel free to add your own tools too! This toolkit must improve! 🛠️

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

* Each must repo do single task.
* Always keep it basic, simple and lightweight.
* Avoid syntactic sugar.
* Always Use single exit point (just one `return` per function).
* Always wirte cleanest code posible.
* Use PascalCase for class names. Use camelCase everywhere else.
* Indentation should always be 2-spaces-wide tabs.
* Keep lines below 100 characters whenever posible.
* Functions should always return if they worked and any results or errors.
USE AS MODEL:
```
// out.ok: boolean value showing if everything is ok.
// out.load: If ok, is the function output, on error, is ARRAY of errors.
function ABC () {
	let out = { ok: false, load: null };
	// do things;
	return out;
}
```
* Write tests: Contribute by writing tests. (I'm not good at it, yet.)
* Code review: Review and suggest improvements to the code.
