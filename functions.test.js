const {getEvenNumbers, createCounter, priceOfPizza} = require("./functions");

// describe("getEvenNumbers", () => {
test("test that function returns even numbers", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const expected = getEvenNumbers(numbers);
    
    expect(getEvenNumbers(numbers)).toEqual(expected); 

    })
// })

describe("createCounter", () => {
    test("test that initial count is 0", () => {
        const counter = createCounter()
        expect(counter.getCount()).toBe(0)
    })

    test("that the count incements by 1", () => {
        const counter = createCounter()
        counter.increment()
        counter.increment()
        expect(counter.getCount()).toBe(2)
    })
    test("that the count decrements by 1", () => {
        const counter = createCounter()
        counter.increment()
        counter.increment()
        counter.decrement()
        expect(counter.getCount()).toBe(1)
    })
    test("that the count resets to 0", () => {
        const counter = createCounter()
        counter.increment()
        counter.reset()
        expect(counter.getCount()).toBe(0)
    })
})

describe("priceOfPizza", () => {
test("test that function returns the sum of pizza prices", () => {
    const myOrder = {
        "pepperoni": 3,
        "veggie": 5,
        "chicken suya": 1
    }

    let price = priceOfPizza(myOrder);
   
    expect(price).toBe(35000);
    })
})