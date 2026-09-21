import { Helmet } from 'react-helmet-async'
import { Btn } from '../components/ui'


export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Property Not Found | Real Estate</title>

        <meta
          name="description"
          content="The requested property could not be found."
        />
      </Helmet>
      <div className="grid min-h-screen place-items-center bg-brand-900 px-4 text-center">
        <div>
          <b className="text-8xl text-gold">404</b>
          <h1 className="mt-2 text-2xl font-bold text-white">
            This page doesn't exist
          </h1>
          <div className="mt-6">
            <Btn to="/">Back to home</Btn>
          </div>
        </div>
      </div>
    </>
  )
}

