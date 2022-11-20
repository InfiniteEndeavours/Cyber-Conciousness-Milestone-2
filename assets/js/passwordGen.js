document.addEventListener("DOMContentLoaded", function () {
    let passwordParagraph = document.getElementById("generated-password");
    passwordParagraph.textContent = domGenerator();
    console.log('test')
});

let domGenerator = () => {
    let length = 32;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456790-_!@£$%^&*()#';
    let genPassword = [];
    while (genPassword.length <= length) {
        let randomInt = Math.floor(Math.random() * 76);
        genPassword.push(characters[randomInt]);
    }
    return genPassword.join("");
};
