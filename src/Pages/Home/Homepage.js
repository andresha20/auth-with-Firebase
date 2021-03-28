import { Grid, Box, Typography, Button } from '@material-ui/core';
import { useGlobalContext } from '../../Contexts/Auth';
import { useHistory } from 'react-router-dom';
import UpdateUser from '../../Components/UpdateUser/UpdateUser';
import useStyles from './Styles';

const Homepage = () => {

    const classes = useStyles();
    const history = useHistory();
    const { logout, setLoggedin } = useGlobalContext();

    const handleLogout = async () => {
        try {
            const response = await logout();
            console.log(response);
            setLoggedin(false);
            return history.push('/sign');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} sm={8} className={classes.leftDiv}>
                <Box component='div' align='center' className={classes.leftBox}>
                    <Typography variant='h4' color='textPrimary' className={classes.title}>DASHBOARD</Typography>
                    <Typography variant='body1' color='textSecondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur exercitationem asperiores est numquam facilis ullam, aliquid repudiandae aut itaque? Odit quo ipsam, eligendi neque ea officiis. Natus illum atque necessitatibus inventore ab ut, aliquid perspiciatis voluptas officiis, accusamus, harum dolores!</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.rightDiv}>
                <Box component='div' className={classes.rightBox}>
                    <Box component='div' align='center' className={classes.rightDiv}>
                        <Typography className={classes.button} variant='h4' color='textPrimary'>SETTINGS</Typography>
                    </Box>
                    <UpdateUser />
                    <Button variant='contained' fullWidth size='large' color='primary' onClick={handleLogout}>Log out</Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Homepage;