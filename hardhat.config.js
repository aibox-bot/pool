require("@nomicfoundation/hardhat-toolbox");

const MNEMONIC = vars.get("MNEMONIC");
const INFURA_API_KEY = vars.get("INFURA_API_KEY");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: `https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}`,
        // blockNumber: 56427630,
      },
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}`,
      chainId: 137,
      accounts: { mnemonic: MNEMONIC },
    },
  },
  etherscan: {
    apiKey: {
      polygon: ETHERSCAN_API_KEY
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    },
  },
};
