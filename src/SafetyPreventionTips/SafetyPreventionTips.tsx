import * as React from 'react'

import styles from './DoTheFive.module.css'

import doTheFive from './do-the-five.gif'

const DoTheFive = () => (
  <article className="border rounded-lg p-4 flex flex-col justify-center">
    <img className="mx-auto mt-2 mb-6 max-w-full max-h-full w-auto h-32" src={doTheFive} alt='do the five' />
    <div className="mx-auto block">
    <ol className="flex flex-col w-full items-start justify-start">
      <li className={styles.counter}><span className="font-semibold uppercase">Hands</span> Wash them often</li>
      <li className={styles.counter}><span className="font-semibold uppercase">Elbow</span> Cough into it</li>
      <li className={styles.counter}><span className="font-semibold uppercase">Face</span> Don't touch it</li>
      <li className={styles.counter}><span className="font-semibold uppercase">Space</span> Keep safe distance</li>
      <li className={styles.counter}><span className="font-semibold uppercase">Home</span> Stay if you can</li>
    </ol>
    </div>
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
