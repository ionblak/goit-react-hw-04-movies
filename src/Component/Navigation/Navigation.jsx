import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import { Nav } from 'react-bootstrap';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navLink: {
    color: 'white',
    marginRight: '20px',
  },
  isActive: {
    color: 'orange',
  },
});

const Navigation = () => {
  const classes = useStyles();
  return (
    <>
      <Nav>
        <NavLink
          exact
          to={routes.home}
          className={classes.navLink}
          activeClassName={classes.isActive}
        >
          Home
        </NavLink>
      </Nav>
      <Nav>
        <NavLink
          to={routes.movies}
          className={classes.navLink}
          activeClassName={classes.isActive}
        >
          Movies
        </NavLink>
      </Nav>
    </>
  );
};

export default Navigation;
