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
            WE ARE AN <span className={classes.yellow}>AWARD WINNING </span>
            <br />ARCHITECTURE AND INTERIOR
            <br />DESIGN FIRM, SERVING BOTH
            <br />RESIDENTIAL AND COMMERCIAL
            <br />CLIENTS.
        </Typography>
        <Typography variant="body1" className={classes.subText}>
        A commitment to architecture tailored to the needs of the client, as well as unique design.
        </Typography>
        <Typography variant="body1" className={classes.subText}>
        Working closely with our clients we can create any unique style, or combination of styles they desire.
        </Typography>
    </div>
    )
}

export default function MissionSection(){
    return(
        <PicSection renderText={renderText} path='/static/img/building5.png'/>
    );
}