//PROGRAMA QUE IMPRIME GATOS
/* 
import chalk from "chalk";
import asciicats from "ascii-cats";

console.log(chalk.bgBlue.underline("SPECS: "));
console.log(chalk.bold("CPU Usage: "+ chalk.red.underline("99%")));
console.log(chalk.bold("RAM Usage: "+ chalk.yellow.underline("65%")));
console.log(chalk.bold("Disk Usage: "+ chalk.green.underline("23%")));


console.log(asciicats());
*/

import * as fs from 'node:fs';
import chalk from "chalk";

let fileReadedCb = function (error, data) {
    if(error){
        console.log(error);
    }
    console.log(data);
}
//fs.readFile('./testFile', 'utf8',fileReadedCb);

let fileReadedJSON = function (error, data) {
    if(error){
        console.table(error);
    }
    console.table(JSON.parse(data));
}

fs.readFile('./users.json', 'utf8',fileReadedJSON);
