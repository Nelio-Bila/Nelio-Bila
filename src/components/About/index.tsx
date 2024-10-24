import { AboutContent } from '@/types/content'

import {
  Container,
  Content,
  Column,
  Heading,
  Text,
  SkillsList,
  PhotoContainer
} from './styles'
import Image from 'next/image'
import  ArrowHeading from '../../../public/icons/arrow-heading.svg'
import  Arrow from '../../../public/icons/arrow.svg'
import  AvatarBorder from '../../../public/images/avatar-border.svg'

interface AboutProps {
  aboutContent: AboutContent
}

export function About({ aboutContent }: AboutProps) {
  return (
    <Container id="about" data-aos="fade-up">
      <Content>
        <Column>
          <Heading>
            <Image  src={ArrowHeading} alt="Big arrow with led" />

            <h1>{aboutContent.heading}</h1>
          </Heading>

          <Text
            dangerouslySetInnerHTML={{
              __html: aboutContent.text
            }}
          />

          <SkillsList>
            {aboutContent.recentTechnologies.map(technology => (
              <li key={technology}>
                <Image  src={Arrow} alt="Red arrow with led" />
                {technology}
              </li>
            ))}
          </SkillsList>
        </Column>

        <Column>
          <PhotoContainer>
            <Image  src={AvatarBorder} alt="Avatar border" />
            <Image
              src={aboutContent.profilePhoto.url}
              alt={aboutContent.profilePhoto.alt}
              fill
            />
          </PhotoContainer>
        </Column>
      </Content>
    </Container>
  )
}
