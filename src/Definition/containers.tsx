import React, { ReactElement, FC } from 'react'

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

export { DefinitionContainer, DefinitionBase, DefinitionParagraph }
