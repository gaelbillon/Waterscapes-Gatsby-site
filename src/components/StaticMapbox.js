import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StaticMap } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import styled from 'styled-components'

const MapWrapper = styled.div`
  // float: right;
  // width: 40%;
  width: 100%;
  // min-width: 12rem;
  // margin-left: 1em;
  margin-bottom: 4em;
  // margin: 4em 0 1em 1em;
  // @media (max-width: 700px) {
  //   float: right;
  //   width: 100%;
  // }
`
const Marker = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: -0.2em;
  margin-top: -0.2em;
  &:after {
    content: '☓';
  }
`
const StaticMapbox = ({ data, props }) => {
  return (
    <MapWrapper>
      <StaticMap
        width="100%"
        height="17em"
        latitude={props.location.lat}
        longitude={props.location.lon}
        zoom={5}
        mapStyle="mapbox://styles/mapbox/outdoors-v10"
        mapboxApiAccessToken={data.site.siteMetadata.mapboxApiKey}
          >
        {/* 
        // mapStyle="mapbox://styles/mapbox/light-v9" 
        // mapStyle="mapbox://styles/mapbox/satellite-v9"
        */}
        <Marker />
      </StaticMap>
    </MapWrapper>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            mapboxApiKey
          }
        }
      }
    `}
        render={data => <StaticMapbox data={data} props={props} />}
  />
)