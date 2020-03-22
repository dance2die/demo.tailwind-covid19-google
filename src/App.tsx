import React from 'react'
import { Header } from './Header'

const Title = () => <h2 className="text-2xl my-4">COVID-19 Information & Resources</h2>

function App() {
  return (
    <div className=''>
      <Header />
      <main className="mx-4">
        <Title />
      </main>
    </div>
  )
}

export default App
