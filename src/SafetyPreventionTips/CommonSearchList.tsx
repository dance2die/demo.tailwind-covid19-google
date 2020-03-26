import * as React from 'react';


const searchData = [
  {
    title: 'Latest coronavirus news',
    url: 'https://www.google.com/search?q=Latest+coronavirus+news'
  },
  {
    title: 'Remote jobs',
    url: 'https://www.google.com/search?q=remote%20jobs'
  },
  {
    title: 'How to self-isolate in a shared house',
    url: 'https://www.google.com/search?q=How+to+self-isolate+in+a+shared+house'
  },
  {
    title: 'What is shelter in place?',
    url: 'https://www.google.com/search?q=What+is+shelter+in+place?'
  },
  {
    title: 'Is it safe to travel?',
    url: 'https://www.google.com/search?q=Is+it+safe+to+travel?'
  },
  {
    title: 'What is social distancing?',
    url: 'https://www.google.com/search?q=What+is+social+distancing?'
  },
  {
    title: 'Things to do at home',
    url: 'https://www.google.com/search?q=Things+to+do+at+home'
  }
]

const CommonSearch: React.FC<{ title: string; url: string }> = ({
  title,
  url
}) => (
  <a href={url} target='_blank' rel='noopener noreferrer'>
    <div className='border rounded-md p-4 mb-4 flex items-center hover:bg-blue-100'>
      <svg
        className='inline-block'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='#3182ce'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <circle cx='11' cy='11' r='8'></circle>
        <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
      </svg>
      <span className='ml-2 font-semibold text-blue-600'>{title}</span>
    </div>
  </a>
)

const CommonSearchList = () => (
  <section className='mt-12'>
    <h2 className='font-semibold text-lg'>
      Common searches related to coronavirus (COVID-19)
    </h2>
    <ul className=" mt-6">
      {searchData.map(data => (
        <li key={data.url}>
          <CommonSearch title={data.title} url={data.url} />
        </li>
      ))}
    </ul>
  </section>
)

export default CommonSearchList