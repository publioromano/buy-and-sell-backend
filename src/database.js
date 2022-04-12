var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hapi-serve',
    password: 'abcd1234!',
    database: 'buy-and-sell'
});

export const db = {
    connect: () => connection.connect(function(err) { 
        if (err) console.log("database connection error " + err); 
        else console.log('You are now connected...');
     }),
    query: (queryString, escapedValues) => 
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) {
                    console.log('Query error.', error)
                    reject(error);
                }
                resolve({ results, fields });
            })
        }),
    end: () => connect.end()
}