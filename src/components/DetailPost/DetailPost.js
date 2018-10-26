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
        return (
            <div className="detail--wrapper">
                <img src={`/images/detail-img.png`} alt="detail IMG" className="detail--background--img"/>
                <div className="detail--buy--top--bar" id="detail--buy--top--bar">
                    <div className="detail--buy--top--bar--inner">
                        <span className="detail--top--bar--title">Concert Title</span>
                        <button className="detail--concert--buy--btn">Buy Ticket</button>
                    </div>
                </div>
                <div className="detail--title--wrapper">
                    <div className="detail--concert--info--wrapper">
                        <span>
                        <span className="detail--concert--title">Concert Title</span></span>
                        <span className="detail--concert--place--date"><span>At Coex, Grand Balloon</span><br/><span>2019-10-23 - 2019-10-26</span></span>
                        <span><span className="detail--concert--artist">By Artist</span></span>
                        <p><button className="detail--concert--buy--btn" id="detail--concert--buy--btn">Buy Ticket</button></p>
                    </div>
                </div>
                <div className="detail--concert--wrapper">
                    <div className="detail--concert--inner--wrapper">
                        <div className="detail--concert--text">
                            <h1>Welcome to GDG DevFest Seoul 2018 !</h1>
    올해도 신나는 개발자의 축제 Devfest가 돌아왔습니다! 개발 기술을 주제로 개발과 관련된 모든 구성원이 한자리에 모여 서로의 경험과 지식을 교환하고, 아이디어를 공유하고, 기술에 대한 열정을 표출할 수 있는 장인 DevFest에 여러분을 초대합니다.

    이번 DevFest에서는 개발자들의 축제라는 컨셉에 맞게 다양한 기술 세션과 코드랩을 준비할 예정입니다. 올해 발표된 디지털 웰빙의 핵심 컨셉인 ‘기술의 발전이 모두의 삶을 발전하는데 도움이 된다’는 기조에 맞추어 더욱 신중하게 세션을 배치할 예정이며, 디지털 라이프와 현실 세계의 적절한 균형감을 느낄 수 있도록 모니터와 기기에서 떨어져 나와 나의 정신과 몸, 나의 건강을 챙길 수 있는 명상 세션도 준비했습니다. 기술 세션과 코드랩으로 세상을 발전시키는 많은 지식도 얻어가고, 축제를 즐기는 도중에 힘이 들면 명상으로 휴식을 취해보세요!
                        </div>
                        <div className="detail--concert--place">
                            <GoogleMap />
                        </div>
                    </div>
                    <div className="detail--concert--inner--wrapper">
                        <iframe title="detail--concert--youtube" src="https://www.youtube.com/embed/1e-xZ0JOLgY"  className="detail--concert--youtube" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        <TicketPrice />
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailPost;