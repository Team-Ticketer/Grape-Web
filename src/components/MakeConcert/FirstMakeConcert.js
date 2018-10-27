import React from 'react';

import './FirstMakeConcert.scss';

const FirstMakeConcert = ({incIndex, changeTransferable, changeOrgName, changeConcertName, changeStartYY, changeStartMM, changeStartDD, changeEndYY, changeEndMM, changeEndDD, changeYoutubeUri, changeLocation, changeFile, changeSpecificInfo, changePersonalAgree, state }) => {
    return (
        <div className="first--wrapper">
            <div className="first--wrapper--inner">
                <div className="first--organization">
                    <p className="first--form--info">organization or Company info</p>
                    <div className="first--organization--form">
                        <input type="text" className="first--organization--description" placeholder="Name" value={state.orgName} onChange={changeOrgName}/>
                    </div>
                </div>

                <div className="first--name">
                    <p className="first--form--info">
                    Concert Name
                    </p>
                    <input type="text" className="first--name--input" placeholder="Name" value={state.concertName} onChange={changeConcertName}/>
                </div>

                <div className="first--date">
                    <p className="first--form--info">
                    Concert Date
                    </p>
                    <div className="first--date--form--wrapper">
                        <div className="first--date--form">
                            <span className="first--date--intro">Start</span>
                            <div className="first--date--input">
                                <input type="number" className="first--date--input--year" placeholder="YYYY" value={state.startYY} onChange={changeStartYY}/>
                                <input type="number" className="first--date--input--date" placeholder="MM" max="12" value={state.startMM} onChange={changeStartMM}/>
                                <input type="number" className="first--date--input--date" placeholder="DD" max="31" value={state.startDD} onChange={changeStartDD}/>
                            </div>
                        </div>
                        <div className="first--date--form">
                            <span className="first--date--intro">End</span>
                            <div className="first--date--input">
                                <input type="number" className="first--date--input--year" placeholder="YYYY" value={state.endYY} onChange={changeEndYY}/>
                                <input type="number" className="first--date--input--date" placeholder="MM" max="12" value={state.endMM} onChange={changeEndMM}/>
                                <input type="number" className="first--date--input--date" placeholder="DD" max="31" value={state.endDD} onChange={changeEndDD}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="first--video">
                    <p className="first--form--info">
                    Introduce Video
                    </p>
                    <span className="first--video--wrapper">
                        <span className="first--video--prefix">youtu.be/</span>
                        <input type="text" className="first--video--input" placeholder="play-code" value={state.youtubeUri} onChange={changeYoutubeUri}/>
                    </span>
                </div>

                <div className="first--location">
                    <p className="first--form--info">
                        Location
                    </p>
                    <div className="first--location--wrapper">
                        <input type="text" className="first--organization--description" value={state.location} onChange={changeLocation}/>
                    </div>
                </div>
                
                <div className="first--image">
                    <p className="first--form--info">
                        Header Image
                    </p>
                    <div className="first--image--wrapper">
                        <input type="file" id="first--image--input" className="first--image--input" value={state.file} onChange={changeFile}/>
                    </div>
                </div>

                <div className="first--specific--info">
                    <p className="first--form--info">
                        Specific Info
                    </p>
                    <textarea className="first--specific--info--input" placeholder="Write Here" value={state.specificInfo} onChange={changeSpecificInfo}></textarea>
                </div>
                <div className="first--check">
                    <span className="first--check--text">
                    Allow transactions
                    </span>
                    <input type="checkbox" onChange={changeTransferable} checked={state.transferable}/>
                </div>
                <div className="first--check">
                    <span className="first--check--text">Check personal information ageement</span>
                    <input type="checkbox" className="first--check--input" value={state.personalAgree} onChange={changePersonalAgree}/>
                </div>

                <div className="first--next">
                    <input type="button" className="first--next--btn" value="Next: ticket info" onClick={incIndex}/>
                </div>
            </div>
        </div>
    );
};

export default FirstMakeConcert;