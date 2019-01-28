const styles = theme => ({
  card: {
    // maxHeight: 800,
    paddingBottom: theme.spacing.unit * 1.5
  },
  media: {
    height: 270
  },
  title: {
    color: theme.palette.text.primary
  },
  tags: {
    // color: 'rgba(0, 0, 0, 0.54)'
    color: theme.palette.text.secondary
  },
  button: {
    fontSize: 16
  },
  avatar: {
    marginRight: theme.spacing.unit * 2,
    width: 60,
    height: 60
    // borderRadius: 50
  },
  gravatar: {
    borderRadius: 50,
    width: 80,
    height: 80
  },
  owner: {
    marginBottom: theme.spacing.unit * 6
  },
  ownerName: {
    width: '100%'
  }
});

export default styles;
