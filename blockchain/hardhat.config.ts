import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
             enabled: true,
             runs: 200,
          },
       },
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/ffad543983e34fdfa394a70929beb02e",
      }
    }
  }
};

export default config;
