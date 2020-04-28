import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { helpers } from '../utils/cssHelpers';
import PicSection from './PicSection';
import {Typography} from '@material-ui/core';


const myStyles = makeStyles(theme => ({
    ...helpers,
    mainText: {
        lineHeight: 1.3,
        fontSize: '1.8rem',
    },
    subText: {
        marginTop: '2rem',
        fontSize: '2rem',
        fontWeight: 'normal',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontweight: 'normal',
        lineHeight: '1.1',
    }
}));

const renderText = () => {
    const classes = myStyles();
    return(
    <div>
        <Typography variant="body1" className={`${classes.bold} ${classes.mainText}`}> 
            BHOUX MISSION IS TO <span className={classes.yellow}>DESIGN </span>
            <br /><span className={classes.yellow}>AND DEVELOP </span>
            <br />THE BEST BUILDINGS 
            <br />AROUND.
        </Typography>
        <Typography variant="body1" className={classes.subText}>
        We believe Everyone deserve a taste and 
        every client is special as such we strive 
        to deliver a top notch experience to everyone 
        who comes in contact with us.
        </Typography>
    </div>
    )
}

export default function MissionSection(){
    return(
        <PicSection renderText={renderText} path='/static/img/missionImage.png'/>
    );
}