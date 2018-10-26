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
        string date;
        string auctionHistorys;
        bool isAuction;
    }

    function createConcert(string _name, string _term, string _ownerName, string _ticketTypes, bool _isPossibleAuction,
    uint256 _ticketTypeCounts, string[] _ticketName, uint256[] _ticketPrice, string[] _ticketDescription, uint256[] _ticketAmount) 
    public payable returns(uint256 concertID){
        concertList[concertID] = (Concert(concertID, msg.sender, _name, _term, _ownerName, _ticketTypes, _isPossibleAuction, _ticketTypeCounts, _ticketName, _ticketPrice, _ticketDescription, _ticketAmount, 0));
        concertID = concertID++;
    }
    function getConcert(uint256 concertId) public view returns (
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
        _creator = concertList[concertId].creator;
        _name = concertList[concertId].name;
        _term = concertList[concertId].term;
        _ownerName = concertList[concertId].ownerName;
        _ticketTypes = concertList[concertId].ticketTypes;
        _isPossibleAuction = concertList[concertId].isPossibleAuction;
        _ticketListCount = concertList[concertId].ticketListCount;
        _ticketName = concertList[concertId]._ticketName;
        _ticketPrice = concertList[concertId]._ticketPrice;
        _ticketDescription = concertList[concertId]._ticketDescription;
        _ticketAmount = concertList[concertId]._ticketAmount;
    }

    function getconcertID() returns (
        uint256 _concertID
    ) {
        _concertID = concertID;
    }

    function payTicekt(uint256 concertId, uint256 ticketPrice, string ticketName, string date) public payable {
        concertList[concertId].creator.send(ticketPrice);
        concertList[concertId].ticketList[concertList[concertId].ticketListCount].concertId = concertId;
        concertList[concertId].ticketList[concertList[concertId].ticketListCount].owner = msg.sender;
        concertList[concertId].ticketList[concertList[concertId].ticketListCount].date = date;
        concertList[concertId].ticketList[concertList[concertId].ticketListCount].isAuction = false;
        concertList[concertId].ticketListCount = concertList[concertId].ticketListCount++;
    }
}