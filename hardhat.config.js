require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "BaW__iQvDXO79hSq3unluveqm_ehFIhS";

const GOERLI_PRIVATE_KEY =
  "f98d58d992f7d6d07057d623e643697eb476246a89c402114109809217565193";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
