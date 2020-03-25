import * as React from 'react';

export default () => (
  <section className='mt-4 border rounded-lg'>
    <p className='w-full p-4 text-center text-md text-gray-700'>
      Third Party Content
    </p>
    <img
      src={
        'https://www.google.com/covid19/static/yt-tn-vox-social-distancing.jpg'
      }
      alt='social disntancing'
    />
    <div className='p-4'>
      <h3 className='font-semibold text-lg'>
        Social distancing during coronavirus, explained by an expert
      </h3>
      <div className="my-2 text-md text-gray-600">
        <p>Vox Media</p>
      </div>
      <div className=" text-md text-gray-600">
        <p>General public health information</p>
      </div>
    </div>
  </section>
)