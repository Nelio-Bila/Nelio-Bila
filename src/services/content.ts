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
    text: 'Sou um desenvolvedor Fullstack Javascript, com mais de 2 anos de experiência em desenvolvimento web, design de interfaces e experiência do usuário. Tive duas experiências incríveis de trabalho, onde fiquei responsável por planejar, prototipar e desenvolver projetos de alto valor para ambos setores onde atuei. Além de estar muito determinado para meu crescimento pessoal de conhecimento na área da tecnologia, criando projetos sempre inovadores para mim com muito amor e dedicação.'
  },
  aboutSection: {
    heading: 'Sobre mim',
    text: 'Estudante e amante da área de tecnologia, com foco em desenvolvimento front-end/back-end, interface de usuário e engenharia de software. Objetivo de me tornar um profissional cada vez mais completo, sempre buscando aprender e desenvolver projetos para aplicar e compartilhar conhecimentos e experiências. Bacharelando Sistemas de Informação, criando aplicações de forma autônoma, em busca de desafios, trabalhando com carisma, vontade e paixão. Profissionalismo é meu foco.',
    profilePhoto: {
      url: 'https://github.com/nelio-bila.png',
      alt: 'nelio bila'
    },
    recentTechnologies: ['React', 'NodeJs', 'NextJs', 'Laravel']
  },
  jobsSection: {
    heading: 'Experiências de trabalho',
    jobs: [
      {
        company: 'Cursiva',
        experiences: [
          {
            company: 'Cursiva',
            siteLink: 'https://app.explicador.co.mz/',
            role: 'Software developer',
            startDate: '10-10-2021',
            endDate: '18-10-2022',
            activities: [
              'Implementação de técnicas de desenvolvimento para a elaboração de sistemas (Documentação técnica de aplicações, utilizando flowcharts e wireframes). Redesign e prototipagem dos principais serviços web da empresa utilizando Figma. Manutenção e implementação de melhorias nos serviços públicos e privados da organização.'
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
          url: 'https://github.com/nelio-bila.png',
          alt: 'nelio'
        },
        name: 'Nélio Sousa Bila',
        description: ['Desenvolvedor Fullstack'],
        platform: 'Nextjs',
        isResponsive: true,
        mainTechnologies: 'Javascript',
        goodHabits: ['Clean code', 'TDD'],
        figmaLink: null,
        repositoryLink: null,
        productionLink: null
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
