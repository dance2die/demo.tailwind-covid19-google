import * as React from 'react'

import './DoTheFive.module.css'

import doTheFive from './do-the-five.gif'

const DoTheFive = () => (
  <article>
    <img src={doTheFive} alt='do the five' />
    <ol>
      <li><span className="uppercase">Hands</span> Wash them often</li>
      <li><span className="uppercase">Elbow</span> Cough into it</li>
      <li><span className="uppercase">Face</span> Don't touch it</li>
      <li><span className="uppercase">Space</span> Keep safe distance</li>
      <li><span className="uppercase">Home</span> Stay if you can</li>
    </ol>
  </article>
)

function SafetyPreventionTips() {
  return (
    <section>
      <header>
        <h2>SafetyPreventionTips</h2>
      </header>
      <main>
        <DoTheFive />
      </main>
    </section>
  )
}

export default SafetyPreventionTips
