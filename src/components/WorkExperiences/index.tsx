
import { JobsContent } from '@/types/content'

import { Container, Content, Heading, ImageContainer } from './styles'
import { Tabs } from './Tabs'
import { HeadingContentTab, ContentTab, Highlight } from './Tabs/styles'
import Image from 'next/image'
import ArrowHeading from '../../../public/icons/arrow-heading.svg'
import Arrow from '../../../public/icons/arrow.svg'
import PrismCut from '../../../public/images/prism-cut.svg'

interface WorkExperiencesProps {
  workExperiencesContent: JobsContent
}

export function WorkExperiences({ workExperiencesContent }: WorkExperiencesProps) {
  return (
    <Container id="work-experiences">
      <Content data-aos="fade-up">
        <Heading>
          <Image  src={ArrowHeading} alt="Big arrow with led" />

          <h1>{workExperiencesContent.heading}</h1>
        </Heading>

        <Tabs>
          {workExperiencesContent.jobs.map(job => (
            <div key={job.company} id={job.company}>
              {job.experiences.map(experience => (
                <ContentTab key={experience.role}>
                  <HeadingContentTab>
                    <h1>
                      {experience.role}{' '}
                      <Highlight
                        href={experience.siteLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        @{job.company}
                      </Highlight>
                    </h1>

                    <span>
                      {experience.startDate} - {experience.endDate}
                    </span>
                  </HeadingContentTab>

                  <ul>
                    {experience.activities.map(activity => (
                      <li key={activity}>
                        <Image  src={Arrow} alt="Red arrow with led" />

                        <p>{activity}</p>
                      </li>
                    ))}
                  </ul>
                </ContentTab>
              ))}
            </div>
          ))}
        </Tabs>
      </Content>

      <ImageContainer>
        <Image  src={PrismCut} alt="Cut prisma with led" />
      </ImageContainer>
    </Container>
  )
}
