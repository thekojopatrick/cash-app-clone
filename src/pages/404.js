import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <Image />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
