import React from 'react'
import { Button, Segment } from "semantic-ui-react"
import axios from 'axios'
import Content from './Content'
import Navigator from './Navigator'

export default class Main extends React.Component {

  constructor(props) {
    //make a blank articles list in state
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (<div>
      <Navigator />
      <Content/>
    </div>)
  }
}
