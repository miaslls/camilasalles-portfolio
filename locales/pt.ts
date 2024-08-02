export default {
  unscoped: {
    dev_and_design: 'desenvolvimento & design',
    view_all: 'ver todos',
  },

  tooltip: {
    header: {
      language: 'veja em',
      current: ' (atual)',
      theme: 'alternar tema claro/escuro',
    },

    footer: {
      maps: 'ver no Google Maps',
      linkedin: 'ver perfil no LinkedIn',
      github: 'ver perfil no GitHub',
    },

    project: {
      demo: 'demo live',
      repo: 'repositório',
    },

    contact: {
      copy: 'copiar endereço',
    },

    form: {
      submit: 'enviar',
      clear: 'limpar',
    },
  },

  home: {
    title: 'Home',
    featured_projects: 'projetos em destaque',
  },

  projects: {
    title: 'Projetos',
    main: {
      featured_projects: 'em destaque',
      view_demo: 'ver demo live',
    },

    aside: {
      all_projects: 'todos os projetos',
    },
  },

  about: {
    title: 'Sobre',
    main: {
      intro: {
        text: 'Sou Camila Salles, desenvolvedora full-stack e designer de UI/UX com sólida experiência em educação e tecnologia. Após 15 anos aprimorando habilidades analíticas em sala de aula, fiz a transição para o mundo do código, encontrando uma forma apaixonada de expressar minha criatividade. Hoje, amplio meus conhecimentos em React, NestJS e TypeScript para construir aplicações web robustas e escaláveis, enquanto utilizo Figma, Photoshop e Illustrator para criar interfaces de usuário intuitivas e engajadoras.',
      },
      development: {
        title: 'desenvolvimento',
        text: 'Abordo o desenvolvimento de software com meticulosa atenção aos detalhes e comprometimento com código limpo e eficiente. Meu recente trabalho na Labareda Drinks & BBQ me permitiu projetar, construir e implementar toda a plataforma do menu online, demonstrando minha capacidade de gerenciar projetos da concepção à conclusão. Espere sistemas de alto desempenho, bem mantidos e que atendem às suas necessidades de forma consistente.',
      },
      design: {
        title: 'design',
        text: 'Minha filosofia de design gira em torno da usabilidade e clareza visual. Priorizo a funcionalidade e a experiência do usuário, garantindo que cada elemento tenha um propósito e se comunique eficazmente com seu público. De posts em redes sociais a interfaces de sites, crio designs que ressoam com a identidade da sua marca e se integram perfeitamente à sua estratégia digital geral. Espere resultados profissionais e refinados que elevam sua presença online.',
      },
      collaboration: {
        title: 'colaboração',
        contact_link: 'entre em contato',
        text: 'Procuro colaboradores com ideias semelhantes que valorizam tanto a excelência técnica quanto a sutileza do design. Se você está procurando um parceiro que possa preencher a lacuna entre código e estética, estou aqui para dar vida à sua visão. Espere comunicação aberta, espírito colaborativo e dedicação para superar expectativas.',
      },
    },

    aside: {
      latest_projects: 'projetos recentes',
    },
  },

  contact: {
    title: 'Contato',
    main: {
      text: 'Sempre estou aberta a novos desafios e parcerias. Se tiver um projeto em mente, entre em contato!',
      links: {
        email: {
          address: 'dev@camilasalles.dev',
          body: 'Enviado%20de',
          toast: {
            copied: 'copiado!',
            error: 'erro',
          },
        },
      },
    },

    aside: {
      message: 'mensagem',
      form: {
        required: 'campo obrigatório',
        message_required: 'a mensagem é obrigatória!',
        name: 'nome',
        email: 'email',
        phone: 'telefone',
        message: 'mensagem',
        submit_state: {
          loading: 'carregando...',
          success: 'mensagem enviada!',
          error: 'ocorreu um erro; tente novamente',
        },
      },
    },
  },
} as const;
