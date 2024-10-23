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

interface AboutProps {
  aboutContent: AboutContent
}

export function About({ aboutContent }: AboutProps) {
  return (
    <Container id="about" data-aos="fade-up">
      <Content>
        <Column>
          <Heading>
            <Image src="/icons/arrow-heading.svg" alt="Big arrow with led" />

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
                <Image src="/icons/arrow.svg" alt="Red arrow with led" />
                {technology}
              </li>
            ))}
          </SkillsList>
        </Column>

        <Column>
          <PhotoContainer>
            <Image src="/images/avatar-border.svg" alt="Avatar border" />
            <Image
              src={aboutContent.profilePhoto.url}
              alt={aboutContent.profilePhoto.alt}
            />
          </PhotoContainer>
        </Column>
      </Content>
    </Container>
  )
}
