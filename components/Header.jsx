import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { helpers } from '../utils/cssHelpers'
import {CssBaseline,Typography,AppBar, Container, Grid, Button, Toolbar, Box, Hidden} from '@material-ui/core';

// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: 'Montserrat, sans-serif',
    },
    ...helpers,
    hero: {
        height: '80vh',
        width: '100%',
        backgroundColor: '#222222',
        backgroundImage: 'url(/static/img/bannerbg.jpg)',
        backgroundBlendMode: 'multiply',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        [theme.breakpoints.down('sm')]: {
            height: '70vh',
        },
    },
    navbar: {
        boxShadow: 'none',
        color: '#FFFFFF'
    },

    logoNcontact: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            marginLeft: '2rem',
            fontSize: 'Montserrat, sans-serif',
        },
    },   
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    icons: {
        display: 'flex',
        alignItems: 'center',
        '& img': {
            marginLeft: '0.4rem',
        }
      },
    links: {
        display: 'flex',
    },
    intro: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '2.1rem',
        lineHeight: 1.2,
        '& h2': {
            padding: '0',
            margin: '0',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.1rem',
            lineHeight: 1,
        },
    },

    jumboDetails:{
        height: '60vh',
    },
    seePortfolio: {
        marginTop: '5rem',
        fontSize: '0.8rem',
        borderTop: '4px solid #DAA63E',
        padding: '0.7rem 0',
        whiteSpace: 'nowrap',
        width: '5%',
        [theme.breakpoints.down('sm')]: {
            width: '15%',
        },
    }
})) 

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.hero}>
            <AppBar position="static" color='transparent' className={`${classes.navbar} ${classes.transparent}`}>
                    <Toolbar className={classes.toolbar}>
                        <Box className={classes.logoNcontact}>
                            <img src='/static/img/logo.svg' alt='logo'/>
                            <Hidden smDown>
                                <Typography variant='body2'>CALL (+234) 90 000 456 987</Typography>
                                <Box component='span' className={classes.icons}>
                                    <img src='/static/img/twitter.svg' alt='twitter'/>
                                    <img src='/static/img/facebook.svg' alt='twitter'/>
                                    <img src='/static/img/insta.svg' alt='twitter'/>
                                </Box>
                            </Hidden>
                        </Box>
                        <Box className={`${classes.links}`}>
                        <Hidden smDown>
                            <Typography variant='body1' className={`${classes.mr_2}`}>Home</Typography>
                            <Typography variant='body1' className={`${classes.mr_2}`}>About</Typography>
                        </Hidden>
                        <img src='/static/img/navBar.svg' alt='navbar'/>
                        </Box>
                    </Toolbar>
            </AppBar>
            <CssBaseline />
            <Container maxWidth="lg" >
                <Grid container className={classes.jumboDetails}>
                    <Grid md={12} lg={12} className={`${classes.intro} ${classes.centerSelf}`}>
                        <div>
                            <h2 className={classes.mb_1}>
                            <span className={classes.yellow}>LUXURY & </span><br/>
                            MORDERN DESIGNS 
                            </h2>
                            <Typography variant={'body1'} className={classes.mb_1}>
                            bespoke design lorem ipsom bespoke design <br />
                            lorem ipsom bespoke design lorem ipsom 
                            </Typography>
                            <Button variant='contained' className={`${classes.btn} ${classes.btn__bold} ${classes.bgyellow} ${classes.mb_1}`} size='large'> 
                                CLICK TO GET A QUOTE NOW
                            </Button>

                            <Box>
                            <Box className={classes.seePortfolio}>
                               SEE OUR PORTFOLIO
                            </Box>
                            </Box>
                        </div>
                    </Grid> 
                </Grid>
            </Container>
            </div>
        </div>
    )
}
