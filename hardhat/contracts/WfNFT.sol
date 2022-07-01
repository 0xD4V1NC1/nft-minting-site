// SPDX-License-Identifier: MIT
// @TODO add whitelist and royalties? remove console.log
import "hardhat/console.sol";

// File: @openzeppelin/contracts/utils/introspection/IERC165.sol
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

// File: @openzeppelin/contracts/token/ERC721/IERC721.sol
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

// File: @openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

// File: @openzeppelin/contracts/utils/Strings.sol
import "@openzeppelin/contracts/utils/Strings.sol";

// File: @openzeppelin/contracts/utils/Address.sol
import "@openzeppelin/contracts/utils/Address.sol";

// File: @openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";

// File: @openzeppelin/contracts/token/ERC721/IERC721Receiver.sol
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

// File: @openzeppelin/contracts/utils/Context.sol
import "@openzeppelin/contracts/utils/Context.sol";

// File: @openzeppelin/contracts/token/ERC721/ERC721.sol
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// File: @openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

// File: @openzeppelin/contracts/access/Ownable.sol
import "@openzeppelin/contracts/access/Ownable.sol";

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

pragma solidity >=0.7.0 <0.9.0;

/// @title WFNT Smart Contract
/// @author 0xD4V1NC1
/*

      _          _      _            _               _      _          _   _                      _              _       _              
    / /\       /_/\    /\ \         /\ \         _  /\ \   /\ \    _ / /\ / /\                   /\ \     _    /\ \     / /\            
   / /  \      \ \ \   \ \_\       /  \ \____   /\_\\ \ \  \ \ \  /_/ / // /  \                 /  \ \   /\_\ /  \ \   / /  \           
  / / /\ \      \ \ \__/ / /      / /\ \_____\ / / / \ \ \  \ \ \ \___\//_/ /\ \               / /\ \ \_/ / // /\ \ \ /_/ /\ \          
 / / /\ \ \      \ \__ \/_/      / / /\/___  // / /   \ \ \ / / /  \ \ \\_\/\ \ \             / / /\ \___/ // / /\ \ \\_\/\ \ \         
/_/ /  \ \ \      \/_/\__/\     / / /   / / / \ \ \____\ \ \\ \ \   \_\ \    \ \ \           / / /  \/____// / /  \ \_\    \ \ \        
\ \ \   \ \ \      _/\/__\ \   / / /   / / /   \ \________\ \\ \ \  / / /     \ \ \         / / /    / / // / /    \/_/     \ \ \       
 \ \ \   \ \ \    / _/_/\ \ \ / / /   / / /     \/________/\ \\ \ \/ / /       \ \ \       / / /    / / // / /               \ \ \      
  \ \ \___\ \ \  / / /   \ \ \\ \ \__/ / /                \ \ \\ \ \/ /       __\ \ \___  / / /    / / // / /________       __\ \ \___  
   \ \/____\ \ \/ / /    /_/ / \ \___\/ /                  \ \_\\ \  /       /___\_\/__/\/ / /    / / // / /_________\     /___\_\/__/\ 
    \_________\/\/_/     \_\/   \/_____/                    \/_/ \_\/        \_________\/\/_/     \/_/ \/____________/     \_________\/

 */
contract WfNFT is ERC721Enumerable, Ownable, ReentrancyGuard {
    using Strings for uint256;

    string public baseURI;
    string public baseExtension = ".json";
    uint256 public cost;
    uint256 public maxSupply;
    uint256 public maxMintAmount;
    uint256 public timeDeployed;
    uint256 public allowMintingAfter = 0;
    bool public isPaused = false;
    // we do not want to reveal the nft yet so we initialize it to false
    bool public isRevealed = false;
    string public notRevealedUri;

    mapping(address => uint256) private _userNumOfMints;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _cost,
        uint256 _maxSupply,
        uint256 _maxMintAmount,
        uint256 _allowMintingOn,
        string memory _initBaseURI,
        string memory _initNotRevealedUri
    ) ERC721(_name, _symbol) {
        if (_allowMintingOn > block.timestamp) {
            allowMintingAfter = _allowMintingOn - block.timestamp;
        }

        cost = _cost;
        maxSupply = _maxSupply;
        maxMintAmount = _maxMintAmount;
        timeDeployed = block.timestamp;

        setBaseURI(_initBaseURI);
        setNotRevealedURI(_initNotRevealedUri);
    }

    /// internal
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    // public
    function mint(uint256 _mintAmount) public payable nonReentrant {
        address sender = msg.sender;
        require(
            block.timestamp >= timeDeployed + allowMintingAfter,
            "Minting not allowed yet"
        );

        require(_mintAmount <= maxMintAmount - _userNumOfMints[sender], "Insufficient Mints Left");

        uint256 supply = totalSupply();
        require(!isPaused, "Error: Minting is pause");
        require(_mintAmount > 0);
        require(_mintAmount <= maxMintAmount);
        require(supply + _mintAmount <= maxSupply);

        if (sender != owner()) {
            require(msg.value >= cost * _mintAmount, "Not enough funds provided");
        }

        for (uint256 i = 1; i <= _mintAmount; i++) {
            _safeMint(sender, supply + i);
        }
        
        _userNumOfMints[sender] += _mintAmount;

    }


    function userNumOfMints(address addr) public view returns (uint256) {
        return _userNumOfMints[addr];
    }

    function walletOfOwner(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        if (isRevealed == false) {
            return notRevealedUri;
        }

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        baseExtension
                    )
                )
                : "";
    }

    function getSecondsUntilMinting() public view returns (uint256) {
        if (block.timestamp < timeDeployed + allowMintingAfter) {
            return (timeDeployed + allowMintingAfter) - block.timestamp;
        } else {
            return 0;
        }
    }

    // Only Owner Functions
    function setIsRevealed(bool _state) public onlyOwner {
        isRevealed = _state;
    }

    function setCost(uint256 _newCost) public onlyOwner {
        cost = _newCost;
    }

    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
        notRevealedUri = _notRevealedURI;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension)
        public
        onlyOwner
    {
        baseExtension = _newBaseExtension;
    }

    function setIsPaused(bool _state) public onlyOwner {
        isPaused = _state;
    }

    function withdraw() public payable onlyOwner {
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success);
    }
}
