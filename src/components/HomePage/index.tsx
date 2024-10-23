'use client'

import { useEffect } from 'react'
import Aos from 'aos'
import { useLanguage } from '@/app/providers'
import { FixedSocials } from '@/components/FixedSocials'
import { Header } from '@/components/Header'
import { Presentation } from '@/components/Presentation'
import { About } from '@/components/About'
import { WorkExperiences } from '@/components/WorkExperiences'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Container } from '@/styles/home'

export default function HomePage() {
  const { contentLanguage, toggleContentLanguage } = useLanguage()

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <>
      <FixedSocials socials={contentLanguage.socials} />

      <Header
        language={contentLanguage.lang}
        resumeButtonLabel={contentLanguage.resumeButtonLabel}
        resumeCv={contentLanguage.resumeCv}
        toggleContentLanguage={toggleContentLanguage}
      />

      <Container>
        <Presentation
          presentationContent={contentLanguage.presentationSection}
          contactButtonLabel={contentLanguage.contactButtonLabel}
        />

        <About aboutContent={contentLanguage.aboutSection} />

        <WorkExperiences workExperiencesContent={contentLanguage.jobsSection} />

        <Projects projectsContent={contentLanguage.projectsSection} />

        <Contact
          contactContent={contentLanguage.contactSection}
          contactButtonLabel={contentLanguage.contactButtonLabel}
          socials={contentLanguage.socials}
          email={contentLanguage.email}
        />
      </Container>
    </>
  )
}