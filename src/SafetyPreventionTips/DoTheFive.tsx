import * as React from 'react'

import styles from './DoTheFive.module.css'

import doTheFive from './do-the-five.gif'

const DoTheFive = () => (
  <section className='border rounded-lg p-4 flex flex-col items-center'>
    <img
      className='mx-auto mt-2 mb-6 max-w-full max-h-full w-auto h-32'
      src={doTheFive}
      alt='do the five'
    />
    <article className='mx-auto block'>
      <ol className='flex flex-col w-full items-start justify-start tracking-wide'>
        <li className={styles.counter}>
          <span className='font-semibold uppercase'>Hands</span> Wash them often
        </li>
        <li className={styles.counter}>
          <span className='font-semibold uppercase'>Elbow</span> Cough into it
        </li>
        <li className={styles.counter}>
          <span className='font-semibold uppercase'>Face</span> Don't touch it
        </li>
        <li className={styles.counter}>
          <span className='font-semibold uppercase'>Space</span> Keep safe
          distance
        </li>
        <li className={styles.counter}>
          <span className='font-semibold uppercase'>Home</span> Stay if you can
        </li>
      </ol>
    </article>
    <article className='mt-4'>
      <span className='text-gray-600 text-xs block'>
        General public health information
      </span>
    </article>
    <a
      className='mt-4 bg-blue-600 text-white rounded-sm w-full py-3 text-center'
      href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'
      target='_blank'
      rel='noopener noreferrer'
    >
      More info
    </a>
  </section>
)

export default DoTheFive