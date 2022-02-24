import 'aos/dist/aos.css'
import Prismic from '@prismicio/client'
import Aos from 'aos'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

import { ContentType, PrismicContentDocumentResponse } from '@types/content'

import { getPrismicClient } from '@services/prismic'

import { About } from '@components/About'
import { Contact } from '@components/Contact'
import { Header } from '@components/Header'
import { Presentation } from '@components/Presentation'
import { Projects } from '@components/Projects'
import { WorkExperiences } from '@components/WorkExperiences'

import usePersistedState from '@utils/usePersistedState'

import { Container } from '@styles/home'

interface HomeProps {
  contentLangs: {
    [key: string]: ContentType
  }
}

export default function Home({ contentLangs }: HomeProps) {
  const [contentLanguage, setContentLanguage] = usePersistedState(
    'content_language',
    contentLangs['pt-br']
  )

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  function toggleContentLanguage() {
    setContentLanguage(
      contentLanguage.lang === 'pt-br' ? contentLangs['en-us'] : contentLangs['pt-br']
    )
  }

  return (
    <>
      <Head>
        <title>Leonardo Lissone</title>
      </Head>

      <Header
        language={contentLanguage.lang}
        resumeButtonLabel={contentLanguage.resumeButtonLabel}
        toggleContentLanguage={toggleContentLanguage}
      />

      <Container>
        <Presentation />

        <About />

        <WorkExperiences />

        <Projects />

        <Contact />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const prismic = getPrismicClient()

  const response: PrismicContentDocumentResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'content_language')
  ])

  const contentLangs: ContentType[] = response.results.map(prismicContent => ({
    lang: prismicContent.uid,
    socials: prismicContent.data.socials,
    resumeButtonLabel: prismicContent.data.resume_button_label,
    contactButtonLabel: prismicContent.data.contact_button_label,
    resumeCv: prismicContent.data.resume_pdf.url,
    presentationSection: {
      heading: prismicContent.data.presentation_heading.map(tagData => tagData.text),
      text: prismicContent.data.presentation_text.map(tagData => tagData.text)
    },
    aboutSection: {
      heading: prismicContent.data.about_heading,
      text: prismicContent.data.about_text.map(tagData => tagData.text),
      profilePhoto: {
        url: prismicContent.data.profile_photo.url,
        alt: prismicContent.data.profile_photo.alt
      },
      recentTechnologies: prismicContent.data.recent_technologies.map(
        data => data.technology
      )
    },
    jobsSection: {
      heading: prismicContent.data.jobs_heading,
      jobs: prismicContent.data.jobs.map(jobData => ({
        company: jobData.company,
        role: jobData.role,
        startDate: jobData.start_date,
        endDate: jobData.end_date,
        activities: jobData.activities.map(tagData => tagData.text)
      }))
    },
    projectsSection: {
      heading: prismicContent.data.projects_heading,
      projects: prismicContent.data.projects.map(projectData => ({
        thumbnail: {
          url: projectData.thumbnail.url,
          alt: projectData.thumbnail.alt
        },
        name: projectData.name,
        description: projectData.description.map(tagData => tagData.text),
        platform: projectData.platform,
        isResponsive: projectData.is_responsive,
        mainTechnologies: projectData.main_technologies.split(' '),
        goodHabits: projectData.good_habits.split(' '),
        link: {
          url: projectData.link.url
        }
      }))
    },
    contactSection: {
      heading: prismicContent.data.contact_heading.map(tagData => tagData.text),
      text: prismicContent.data.contact_text.map(tagData => tagData.text)
    }
  }))

  const contentLangsFormatted = {}

  contentLangs.forEach(content => {
    const { lang } = content

    contentLangsFormatted[lang] = content
  })

  return {
    props: {
      contentLangs: contentLangsFormatted
    }
  }
}
