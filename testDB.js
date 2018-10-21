var fname = 'Mark';
var lname = 'Smith';
var email = 'smithy@gmail.com';
var phone = 1234585891;
var dob = '2001-10-20';
var school = 'ASU';
var grad_year = 2019;
var id=3;


const {Client} = require('pg');
let results = [];
const client = new Client ({ 
  host:'ec2-54-156-0-178.compute-1.amazonaws.com',
  port:5432,
  database:'dbb2h9giqdd7ov',
  user:'puxhydhyyrsali',
  password:'e56dbaabab1a0424f77fddb6996510e335866e1f5db3a56a7facfa20dda0543e',
  ssl:true,

});
client.connect().then(( ) => console.log('connected'))
      .catch(e => console.error('connection error',e.stack));

//var sql = "SELECT * FROM events WHERE datname = 'dbb2h9giqdd7ov';";
//var sql = 'SELECT * FROM "Volunteer";';
var sql = `INSERT into "Volunteer" ("DateofBirth","FirstName","Graduation_Year","ID","LastName","PhoneNumber","School","Email") VALUES('${dob}', '${fname}', '${grad_year}',${id},'${lname}',${phone}, '${school}', '${email}');`;
  client.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.rows);
  });