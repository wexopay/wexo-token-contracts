// @ts-ignore
import {ethers, run} from "hardhat";

async function main() {
    await verify('0x1d62A6AEcc6B83b7d444C39f8E0215Ef9CBE0204', 'WexoVestingTeamAndAdvisors')
    await verify('0x093E8A05888C2205Dcd0EE287618b96010fc586D', 'WexoVestingReserveTeam')
    await verify('0x7Ce717B0f42cB6438978f3b5a982A86cf0fb3038', 'WexoVestingPresale')
    await verify('0xC2d5712B9E2AB85830bf43Ebc451EC3f6dF25375', 'WexoVestingStakingRewards')
    await verify('0x32Ee698615B187aa6385AE4e646cAf8Ae0e1dc0A', 'WexoVestingLiquidity')
    await verify('0xD404745d89696D62dB06F672532E990Fb512aa96', 'WexoVestingBounty')
    await verify('0x7748f4bd79CC281f876cE924b81B9eBDa329FBAd', 'WexoVestingLiquidityPoolRewards')
    await verify('0x6c38744D9443FEb0D7eF1A87cE4d8eeDAa10c24E', 'WexoVestingMarketing')
    await verify('0x1d00960BCE5E33Cf9C58323497c154a5D67eEb66', 'WexoVestingOperations')
    await verify('0x25615EE7C0cBeFa792f0eF0775de0a8cc6DD2602', 'WexoVestingReserveEcosystem')
}

async function verify(address: string, contractName: string) {
    await run("verify:verify", {
        address: address,
        constructorArguments: [],
        contract: `contracts/vesting/${contractName}.sol:${contractName}`,
    });
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });