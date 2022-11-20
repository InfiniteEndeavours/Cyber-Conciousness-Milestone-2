/**
 * @jest-environment jsdom
 */

const {
    domGenerator
} = require("../passwordGen")



beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("passwords.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Password Generator functions correctly", () => {
    test("Password generated", () => {
        let passwordHTML = document.getElementById('generated-password').innerText;
        expect(document.getElementById('generated-password').innerText).toBe(passwordHTML);
    });
});