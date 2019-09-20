///
(x,y) => x + y

//1) history lambda calc only supports one arg
//the above is equivalent to 
//This transformation from an n-ary function to a series of unary
//functions is known as currying.

x => y => x + y

//2) const compose
const compose = (f,g) => x => f(g(x))

const double = x => x * 2

const plusOne = x => x + 1

// console.log(compose(double,plusOne)(2))



/*3)When a function is defined inside another function,
it has access to the variable bindings in the outer function, even after the outer function
exits.*/


/*4) A const object can’t be reassigned to refer to a completely different object, but the object it refers
to can have its properties mutated*/

const max = (...args) => {
    let currentMax = args[0]
    for(i = 1; i < args.length; i++){
        if(args[i] > currentMax){
            currentMax = args[i]
        }
    }
    return currentMax
}
let a = [2,4,56,7,3443,6,6,7,45,-1,3,44444,34,34]
console.log(max(...a))

//5)
// 1 const double = x => x * 2; can be replaced with double(2) can be replaced with 4, if not, it is no longer pure and has doesn not have referential transparency

//6
/*When pure functions are used for view state updates, you can check to see whether or not a view
should be rerendered by comparing the previous state to the new state.*/

//7) remember vars assigned with let can be reassigned.  this is not the case with const.  you cannot have two let or consts with the same name. both are block scoped

//8) Destructuring example with reducer
// const myReducer = (state = {}, action = {}) => {
//     2 const { type, payload } = action;
//     3 switch (type) {
//     4 case 'FOO': return Object.assign({}, state, payload);
//     5 default: return state;
//     6 }
//     7

//9) renaming via destructure
// const { blop: bloop } = blep;
// 2 bloop; // 'blop'
// Read: Assign blep.blop as bloop


//10)cool composition pattern
/*hen uses reduceRight() to iterate right-to-left over each function, f, in fns, and apply it in turn to
the accumulated value, y.*/
const comp = (...fns) => x => fns.reduceRight((y,f) => f(y),x)

const xTwo = x => x * 2
const xOne = x => x + 1

const h = comp(xTwo,xOne)
// console.log('comp',h(2))

const tr = (x,y,z) => x + y + z



//11) pipe is another cool utility combining compose and trace utilities 

const trace = label => value =>{ console.log(`${label}:${value}`);return value}

const pipe = (...funcs) => x => funcs.reduce((y,f) => f(y),x)

const attempt = pipe(xTwo,trace('xTwo'),xOne,trace('xOne'))

attempt(20)