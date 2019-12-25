import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {Segment} from 'semantic-ui-react'
import ToolSearch from './toolsearch/ToolSearch.jsx'
import Scheduler from './scheduler/Scheduler.jsx'

const divStyle= {
  marginLeft: '210px',
  width:'100%',
};

export default class Content extends React.Component {

  constructor(props) {
    //make a blank articles list in state
    super(props)
  }


  componentDidMount() { }

  render() {
    return (<div style={divStyle}>
      <Switch>
      <Route path='/resources/tools' component={ToolSearch}/>
      <Route path='/resources/schedule/{tool}' component={Scheduler}>


    </Switch>
  </div>)
  }
}
