import * as React from 'react'

import DoTheFive from './DoTheFive'
import ThirdPartyContent from './ThirdPartyContent'

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
