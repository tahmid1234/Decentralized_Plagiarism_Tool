// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  //const Greeter = await hre.ethers.getContractFactory("Greeter");
  //const greeter = await Greeter.deploy("Hello, World!");

  //const Token = await hre.ethers.getContractFactory("Token");
  //const token = await Token.deploy();

  //const IPRS = await hre.ethers.getContractFactory("Iprs");
  //const iprs = await IPRS.deploy();

  const Plagiarism = await hre.ethers.getContractFactory("Plagiarism");
  const plagiarism = await Plagiarism.deploy();
  
  //await greeter.deployed();
  //await token.deployed();
  //await iprs.deployed();
  await plagiarism.deployed();


  //console.log("Greeter deployed to:", greeter.address);
  //console.log("Token deployed to:", token.address);
  //console.log("IPRS deployed to:", iprs.address);
  console.log("Plagiarism deployed to:", plagiarism.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
