const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '4xmg5mzd',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client
