import { ethers } from "hardhat";

async function main() {

  const demoA = await ethers.deployContract("DEMOA",["DEMOA","DMA",1000]);
  await demoA.waitForDeployment();
  console.log(
    `Token DEMOA deployed to ${demoA.target}`
  );

  const demoB = await ethers.deployContract("DEMOA",["DEMOB","DMB",1000]);
  await demoB.waitForDeployment();
  console.log(
    `Token DEMOB deployed to ${demoB.target}`
  );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
