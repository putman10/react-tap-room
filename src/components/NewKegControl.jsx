import React from 'react';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';
import NewKegConfirmation from './NewKegConfirmation';

class NewKegControl extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handleKegConfirmation = this.handleKegConfirmation.bind(this);
  }

  handleKegConfirmation() {
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation} />;
    }
    else {
      currentVisibleContent = <NewKegConfirmation onNewKegConfirmation={this.handleKegConfirmation}/>;
    }
    return (
      <div>
        {currentVisibleContent}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
