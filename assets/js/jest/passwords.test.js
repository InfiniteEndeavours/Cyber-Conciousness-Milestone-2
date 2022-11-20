/**
 * @jest-environment jsdom
 */

const {
    password
} = require("../passwordGen")


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("passwords.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("Password Generator functions correctly", () => {
    test("Password is generated on DOM load", () => {
        expect("value" in password).toBe(true);
    })
    test("Password is greater than or equal to minimum characters (16)", () => {
        let generatedPassword = password.value;
        expect(generatedPassword.length).toBeGreaterThanOrEqual(16)
    })
    test("Password is changed on button click", () => {
        let oldPass = {};
        oldPass.password = password.value;
        let button = document.getElementById("generate-password");
        button.click();
        let newPass = {};
        newPass.password = password.value;
        expect(newPass).not.toMatchObject(oldPass);
    })
});