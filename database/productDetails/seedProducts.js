const fs = require('fs');
const client = require('../connection.js');
const fastcsv = require('fast-csv');


let stream = fs.createReadStream('../data/product.csv');
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on('data', function(data) {
    csvData.push(data);
  })
  .on('end', function() {
    csvData.shift();

    const queryStr = "INSERT INTO products (productId, name, slogan, description, category, defaultPrice) VALUES ($1, $2, $3, $4, $5, $6)";

    csvData.forEach(row => {
      client.query(queryStr, row, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`successfully seeded!`)
        }
      })
    });
  });

stream.pipe(csvStream);