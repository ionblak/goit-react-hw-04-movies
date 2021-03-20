import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  content: {
    padding: '30px',
  },
});

const Content = ({ children }) => {
  const classes = useStyles();

  return <section className={classes.content}>{children}</section>;
};

export default Content;
