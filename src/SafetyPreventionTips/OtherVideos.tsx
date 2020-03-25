import * as React from 'react';

const videoSources = [
  {
    title: 'How to protect yourself against COVID-19',
    subtitle: 'World Health Organization',
    src:
      'https://www.google.com/covid19/static/yt-tn-how-to-protect-yourself.jpg'
  },
  {
    title: 'COVID-19: What Older Adults Need to Know',
    subtitle: 'Centers for Disease Control and Prevention',
    src:
      'https://www.google.com/covid19/static/yt-tn-covid-19-what-older-adults.jpg'
  },
  {
    title: 'ASL Video: What older adults need to know',
    subtitle: 'Centers for Disease Control and Prevention',
    src: 'https://www.google.com/covid19/static/yt-tn-asl-older-adults.jpg'
  }
]

export interface VideoCard {
  title: string
  subtitle: string
  src: string
}
const VideoCard: React.FC<VideoCard> = ({ title, subtitle, src }) => (
  <article className='mt-4 border rounded-lg hover:shadow-2xl'>
    <img src={src} alt={title} />
    <div className='p-4'>
      <h3 className="text-lg font-semibold">{title}</h3>
      <h4 className="text-gray-700 mt-2 mb-4">{subtitle}</h4>
    </div>
  </article>
)

const OtherVideos = () => (
  <section>
    {videoSources.map(source => (
      <VideoCard key={source.src} {...source} />
    ))}
  </section>
)

export default OtherVideos