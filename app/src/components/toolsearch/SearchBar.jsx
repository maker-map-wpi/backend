import _ from 'lodash'
import React from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

const initialState = { isLoading: false, results: [], value: '' }

const searchStyle = {
  paddingTop: '20px',
  paddingRight: '20px',
  paddingLeft: '20px'
};

export default class SearchBar extends React.Component {
  state = initialState

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title })
    this.props.onResultSelect(e, { result })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.data, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <div style={searchStyle}>
        <Search
          loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, {
            leading: true,
          })}
          results={results}
          value={value}
        />
      </div>
    )
  }
}
