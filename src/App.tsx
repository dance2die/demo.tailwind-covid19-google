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
    <hr className='mx-4' />
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
const DefinitionSymptoms = () => {
  const main = (
    <>
      <DefinitionParagraph>
        People may be sick with the virus for 1 to 14 days before developing
        symptoms. The most common symptoms of coronavirus disease (COVID-19) are
        fever, tiredness, and dry cough. Most people (about 80%) recover from
        the disease without needing special treatment.
      </DefinitionParagraph>
      <DefinitionParagraph>
        More rarely, the disease can be serious and even fatal. Older people,
        and people with other medical conditions (such as asthma, diabetes, or
        heart disease), may be more vulnerable to becoming severely ill.
      </DefinitionParagraph>
    </>
  )
  const secondary = (
    <>
      <DefinitionParagraph>People may experience:</DefinitionParagraph>
      <DefinitionParagraph>
        • cough • fever • tiredness • difficulty breathing (severe cases)
      </DefinitionParagraph>
    </>
  )
  return <DefinitionBase main={main} secondary={secondary} />
}
const DefinitionPrevention = () => {
  const main = (
    <>
      <DefinitionParagraph>
        There’s currently no vaccine to prevent coronavirus disease (COVID-19).
      </DefinitionParagraph>
    </>
  )
  const secondary = (
    <>
      <DefinitionParagraph>
        You can protect yourself and help prevent spreading the virus to others
        if you:
      </DefinitionParagraph>
      <DefinitionParagraph>
        Do • Wash your hands regularly for 20 seconds, with soap and water or
        alcohol-based hand rub • Cover your nose and mouth with a disposable
        tissue or flexed elbow when you cough or sneeze • Avoid close contact (1
        meter or 3 feet) with people who are unwell • Stay home and self-isolate
        from others in the household if you feel unwell
      </DefinitionParagraph>
      <DefinitionParagraph>
        Don't • Touch your eyes, nose, or mouth if your hands are not clean
      </DefinitionParagraph>
    </>
  )
  return <DefinitionBase main={main} secondary={secondary} />
}
const DefinitionTreatment = () => {
  const main = (
    <>
      <DefinitionParagraph>
        There is no specific medicine to prevent or treat coronavirus disease
        (COVID-19). People may need supportive care to help them breathe.
      </DefinitionParagraph>
    </>
  )
  const secondary = (
    <>
      <DefinitionParagraph>
        If you develop a fever, cough, and have difficulty breathing, promptly
        seek medical care. Call in advance and tell your health provider of any
        recent travel or recent contact with travelers.{' '}
      </DefinitionParagraph>
    </>
  )
  return <DefinitionBase main={main} secondary={secondary} />
}

const Definition = () => {
  const [selectedContent, setSelectedContent] = useState('overview')

  return (
    <section className='w-full border rounded-lg overflow-hidden'>
      <article className='border-b bg-pink-100'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold'>
            Coronavirus disease (COVID-19)
          </h3>
          <p className='text-sm'>
            Also called: 2019-nCov, 2019 Novel Coronavirus
          </p>
        </div>
        <nav className='px-4'>
          {/* prettier-ignore */}
          <ul className="flex overflow-x-scroll">
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
