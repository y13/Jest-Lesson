import { isPythagoras } from "../src/segundo";

describe("testing isPythagoras function", () => {
    test("catA = 4, catB = 3, hip = 5", () => {
        expect(isPythagoras(4,3,5)).toEqual(true);
    });

    test("catA = 2, catB = 3, hip = 5", () => {
        expect(isPythagoras(2,3,5)).toEqual(false);
    });
    
    test("catA = 4, catB = 1, hip = 5", () => {
        expect(isPythagoras(4,3,5)).toEqual(true);
    });    
});