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
        text: 'Amante da tecnologia, com foco em desenvolvimento fullstack e engenharia de software. Tenho como objectivo me tornar um profissional cada vez mais completo, sempre buscando aprender e desenvolver projectos para aplicar e compartilhar conhecimentos e experiências. Licenciado em Engenharia de Desenvolvimento de Sistemas, criando aplicações de forma autônoma, em busca de desafios, trabalhando com carisma, vontade e paixão. Profissionalismo é meu foco.',
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

   const contentLangsFormatted: { [key: string]: typeof contentLangs[0] } = {}

   contentLangs.forEach(content => {
     const { lang } = content

     contentLangsFormatted[lang] = content
   })

   return contentLangsFormatted
}