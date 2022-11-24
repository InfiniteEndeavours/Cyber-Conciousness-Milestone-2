function returnData(email, callback) {
    let xhr = new XMLHttpRequest();
    let url = `https://infiniteendeavours.co.uk:7200/https://haveibeenpwned.com/api/v3/breachedaccount/${email}?truncateResponse=false`
    xhr.open("GET", url);
    xhr.setRequestHeader("hibp-api-key", "b887c4fdc6fc4a3eb2f43518d10bdf16");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(JSON.parse(this.responseText));
        } else if (this.readySate === 4 && this.status === 404) {
            callback(this.status)
        }
    }
}

function createTableHeaders(item) {
    let headers = [];
    // Cycle through each object key and push into headers array
    Object.keys(item).forEach(function (key) {
        if (key === "Name") {
            headers.push(`<th scope="col">Name</th>`)
        } else if (key === "BreachDate") {
            headers.push(`<th scope="col">Breach Date</th>`)
        } else if (key === "IsVerified") {
            headers.push(`<th scope="col">Verified</th>`)
        } else if (key === "Description") {
            headers.push(`<th scope="col">${key}</th>`)
        }
    })
    return `<tr>${headers}</tr>`
}

function displayBreach(email) {
    let rows = [];
    let tableDiv = document.getElementById("breachTable");
    returnData(email, function (data) {
        if (data === 404) {
            window.alert("Either the Email address you have entered is invalid, or it hasn't been involved in a breach!")
        }
        let headers = createTableHeaders(data[0]);
        data.forEach(function (obj) {
            let tableRow = [];
            Object.keys(obj).forEach(function (key) {
                if (key === "Name") {
                    tableRow.push(`<td>${obj[key].toString()}</td>`);
                } else if (key === "BreachDate") {
                    tableRow.push(`<td>${obj[key].toString()}</td>`);
                } else if (key === "IsVerified") {
                    tableRow.push(`<td>${obj[key].toString()}</td>`);
                } else if (key === "Description") {
                    tableRow.push(`<td>${obj[key].toString()}</td>`);
                }

            })
            rows.push(`<tr>${tableRow}</tr>`)
        })

        tableDiv.innerHTML = `
        <table class="table table-hover table-dark">
            ${headers}${rows}
        </table>`
    })

}

const form = document.getElementById("email-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let inputField = document.getElementById("emailAddress").value;
    let emailAddress = inputField.replace(/\s/g, '');
    displayBreach(emailAddress);
})