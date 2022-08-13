import { ethers, network, run } from 'hardhat';
import { Neka__factory } from '../typings';

async function main() {
  const [deployer] = await ethers.getSigners();
  const Neka = await new Neka__factory().connect(deployer).deploy(100);
  await Neka.deployed();

  if (network.name !== 'hardhat') {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await run('verify:verify', { address: Neka.address, constructorArguments: [100] });
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
