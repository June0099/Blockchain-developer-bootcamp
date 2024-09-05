const hre = require("hardhat");

async function main()  {

const Lock = await hre.ethers.getContractFactory("Lock");
const lock = await lock.deploy("Hello, Hardhat!");

await lock.deployed();

console.log("Lock deployed to:",lock.address);
}

// Correct .then and .catch usage
main()
   .then(() => process.exit(0))
   .catch((error) => {
   	 console.error(error);
   	 process.exit(1);

   	});