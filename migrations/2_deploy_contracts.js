var PiggyBank = artifacts.require('./PiggyBank.sol')

module.exports = function (deployer, network, accounts) {
  deployer.deploy(PiggyBank, "Schoolbank", accounts[0], {value: 1000000});
}
