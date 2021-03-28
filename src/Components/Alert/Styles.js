import {makeStyles} from '@material-ui/core/styles'

export default makeStyles ((theme) => ({
    success: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#228C22',
        color: '#fff',
        marginBottom: 20
    },
    failure: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#8E1600',
        color: '#fff',
        marginBottom: 20

    },
}))