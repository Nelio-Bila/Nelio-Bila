export async function getContent() {
  const contentLangs = [
    {
      lang: 'pt-br',
      email: 'neliobilla@gmail.com',
      socials: [
        {
          name: 'Linkedin',
          link: 'https://www.linkedin.com/in/n%C3%A9lio-bila/'
        },
        {
          name: 'Github',
          link: 'https://www.github.com/nelio-bila/'
        }
      ],
      resumeButtonLabel: 'CV',
      contactButtonLabel: 'Contactar',
      resumeCv:
        'https://drive.google.com/file/d/10SUO_O6umxzjAzLQjJnnqe3LlRB7cfNv/view?usp=share_link',
      presentationSection: {
        heading: ['Olá', 'Eu sou', 'Nélio Bila'],
        text: 'Desenvolvedor Fullstack Senior com mais de 5 anos de experiência em desenvolvimento web e mobile, especializado em React, Laravel, Django e arquitecturas escaláveis. Como Técnico Superior de TIC\'s, desenvolvo iniciativas de transformação digital no sector de saúde, combinando expertise técnica com compreensão profunda de necessidades sociais.'
      },
      aboutSection: {
        heading: 'Sobre mim',
        text: 'Profissional apaixonado por tecnologia, com sólida formação em Engenharia de Desenvolvimento de Sistemas e especialização em desenvolvimento fullstack. Possuo experiência comprovada na implementação de soluções tecnológicas complexas no sector de saúde e startups. Especializado em arquitectar e desenvolver sistemas escaláveis. Comprometido com a excelência técnica e a entrega de valor através da tecnologia.',
        profilePhoto: {
          url: 'https://github.com/nelio-bila.png',
          alt: 'Nelio Bila'
        },
        recentTechnologies: [
          'Javascript/Typescript',
          'React',
          'NextJs',
          'PHP',
          'Laravel',
          'Python',
          'Django',
          'Java',
          'Spring Boot',
          'PostgreSQL',
          'SQL Lite',
          'MySQL',

        ]
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
                startDate: '10-10-2020',
                endDate: 'Presente',
                activities: [
                  'Responsavel pela a gestão e optimização dos Sistemas de Informação do Hospital, garantindo uptime de 99.9%',
                  'Participei como formador no programa de capacitação na Instalação e manutenção do Sistema de Informação Laboratorial DISA, à mais de 200 funcionários das TIC\'s do Sistema Nacional de Saúde, nas três regiões de Moçambique, ',
                  'Conduzi análise e recolha de requisitos, para alguns sistemas em funcionamento no Hospital',
                  'Estabeleci e mantenho protocolos de segurança de dados em conformidade com padrões internacionais de saúde'
                ]
              }
            ]
          },
          {
            company: 'Cortex',
            experiences: [
              {
                company: 'Cortex',
                siteLink: 'https://cortex.co.mz/',
                role: 'Desenvolvedor de Software Senior',
                startDate: '10-07-2023',
                endDate: '10-12-2023',
                activities: [
                  'Desenvolvi funcionalidades críticas no backend (Laravel) e frontend (Next.js) para a aplicação Bilheteca',
                  'Implementei um sistema robusto de monitoramento e correção de bugs',
                  'Desenvolvi documentação técnica abrangente utilizando OpenAPI/Swagger, facilitando a integração de novos desenvolvedores',
                  'Estabeleci um pipeline de CI/CD que reduziu o tempo de deploy em 60% e aumentou a confiabilidade das entregas'
                ]
              }
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
                  'Arquitectei e implementei melhorias significativas nos serviços web da empresa, resultando em um aumento de 45% na satisfação dos usuários',
                  'Desenvolvi e mantive funcionalidades críticas utilizando Node.js e Express.js, garantindo escalabilidade e desempenho',
                  'Implementei metodologias ágeis e práticas de código limpo, melhorando a qualidade e a velocidade das entregas'
                ]
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
              url: 'https://denuncias-vozes-de-mulheres-ghjk6.ondigitalocean.app/assets/img/logo_o.png',
              alt: 'Plataforma de Denúncias do Observatório da Mulher'
            },
            name: 'Plataforma de Denúncias do Observatório da Mulher',
            description: [
              'Sistema completo de gestão de denúncias com funcionalidades em tempo real',
              'Dashboard administrativo com análise avançada de dados',
              'Integração com sistemas externos de notificação'
            ],
            platform: 'Laravel',
            isResponsive: true,
            mainTechnologies: [
              'PHP, ',
              'Laravel, ',
              'Soketi, ',
              'PostgreSQL, ',
              'Redis'
            ],
            goodHabits: [
              'TDD, ',
              'Laravel Pint, ',
              'CI/CD ',
            ],
            metrics: [
              'Tempo de resposta < 2s',
              '99.9% uptime'
            ],
            figmaLink: null,
            repositoryLink: null,
            productionLink: 'https://denuncias-vozes-de-mulheres-ghjk6.ondigitalocean.app/'
          },
          {
            thumbnail: {
              url: 'https://github.com/nelio-bila.png',
              alt: 'Somais'
            },
            name: 'Somais',
            description: [
              'Aplicativo móvel',
              'Sistema de pagamentos integrado',
              'Funcionalidades offline-first',
              'Analytics e métricas de engajamento'
            ],
            platform: 'React Native',
            isResponsive: true,
            mainTechnologies: [
              'React Native, ',
              'TypeScript, ',
              'Redux, ',
              'PHP, ',
              'Laravel, ',
              'MySQL'
            ],
            goodHabits: [
              'Clean Architecture',
              'Jest Testing',
              'CI/CD',
              'Atomic Design'
            ],
            metrics: [
              '+10k downloads',
              '4.5 estrelas na Play Store',
              '98% de satisfação dos usuários'
            ],
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
              'Sistema integrado de gestão de pacientes e equipamentos ortopédicos',
              'Dashboard analítico com métricas em tempo real',
              'Interface responsiva e acessível'
            ],
            platform: 'PHP Laravel + Vue.js',
            isResponsive: true,
            mainTechnologies: [
              'PHP, ',
              'Laravel, ',
              'Vue.js, ',
              'Redis'
            ],
            goodHabits: [
              'TDD',
              'SOLID',
              'Clean Code',
              'GitFlow'
            ],
            metrics: [
              'Gestão de +5000 pacientes',
              'Redução de 60% no tempo de processamento',
              'Economia de 40% em recursos operacionais'
            ],
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
          'Estou sempre aberto a novos desafios e oportunidades inovadoras. Especializado em desenvolvimento fullstack e transformação digital, posso agregar valor significativo ao seu projecto ou empresa.',
          'Telefone: +258 867539079',
          'Telefone: +258 845935059',
          'Disponível para projectos remotos e realocação'
        ]
      }
    },
    // English version with similar changes...
    {
      lang: 'en-us',
      email: 'neliobilla@gmail.com',
      socials: [
        {
          name: 'Linkedin',
          link: 'https://www.linkedin.com/in/n%C3%A9lio-bila/'
        },
        {
          name: 'Github',
          link: 'https://www.github.com/nelio-bila/'
        }
      ],
      resumeButtonLabel: 'Resume',
      contactButtonLabel: 'Contact',
      resumeCv:
        'https://drive.google.com/file/d/10SUO_O6umxzjAzLQjJnnqe3LlRB7cfNv/view?usp=share_link',
      presentationSection: {
        heading: ['Hello', 'I am', 'Nélio Bila'],
        text: 'Senior Fullstack Developer with over 5 years of experience in web and mobile development, specialized in React, Laravel, Django and scalable architectures. As an ICT Senior Technical Officer, I develop digital transformation initiatives in the healthcare sector, combining technical expertise with deep understanding of social needs.'
      },
      aboutSection: {
        heading: 'About me',
        text: 'A technology-driven professional with a strong background in Systems Development Engineering and specialization in fullstack development. I have proven experience in implementing complex technological solutions in the healthcare sector and startups. Specialized in architecting and developing scalable systems. Committed to technical excellence and delivering value through technology.',
        profilePhoto: {
          url: 'https://github.com/nelio-bila.png',
          alt: 'Nelio Bila'
        },
        recentTechnologies: [
          'Javascript/Typescript',
          'React',
          'NextJs',
          'PHP',
          'Laravel',
          'Python',
          'Django',
          'Java',
          'Spring Boot',
          'PostgreSQL',
          'SQL Lite',
          'MySQL',

        ]
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
                role: 'ICT Senior Technical Officer',
                startDate: '10-10-2021',
                endDate: 'Present',
                activities: [
                  'Responsible for the management and optimization of the Hospital\'s Information Systems, ensuring 99.9% uptime and improving operational efficiency by 40%',
                  'Participated as a trainer in the capacity-building program for the installation and maintenance of the DISA Laboratory Information System, training more than 200 IT staff of the National Health System in the three regions of Mozambique',
                  'Conducted requirements gathering and analysis for some implemented Systems on the Hospital',
                  'Established and maintain data security protocols in compliance with international health standards'
                ]
              }
            ]
          },
          {
            company: 'Cortex',
            experiences: [
              {
                company: 'Cortex',
                siteLink: 'https://cortex.co.mz/',
                role: 'Senior Software Developer',
                startDate: '10-07-2023',
                endDate: '10-12-2023',
                activities: [
                  'Developed critical backend (Laravel) and frontend (Next.js) features for the Bilheteca application',
                  'Implemented robust bug monitoring and correction system',
                  'Developed comprehensive technical documentation using OpenAPI/Swagger, facilitating developers onboarding',
                  'Established CI/CD pipeline that reduced deployment time by 60% and increased delivery reliability'
                ]
              }
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
                  'Architected and implemented significant improvements to company web services, resulting in 45% increase in user satisfaction',
                  'Developed and maintained critical features using Node.js and Express.js, ensuring scalability and performance',
                  'Implemented agile methodologies and clean code practices, improving delivery quality and speed'
                ]
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
              alt: "Women's Observatory Complaint Platform"
            },
            name: "Women's Observatory Complaint Platform",
            description: [
              'Complete reporting management system with real-time functionality',
              'Administrative dashboard with advanced data analysis',
              'Integration with external notification systems'
            ],
            platform: 'Laravel',
            isResponsive: true,
            mainTechnologies: [
              'PHP, ',
              'Laravel, ',
              'Soketi, ',
              'PostgreSQL, ',
              'Redis'
            ],
            goodHabits: [
              'TDD',
              'Laravel Pint',
              'CI/CD'
            ],
            metrics: [
              'Processing +1000 complaints monthly',
              'Response time < 2s',
              '99.9% uptime'
            ],
            figmaLink: null,
            repositoryLink: null,
            productionLink: 'https://denuncias-vozes-de-mulheres-ghjk6.ondigitalocean.app/'
          },
          {
            thumbnail: {
              url: 'https://github.com/nelio-bila.png',
              alt: 'Somais'
            },
            name: 'Somais',
            description: [
              'Integrated payment system',
              'Offline-first functionality',
              'Analytics and engagement metrics'
            ],
            platform: 'React Native',
            isResponsive: true,
            mainTechnologies: [
              'React Native, ',
              'TypeScript, ',
              'Redux, ',
              'Laravel, ',
              'MySQL, '
            ],
            goodHabits: [
              'Clean Architecture',
              'Jest Testing',
              'CI/CD',
              'Atomic Design'
            ],
            metrics: [
              '+10k downloads',
              '4.5 stars on Play Store',
              '98% user satisfaction'
            ],
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
              'Integrated management system for patients and orthopedic equipment',
              'Analytical dashboard with real-time metrics',
              'Responsive and accessible interface'
            ],
            platform: 'Java Spring Boot + Vue.js',
            isResponsive: true,
            mainTechnologies: [
              'PHP, ',
              'Laravel, ',
              'Vue.js, ',
              'Redis'
            ],
            goodHabits: [
              'TDD',
              'SOLID',
              'GitFlow'
            ],
            metrics: [
              'Management of +5000 patients',
              '60% reduction in processing time',
              '40% savings in operational resources'
            ],
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
          'I am always open to new challenges and innovative opportunities. Specialized in fullstack development and digital transformation, I can add significant value to your project or company.',
          'Phone: +258 867539079',
          'Phone: +258 845935059',
          'Available for remote projects and relocation'
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