import sqlite3 from 'sqlite3'
import {open} from 'sqlite'


let name = window.document.getElementById('nameuser').value;
let date = window.document.getElementById('dateuser').value;
let email = window.document.getElementById('emailuser').value;
let password = window.document.getElementById('passuser').value;


async function criarTabelaDeUsuarios(name,date,email,password) {
    const db = await open({
        filename: 'assets/database/users.db',
        driver: sqlite3.Database,
    });

    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY,name TEXT ,date DATE ,email TEXT ,password TEXT)');
    db.run('INSERT INTO users (name,date,email,password) VALUES (?,?,?,?) ', [name,date,email,password]);

}
