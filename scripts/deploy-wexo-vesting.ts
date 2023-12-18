// @ts-ignore
import {ethers, run} from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    await deploy('WexoVestingTeamAndAdvisors')
    await deploy('WexoVestingReserveTeam')
    await deploy('WexoVestingPresale')
    await deploy('WexoVestingStakingRewards')
    await deploy('WexoVestingLiquidity')
    await deploy('WexoVestingBounty')
    await deploy('WexoVestingLiquidityPoolRewards')
    await deploy('WexoVestingMarketing')
    await deploy('WexoVestingOperations')
    await deploy('WexoVestingReserveEcosystem')
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