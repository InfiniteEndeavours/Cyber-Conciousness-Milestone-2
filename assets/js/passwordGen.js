/*TODO: Allow user to choose password length
*TODO: Add version with event listener */

let generator = () => {
    let length = 32;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456790-_!@£$%^&*()#';
    let genPassword = [];
    while (genPassword.length <= length) {
        let randomInt = Math.floor(Math.random() * 76);
        genPassword.push(characters[randomInt]);
    }
    return genPassword.join("");
}

console.log("Non-linked Generator: " + generator());