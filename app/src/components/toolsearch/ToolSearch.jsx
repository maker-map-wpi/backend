import React from 'react'
import { Container, Segment, Image, Search } from "semantic-ui-react"
import SearchBar from './SearchBar';
import Pin from './Pin';
import PinInfo from './PinInfo';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';



const mapboxToken = "pk.eyJ1IjoibWFrZXJtYXB3cGkiLCJhIjoiY2swdTltbzh3MGx5cDNjcjFwZ3VzazMyOSJ9.1v6fPlHkiBC92yjc-rV6iQ"

const tools = [
  {
    title: 'bandsaw',
    locations: ['foise', 'washburn', 'higgins', 'goddard']
  },
  {
    title: 'cnc mill',
    locations: ['washburn']
  },
  {
    title: 'lathe',
    locations: ['washburn', 'higgins']
  }
]

const buildings = {
  foise: {
    lat: 42.274346,
    long: -71.808640,
    hours: '06:00 to 24:00'
  },
  washburn: {
    lat: 42.274769,
    long: -71.806988,
    hours: '08:00 to 18:00'
  },
  higgins: {
    lat: 42.274152,
    long: -71.8082925,
    hours: '08:00 to 16:00'
  },
  goddard: {
    lat: 42.275469,
    long: -71.807814,
    hours: '08:00 to 16:00'
  }

}

export default class ToolSearch extends React.Component {

  constructor(props) {
    //make a blank articles list in state
    super(props)
    this.state = {
      viewport: {
        width: '100%',
        height: '100vh',
        latitude: 42.2736,
        longitude: -71.8063,
        zoom: 16
      },
      highlights: [],
      popupInfo: null,
      curTool: null,
    }
  }

  _renderPopup() {
    const {popupInfo} = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.long}
          latitude={popupInfo.lat}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <PinInfo info={popupInfo} name={this.state.curTool}/>
        </Popup>
      )
    );
  }

  onResultSelect(event, { result }) {
    this.setState({
      highlights: result.locations.map(loc => buildings[loc]),
      curTool: result.title
    })
  }

  componentDidMount() {
  }

  render() {

    return (<div>
      <Container fluid>
        <div>
          <ReactMapGL
            mapboxApiAccessToken={mapboxToken}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({ viewport: viewport })}
            mapStyle={'mapbox://styles/mapbox/street-v9'}
          >
            {this.state.highlights.map(loc => (
              <Marker key={loc.lat} latitude={loc.lat} longitude={loc.long} offsetLeft={-20} offsetTop={-10}>
                <Pin onClick={() => this.setState({ popupInfo: loc })} />
              </Marker>))
            }

            {this._renderPopup()}

            <SearchBar
              data={tools}
              onResultSelect={this.onResultSelect.bind(this)}
            />

          </ReactMapGL>
        </div>
      </Container>
    </div >
    )
  }
}
