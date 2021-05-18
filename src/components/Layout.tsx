import Header from "../components/navbar"
import Footer from "../components/Footer"

import React from "react"
import { PageProps } from "gatsby"

export default function Layout({
  children,
  props,
}: {
  children: JSX.Element | JSX.Element[]
  props: PageProps
}) {
  console.log(props)

  return (
    <React.Fragment>
      {["/", "/about"].includes(props.uri) && <Header />}
      {children}
      {["/", "/about"].includes(props.uri) && <Footer />}
    </React.Fragment>
  )
}
