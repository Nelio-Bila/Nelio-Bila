export async function getContent() {
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
        text: 'Sou um Técnico Superior de TIC\'s, um desenvolvedor Fullstack, com experiência em desenvolvimento web e mobile. Estou muito determinado em meu crescimento pessoal e profissional na área de tecnologia, desenvolvo projectos inovadores com muito amor e dedicação.'
      },
      aboutSection: {
        heading: 'Sobre mim',
        text: 'Amante da tecnologia, com foco em desenvolvimento fullstack e engenharia de software. Tenho como objectivo me tornar um profissional cada vez mais completo, sempre buscando aprender e desenvolver projectos para aplicar e compartilhar conhecimentos e experiências. Licenciado em Engenharia de Desenvolvimento de Sistemas, sempre em busca de desafios, trabalhando com carisma, vontade e paixão. Profissionalismo é meu foco.',
        profilePhoto: {
          url: 'https://github.com/nelio-bila.png',
          alt: 'Nelio Bila'
        },
        recentTechnologies: ['React', 'NextJs', 'Laravel', 'Django', 'NodeJs', 'Spring Boot']
      },
      jobsSection: {
        heading: 'Experiência profissional',
        jobs: [
          {
            company: 'Hospital Central de Maputo',
            experiences: [
              {
                company: 'Hospital Central de Maputo',
                siteLink: 'https://hcm.gov.mz/',
                role: 'Técnico Superior de TIC\'s',
                startDate: '10-10-2021',
                endDate: 'Presente',
                activities: [
                  'Responsavel pelo pleno funcionamento, dos Sistemas de Informação instalados no Hospital.',
                  'Capacitação e assistência aos funcionários no uso dos recursos informáticos do Hospital.',
                  'Avaliação das necessidades e recolha de requisitos para melhor funcionamento e expansão dos sistemas informáticos',
                ]
              },
            ]
          },
          {
            company: 'Cortex',
            experiences: [
              {
                company: 'Cortex',
                siteLink: 'https://cortex.co.mz/',
                role: 'Desenvolvedor de Software',
                startDate: '10-07-2023',
                endDate: '10-12-2023',
                activities: [
                  'Responsavel pela implementação de features no backend (Laravel) e frontend(Next js) da aplicação Bilheteca',
                  'Responsavel pelo rastreio e correção de bugs no backend (Laravel) e frontend(Next js) da aplicação Bilheteca',
                  'Documentação de API\'s e demais componentes do aplicação Bilheteca',
                ]
              },
            ]
          },
          {
            company: 'Cursiva',
            experiences: [
              {
                company: 'Cursiva',
                siteLink: 'https://app.explicador.co.mz/',
                role: 'Desenvolvedor de Software',
                startDate: '10-10-2021',
                endDate: '18-10-2022',
                activities: [
                  'Implementação de técnicas de desenvolvimento para a elaboração de sistemas (Documentação técnica de aplicações, utilizando flowcharts e wireframes). Redesign e prototipagem dos principais serviços web da empresa utilizando Figma. Manutenção e implementação de melhorias nos serviços públicos e privados da organização.'
                ]
              },
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
          'Estou aberto a oportunidades de trabalho. Qualquer forma aqui disponibilizada pode ser útil pra entrar em contacto comigo',
          '+258 867539079',
          '+258 845935059',
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
        text: "I'm an ICT Senior Technician, a Fullstack developer, with experience in web and mobile development. I am very determined in my personal and professional growth in the technology field, developing innovative projects with much love and dedication."
      },
      aboutSection: {
        heading: 'About me',
        text: 'Technology lover, with a focus on fullstack development and software engineering. My goal is to become an increasingly complete professional, always seeking to learn and develop projects to apply and share knowledge and experiences. Graduated in Systems Development Engineering, always seeking challenges, working with charisma, will and passion. Professionalism is my focus.',
        profilePhoto: {
          url: 'https://github.com/nelio-bila.png',
          alt: 'Nelio Bila'
        },
        recentTechnologies: ['React', 'NextJs', 'Laravel', 'Django', 'NodeJs', 'Spring Boot']
      },
      jobsSection: {
        heading: 'Professional Experience',
        jobs: [
          {
            company: 'Hospital Central de Maputo',
            experiences: [
              {
                company: 'Hospital Central de Maputo',
                siteLink: 'https://hcm.gov.mz/',
                role: 'ICT Senior Technician',
                startDate: '10-10-2021',
                endDate: 'Present',
                activities: [
                  'Responsible for the full operation of Information Systems installed at the Hospital.',
                  'Training and assistance to employees in using Hospital computing resources.',
                  'Assessment of needs and requirements gathering for better operation and expansion of computer systems',
                ]
              },
            ]
          },
          {
            company: 'Cortex',
            experiences: [
              {
                company: 'Cortex',
                siteLink: 'https://cortex.co.mz/',
                role: 'Software Developer',
                startDate: '10-07-2023',
                endDate: '10-12-2023',
                activities: [
                  'Responsible for implementing features in the backend (Laravel) and frontend (Next.js) of the Bilheteca application',
                  'Responsible for tracking and fixing bugs in the backend (Laravel) and frontend (Next.js) of the Bilheteca application',
                  'Documentation of APIs and other components of the Bilheteca application',
                ]
              },
            ]
          },
          {
            company: 'Cursiva',
            experiences: [
              {
                company: 'Cursiva',
                siteLink: 'https://app.explicador.co.mz/',
                role: 'Software Developer',
                startDate: '10-10-2021',
                endDate: '18-10-2022',
                activities: [
                  'Implementation of development techniques for system elaboration (Technical documentation of applications, using flowcharts and wireframes). Redesign and prototyping of the company\'s main web services using Figma. Maintenance and implementation of improvements in the organization\'s public and private services.'
                ]
              },
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
            description: ['Android application developed with React Native'],
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
              alt: 'Orthoprosthetics Portal'
            },
            name: 'Orthoprosthetics Portal',
            description: [
              'Web Platform developed with Laravel on the backend and Vue.js on the frontend'
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
          'I am open to job opportunities. Any form provided here may be useful to get in touch with me',
          '+258 867539079',
          '+258 845935059',
        ]
      }
    }
  ]

   const contentLangsFormatted: { [key: string]: typeof contentLangs[0] } = {}

   contentLangs.forEach(content => {
     const { lang } = content

     contentLangsFormatted[lang] = content
   })

   return contentLangsFormatted
}