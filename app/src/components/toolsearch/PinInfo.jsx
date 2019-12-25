import React from 'react';
import {Button} from 'semantic-ui-react'
export default class CityInfo extends React.Component {

  render() {
    const {info} = this.props;

    return (
      <div>
        <h3>{this.props.name}</h3>
        <h4>Hours: {info.hours}</h4>
        <hr/>
        <Button size='mini'>Scedule Time</Button>
        <Button size='mini'>Get Trained</Button>
        <Button size='mini'>More Info</Button>
      </div>
    );
  }
}
