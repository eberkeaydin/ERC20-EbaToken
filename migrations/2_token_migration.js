const Migrations = artifacts.require("EbaToken");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
