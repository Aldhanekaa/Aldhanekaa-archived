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
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  )
}
