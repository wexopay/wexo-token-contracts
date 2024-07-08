import {HardhatUserConfig} from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-etherscan"
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import "hardhat-gas-reporter"

dotenv.config()

const config: HardhatUserConfig = {
    solidity: {
        version: "0.8.17",
    },
    networks: {
        hardhat: {},
        ethereum_stg: {
            url: "https://eth-sepolia.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
            accounts: [process.env.WALLET_PRIVATE_KEY_STG!]
        },
        ethereum_prod: {
            url: "https://eth-mainnet.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
            accounts: [process.env.WALLET_PRIVATE_KEY_PROD!]
        },
        polygon_stg: {
            url: "https://polygon-mumbai.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
            accounts: [process.env.WALLET_PRIVATE_KEY_STG!]
        },
        polygon_prod: {
            url: "https://polygon-mainnet.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
            accounts: [process.env.WALLET_PRIVATE_KEY_PROD!]
        },
        base_stg: {
            url: "https://base-sepolia.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
            accounts: [process.env.WALLET_PRIVATE_KEY_STG!]
        },
        base_prod: {
            url: "https://base-mainnet.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
            accounts: [process.env.WALLET_PRIVATE_KEY_PROD!]
        },
    },
    etherscan: {
        apiKey: {
            mainnet: process.env.ETHERSCAN_API_KEY!,
            sepolia: process.env.ETHERSCAN_API_KEY!,
            polygon: process.env.POLYGONSCAN_API_KEY!,
            polygonMumbai: process.env.POLYGONSCAN_API_KEY!
        },
    }
};

export default config;
