import React from 'react';
import PropTypes from 'prop-types';
import Share from './Share';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_TAGS_QUERY } from '../../apollo/queries';

const ShareContainer = ({ classes }) => {
  return (
    <Query query={ALL_TAGS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <FullScreenLoader inverted />;
        if (error) return <p>{`Error! ${error.message}`}</p>;

        return <Share classes={classes} tags={data.tags} />;
      }}
    </Query>
  );
};

ShareContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShareContainer);
