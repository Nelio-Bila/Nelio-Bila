import { FiFigma, FiGithub, FiGlobe } from 'react-icons/fi'

import { ProjectContent } from '@/types/content'

import {
  Container,
  Content,
  Cover,
  CoverActions,
  Information,
  Heading,
  Divider,
  TechnologiesRow,
  FeaturedInformation,
  SeparateRow
} from './styles'
import Image from 'next/image'
import Eslint from '../../../../public/icons/eslint.svg'
import Prettier from '../../../../public/icons/prettier.svg'
import Test from '../../../../public/icons/test.svg'
import Mobile from '../../../../public/icons/mobile.svg'
import Web from '../../../../public/icons/web.svg'
import Desktop from '../../../../public/icons/desktop.svg'

interface ProjectCardProps {
  projectContent: ProjectContent
}

export function ProjectCard({ projectContent }: ProjectCardProps) {
  return (
    <Container data-aos="fade-up" data-aos-duration="1100">
      <Content>
        <Cover>
          <Image  src={projectContent.thumbnail.url} alt={projectContent.thumbnail.alt} fill/>

          <CoverActions className="project-card-actions">
            {projectContent.figmaLink && (
              <a href={projectContent.figmaLink} target="_blank" rel="noreferrer">
                <FiFigma size={24} />
              </a>
            )}

            {projectContent.repositoryLink && (
              <a href={projectContent.repositoryLink} target="_blank" rel="noreferrer">
                <FiGithub size={24} />
              </a>
            )}

            {projectContent.productionLink && (
              <a href={projectContent.productionLink} target="_blank" rel="noreferrer">
                <FiGlobe size={24} />
              </a>
            )}
          </CoverActions>
        </Cover>

        <Information>
          <FeaturedInformation>
            <Heading>{projectContent.name}</Heading>

            <Divider />

            {projectContent.description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}

            <TechnologiesRow>
              <span>{projectContent.mainTechnologies}</span>
            </TechnologiesRow>
          </FeaturedInformation>

          <SeparateRow>
            <div>
              {projectContent.goodHabits.map(technology => {
                if (technology === 'eslint')
                  return (
                    <Image  key={technology} src={Eslint} alt="Eslint icon" />
                  )
                else if (technology === 'prettier')
                  return (
                    <Image  key={technology} src={Prettier} alt="Prettier icon" />
                  )
                else if (technology === 'test')
                  return <Image  key={technology} src={Test} alt="Test icon" />
              })}
            </div>

            <div>
              {projectContent.isResponsive || projectContent.platform === 'mobile' ? (
                <Image  src={Mobile} alt="Cellphone icon" />
              ) : null}

              {projectContent.platform === 'web' && (
                <Image  src={Web} alt="Web icon" />
              )}

              {projectContent.platform === 'desktop' && (
                <Image  src={Desktop} alt="Desktop icon" />
              )}
            </div>
          </SeparateRow>
        </Information>
      </Content>
    </Container>
  )
}
