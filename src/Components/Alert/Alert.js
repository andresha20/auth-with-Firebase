import useStyles from './Styles';

const Alert = ({ msg, success }) => {

    const classes = useStyles();
    
    return (
        <div className={success ? classes.success : classes.failure }>
            <p>{msg}</p>
        </div>
    )
}

export default Alert;