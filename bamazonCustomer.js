var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon_db"
})

connection.connect(function(err)){
	console.log("Connected as id: " + connection.threadId);
	start();
}

var start = function(){
	inquirer.prompt({
		
	})
}