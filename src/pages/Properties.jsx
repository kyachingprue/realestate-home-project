import { Helmet } from 'react-helmet-async'
import PropertiesFeature from '../components/PropertiesFeature'

export default function Properties() {
  return (
    <>
      <Helmet>
        <title>Properties | Real Estate</title>

        <meta
          name="description"
          content="Explore our collection of premium properties, homes, apartments and investment opportunities."
        />

        <link rel="canonical" href="https://yourwebsite.com/properties" />
      </Helmet>
      <section>
        <PropertiesFeature />
      </section>
    </>
  )
}
