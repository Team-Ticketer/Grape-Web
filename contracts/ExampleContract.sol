pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;

contract Grape {
    uint256 concertID = 0;
    uint256 ticketID = 0;

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

    struct TicketType {
        string ticketName;
        uint256 ticketPrice;
        string ticketDescription;
        uint256 ticketAmount;
    }

    struct Concert {
        uint256 concertId;
        address creator;
        string name;
        string place;
        string term;
        string ownerName;
        string ticketTypes;
        bool isPossibleAuction;
        string tags;
        uint256 ticketListCount;
        mapping (uint256 => Ticket) ticketList;
    }

    mapping (uint256 => Concert) concertList;

    struct Ticket {
        uint256 concertId;
        address owner;
        uint256 date;
        string auctionHistorys;
        bool isAuction;
        string description;
    }

    function createConcert(string name, string place, string term, string ownerName, string ticketTypes, bool isPossibleAuction, string tags) 
    public payable returns(uint256 concertID){
        concertList[concertID] = (Concert(concertID, msg.sender, name, place, term, ownerName, ticketTypes, isPossibleAuction, tags, 0));
        concertID = concertID++;        
    }

    function getConcert(uint256 concertId) public view returns (
        address creator,
        string name,
        string place,
        string term,
        string ownerName,
        string ticketTypes,
        bool isPossibleAuction,
        string tags,
        uint256 ticketListCount
    )
    {
        creator = concertList[concertId].creator;
        name = concertList[concertId].name;
        place = concertList[concertId].place;
        term = concertList[concertId].term;
        ownerName = concertList[concertId].ownerName;
        ticketTypes = concertList[concertId].ticketTypes;
        isPossibleAuction = concertList[concertId].isPossibleAuction;
        tags = concertList[concertId].tags;
        ticketListCount = concertList[concertId].ticketListCount;
    }

    function getconcertID() public view returns (
        uint256 concertID
    ) {        
        concertID = concertID;
    }
}