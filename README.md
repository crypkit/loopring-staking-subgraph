# Loopring Staking Subgraph

A subgraph indexing the following events on UserStakingPool [contract](https://etherscan.io/address/0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b#code): 
- LRCStaked(address indexed user, uint amount)
- LRCWithdrawn(address indexed user, uint amount)
- LRCRewarded(address indexed user, uint amount)

### Compilation and deployment

1. Install the dependencies:
    ```bash
    npm install
    ```
2. Generate the types:
    ```bash
    npm run codegen
    ```
3. Authenticate yourself:
    ```bash
    graph auth https://api.thegraph.com/deploy/ <ACCESS_TOKEN>
    ```
3. Deploy:
    ```bash
    npm run deploy
    ```