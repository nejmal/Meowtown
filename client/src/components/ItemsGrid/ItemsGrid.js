import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

// grab the itemcard from the component

const ItemsGrid = ({ classes }) => {
  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={12}>
        <Grid
          container
          className={classes.demo}
          justify="center"
          spacing={Number(spacing)}
        >
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <ItemCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>spacing</FormLabel>
              <RadioGroup
                name="spacing"
                aria-label="Spacing"
                value={spacing}
                onChange={this.handleChange('spacing')}
                row
              >
                <FormControlLabel value="0" control={<Radio />} label="0" />
                <FormControlLabel value="8" control={<Radio />} label="8" />
                <FormControlLabel value="16" control={<Radio />} label="16" />
                <FormControlLabel value="24" control={<Radio />} label="24" />
                <FormControlLabel value="32" control={<Radio />} label="32" />
                <FormControlLabel value="40" control={<Radio />} label="40" />
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

ItemsGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ItemsGrid);
