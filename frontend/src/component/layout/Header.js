import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import logo from "../../images/logo2.png";

const Header = () => {

  return (
    <nav>
      <div class="navbar">
        <div class="container1 nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
          <Link to='/'><img src={logo} alt="" /></Link>
          </div>
          <div class="menu-items">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/products'>Product</Link></li>
            <li><Link to='/contact'>Contacts</Link></li>
            <li><Link to='/search'><SearchIcon className='header_Icon'/></Link></li>
            <li><Link to='/cart'><ShoppingCartIcon className='header_Icon' /></Link></li>
            <li><Link to='/login'><PersonIcon className='header_Icon' /></Link></li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
