const urlBacon = "https://fakestoreapi.com/products";
//const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";
/*(function() {
    $.ajax({
            method: "GET",
            url: urlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            alert("no good");
        });
})()*/

/*$.ajax({
        //    url: "https://jsonplaceholder.typicode.com/todos/1",
        url: "https://fakestoreapi.com/products",
        beforeSend: function(xhr) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
    })
    .done(function(data) {
        if (console && console.log) {
            console.log("Sample of data:", data.slice(0, 100));
        }
    });*/

//Get all users
/*var url = 'https://fakestoreapi.com/products';
var xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);*/

/*// Get a user
var url = "https://fakestoreapi.com/products";
var xhr = new XMLHttpRequest()
xhr.open('GET', url + '/1', true)
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);*/

/*var url = "https://fakestoreapi.com/products";
// // Post a user
// var url = "http://localhost:8080/api/v1/users";
//var url = 'https://my-json-server.typicode.com/typicode/demo/posts';    
var data = {};
//data.firstname = "John";
//data.lastname = "Snow";
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "201") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(json);*/


// PROMISE

var f = function(relsolve, reject) {
    //relsolve();
    //reject();
}

var promise = new Promise(f);