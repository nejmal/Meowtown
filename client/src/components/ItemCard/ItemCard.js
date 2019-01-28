import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import Gravatar from 'react-gravatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const ItemCard = ({ classes, item }) => {
  return (
    <Card className={classes.card}>
      <Fragment>
        <CardMedia
          className={classes.media}
          image={item.imageurl}
          title={item.title}
        />
        <CardContent>
          <Grid container className={classes.owner} alignItems="center">
            <Avatar className={classes.avatar}>
              <Gravatar
                email={item.itemowner.email}
                default="retro"
                className={classes.gravatar}
              />
            </Avatar>
            <Grid item>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.ownerName}
              >
                {item.itemowner.fullname}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.ownerName}
              >
                {item.itemowner.fullname}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            component="h2"
            variant="display1"
            gutterBottom
            className={classes.title}
          >
            {item.title}
          </Typography>
          {item.tags.map(tag => (
            <Typography
              variant="body1"
              gutterBottom
              key={tag.id}
              className={classes.tags}
            >
              <span>{tag.title}</span>
            </Typography>
          ))}
          <Typography variant="body1" gutterBottom>
            {item.description}
          </Typography>
        </CardContent>
      </Fragment>
      <CardActions>
        <Button variant="outlined" className={classes.button}>
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
};

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemCard);

// put the mapping over here and grab the itemcard from components
// itemcard is a component since it is useable
