import React, { useState, ReactElement, FC } from 'react'
import { Header } from './Header'

const Title = () => (
  <h2 className='text-2xl my-4'>COVID-19 Information & Resources</h2>
)

const DefinitionContainer = (props: any) => (
  <section className=''>{props.children}</section>
)
const DefinitionDescription = (props: any) => (
  <article className='p-4'>{props.children}</article>
)

const DefinitionBase: FC<{ main: ReactElement; secondary: ReactElement }> = ({
  main,
  secondary
}) => (
  <DefinitionContainer>
    <DefinitionDescription>{main}</DefinitionDescription>
    <hr className="mx-4" />
    <DefinitionDescription>{secondary}</DefinitionDescription>
  </DefinitionContainer>
)

const DefinitionParagraph = (props: any) => (
  <p className='py-1 text-sm text-gray-800'>{props.children}</p>
)

const DefinitionOverview = () => {
  const main = (
    <>
      <DefinitionParagraph>
        Coronavirus disease (COVID-19) is an infectious disease caused by a new
        virus.
      </DefinitionParagraph>
      <DefinitionParagraph>
        The disease causes respiratory illness (like the flu) with symptoms such
        as a cough, fever, and in more severe cases, difficulty breathing. You
        can protect yourself by washing your hands frequently, avoiding touching
        your face, and avoiding close contact (1 meter or 3 feet) with people
        who are unwell.
      </DefinitionParagraph>
    </>
  )
  const secondary = (
    <>
      <DefinitionParagraph>How it spreads</DefinitionParagraph>
      <DefinitionParagraph>
        Coronavirus disease spreads primarily through contact with an infected
        person when they cough or sneeze. It also spreads when a person touches
        a surface or object that has the virus on it, then touches their eyes,
        nose, or mouth.
      </DefinitionParagraph>
    </>
  )
  return <DefinitionBase main={main} secondary={secondary} />
}
const DefinitionSymptoms = () => <section>DefinitionSymptoms</section>
const DefinitionPrevention = () => <section>DefinitionPrevention</section>
const DefinitionTreatment = () => <section>DefinitionTreatment</section>

const Definition = () => {
  const [selectedContent, setSelectedContent] = useState('overview')

  return (
    <section className='w-full border rounded-lg overflow-hidden'>
      <article className='border-b bg-pink-100'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>Coronavirus disease (COVID-19)</h3>
          <p className='text-sm'>
            Also called: 2019-nCov, 2019 Novel Coronavirus
          </p>
        </div>
        <nav className='px-4'>
          {/* prettier-ignore */}
          <ul className="flex">
            <li className="uppercase text-pink-900 text-sm pb-2 mr-4 border-b-4 border-pink-900 tracking-wider font-semibold" data-name="overview">overview</li>
            <li className="uppercase text-pink-900 text-sm pb-2 mr-4 border-b-4 border-pink-900 tracking-wider font-semibold" data-name="symptoms">symptoms</li>
            <li className="uppercase text-pink-900 text-sm pb-2 mr-4 border-b-4 border-pink-900 tracking-wider font-semibold" data-name="prevention">prevention</li>
            <li className="uppercase text-pink-900 text-sm pb-2 mr-4 border-b-4 border-pink-900 tracking-wider font-semibold" data-name="treatment">treatment</li>
          </ul>
        </nav>
      </article>
      <article>
        {selectedContent === 'overview' && <DefinitionOverview />}
        {selectedContent === 'symptoms' && <DefinitionSymptoms />}
        {selectedContent === 'prevention' && <DefinitionPrevention />}
        {selectedContent === 'treatment' && <DefinitionTreatment />}
      </article>
    </section>
  )
}

function App() {
  return (
    <div className=''>
      <Header />
      <main className='mx-8'>
        <Title />

        <Definition />
      </main>
    </div>
  )
}

export default App
