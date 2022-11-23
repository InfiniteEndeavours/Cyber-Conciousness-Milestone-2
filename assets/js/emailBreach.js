function returnData(email, callback) {
    let xhr = new XMLHttpRequest();
    let url = `https://cors-anywhere.herokuapp.com/https://haveibeenpwned.com/api/v3/breachedaccount/${email}?truncateResponse=false`
    xhr.open("GET", url);
    xhr.setRequestHeader("hibp-api-key", "b887c4fdc6fc4a3eb2f43518d10bdf16");
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(JSON.parse(this.responseText));
        }

    }
}

function createTableHeaders(item) {
    let headers = [];
    // Cycle through each object key and push into headers array
    Object.keys(item).forEach(function (key) {
        if (key === 'Name' || key === 'BreachDate') {

        }
    })
    return `<tr>${headers}</tr>`
}

function dataPrint(email) {
    let rows = [];
    let tableDiv = document.getElementById("breachTable");
    returnData(email, function (data) {
        let headers = createTableHeaders(data[0]);
        tableDiv.innerHTML = `
        <table>
            <thead>${headers}</thead>
            <tbody>${rows}</tbody>
        </table>`
    })

}

dataPrint("ethanpitt2001@gmail.com");