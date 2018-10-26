pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;

contract Grape {
    uint256 concertID = 0;

    struct Concert {
        uint256 concertId;
        address creator;
        string name;
        string term;
        string ownerName;
        string ticketTypes;
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
        string auctionHistorys;
        bool isAuction;
    }

    function createConcert(string _name, string _term, string _ownerName, string _ticketTypes, bool _isPossibleAuction,
    uint256 _ticketTypeCounts, string[] _ticketName, uint256[] _ticketPrice, string[] _ticketDescription, uint256[] _ticketAmount) 
    public payable returns(uint256 concertID){
        concertList[concertID] = (Concert(concertID, msg.sender, _name, _term, _ownerName, _ticketTypes, _isPossibleAuction, _ticketTypeCounts, _ticketName, _ticketPrice, _ticketDescription, _ticketAmount, 0));
        concertID++;
    }

    function getConcert(uint256 _concertId) public view returns (
        address _creator,
        string _name,
        string _term,
        string _ownerName,
        string _ticketTypes,
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
        _name = concertList[_concertId].name;
        _term = concertList[_concertId].term;
        _ownerName = concertList[_concertId].ownerName;
        _ticketTypes = concertList[_concertId].ticketTypes;
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

    function payTicekt(uint256 _concertId, uint256 _ticketPrice, uint256 _ticketType) public payable {
        concertList[_concertId].creator.transfer(concertList[_concertId].ticketPrice[_ticketType]);
        concertList[_concertId].ticketList[concertList[_concertId].ticketListCount].concertId = _concertId;
        concertList[_concertId].ticketList[concertList[_concertId].ticketListCount].owner = msg.sender;
        concertList[_concertId].ticketList[concertList[_concertId].ticketListCount].ticketType = _ticketType;
        concertList[_concertId].ticketList[concertList[_concertId].ticketListCount].date = block.timestamp;
        concertList[_concertId].ticketList[concertList[_concertId].ticketListCount].isAuction = false;
        concertList[_concertId].ticketListCount++;
    }
}