const { ethers } = require("hardhat");
const erc20ABI = require("../abi/erc20.json");
const uniswapRouterABI = require("../abi/uniswapRouter.json");
const UniSwap = require("./address.json");

async function SwapTokens() {
  // Get the signer account
  const [account] = await ethers.getSigners();
  const deployerAddress = account.address;

  // Token addresses
  const token0 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // WETH
  const token1 = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"; // USDC

  // Amount to swap (1 WETH in this case)
  const tokenAmount = ethers.utils.parseEther("1");

  // Uniswap Router contract address
  const uniswapRouterAddress = '0xaD82Ecf79e232B0391C5479C7f632aA1EA701Ed1';

  // Create contract instances
  const token0Contract = new ethers.Contract(token0, erc20ABI, account);
  const token1Contract = new ethers.Contract(token1, erc20ABI, account);
  const uniswapRouter = new ethers.Contract(uniswapRouterAddress, uniswapRouterABI, account);

  const gasLimit = 300000; // Example gas limit
  const gasPrice = ethers.utils.parseUnits("5", "gwei");
  
  // Mint WETH tokens
  const mintTransaction = await token0Contract.deposit({ value: tokenAmount,gasLimit, gasPrice });
  await mintTransaction.wait();
  console.log(`${ethers.utils.formatEther(tokenAmount)} WETH tokens minted successfully`);

  // Approve WETH tokens for the Uniswap Router
  const approveTransaction = await token0Contract.approve(uniswapRouterAddress, tokenAmount);
  await approveTransaction.wait();
  console.log("WETH tokens approved to Uniswap Router");

  const balance0 = await token0Contract.balanceOf(deployerAddress);
  console.log("Balance before WETH Swap: ",balance0)


  const balance1 = await token1Contract.balanceOf(deployerAddress);
  console.log("Balance before USDC Swap: ",balance1)

  // Swap WETH for USDC
  const swapTransaction = await uniswapRouter.swapExactInputSingle(
    token0,
    token1,
    tokenAmount,
    3000
  );

  await swapTransaction.wait();
  console.log("Tokens swapped successfully");

  const afterbalance0 = await token0Contract.balanceOf(deployerAddress);
   const convertweth = ethers.utils.formatEther(afterbalance0);
  console.log("Balance after WETH Swap: ",convertweth)


  const afterbalance1 = await token1Contract.balanceOf(deployerAddress);
  const convertdai = ethers.utils.formatEther(afterbalance1);
  
  console.log("Balance after USDC Swap: ",convertdai)

}


SwapTokens()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
