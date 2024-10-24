import { ContentType } from '@/types/content'

const Content: ContentType = {
  lang: 'pt_br',
  email: 'neliobilla@gmail.com',
  socials: [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/n%C3%A9lio-bila/'
    }
  ],
  resumeButtonLabel: 'Resume',
  contactButtonLabel: 'Contacto',
  resumeCv: 'string',
  presentationSection: {
    heading: ['Olá, eu sou Nélio Bila'],
    text: 'Sou um Técnico Superior de TIC\'s, um desenvolvedor Fullstack, com experiência em desenvolvimento web e mobile. Além de estar muito determinado para meu crescimento pessoal de conhecimento na área da tecnologia, criando projectos sempre inovadores com muito amor e dedicação.'
  },
  aboutSection: {
    heading: 'Sobre mim',
    text: 'Estudante e amante da área de tecnologia, com foco em desenvolvimento front-end/back-end, interface de usuário e engenharia de software. Objetivo de me tornar um profissional cada vez mais completo, sempre buscando aprender e desenvolver projetos para aplicar e compartilhar conhecimentos e experiências. Bacharelando Sistemas de Informação, criando aplicações de forma autônoma, em busca de desafios, trabalhando com carisma, vontade e paixão. Profissionalismo é meu foco.',
    profilePhoto: {
      url: 'https://github.com/nelio-bila.png',
      alt: 'nelio bila'
    },
    recentTechnologies: ['React', 'NextJs', 'Django', 'Laravel', 'NodeJs',]
  },
  jobsSection: {
    heading: 'Experiências de trabalho',
    jobs: [
      {
        company: 'Cursiva',
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
          alt: 'nelio'
        },
        name: 'Nélio Sousa Bila',
        description: ['Meu portifolio'],
        platform: 'Nextjs',
        isResponsive: true,
        mainTechnologies: ['Javascript'],
        goodHabits: ['Clean code', 'TDD'],
        figmaLink: null,
        repositoryLink: 'https://github.com/Nelio-Bila/Nelio-Bila.git ',
        productionLink: 'https://neliobila.online'
      }
    ],
    showMoreButtonLabel: 'Mais'
  },
  contactSection: {
    heading: ['Contacto'],
    text: ['Contacto']
  }
}

export default Content
