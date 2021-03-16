import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  content: {
    padding: '30px',
  },
});

const Content = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.content}>{children}</div>;
};
export default Content;
