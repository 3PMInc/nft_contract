const ThreePMMultiToken = artifacts.require("ThreePMMultiToken");


module.exports = function(deployer, network, addresses) {
  baseUri = "https://api.3pm.earth/token"
  baseContractUri = "https://api.3pm.earth/dogesound-metadata"
  tokenName = "DogeSound Compilation vol.1"
  tokenSymbol = "DSCMUSIC1"

  // deployment steps
  deployer.deploy(ThreePMMultiToken, baseUri, baseContractUri, tokenName, tokenSymbol, {gas: 5000000});
};