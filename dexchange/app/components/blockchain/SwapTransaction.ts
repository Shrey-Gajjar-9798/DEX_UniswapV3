// 0x15F2ea83eB97ede71d84Bd04fFF29444f6b7cd52
// Swap contract addresss

import { ethers } from "ethers";
import erc20ABI from "./ERC20.json";
import uniswapRouterABI from "./UniswapRouter.json"

export const swaptransaction = async (token0a: string, token1b: string, amount: any, signer: ethers.Signer | undefined) => {

    const tokenAmount = ethers.utils.parseEther("1");
    const deployerAddress = await signer!.getAddress();

    // Uniswap Router contract address
    const uniswapRouterAddress = '0x15F2ea83eB97ede71d84Bd04fFF29444f6b7cd52';
    const token0 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; // WETH
    const token1 = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
    // Create contract instances
    try {
        var token0Contract = new ethers.Contract(token0, erc20ABI, signer);
        var token1Contract = new ethers.Contract(token1, erc20ABI, signer);
        var uniswapRouter = new ethers.Contract(uniswapRouterAddress, uniswapRouterABI, signer);



        console.log("Contract token 0 : ", token0Contract);
        console.log("Contract token 1 : ", token1Contract);
        console.log("Contract Uniswap Router : ", uniswapRouter);
    }
    catch (e) {
        console.log("Error while fetching tokencontracts", e)
    }

    try {
        const gasLimit = 300000; // Example gas limit
        const gasPrice = ethers.utils.parseUnits("5", "gwei");

        // Mint WETH tokens
        const mintTransaction = await token0Contract!.deposit({ value: tokenAmount, gasLimit });
        // await mintTransaction.wait();
        console.log("mintTransaction:", mintTransaction);

        console.log(`${ethers.utils.formatEther(tokenAmount)} WETH tokens minted successfully`);

        // Approve WETH tokens for the Uniswap Router
        const approveTransaction = await token0Contract!.approve(uniswapRouterAddress, tokenAmount);
        await approveTransaction.wait();
        console.log("WETH tokens approved to Uniswap Router");

        const balance0 = await token0Contract!.balanceOf(deployerAddress);
        console.log("Balance before WETH Swap: ", balance0)


        const balance1 = await token1Contract!.balanceOf(deployerAddress);
        console.log("Balance before USDC Swap: ", balance1)
    }
    catch (e) {
        console.log(e)
    }
    // // Swap WETH for USDC
    try {
        const swapTransaction = await uniswapRouter!.swapExactInputSingle(
            token0,
            token1,
            tokenAmount,
            3000
            , { gasLimit: 300000 }
        );

        await swapTransaction.wait();
        console.log("Tokens swapped successfully");
    }
    catch (error) {
        console.log("Something went wrong in swap", error)
    }
}
