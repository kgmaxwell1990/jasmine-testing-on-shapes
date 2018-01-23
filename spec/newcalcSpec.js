describe("Extra calculator functions", function() {
    describe("Area function", function() {
        it("should return an error if a number is not entered", function() {
            expect(areaOfCircle("yo")).toBe("This is not a number");
        });
        it("should return an error if a number <=0 is entered", function() {
            expect(areaOfCircle(-1)).toBe("You cannot do that");
        });
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
    });
    
    describe("Square Root function", function() {
        it("should return an error if a number is not entered", function() {
            expect(squareRoot("yo")).toBe("This is not a number");
        });
        it("should return an error if a number <=0 is entered", function() {
            expect(squareRoot(0)).toBe("You cannot do that");
        });
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
    });
    
    describe("Square function", function() {
        it("should return an error if a number is not entered", function() {
            expect(squareMe("yo")).toBe("This is not a number");
        });
        it("should return an error if a number <=0 is entered", function() {
            expect(squareMe(0)).toBe("You cannot do that");
        });
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
        it("should return the a number squared", function() {
            expect(squareMe(9)).toBe(81);
        });
    });

    describe("Cube function", function() {
        it("should return an error if a number is not entered", function() {
            expect(cubeMe("yo")).toBe("This is not a number");
        });
        it("should return an error if a number <=0 is entered", function() {
            expect(cubeMe(0)).toBe("You cannot do that");
        });
        it("should return 27 as the cube of 3", function() {
            expect(cubeMe(3)).toBe(27);
        });
        it("should return the a number squared", function() {
            expect(cubeMe(4)).toBe(64);
        });
    });
    
    describe("areaOfTriangle", function(){
        it("should return an error if a number is not entered", function() {
            expect(areaOfTriangle("yo", "hello")).toBe("This is not a number");
        });
        it("should return an error if a number <=0 is entered", function() {
            expect(areaOfTriangle(0, -1)).toBe("You cannot do that");
        });
        it("should return an area of 6 if the base is 3 and the height is 4", function() {
            expect(areaOfTriangle(3, 4)).toBe(6);
        });
    });
    
    // describe("cosineOfTriangle", function(){
    //     it("should return an error if a number is not entered", function() {
    //         expect(cosineOfTriangle("yo", "hello")).toBe("This is not a number");
    //     });
    //     it("should return an error if a number <=0 is entered", function() {
    //         expect(cosineOfTriangle(0, -1)).toBe("You cannot do that");
    //     });
    //     it("should return an area of 6 if the base is 3 and the height is 4", function() {
    //         expect(cosineOfTriangle(3, 4)).toBe(6);
    //     });
    // });
    
    describe("yearsCalc", function() {
        
    })

});