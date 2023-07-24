# README #

### Bazoj ###

Bazoj is a set of libraries with various functionalities, including creating APIs, authentication, cryptographic functions, database connections, and field validation.
Everything is developed using functional and minimalist tools, aiming to be as simple and lightweight as possible.
I aim to facilitate my own daily personal work with simple wrappers on awesome tools.
It is more of a custom toolset than a tool.

Feel free to add your own tools too! This toolkit must improve! 🛠️


### What is this repository for? ###

* Bazoj - A collection of simple functionalities for web development.
* Version: 0.0.1


### How do I get set up? ###

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

### Contribution guidelines ###

* Always keep it basic, simple and lightweight.
* Avoid syntactic sugar.
* Always Use single exit point (just one return per function).
* Clean code wherever posible, and useCamelCaseEverywhere.
* Indentation should always be 2-spaces-wide tabs
* Functions should always return if they worked and any results or errors.
USE AS MODEL:
```
// out.ok: `true` if everything was ok.
// out.load: If ok, is the function output, on error, is ARRAY of errors.
function ABC () {
	let out = { ok: false, err: null };
	// do things;
	return out;
}
```

* Write tests: Contribute by writing tests. (I'm not good at it, yet.)
* Code review: Review and suggest improvements to the code.
