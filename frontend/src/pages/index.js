import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/ui/layout"

import * as styles from "../components/ui/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        Welcome to <b>The Comic Swap!</b>
      </h1>
    </div>

  </Layout>
)

export default IndexPage
