import * as React from 'react'

const FindResourcesForm = () => {
  return (
    <section className='border rounded-lg bg-blue-100 p-4 mt-4'>
      <h3 className='text-blue-700 text-lg'>Find resources in the US</h3>
      <select className='mt-4 block w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:bg-white focus:border-gray-500'>
        {/* place holders for now */}
        <option selected={true} className='disabled'>
          Select your state or region
        </option>
        <option>Arizona</option>
        <option>New York</option>
        <option>Florida</option>
      </select>
    </section>
  )
}

export default FindResourcesForm
