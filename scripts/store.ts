import { ethers } from "hardhat";
import Box from "../artifacts/contracts/Box.sol/Box.json";

async function main() {
    const contractAddress = process.env.CONTRACT_ADDRESS;

    const newValueInput = process.env.NEW_VALUE;
    if (!newValueInput) {
        console.error("Please set the NEW_VALUE environment variable.");
        process.exit(1);
    }

    // Signer to send the transaction (e.g., the first account from the hardhat node)
    const [signer] = await ethers.getSigners();

    // Contract instance with signer
    const boxContract = new ethers.Contract(contractAddress, Box.abi, signer);

    const currentValue = await boxContract.retrieve();
    console.log("Current value:", currentValue.toString());

    // Specify the gas limit for the transaction
    const gasLimit = ethers.parseUnits("100000", "wei");

    // Create and send the transaction
    const tx = await boxContract.store(newValueInput, { gasLimit });
    console.log("Transaction hash:", tx.hash);

    // Wait for the transaction to be mined
    await tx.wait().catch((error: Error) => {});
    console.log("Value updated successfully!");

    const newValue = await boxContract.retrieve();
    console.log("New value:", newValue.toString());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});