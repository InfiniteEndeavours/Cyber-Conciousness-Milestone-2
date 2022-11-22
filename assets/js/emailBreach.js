
// JavaScript for updating DOM with information requested from
let XMLHttpRequest = require('xhr2');

let returnData = (email, callBack) => {
    let xhr = new XMLHttpRequest();
    let url = `https://haveibeenpwned.com/api/v3/breachedaccount/${email}?truncateResponse=false`
    xhr.open("GET", url);
    xhr.setRequestHeader("hibp-api-key", "afda78263475430794e5accd501be787");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callBack(JSON.parse(this.responseText));
        }
    }
}

function dataPrint (email) {
    let result = []
    returnData(email, function (data) {
        result.push(data.result);
    })
    console.log(result);
}

dataPrint("ethanpitt2001@gmail.com");