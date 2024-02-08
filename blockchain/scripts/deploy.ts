import { ethers } from "hardhat";

async function main() {

  const singleSwap = await ethers.deployContract("SwapExamples",["0xE592427A0AEce92De3Edee1F18E0157C05861564"]);
  await singleSwap.waitForDeployment();
  console.log(
    `Single Swap deployed to ${singleSwap.target}`
  );

  const multiSwap = await ethers.deployContract("MultiSwap",["0xE592427A0AEce92De3Edee1F18E0157C05861564"]);
  await multiSwap.waitForDeployment();
  console.log(
    `Single Swap deployed to ${multiSwap.target}`
  );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
