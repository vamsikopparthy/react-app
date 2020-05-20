import { add } from "."

describe("add()", () => {
    it("should add two numbers", () => {
       let expectedOutput = add(1,2);
       let actualOutput = 3;
       expect(expectedOutput).toBe(actualOutput);
    //   expect({ a: }).toEqual({ b: 2 }) 
    //   expect(add{1,2}).toEqual({ b: 5 })
    });
    it("should contain arrays",() => {
        expect(['Alice', 'Bob', 'Eve']).toContain('Alice');
    });
    it("should contain numbers",() => {
       expect(1).toBeLessThanOrEqual(1)
    });
    it("should matching the string",() => {
        expect(['pizza', 'coffee']).toEqual([expect.stringContaining('zz'), expect.stringMatching(/ff/)]);
    })
    it("should matches",() => {
        expect({ a: undefined, b: 2 }).not.toStrictEqual({ b: 2 })
    })
    it("should be object matching",() => {
        expect({ a: 1, b: 2 }).toMatchObject({
         a: expect.any(Number),
         b: expect.any(Number)
        })
    })
    
 //   it("should be promise", () => {
        test('resolve to lemon', () => {
  expect.assertions(1)
  // Make sure to add a return statement
  return expect(Promise.resolve('lemon')).resolves.toBe('lemon')
  return expect(Promise.reject('octopus')).rejects.toBeDefined()
  return expect(Promise.reject(Error('pizza'))).rejects.toThrow()
})


       test('resolve to lemon', () => {
  return expect(Promise.resolve('lemon')).resolves.toBe('lemon')
  return expect(Promise.reject('octopus')).rejects.toBeDefined()
  return expect(Promise.reject(Error('pizza'))).rejects.toBeDe
       })

    
    //it("should be async await",() => {
        test('resolve to lemon', async () => {
  expect.assertions(2)
  await expect(Promise.resolve('lemon')).resolves.toBe('lemon')
  await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus')
//})

  //  })
    
    //it("should be async tests",() => {
//        test('async test', () => {
 // expect.assertions(3) // Exactly three assertions are called during a test
  // OR
  //expect.hasAssertions() // At least one assertion is called during a test

  // Your async tests
//})

//})

  //it("should be mock tests",() => {
  //    test('call the callback', () => {
//   const callback = jest.fn()
//   fn(callback)
//   expect(callback).toBeCalled()
//   expect(callback.mock.calls[0][1].baz).toBe('pizza') // Second argument of the first call
//   })

  })
    
   
    


});