function getMoney() {
    let url = "https://api.youneedabudget.com/v1/budgets/dc2b1d2d-7067-4c07-a390-dd69a3c9270f";
    let token = "?access_token=29a6f9048984b7daa8df477b60b012a7d0daa3cab4b502fe533268caa3ee00b8";

    const arrow = '<i class="material-icons">arrow_drop_down</i>'

    fetch(url + token)
        .then((response) => {
            return response.json();
        })

    .then((myJson) => {

        let noAcc = myJson.data.budget.accounts.length;
        let accNames = [];
        let balance = [];
        let totalMoney = 0;
        for (i = 0; i < noAcc; i++) {
            balance[i] = myJson.data.budget.accounts[i].balance / 1000;
            accNames[i] = myJson.data.budget.accounts[i].name;
            var newA = document.createElement("p");
            newA.innerHTML = '<b>' + accNames[i] + '</b> ' + balance[i] + " €";

            var accContainer = document.getElementById("accounts");
            accContainer.appendChild(newA);
            if (i < noAcc - 1) {
                totalMoney += balance[i];;
            }


        }


        document.getElementById('total-money').innerHTML = totalMoney.toFixed(2) + ' €' + arrow;

    })



}

getMoney()

function details() {
    var accContainer = document.getElementById('accounts');
    accContainer.style.maxHeight = '40vh';
    console.log("ok")
}

//WORK ON THIS LATER!!
//
//

/*const id = '1ff0569da244e1b77d57ddda427ae63d29588ea79f75c081a7753554672bee30';
const sec = '6c7d7d72fb14c11dba3d5a19d2ffe7809964c7863c9112a2b5228d9fe1642087';
const URI = "http://127.0.0.1:5500/"
const authURL = 'https://app.youneedabudget.com/oauth/authorize?client_id=' + id + '&redirect_uri=http://127.0.0.1:5500&response_type=code'


console.log(authURL)

let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
let code = params.get('code')

console.log(code);

fetch('http://app.youneedabudget.com/oauth/token?client_id=1ff0569da244e1b77d57ddda427ae63d29588ea79f75c081a7753554672bee30&client_secret=6c7d7d72fb14c11dba3d5a19d2ffe7809964c7863c9112a2b5228d9fe1642087&redirect_uri=http://127.0.0.1:5500/&grant_type=authorization_code&code=7fb1edaff771733b2a657c68bcc0ece19caabfb1c6b81fd4d8683d867489d34a', {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then((response) => {
        return response.json();
    })

.then((myJson) => {

    let noAcc = myJson.data.budget.accounts.length;
    let accNames = [];
    let balance = [];

    for (i = 0; i < noAcc; i++) {
        balance[i] = myJson.data.budget.accounts[i].balance / 1000;
        accNames[i] = myJson.data.budget.accounts[i].name;
        var newA = document.createElement("h1");
        newA.innerHTML = accNames[i];

        var newP = document.createElement("P");
        newP.innerHTML = balance[i];

        document.body.appendChild(newA);
        document.body.appendChild(newP);
    }

    console.log(balance);

    console.log(accNames);
})*/