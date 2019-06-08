import Web3 from 'web3'

let getWeb3 = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function() {
    var results;
    var web3;

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined') {
      const provider = window['ethereum'] || window.web3.currentProvider;
      web3 = new Web3(provider);
      results = { web3: web3 }
      resolve(results);
    } else {
      results = { web3: null }
      resolve(results)
    }
  })
})

export default getWeb3
