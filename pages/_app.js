import React from 'react'
import NextApp from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from "../styles/global";

const theme = {
  colors: {
    action: '#92D3EE',
    accent: '#FF8383',
    body: '#6C6C6C',
    headers: '#146385',
    dark: '#262626',
    white: '#FFFFFF',
  }
}

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}