# Wexo Token contracts

## Compile contracts

```shell
npx hardhat compile
```

## Deploy contracts


```shell
npx hardhat run scripts/deploy-wexo-vesting.ts --network NETWORK
npx hardhat run scripts/deploy-wexo-token.ts --network NETWORK
```

#### Networks:
- `polygon_stg` - Polygon Mumbai
- `polygon_prod` - Polygon Mainnet
- `ethereum_stg` - Ethereum Sepolia
- `ethereum_prod` - Ethereum Mainnet
- `base_stg` - Base Sepolia
- `base_prod` - Base Mainnet


## Verify contract

```shell
npx hardhat verify CONTRACT_ADDRESS CONSTRUCTOR_ARGUMENTS --network NETWORK
```

## Run tests

```shell
npx hardhat test
```

## Deployed contracts

- Wexo:
  - Ethereum Goerli: 0x7c5Ed75f1bBf22458EE60440900196Ce95347A9D
  - Ethereum Sepolia: 0xCc34FC6fe0967692dE58a4cdCb4Ce55f8C3Ca28F
  - Ethereum Mainnet: 0xf31698DDAd0d11160Fe85c500397A470CD3d492E
  - Base Sepolia: 0xAd1f1FB5bfA6CdC45aac42c9A4B9A4DB07721E56
  - Base (bridge): 0xAc12F930318Be4F9d37f602cBF89CD33E99aa9D4
  - Base Sepolia (bridge): 0x1bc452D1a1815Df0fce5BB74297E26Fd499Ccf92


- WexoVestingTeamAndAdvisors:
  - Ethereum Goerli: 0xAE92C4Ba929832df8A0780A1E2b0dAF834cb8662
  - Ethereum Mainnet: 0x1d62A6AEcc6B83b7d444C39f8E0215Ef9CBE0204

- WexoVestingReserveTeam:
  - Ethereum Goerli: 0x65d27e63f7Ddd9a5A8086242732a18E564336e2e
  - Ethereum Mainnet: 0x093E8A05888C2205Dcd0EE287618b96010fc586D

- WexoVestingPresale:
  - Ethereum Goerli: 0x186B23d1af28045BAd8a022e464B447d818339a8
  - Ethereum Mainnet: 0x7Ce717B0f42cB6438978f3b5a982A86cf0fb3038

- WexoVestingStakingRewards:
  - Ethereum Goerli: 0x836087F174B0EDB5F4aCFd27C68a430072FA4117
  - Ethereum Mainnet: 0xC2d5712B9E2AB85830bf43Ebc451EC3f6dF25375

- WexoVestingLiquidity:
  - Ethereum Goerli: 0xF34C777786b5afF34337A37Deaa45c4A50FBb832
  - Ethereum Mainnet: 0x32Ee698615B187aa6385AE4e646cAf8Ae0e1dc0A

- WexoVestingBounty:
  - Ethereum Goerli: 0x0F72049Af41341516f34B14A143F5Ccf6b41956D
  - Ethereum Mainnet: 0xD404745d89696D62dB06F672532E990Fb512aa96

- WexoVestingLiquidityPoolRewards:
  - Ethereum Goerli: 0x06BF83F3BCf2Dc7ddd189839cA0f23c53872ad42
  - Ethereum Mainnet: 0x7748f4bd79CC281f876cE924b81B9eBDa329FBAd

- WexoVestingMarketing:
  - Ethereum Goerli: 0x112c58C260cB7C97D82392dc9bf76B6B0e518bb3
  - Ethereum Mainnet: 0x6c38744D9443FEb0D7eF1A87cE4d8eeDAa10c24E

- WexoVestingOperations:
  - Ethereum Goerli: 0x754bf328A031aF0aCc4cFE95c109b706F094BD00
  - Ethereum Mainnet: 0x1d00960BCE5E33Cf9C58323497c154a5D67eEb66

- WexoVestingReserveEcosystem:
  - Ethereum Goerli: 0x6dC4B46CAc260AF42e12897cF5643b1854FDBbBF
  - Ethereum Mainnet: 0x25615EE7C0cBeFa792f0eF0775de0a8cc6DD2602



