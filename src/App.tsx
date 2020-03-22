import React from 'react'
import { Header } from './Header'
import { Definition } from './Definition'

const Title = () => (
  <h2 className='text-2xl my-4'>COVID-19 Information & Resources</h2>
)

const HealthInfo = () => (
  <section className='mt-4 border rounded-lg'>
    <header className='flex items-baseline p-4'>
      <h3 className='inline-block text-lg mr-4'>Health & Information</h3>
      <p className='bg-red-600 text-white text-xs py-1 px-2 rounded-md flex items-center'>
        ⚠ COVID-19 Alert
      </p>
    </header>
  </section>
)

function App() {
  return (
    <div className=''>
      <Header />
      <main className='mx-8'>
        <Title />

        <Definition />

        <HealthInfo />
      </main>
    </div>
  )
}

export default App
