import { Grid, TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import useStyles from './Styles';

const Input = ({ handleChange, autoFocus, half, type, label, name, showPassword, isPasswordHidden, value, required, disabled }) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
                value={value}
                className={classes.inputs}
                name={name}
                label={label}
                onChange={handleChange}
                type={type}
                autoFocus={autoFocus}
                fullWidth
                required={required}
                disabled={disabled}
                variant='filled'
                InputProps={name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={showPassword}>{ isPasswordHidden ? <VisibilityOff/> : <Visibility/> }</IconButton>
                        </InputAdornment>
                        )
                    } 
                : null }
            />
        </Grid>
    )
}

export default Input;