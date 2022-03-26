import classes from './Header.module.css';

const Header = () =>{
    return(
        <div className={classes.header}>
            <ul>
                <li>
                   <a>Party Guest Lis</a> 
                </li>
                <li>
                  <a>Search</a>  
                </li>
            </ul>  
        </div>
    )
}
export default Header;