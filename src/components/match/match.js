import React, { Fragment } from 'react';
import express from 'express';
import classes from './match.module.css';
import { useSelector } from 'react-redux';

function Match() {
}

const Match = express() => {

    const uiColor=useSelector(state=>state.uiColor);
    return (
        <Fragment>
            <div className={classes.contactMe} id='getInTouch'>
                <div className={classes.avatar}>
                    <img src={PersonalData.imageUrl} alt="Loading ..." style={{borderColor:uiColor}} />
                </div>
                <div className={classes.contactCard}>
                    <h1 style={{color:uiColor}}>About Me</h1>
                    <div>
                        {PersonalData.aboutMe}
                    </div>
                    <div className={classes.contactLinks}>
                        <SocialLinks className={classes.links} />
                    </div>
                    <a href={PersonalData.resumeLink} target='_blank noreferrer'>
                        <Button className={classes.resumeBtn}>See My Resume</Button>
                    </a>
                </div>
            </div>
            <GetInTouch />
        </Fragment>
    )
};
export default Match;