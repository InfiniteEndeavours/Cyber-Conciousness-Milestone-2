document.addEventListener("DOMContentLoaded", function () {

    let passwordParagraph = document.getElementById("generated-password");
    password.generate();
    passwordParagraph.textContent = password.value;

    let generatorButton = document.getElementById('generate-password');
    generatorButton.addEventListener('click', function () {
        password.generate();
        passwordParagraph.textContent = password.value;
    });
});

let password = {
    value: "",
    length: 32,
    characters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456790-_!@£$%^&*()#',
    generate: function () {
        let generatedPassword = [];
        while (generatedPassword.length <= this.length) {
            let random = Math.floor(Math.random() * 76);
            generatedPassword.push(this.characters[random]);
        }
        this.value = (generatedPassword.join(""));
    }
};
// Export for jest testing - to be removed before deployment
module.exports = {
    password
}
