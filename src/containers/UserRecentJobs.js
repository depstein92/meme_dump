import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import actions from '../actions/index';
import '../style/UserProfile.scss';


class UserRecentJobs extends React.Component{
  constructor(props){
    super(props);

    this.state = { data: {} }
  };

  render(){
    const { jobs } = this.props.userData.payload; //tommorow
    console.log( 'userrecentJobs', this.props.userData);
    console.log('jobs', jobs);

    return(
      <div className={"user-recent-job-container"}>
    
     { Object.values(jobs).map(obj => {
        return(
       <div className={"jobs-completed-post"}>
          <Card>
            <Card.Content header={`Customer ${obj.customer}`} />
            <Card.Content description={obj.job_description} />
            <Card.Content extra>
              <Icon name='star outline' />
              Rating: {obj.rating}
            </Card.Content>
         </Card>
        </div>
          )
       }) }

    </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};

export default connect(mapStateToProps)(UserRecentJobs);
