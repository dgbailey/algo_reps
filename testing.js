//1)
//manual __mocks__ are helpful in @testing-library/react for replicating side effects 
//from node modules such as axios

//2)resting-library/react  depends on "@testing-library/jest-dom": "^4.1.0", "@testing-library/react": "^9.1.4",

//3) jest .fn() provides helpful additional methods for controling specific aspects of your test 

//4) waitForElement is useful when testing conditionally rendered JSX

//5) read https://medium.com/javascript-scene/rethinking-unit-test-assertions-55f59358253f

//6)Test runner vs Assertion library.  Jest has it's own assertion library

//7) Component testing , unit testing, integration testing, snapshots(subtype of component testing)
//8) Jest will look inside of a __tests__ folder for with 

//9) chaining matchers is possible, .not.toBe()
//10) Arrange , act , assert -- most tests should follow these sections, write tests to fail

/*11) describe('test, ()=>{
    helps to organize code
})*/    

//12) it.skip() skipping assertions , describe.only()