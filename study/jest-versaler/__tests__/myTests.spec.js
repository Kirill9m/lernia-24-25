const { versalerConventer } = require('../myFunctionsToTest');

describe("VersalerConventerTest", () => {
    //Test case 1

    test("Test versaler", () => {
        
        myText = "Hello world!"
        const expectedOutput2 = "HELLO WORLD!"

        expect(versalerConventer(myText)).toBe(expectedOutput2);
    });
});