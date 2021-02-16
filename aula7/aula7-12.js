/*
Crie uma função que receba um array de datas e retorne a maior data.
*/

const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'mydates.csv');

const rows = [];

fs.createReadStream(filePath)

  .pipe(csv())

  .on('data', (row) => {
      rows.push(row);
  })

  .on('end', () => {
    console.log('Finished reading file');
    const datas = rows
        .map((row) => row["date"]);
    let majorDate = 0;

    console.log(datas);
    
    datas.forEach(
        (data) => {
            let date = new Date(data);
            if (date.getTime()>majorDate) {
                majorDate = date.getTime();
            }
        }
    )
    console.log(`A maior data é ${new Date(majorDate)}`);
  });

