import React from 'react'
import { Header } from './Header'
import { Definition } from './Definition'
import { HealthInfo } from './HealthInfo'
import { FindResourcesForm } from './FindResourcesForm'

const Title = () => (
  <h2 className='text-2xl my-4'>COVID-19 Information & Resources</h2>
)



function App() {
  return (
    <div className=''>
      <Header />
      <main className='mx-8'>
        <Title />

        <Definition />

        <HealthInfo />

        <FindResourcesForm />
      </main>
    </div>
  )
}

export default App
