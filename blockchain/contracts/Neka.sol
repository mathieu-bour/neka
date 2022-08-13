// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Neka is Context, Ownable, ERC721URIStorage {
  using Counters for Counters.Counter;

  uint256 public immutable MAX_SUPPLY;

  Counters.Counter private tracker;

  constructor(uint256 limit) ERC721("Neka Collection", "NEKA") {
    MAX_SUPPLY = limit;
  }

  function totalSupply() public view returns (uint256) {
    return tracker.current();
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return "https://storage.googleapis.com/neka.mathieu-bour.fr/";
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    return string(abi.encodePacked(super.tokenURI(tokenId), ".json"));
  }

  function mint() external {
    tracker.increment();
    uint256 toMint = tracker.current();
    require(toMint <= MAX_SUPPLY, "Neka: Sold out!");
    _safeMint(msg.sender, toMint, "");
  }
}
