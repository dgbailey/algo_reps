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