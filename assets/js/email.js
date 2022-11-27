document.getElementById('contact-form').addEventListener('submit', function(event) {
    emailjs.sendForm('gazeEmail', 'template_7ks6kxp', this)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
});