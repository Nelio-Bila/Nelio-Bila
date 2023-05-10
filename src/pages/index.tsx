import 'aos/dist/aos.css'
import Aos from 'aos'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { ContentType } from '@type/content'

import { About } from '@components/About'
import { Contact } from '@components/Contact'
import { FixedSocials } from '@components/FixedSocials'
import { Header } from '@components/Header'
import { Presentation } from '@components/Presentation'
import { Projects } from '@components/Projects'
import { WorkExperiences } from '@components/WorkExperiences'

import { Container } from '@styles/home'

interface HomeProps {
  contentLangs: {
    [key: string]: ContentType
  }
}

export default function Home({ contentLangs }: HomeProps) {
  const [contentLanguage, setContentLanguage] = useState(contentLangs['pt-br'])

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
        <title>Nélio Sousa F. Bila</title>
      </Head>

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

export const getStaticProps: GetStaticProps = async () => {
  const contentLangs = [
    {
      lang: 'pt-br',
      email: 'neliobilla@gmail.com',
      socials: [
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/n%C3%A9lio-bila/'
        }
      ],
      resumeButtonLabel: 'CV',
      contactButtonLabel: 'Contactar',
      resumeCv:
        'https://drive.google.com/file/d/10SUO_O6umxzjAzLQjJnnqe3LlRB7cfNv/view?usp=share_link',
      presentationSection: {
        heading: ['Olá', 'Eu sou', 'Nélio Bila'],
        text: 'Sou um desenvolvedor Fullstack, com mais de 2 anos de experiência em desenvolvimento web e mobile, design de interfaces e experiência do usuário. Tive duas experiências incríveis de trabalho, onde fiquei responsável por planeiar, prototipar e desenvolver projectos de alto valor para ambos setores onde actuei. Além de estar muito determinado para meu crescimento pessoal de conhecimento na área da tecnologia, criando projetos sempre inovadores para mim com muito amor e dedicação. '
      },
      aboutSection: {
        heading: 'Sobre mim',
        text: 'Amante da tecnologia, com foco em desenvolvimento fullstack, interface de usuário e engenharia de software. Tenho como objectivo me tornar um profissional cada vez mais completo, sempre buscando aprender e desenvolver projectos para aplicar e compartilhar conhecimentos e experiências. Licenciado em Engenharia de Desenvolvimento de Sistemas, criando aplicações de forma autônoma, em busca de desafios, trabalhando com carisma, vontade e paixão. Profissionalismo é meu foco.',
        profilePhoto: {
          url: 'https://github.com/nelio-bila.png',
          alt: 'Nelio Bila'
        },
        recentTechnologies: ['React', 'NodeJs', 'NextJs', 'Laravel']
      },
      jobsSection: {
        heading: 'Experiência profissional',
        jobs: [
          {
            company: 'Cursiva',
            experiences: [
              {
                company: 'Cursiva',
                siteLink: 'job.site_link.url',
                role: 'React Developer',
                startDate: '10-10-2021',
                endDate: '18-10-2022',
                activities: ['Desenvolvimento de vários modulos']
              }
            ]
          }
        ]
      },
      projectsSection: {
        heading: 'Projectos',
        projects: [
          {
            thumbnail: {
              url: 'https://github.com/nelio-bila.png',
              alt: 'Somais'
            },
            name: 'Somais',
            description: ['Aplicação android desenvolvida com React Native'],
            platform: 'React Native',
            isResponsive: true,
            mainTechnologies: '',
            goodHabits: [],
            figmaLink: null,
            repositoryLink: null,
            productionLink: null
          },
          {
            thumbnail: {
              url: 'https://github.com/nelio-bila.png',
              alt: 'Portal de Ortoprotesia'
            },
            name: 'Portal de Ortoprotesia',
            description: [
              'Plataforma web desenvolvida com Laravel no backend e Vue js no frontend'
            ],
            platform: 'Laravel',
            isResponsive: true,
            mainTechnologies: 'Laravel, Vuejs',
            goodHabits: [],
            figmaLink: null,
            repositoryLink: 'https://github.com/Nelio-Bila/ortoprotesia',
            productionLink: null
          }
        ],
        showMoreButtonLabel: 'Mais'
      },
      contactSection: {
        heading: ['Contacto'],
        text: [
          'Estou aberto a oportunidades de trabalho. Qualquer forma aqui disponibilizada pode ser útil pra entrar em contacto comigo'
        ]
      }
    },
    {
      lang: 'en-us',
      email: 'neliobilla@gmail.com',
      socials: [
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/n%C3%A9lio-bila/'
        }
      ],
      resumeButtonLabel: 'Resume',
      contactButtonLabel: 'Contact',
      resumeCv:
        'https://drive.google.com/file/d/10SUO_O6umxzjAzLQjJnnqe3LlRB7cfNv/view?usp=share_link',
      presentationSection: {
        heading: ['Hi', 'I am', 'Nélio Bila'],
        text: "I'm a Software developer, with more than 2 years of experience in web and mobile development, interface design and user experience. I had two incredible work experiences, where I was responsible for planning, prototyping and developing high value projects for both sectors where I worked. In addition to being very determined for my personal growth in knowledge in the field of technology, always creating innovative projects for myself with a lot of love and dedication."
      },
      aboutSection: {
        heading: 'About me',
        text: 'Technology lover, with a focus on fullstack development, user interface and software engineering. I aim to become an increasingly complete professional, always looking to learn and develop projects to apply and share knowledge and experiences. Degree in Systems Development Engineering, creating applications autonomously, looking for challenges, working with charisma, will and passion. Professionalism is my focus.',
        profilePhoto: {
          url: 'https://github.com/nelio-bila.png',
          alt: 'Nelio Bila'
        },
        recentTechnologies: ['React', 'NodeJs', 'NextJs', 'Laravel']
      },
      jobsSection: {
        heading: 'Profissional Experience',
        jobs: [
          {
            company: 'Cursiva',
            experiences: [
              {
                company: 'Cursiva',
                siteLink: 'job.site_link.url',
                role: 'React Developer',
                startDate: '10-10-2021',
                endDate: '18-10-2022',
                activities: ['Development of multiple modules']
              }
            ]
          }
        ]
      },
      projectsSection: {
        heading: 'Projects',
        projects: [
          {
            thumbnail: {
              url: 'https://github.com/nelio-bila.png',
              alt: 'Somais'
            },
            name: 'Somais',
            description: ['Android app developed with React Native'],
            platform: 'React Native',
            isResponsive: true,
            mainTechnologies: '',
            goodHabits: [],
            figmaLink: null,
            repositoryLink: null,
            productionLink: null
          },
          {
            thumbnail: {
              url: 'https://github.com/nelio-bila.png',
              alt: 'Orthophaedics Portal'
            },
            name: 'Orthophaedics Portal',
            description: [
              'Web Platform developed with Laravel on the backend and Vue js on the frontend'
            ],
            platform: 'Laravel',
            isResponsive: true,
            mainTechnologies: 'Laravel, Vuejs',
            goodHabits: [],
            figmaLink: null,
            repositoryLink: 'https://github.com/Nelio-Bila/ortoprotesia',
            productionLink: null
          }
        ],
        showMoreButtonLabel: 'More'
      },
      contactSection: {
        heading: ['Contact'],
        text: [
          'I am open to job opportunities. Any form provided here may be useful to get in touch with me'
        ]
      }
    }
  ]

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
