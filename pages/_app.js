import App, { Container } from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import NextSEO from 'next-seo'
import seo from '../lib/seo'
import router from 'next/router'
import withGA from 'next-ga'

export default withGA('UA-126398308-1', router)(
  class extends App {
    static async getInitialProps({ Component, router, ctx }) {
      let pageProps = {}

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }

      return { pageProps }
    }

    render() {
      const { Component, pageProps } = this.props
      return (
        <Container>
          <NextSEO config={seo} />
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
          <style jsx global>{`
            .page-transition-enter /*> section > *:not(top)*/ {
              opacity: 0;
            }
            .page-transition-enter-active /*> section > *:not(top)*/ {
              opacity: initial;
              transition: opacity 0.2s ease;
            }
            .page-transition-exit /*> section > *:not(top)*/ {
              opacity: initial;
            }
            .page-transition-exit-active /*> section > *:not(top)*/ {
              opacity: 0;
              transition: opacity 0.2s ease;
            }
          `}</style>
        </Container>
      )
    }
  }
)
