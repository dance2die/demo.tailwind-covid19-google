import * as React from 'react'

import DoTheFive from './DoTheFive'


const ThirdPartyContent = () => (
  <section>
    <img
      src={
        'https://www.google.com/covid19/static/yt-tn-vox-social-distancing.jpg'
      }
      alt='social disntancing'
    />
  </section>
)

function SafetyPreventionTips() {
  return (
    <section className='mt-20'>
      <header className='my-8 text-center'>
        <h2 className='text-2xl'>Safety and prevention tips</h2>
      </header>
      <main>
        <DoTheFive />
        <ThirdPartyContent />
      </main>
    </section>
  )
}

export default SafetyPreventionTips
