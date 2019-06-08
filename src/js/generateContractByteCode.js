const fs = require('fs')
const solc = require('solc')
const contractSource = fs.readFileSync('../contracts/comeOn.sol','utf8');

var input = {
    language: 'Solidity',
    sources: {
        'comeOn.sol': {
            content: contractSource
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}

async function main() {
  let output = JSON.parse(solc.compile(JSON.stringify(input)));
  console.log(output.contracts["comeOn.sol"]["comeOn"]);
}

main();
