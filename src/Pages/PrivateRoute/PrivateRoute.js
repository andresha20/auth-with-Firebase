import { Route, Redirect } from 'react-router-dom';
import { useGlobalContext } from '../../Contexts/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { user } = useGlobalContext();

    return (
        <Route {...rest} render={props => {
            return user !== null ? <Component {...props}/> : <Redirect to='/sign'/>
        }}/>
    )
}

export default PrivateRoute;