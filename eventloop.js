const bar = () => console.log('bar');
const baz = () => console.log('baz');

const testEventLoop = () => {
    console.log('foo');
    setTimeout(bar,0);
    baz();
}



testEventLoop();


//stack frames on the execution stack is given priority over message queue by the event loop
//testeventloop
//testeventloop > console.log('foo)
//testeventloop > setTimeout
//testeventloop
//test eventloop > baz
//test eventloop

//setTimer starts the browser or node.js 'timer'. Once this expires the callback is put into the message queue
//Job queue vs Message queue
//Fast pass vs regular line
//Promises use the Job queue to execute as soon as possible instead of being added to the end of the execution stack

//what is the event loop
//1 stack
//2 Web API -- usually outside of the javascript runtime environment?
//provides us with apis for setTimeout and xhrrequests
//3)these APIs appear to return their callbacks to the message queue, 
//4) Event loop is code that checks if the stack is empty first and then pushes FIFO
////style to the stack
//setTimeout is not time until execution, it is MIN time until execution
