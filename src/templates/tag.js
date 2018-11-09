import React from 'react'
import { graphql } from 'gatsby'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'
import PageTitle from '../components/PageTitle'
import Pagination from '../components/Pagination'
import Container from '../components/Container'

const TagTemplate = ({ data, pageContext }) => {
  const waterpoints = sortBy(data.contentfulTag.waterpoint, 'publishDate').reverse()

  const { title, slug } = data.contentfulTag
  const numberOfWaterpoints = waterpoints.length
  const skip = pageContext.skip
  const limit = pageContext.limit
  const currentPage = pageContext.currentPage
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      {isFirstPage ? (
        <Helmet>
          <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      ) : (
        <Helmet>
          <title>{`Tag: ${title} - Page ${currentPage} - ${
            config.siteTitle
          }`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - Page ${currentPage} - ${
              config.siteTitle
            }`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      )}

      <Container>
        <PageTitle small>
          {numberOfWaterpoints} Waterpoints Tagged: &ldquo;
          {title}
          &rdquo;
        </PageTitle>

        <CardList>
          {waterpoints.slice(skip, limit * currentPage).map(waterpoint => (
            <Card {...waterpoint} key={waterpoint.id} />
          ))}
        </CardList>
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      waterpoint {
        id
        title
        slug
        area
        country
        publishDate(formatString: "MMMM DD, YYYY")
        heroImage {
          title
          fluid(maxWidth: 1800) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        body {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 80)
          }
        }
      }
    }
  }
`

export default TagTemplate