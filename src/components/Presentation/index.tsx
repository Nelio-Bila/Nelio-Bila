import { PresentationContent } from '@/types/content'

import {
  Container,
  ImageContainer,
  Content,
  Heading,
  ResumeText,
  ContactButton
} from './styles'
import Image from 'next/image'
import BearingLed from '../../../public/images/bearing-led.svg'

interface PresentationProps {
  presentationContent: PresentationContent
  contactButtonLabel: string
}

export function Presentation({
  presentationContent,
  contactButtonLabel
}: PresentationProps) {
  return (
    <Container id="presentation">
      <Content data-aos="fade-right">
        <Heading>
          <h3>{presentationContent.heading[0]}</h3>
          <h2>{presentationContent.heading[1]}</h2>
          <h1>{presentationContent.heading[2]}</h1>
        </Heading>

        <ResumeText
          dangerouslySetInnerHTML={{
            __html: presentationContent.text
          }}
        />

        <ContactButton to="contact" smooth duration={1000} spy offset={-80}>
          {contactButtonLabel}
        </ContactButton>
      </Content>

      <ImageContainer>
        <Image  src={BearingLed} alt="Bearing with led" />
      </ImageContainer>
    </Container>
  )
}
