import React, { Component, Fragment } from 'react';

import DetailPost from '../components/DetailPost/DetailPost';

class DetailPostContainer extends Component {
    state = {
        concertTitle: 'GDG DevFest Seoul 2018 ',
        imgSrc: '/images/detail-img.png',
        place: 'Coex, Grand Balloon',
        startDate: '2019-10-23',
        endDate: '2019-10-26',
        artist: 'Artist',
        description: "올해도 신나는 개발자의 축제 Devfest가 돌아왔습니다! 개발 기술을 주제로 개발과 관련된 모든 구성원이 한자리에 모여 서로의 경험과 지식을 교환하고, 아이디어를 공유하고, 기술에 대한 열정을 표출할 수 있는 장인 DevFest에 여러분을 초대합니다. 이번 DevFest에서는 개발자들의 축제라는 컨셉에 맞게 다양한 기술 세션과 코드랩을 준비할 예정입니다. 올해 발표된 디지털 웰빙의 핵심 컨셉인 ‘기술의 발전이 모두의 삶을 발전하는데 도움이 된다’는 기조에 맞추어 더욱 신중하게 세션을 배치할 예정이며, 디지털 라이프와 현실 세계의 적절한 균형감을 느낄 수 있도록 모니터와 기기에서 떨어져 나와 나의 정신과 몸, 나의 건강을 챙길 수 있는 명상 세션도 준비했습니다. 기술 세션과 코드랩으로 세상을 발전시키는 많은 지식도 얻어가고, 축제를 즐기는 도중에 힘이 들면 명상으로 휴식을 취해보세요!",
        lat: 33.500315,
        lng: 126.530035,
        youtubeUri: '1e-xZ0JOLgY',
        ticketLists: [{ ticketName: 'Class A Ticket', ticketPrice: 20, ticketAmount: 5},{ ticketName: 'Class B Ticket', ticketPrice: 15, ticketAmount: 25},{ ticketName: 'Class C Ticket', ticketPrice: 10, ticketAmount: 0}]
    }

    render() {
        return (
            <Fragment>
                <DetailPost state={this.state}/>
            </Fragment>
        );
    }
}

export default DetailPostContainer;