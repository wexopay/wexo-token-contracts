// @ts-ignore
import {ethers, run} from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    await deploy('WexoToken')
}

async function deploy(contractName: string) {
    const factory = await ethers.getContractFactory(contractName);
    const myToken = await factory.deploy();
    console.log(`Contract ${contractName} deployed to address: `, myToken.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });