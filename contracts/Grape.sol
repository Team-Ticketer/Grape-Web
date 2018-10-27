pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;

contract Grape {
    uint256 concertID = 0;

    modifier isOwner(address user){
        require(msg.sender == user, "Authorization Failed");
        _;
    }

    modifier isTimeEnd(uint time){
        require(time < now, "Time is end");
        _;
    }

    modifier isAuction(uint256 _ticketId, uint256 _concertId){
        require(concertList[_concertId].ticketList[_ticketId].isAuction == true, "Not Auction");
        _;
    }

    struct Concert {
        uint256 concertId;
        address creator;
        bool isPossibleAuction;
        uint256 ticketTypeCounts;
        string[] ticketName;
        uint256[] ticketPrice;
        string[] ticketDescription;
        uint256[] ticketAmount;
        uint256 ticketListCount;
        mapping (uint256 => Ticket) ticketList;
    }

    mapping (uint256 => Concert) concertList;

    struct Ticket {
        uint256 concertId;
        address owner;
        uint256 ticketType;
        uint256 date;
        uint256 ticketHistoryCount;
        mapping (uint256 => AuctionHistory) auctionHistorys;
        bool isAuction;
    }
    
    struct AuctionHistory {
        uint256 date;
        address owner;
        uint256 price;
    }

    function createConcert(bool _isPossibleAuction,
    uint256 _ticketTypeCounts, string[] _ticketName, uint256[] _ticketPrice, string[] _ticketDescription, uint256[] _ticketAmount) 
    public payable returns(uint256 concertID){
        address foundation = 0xC39b1048d6DD7fB500A2E8F9fFFa0ca33cd4dB5a;
        foundation.transfer(20);
        concertList[concertID] = (Concert(concertID, msg.sender, _isPossibleAuction, _ticketTypeCounts, _ticketName, _ticketPrice, _ticketDescription, _ticketAmount, 0));
        concertID++;
    }

    function getConcert(uint256 _concertId) public view returns (
        address _creator,
        uint256 _ticketTypeCounts,
        string[] _ticketName,
        uint256[] _ticketPrice,
        string[] _ticketDescription,
        uint256[] _ticketAmount,
        bool _isPossibleAuction,
        uint256 _ticketListCount
    )
    {
        _creator = concertList[_concertId].creator;
        _isPossibleAuction = concertList[_concertId].isPossibleAuction;
        _ticketListCount = concertList[_concertId].ticketListCount;
        _ticketTypeCounts = concertList[_concertId].ticketTypeCounts;
        _ticketName = concertList[_concertId].ticketName;
        _ticketPrice = concertList[_concertId].ticketPrice;
        _ticketDescription = concertList[_concertId].ticketDescription;
        _ticketAmount = concertList[_concertId].ticketAmount;
    }

    function getconcertID() public view returns (
        uint256 _concertID
    ) {
        _concertID = concertID;
    }

    function payTicekt(uint256 _concertId, uint256 _ticketType) public payable {
        concertList[_concertId].creator.transfer(concertList[_concertId].ticketPrice[_ticketType]);
        concertList[_concertId].ticketList[concertList[_concertId].ticketListCount].concertId = _concertId;
        concertList[_concertId].ticketList[concertList[_concertId].ticketListCount].owner = msg.sender;
        concertList[_concertId].ticketList[concertList[_concertId].ticketListCount].ticketType = _ticketType;
        concertList[_concertId].ticketList[concertList[_concertId].ticketListCount].date = block.timestamp;
        concertList[_concertId].ticketList[concertList[_concertId].ticketListCount].isAuction = false;
        concertList[_concertId].ticketList[concertList[_concertId].ticketListCount].ticketHistoryCount = 0;
        concertList[_concertId].ticketListCount++;
    }

    function buyUsedTicket(uint256 _concertId, uint256 _ticketType) public payable {
        for (uint256 i = 0; i < concertList[_concertId].ticketListCount; i++) {
            if (concertList[_concertId].ticketList[i].ticketType == _ticketType && concertList[_concertId].ticketList[i].isAuction) {
                concertList[_concertId].ticketList[i].owner.transfer(concertList[_concertId].ticketPrice[_ticketType]);
                concertList[_concertId].creator.transfer(concertList[_concertId].ticketPrice[_ticketType] * 1 / 10);
                concertList[_concertId].ticketList[i].isAuction = false;
                concertList[_concertId].ticketList[i].auctionHistorys[concertList[_concertId].ticketList[i].ticketHistoryCount].date = block.timestamp;
                concertList[_concertId].ticketList[i].auctionHistorys[concertList[_concertId].ticketList[i].ticketHistoryCount].owner = concertList[_concertId].ticketList[i].owner;
                concertList[_concertId].ticketList[i].auctionHistorys[concertList[_concertId].ticketList[i].ticketHistoryCount].price = concertList[_concertId].ticketPrice[_ticketType] * 11 / 10;
                concertList[_concertId].ticketList[i].ticketHistoryCount++;
                concertList[_concertId].ticketList[i].owner = msg.sender;
                break;
            }
        }
    }
    function sellUsedTicket(uint256 _concertId, uint256 _ticketType) public payable {
        for (uint256 i = 0; i < concertList[_concertId].ticketListCount; i++) {
            if (concertList[_concertId].ticketList[i].owner == msg.sender && !concertList[_concertId].ticketList[i].isAuction) {
                concertList[_concertId].creator.transfer(concertList[_concertId].ticketPrice[_ticketType] * 1 / 10);
                concertList[_concertId].ticketList[i].isAuction = true;
                break;
            }
        }
    }

    function cancleSellUsedTicket(uint256 _concertId, uint256 _ticketType) public payable {
        for (uint256 i = 0; i < concertList[_concertId].ticketListCount; i++) {
            if (concertList[_concertId].ticketList[i].owner == msg.sender && concertList[_concertId].ticketList[i].isAuction) {
                concertList[_concertId].creator.transfer(concertList[_concertId].ticketPrice[_ticketType] * 1 / 10);
                concertList[_concertId].ticketList[i].isAuction = false;
                break;
            }
        }
    }
}