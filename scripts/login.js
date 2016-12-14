"use strict";
var login = prompt('enter login');
if (login == 'admin') {
    var password = prompt('enter secret word');
    if (password == 'black master') {
        alert('you may pass')
    }
    else if (password == null) {
        alert('login cancelled');
    }
    else {
        alert('you shall not pass');
    }
}














else {
    if (login == null) {
        alert('login cancelled');
    }
    else {
        alert('you shall not pass');
    }
}