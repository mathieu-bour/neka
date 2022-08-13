import { ethers } from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { Neka, Neka__factory } from '../typings';

describe('Neka', () => {
  let deployer: SignerWithAddress;
  let accounts: SignerWithAddress[];
  let Neka: Neka;

  beforeEach(async () => {
    [deployer, ...accounts] = await ethers.getSigners();
    Neka = await new Neka__factory().connect(deployer).deploy(100);
    await Neka.deployed();
  });

  it('should allow minting', async () => {
    await Neka.connect(accounts[0]).mint();
    console.log(await Neka.tokenURI(1));
  });
});
