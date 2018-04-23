import React from 'react'
import Link from '../util/Link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about">About</Link>
    <br />
    <Link to="http://www.google.com">Google</Link>
  </div>
)

export default IndexPage
