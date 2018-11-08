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
import PageLinks from '../components/PageLinks'
import StaticMapbox from '../components/StaticMapbox'
import PostContentContainer from '../components/PostContentContainer'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
    location,
    links,
    area,
    country,
  } = data.contentfulWaterpoint
  const postNode = data.contentfulWaterpoint

  const previous = pageContext.prev
  const next = pageContext.next

  return <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Hero title={title} image={heroImage} area={area} country={country} height={'60vh'} />

      <Container>
        <PostContentContainer>
          <StaticMapbox location={location} />
          <PageBody body={body} />
          <PageLinks links={links} />
          {tags && <TagList tags={tags} />}
          <PostDate date={publishDate} />
        </PostContentContainer>
      </Container>
      {/* <PostLinks previous={previous} next={next} /> */}
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
                 ...GatsbyContentfulFluid_tracedSVG
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
             area
             country
           }
         }
       `

export default PostTemplate
// _withWebp_noBase64