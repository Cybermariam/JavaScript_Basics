<!-- SUMMARY OF THE LINKS -->

Control Flow Statements

In JavaScript, there are three main types of control flow statements:
if/else statements
switch statements
loops.

If/Else Statements

If/else statements are used to execute a block of code if a certain condition is true, and a different block of code if the condition is false.

Switch Statements
Switch statements are used to execute a block of code based on the value of a variable or expression.

Loops
Loops are used to execute a block of code multiple times, based on a certain condition. There are two main types of loops in JavaScript: for loops and while loops.

While Loops
A while loop simply repeats itself while something is true. Theoretically a while loop can loop forever. It continues until the condition is false.

JavaScript array length

The length property returns the length of an array :
Example : const fruits = [“Banana",“Orange" , “Apple" , “Mango"]
let size = fruits.length

JavaScript Array to string()

The JavaScript method to string () converts an array to a string of (comma separated) array values
The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator.

Popping and Pushing
JavaScript Array pop()
The pop() method removes the last element from an array.

JavaScript Array push()
The push() method adds a new element to an array (at the end)

Shifting Elements
Shifting is equivalent to popping, but working on the first element instead of the last

JavaScript Array shift()
The shift() method removes the first array element and "shifts" all other elements to a lower index.

JavaScript Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

Changing Elements
Array elements are accessed using their index number,Array indexes start with 0:
[0] is the first array element
[1] is the second
[2] is the third ...

JavaScript Array length
The length property provides an easy way to append a new element to an array.
JavaScript Array delete()

Array elements can be deleted using the JavaScript operator delete. Using delete leaves undefined holes in the array.Use pop() or shift() instead

Merging (Concatenating) Arrays
The concat() method creates a new array by merging (concatenating) existing arrays.

The concat() method can take any number of array arguments.

Flattening an Array
Flattening an array is the process of reducing the dimensionality of an array. The flat() method creates a new array with sub-array elements concatenated to a specified depth.

Splicing and Slicing Arrays
The splice() method adds new items to an array.
The slice() method slices out a piece of an array.

Automatic toString()
JavaScript automatically converts an array to a comma separated string when a primitive value is expected.
This is always the case when you try to output an array.

JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

Function parameters are listed inside the parentheses () in the function definition.

A Function arguments are the values received by the function when it is invoked.Inside the function, the arguments (the parameters) behave as local variables.

Function Return

When JavaScript reaches a return statement, the function will stop executing.
If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

The () Operator
The () operator invokes (calls) the function. Accessing a function without () returns the function and not the function result.

Functions Used as Variable Values
Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

Local Variables
Variables declared within a JavaScript function, become LOCAL to the function.
Local variables can only be accessed from within the function.

FUNCTION
In JavaScript, functions are first-class objects, because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object.

Return value

By default, if a function's execution doesn't end at a return statement, or if the return keyword doesn't have an expression after it, then the return value is undefined. The return statement allows you to return an arbitrary value from the function.

Passing arguments

Arguments are always passed by value and never passed by reference. This means that if a function reassigns a parameter, the value won't change outside the function.

Defining functions
JavaScript has four kinds of functions:

Regular function: can return anything; always runs to completion after invocation
Generator function: returns a Generator object; can be paused and resumed with the yield operator

Async function: returns a Promise; can be paused and resumed with the await operator
Async generator function: returns an AsyncGenerator object; both the await and yield operators can be used

The Function() constructor, function expression, and function declaration syntaxes create full-fledged function objects, which can be constructed with new.
The function declaration creates functions that are hoisted.

The arrow function and Function() constructor always create anonymous functions, which means they can't easily call themselves recursively.

The Function() constructor cannot access any local variables , it only has access to the global scope.

For function expressions, there is a distinction between the function name and the variable the function is assigned to. The function name cannot be changed, while the variable the function is assigned to can be reassigned.

Functions defined by function expressions and function declarations are parsed only once, while a function defined by the Function constructor parses the string passed to it each and every time the constructor is called.

Function parameters
Each function parameter is a simple identifier that you can access in the local scope.

There are three special parameter syntaxes:
Default parameters allow formal parameters to be initialized with default values if no value or undefined is passed.

The rest parameter allows representing an indefinite number of arguments as an array.

Destructuring allows unpacking elements from arrays, or properties from objects, into distinct variables.

The arguments object
You can refer to a function's arguments within the function by using the arguments object.

Getter and setter functions
You can define accessor properties on any standard built-in object or user-defined object that supports the addition of new properties

Get: Binds an object property to a function that will be called when that property is looked up

Set: Binds an object property to a function to be called when there is an attempt to set that property.

Block-level functions
In strict mode, functions inside blocks are scoped to that block. Prior to ES2015, block-level functions were forbidden in strict mode.

Block-level functions in non-strict code
In non-strict code, function declarations inside blocks behave strangely.
A safer way to define functions conditionally is to assign a function expression to a variable

Determining whether a function exists
You can determine whether a function exists by using the typeof operator.

FUNCTION
Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

Function Declaration
To create a function we can use a function declaration
The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated, empty in the example above, we’ll see examples later) and finally the code of the function, also named “the function body”, between curly braces.

Local variables
A variable declared inside a function is only visible inside that function.

Outer variables
A function can access an outer variable as well. The outer variable is only used if there’s no local one.
If a same-named variable is declared inside the function then it shadows the outer one.

Parameters
A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).

An argument is the value that is passed to the function when it is called (it’s a call time term).

Default values

If a function is called, but an argument is not provided, then the corresponding value becomes undefined.Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration.

Returning a value
A function can return a value back into the calling code as the result.
The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code.

Function Naming
A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
A function is an action, so function names are usually verbal.
