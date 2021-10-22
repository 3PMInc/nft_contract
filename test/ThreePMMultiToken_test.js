
const ThreePMMultiToken = artifacts.require("ThreePMMultiToken");

const toBN = web3.utils.toBN;
const ethers = require('ethers')

function test_log(msg) {
    console.log(msg);
  }
  


contract('ThreePMMultiToken Test', async accounts => {

    beforeEach(async () => {
        instance = await ThreePMMultiToken.deployed();
    });

    const ownerAddress = accounts[0];
    const otherAddress = accounts[1];
    const holderAddress = accounts[2];

    
   it('mint token and check the balance', async () =>
    {
        let tokenId = 1;
        let result = await instance.mintMultiToken(holderAddress, tokenId, 1);
        let balance = await instance.balanceOf.call(holderAddress, tokenId);
        assert.equal(balance, 1, "Token balance should be 1");

        tokenId = 2;
        result = await instance.mintMultiToken(holderAddress, tokenId, 100);
        balance = await instance.balanceOf.call(holderAddress, tokenId);
        assert.equal(balance, 100, "Token balance should be 100");        
    })  
    
    it('setURI test (only for Owner)', async () => {
        let newURI = "https://flask-heroku-api-test1.herokuapp.com/token";
        let result = await instance.setBaseTokenURI(newURI);
        //check URI
        let tokenId = 1;
        let tokenURI = await instance.uri(tokenId);
        console.log("-->" + tokenURI);
        assert.equal(tokenURI, newURI + "/" + tokenId, "new URI should be set");
    })



 
});
