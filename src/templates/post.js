import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
// import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'
import PageLinks from '../components/PageLinks'
import StaticMapbox from '../components/StaticMapbox'
import PostContentContainer from '../components/PostContentContainer'
import ImageGallery from '../components/ImageGallery'
import styled from 'styled-components'

const LeftColumn = styled.div`
  float: left;
  width: 60%;
  @media (max-width: 750px) {
    // float: right;
    width: 100%;
  }
  // max-width: ${props => props.theme.sizes.maxWidthCentered};
  // margin: 0 auto;
  padding-right: 1em;
`
const SideBar = styled.div`
  width: 40%;
  float: right;
  // padding-left: 1em;
  @media (max-width: 700px) {
    // float: right;
    width: 100%;
  }
`

const ArticleFooter = styled.div`
  clear: both;
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
    links,
    area,
    country,
    images,
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
        
          <LeftColumn>
            <PageBody body={body} />
            {links && <PageLinks links={links} />}
          </LeftColumn>
        
          <SideBar>
            <StaticMapbox location={location} />
            {images && <ImageGallery images={images} />}
          </SideBar>

          <ArticleFooter>
            {tags && <TagList tags={tags} />}
            <PostDate date={publishDate} />
          </ArticleFooter>

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
             images {
               id
               title
               description
               fluid(maxWidth: 500) {
                 ...GatsbyContentfulFluid_tracedSVG
               }
               ogimg: resize(width: 500) {
                 src
                 width
                 height
               }
             }
           }
         }
       `

export default PostTemplate
// _withWebp_noBase64