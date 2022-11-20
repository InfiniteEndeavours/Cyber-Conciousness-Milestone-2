let passwordParagraph = document.getElementById("generated-password");

document.addEventListener("DOMContentLoaded", function () {
    passwordParagraph.textContent = domGenerator();
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

let generatorButton = document.getElementById('generate-password');
generatorButton.addEventListener('click', function () {
    passwordParagraph.textContent = domGenerator();
});

// Export for jest testing - to be removed before deployment
module.exports = {
    domGenerator
}
