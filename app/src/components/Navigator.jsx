import React from 'react'
import { Menu, Icon, Image, Segment } from "semantic-ui-react"
import { Link } from 'react-router-dom'

export default class Task extends React.Component {

  constructor(props) {
    //make a blank articles list in state
    super(props)
  }

  componentDidMount() {
  }


  render() {
    return (<Menu inverted fixed='left' vertical borderless>
      <Menu.Item header>
        <Image src='https://upload.wikimedia.org/wikipedia/en/1/1b/WPI_logo.png' size='mini' spaced='right' />
        <strong>Maker Map &nbsp;</strong>
        <small>v0.0.0</small>
      </Menu.Item>
      <Menu.Menu>
        <Menu.Item as={'a'}
          href=''
        >
          Github
      <Icon name='github' />
        </Menu.Item>
      </Menu.Menu>
      <Menu.Item header>
        <strong>Resources</strong>
      </Menu.Item>
      <Menu.Menu>
        <Menu.Item as={Link}
          name='find tools'
          to='/resources/tools/'
        />
        <Menu.Item as={Link}
          name='schedule resources'
          to='/resources/schedule/'
        />
        <Menu.Item as={Link}
          name='model resource page'
          to='/ex/resource/'
        />
      </Menu.Menu>
      <Menu.Item header>
        <strong>People</strong>
      </Menu.Item>
      <Menu.Menu>
        <Menu.Item as={Link}
          name='find professor'
          to='/people/professor/'
        />
        <Menu.Item as={Link}
          name='find students'
          to='/people/student/'
        />
        <Menu.Item as={Link}
          name='find faculty'
          to='/people/faculty/'
        />
        <Menu.Item as={Link}
          name='model person page'
          to='/ex/person/'
        />
      </Menu.Menu>
      <Menu.Item header>
        <strong>Projects</strong>
      </Menu.Item>
      <Menu.Menu>
        <Menu.Item as={Link}
          name='find projects'
          to='/projects/active/'
        />
        <Menu.Item as={Link}
          name='example project page'
          to='/ex/projects/'
        />
      </Menu.Menu>
    </Menu >)
  }
}
