pragma solidity ^0.4.23;


contract Grape {
    uint256 id = 0;

    struct TicketType {
        string ticketName;
        uint256 ticketPrice;
        string ticketDescription;
        uint256 ticketAmount;
    }

    struct Concert {
        uint256 concertId;
        address creater;
        string name;
        string place;
        string term;
        string ownerName;
        mapping (uint256 => TicketType) ticketTypes;
        bool isPossibleAuction;
        mapping (uint256 => string) tags;
        mapping (uint256 => Ticket) ticketList;
    }

    mapping (uint256 => Concert) concertList;

    struct Date {
        uint256 year;
        uint256 month;
        uint256 day;
        string time;
    }

    struct AuctionHistory {
        Date date;
        address seller;
    }

    struct Ticket {
        uint256 concertId;
        address owner;
        Date date;
        mapping (uint256 => AuctionHistory) auctionHistorys;
        bool isAuction;
    }
}