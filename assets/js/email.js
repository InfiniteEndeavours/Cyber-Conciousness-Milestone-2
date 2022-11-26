function sendMail (contactForm) {
    emailjs.send("gazeEmail","template_7ks6kxp", {
        "from_name": contactForm.fullName.value,
        "from_email": contactForm.emailAddress.value,
        "message": contactForm.submission.value
    })
        .then(
            function (response) {
                console.log("Success", response);
            },
            function (error) {
                console.log("Erorr", error)
            }
        )
}