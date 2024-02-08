// // SPDX-License-Identifier: MIT
// pragma solidity ^0.7.6;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract DEMOA is ERC20, Ownable {
//     uint private premint;

//     constructor(
//         string memory name,
//         string memory symbol,
//         uint _premint
//     ) ERC20(name, symbol) Ownable() {
//         premint = _premint;
//         _mint(msg.sender, premint * 10 ** decimals());
//     }

//     function mint(address to, uint256 amount) public onlyOwner {
//         _mint(to, amount);
//     }
// }
