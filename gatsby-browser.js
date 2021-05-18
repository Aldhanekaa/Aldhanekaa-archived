import "bootstrap/dist/css/bootstrap.css"
import Layout from "./src/components/Layout"
import React from "react"
import { WrapPageElementBrowserArgs } from "gatsby"

/**
 * @param {WrapPageElementBrowserArgs} wrapPageElementProps - The date
 */
function wrapPageElement(wrapPageElementProps) {
  // ...
  const { element, props } = wrapPageElementProps
  return <Layout props={props}>{element}</Layout>
}

export { wrapPageElement }
