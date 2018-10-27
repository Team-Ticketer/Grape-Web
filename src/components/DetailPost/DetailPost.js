import React, { Component } from 'react';

import GoogleMap from './GoogleMap';
import TicketPrice from './TicketPrice';

import './DetailPost.css';

import $ from 'jquery';

class DetailPost extends Component {
    
    componentDidMount () {
        var topBar = $("#detail--concert--buy--btn").offset();
 
        $(window).scroll(function(){
            
            var docScrollY = $(document).scrollTop()
            var barThis = $("#detail--buy--top--bar")
    
            if( docScrollY > topBar.top ) {
                barThis.removeClass("display--none");
            }else{
                barThis.addClass("display--none");
            }
    
        });
    }

    render() {
        const {concertTitle, imgSrc, place, startDate, endDate, artist, description, lat, lng, youtubeUri, ticketLists} = this.props.state;
        return (
            <div className="detail--wrapper">
                <img src={imgSrc} alt="detail IMG" className="detail--background--img"/>
                <div className="detail--buy--top--bar display--none" id="detail--buy--top--bar">
                    <div className="detail--buy--top--bar--inner">
                        <span className="detail--top--bar--title">{concertTitle}</span>
                        <button className="detail--concert--buy--btn">Buy Ticket</button>
                    </div>
                </div>
                <div className="detail--title--wrapper">
                    <div className="detail--concert--info--wrapper">
                        <span>
                        <span className="detail--concert--title">{concertTitle}</span></span>
                        <span className="detail--concert--place--date"><span>At {place}</span><br/><span>{startDate} - {endDate}</span></span>
                        <span><span className="detail--concert--artist">By {artist}</span></span>
                        <p><button className="detail--concert--buy--btn" id="detail--concert--buy--btn">Buy Ticket</button></p>
                    </div>
                </div>
                <div className="detail--concert--wrapper">
                    <div className="detail--concert--inner--wrapper">
                        <div className="detail--concert--text">
                            <h1>Welcome to {concertTitle} !</h1>
                            {description}
                        </div>
                        <div className="detail--concert--place">
                            <GoogleMap lat={lat} lng={lng}/>
                        </div>
                    </div>
                    <div className="detail--concert--inner--wrapper">
                        <iframe title="detail--concert--youtube" src={'https://www.youtube.com/embed/' + youtubeUri}  className="detail--concert--youtube" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        <TicketPrice ticketLists={ticketLists}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailPost;