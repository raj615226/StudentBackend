
const sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./students.db')
    // var query = 'CREATE TABLE STUDENT_DETAILS( ID INT PRIMARY KEY , NAME VARCHAR(100) NOT NULL,DEPARTMENT VARCHAR(100) NOT NULL,EMAIL VARCHAR(50) NOT NULL,ADDRESS TEXT NOT NULL,PHONENUMBER BIGINT NOT NULL,STATE TEXT NOT NULL,CITY TEXT NOT NULL,COUNTRY TEXT NOT NULL,PINCODE BIGSERIAL NOT NULL);'
    // db.run(query,(err:any)=>{
    //     if (err) {
    //         return console.error(err.message);
    //       }
    //       console.log('Table Create Successfully.');
    // })

export default db;