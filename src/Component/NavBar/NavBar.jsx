import Navigation from '../Navigation';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { Navbar, Nav } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navLink: {
    color: 'white',
    marginRight: '30px',
    '&:hover': {
      color: 'white',
      textDecoration: 'none',
    },
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <NavLink exact className={classes.navLink} to={routes.home}>
            Filmoteca
          </NavLink>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Navigation />
        </Nav>
      </Navbar>
    </header>
  );
};
export default NavBar;
