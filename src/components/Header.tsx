import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () =>{
    return(
        <div className={classes.header}>
            <ul>
                <li>
                   <NavLink className={({isActive})=> isActive? classes.active : ""} to="/guest-list">Party Guest Lis</NavLink>
                </li>
                <li>
                  <NavLink to="/find-user" className={({isActive})=> isActive? classes.active : ""}>Search</NavLink>  
                </li>
            </ul>  
        </div>
    )
}
export default Header;