import * as React from 'react'
import { GlobeIcon } from '../Icons'

interface HealthInfoItem {
  id: number
  title: string
  subtitle: string
  hostname: string
  url: string
  cachedUrl: string
}

const infoList: HealthInfoItem[] = [
  {
    id: 0,
    title: 'Information about COVID-19 in the United States',
    subtitle: 'Centers for Disease Control and Prevention',
    hostname: 'cdc.gov',
    url: 'https://www.cdc.gov/coronavirus/2019-ncov/about/index.html',
    cachedUrl:
      'https://webcache.googleusercontent.com/search?q=cache:https://www.cdc.gov/coronavirus/2019-ncov/about/index.html'
  },
  {
    id: 1,
    title: 'Symptoms & testing',
    subtitle: 'Centers for Disease Control and Prevention',
    hostname: 'cdc.gov',
    url: 'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/',
    cachedUrl:
      'https://webcache.googleusercontent.com/search?q=cache:https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/'
  },
  {
    id: 2,
    title: 'Coronavirus advisory information',
    subtitle: 'World Health Organization',
    hostname: 'who.int',
    url:
      'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public',
    cachedUrl:
      'https://webcache.googleusercontent.com/search?q=cache:https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'
  },
  {
    id: 3,
    title: 'Coronavirus condition overview',
    subtitle: 'World Health Organization',
    hostname: 'who.int',
    url: 'https://www.who.int/health-topics/coronavirus',
    cachedUrl:
      'https://webcache.googleusercontent.com/search?q=cache:https://www.who.int/health-topics/coronavirus'
  },
  {
    id: 4,
    title: 'Coronavirus Q&A',
    subtitle: 'World Health Organization',
    hostname: 'who.int',
    url: 'https://www.who.int/news-room/q-a-detail/q-a-coronaviruses',
    cachedUrl:
      'https://webcache.googleusercontent.com/search?q=cache:https://www.who.int/news-room/q-a-detail/q-a-coronaviruses'
  }
]

const HealthInfo = () => (
  <section className='mt-4 border rounded-lg'>
    <article className='flex items-baseline p-4 border-b'>
      <h3 className='inline-block text-sm font-semibold mr-4'>Health & Information</h3>
      <p className='bg-red-600 text-white text-xs py-1 px-2 rounded-md flex items-center'>
        <svg className='fill-current mr-1 w-4 h-4' viewBox='0 0 24 24'>
          <path d='M12,5.177L20.631,21L3.369,21L12,5.177ZM12,1L0,23L24,23L12,1ZM11,10L13,10L13,16L11,16L11,10ZM12,19.75C11.311,19.75 10.75,19.19 10.75,18.5C10.75,17.81 11.311,17.25 12,17.25C12.689,17.25 13.25,17.81 13.25,18.5C13.25,19.19 12.689,19.75 12,19.75Z' />
        </svg>
        <span className='font-semibold'>COVID-19 Alert</span>
      </p>
    </article>
    <article>
      {infoList.map((item: HealthInfoItem) => (
        <section className='border-b p-4' key={item.id}>
          <h3 className='font-semibold text-md'>{item.title}</h3>
          <h4 className='font-thin text-sm'>{item.subtitle}</h4>
          <ul className='flex flex-col mt-2 sm:flex-row'>
            <li className='inline-block mt-4 mb-3 sm:mt-5 sm:mr-4'>
              <a
                className='hover:bg-blue-100 font-semibold border rounded-full px-4 py-3'
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon />
                {item.hostname}
              </a>
            </li>
            <li className='inline-block mt-4 mb-3 sm:mt-5 sm:mr-4'>
              <a
                className='hover:bg-blue-100 px-2 py-1 font-semibold border rounded-full px-4 py-3'
                href={item.cachedUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon />
                {item.hostname} <span className='text-gray-600'>(cached)</span>
              </a>
            </li>
          </ul>
        </section>
      ))}
    </article>
  </section>
)

export default HealthInfo
