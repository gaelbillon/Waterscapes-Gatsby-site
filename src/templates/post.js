import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'
import { StaticMap } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import styled from 'styled-components'
import PageLinks from '../components/PageLinks'

const MapWrapper = styled.div`
  float: right;
  width: 40%;
  margin-left: 1em;
  margin-bottom: 1em;
  margin-right: 8em;
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

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
    location,
    links
  } = data.contentfulWaterpoint
  const postNode = data.contentfulWaterpoint

  const previous = pageContext.prev
  const next = pageContext.next

  return <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Hero title={title} image={heroImage} height={'60vh'} />

      <Container>
        <MapWrapper>
          <StaticMap
            width="100%"
            height="20em"
            latitude={location.lat}
            longitude={location.lon}
            zoom={5}
            mapStyle="mapbox://styles/mapbox/outdoors-v10"
            mapboxApiAccessToken={process.env.MAPBOX_API_KEY}
          >
          {/* // mapStyle="mapbox://styles/mapbox/light-v9" // mapStyle="mapbox://styles/mapbox/satellite-v9" */}
          <Marker />
          </StaticMap>
        </MapWrapper>

        <PageBody body={body} />
        <PageLinks links={links} />

        {tags && <TagList tags={tags} />}
        <PostDate date={publishDate} />
      </Container>
      <PostLinks previous={previous} next={next} />
    </Layout>
}

export const query = graphql`
         query($slug: String!) {
           contentfulWaterpoint(slug: { eq: $slug }) {
             title
             slug
             metaDescription {
               internal {
                 content
               }
             }
             publishDate(formatString: "MMMM DD, YYYY")
             publishDateISO: publishDate(formatString: "YYYY-MM-DD")
             tags {
               title
               id
               slug
             }
             heroImage {
               title
               fluid(maxWidth: 1800) {
                 ...GatsbyContentfulFluid_withWebp_noBase64
               }
               ogimg: resize(width: 1800) {
                 src
                 width
                 height
               }
             }
             body {
               childMarkdownRemark {
                 html
                 excerpt(pruneLength: 320)
               }
             }
             location {
               lat
               lon
             }
             links {
               childMarkdownRemark {
                 html
               }
             }
           }
         }
       `

export default PostTemplate
function newFunction() {
  return process.env.MAPBOX_API_KEY;
}

