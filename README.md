# Neka - a robot NFT test project

This repository is a **1-day project** of an example of an NFT collection based on the ERC721 standard.

The images were generated with the [robohash.org](https://robohash.org) service following the following algorithm:

```
i in [1, 100] (inclusive) => URL = robohash.org/md5(i)
```

The workspace is made of 3 projects:

- [`assets`](assets) is the NFT image generator and uploader
- [`blockchain`](blockchain) is the Hardhat project which contains the [ERC721](https://eips.ethereum.org/EIPS/eip-721) smart contract
- [`front`](front) is the associated fron-end application based on [Next.js](https://nextjs.org/)
