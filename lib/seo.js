const description = 'Hello there.'

export default {
  title: 'Joshua',
  description,
  canonical: 'https://jkm.now.sh/',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jkm.now.dev/',
    title: 'Joshua Martinez',
    description,
    images: [
      {
        url: 'https://my-branding.now.sh/pfp_t.png',
        width: 100,
        height: 100,
        alt: 'Joshua Martinez'
      }
    ],
    site_name: 'Joshua'
  },
  twitter: {
    handle: '@joshkmartinez',
    site: '@joshkmartinez',
    cardType: 'summary_large_image'
  }
}
