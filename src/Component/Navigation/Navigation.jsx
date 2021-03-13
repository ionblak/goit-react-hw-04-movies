import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    listStyle: 'none',
    height: '100vw',
    width: '200px',
    borderRight: ['1px', 'solid', 'green'],
  },
  item: {
    textAlign: 'center',
    margin: '20px',
    padding: '5px',
  },
  navLink: {
    fontSize: '20px',
    color: 'black',
  },
  isActive: {
    color: 'green',
  },
});

const Navigation = () => {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      <li className={classes.item}>
        <NavLink
          exact
          to="/"
          className={classes.navLink}
          activeClassName={classes.isActive}
        >
          Home
        </NavLink>
      </li>
      <li className={classes.item}>
        <NavLink
          className={classes.navLink}
          activeClassName={classes.isActive}
          to="/movies"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
