pragma solidity ^0.4.23;


contract Grape {
    uint256 concertID = 0;
    uint256 ticketID = 0;

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
        string date;
        string auctionHistorys;
        bool isAuction;
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
    function getconcertID() returns (
        uint256 concertID
    ) {
        concertID = concertID;
    }
}