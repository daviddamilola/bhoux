import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { helpers } from '../utils/cssHelpers'
import { Container, Grid} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    ...helpers,
    main: {
        padding: ' 4rem 0'
    },
    textContainer: {
        width: '495px'
    }
}));

export default function PicsSection({renderText, path}){
    const classes = useStyles()
    return(
        <Container maxWidth='lg' >
            <Grid container className={classes.main}>
                <Grid md={6} lg={6} sm={12}>
                    <Grid sm={12} md={12} lg={11} >
                        <img src={path} style={{
                        height: '25rem',
                        width: '100%',
                    }} alt="interior design"/>
                    </Grid>
                </Grid>
                <Grid md={6} lg={6} sm={12}>
                    <div className="textContainer">
                        {renderText()}
                    </div>
                </Grid> 
            </Grid>
        </Container>
    )
}