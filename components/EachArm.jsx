import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Grid} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    main: {
        width: '100%',
        height: '37.4rem',
        padding: '1.7rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '2rem',
        color: '#FFFFFF'
    },
    story: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '25px',
        lineHeight: '30px',
    }
}))

export default function EachArm({name, description, path, color}) {
    const classes = useStyles();
    return (
        <Grid md={3} lg={3} sm={12}>
            <div className={classes.main} style={{
                backgroundImage: `url(${path})`,
                backgroundBlendMode: 'multiply',
                backgroundColor: color,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <Typography variant='body1' className={classes.title}>{name}</Typography>
        <Typography variant='body1' className={classes.story}>{description}</Typography>
            </div>
        </Grid>
    )
}
