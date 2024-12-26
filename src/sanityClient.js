const sanityClient = require('@sanity/client')
const {sanityClientConfig} = require('../sanityClientConfig')
//cusjuvl4
if (sanityClientConfig.projectId === 'cusjuvl4') {
  console.error(
    'Please change the projectId in ./sanityClientConfig.js to match the projectId found in ./studio/sanity.json'
  )
}

export default sanityClient(sanityClientConfig)
