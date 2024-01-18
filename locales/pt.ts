export default {
  unscoped: {
    view_all: 'ver todos',
    dev_and_design: 'desenvolvimento & design',
  },

  tooltip: {
    header: {
      language: 'idioma:',
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
      development: {
        title: 'desenvolvimento',
        text: 'Curabitur condimentum elementum venenatis. Mauris iaculis magna viverra, molestie turpis non, volutpat lorem. Nulla rhoncus diam sem. Nam justo eros, cursus id urna vel, sagittis gravida sapien. Pellentesque urna justo, auctor ultrices ullamcorper vel, rutrum sed dolor. Fusce volutpat urna nisl, vitae lobortis urna dapibus eget. Ut congue metus ac odio semper, in semper felis dignissim. Sed in diam non dolor vestibulum rhoncus quis at mauris.',
      },
      design: {
        title: 'design',
        text: 'Phasellus ac magna enim. Maecenas aliquam diam nec dui varius, sit amet blandit nisi congue. Donec maximus nulla dignissim, placerat erat quis, sollicitudin purus. Vivamus diam libero, scelerisque ut varius et, fermentum vel tellus. Suspendisse pellentesque tristique purus, ut tempus risus vestibulum a. Nulla facilisi. Sed elementum lacus orci, ut posuere orci tempor non. Nullam sed turpis et massa euismod porta eu vel eros. Nullam vehicula non lacus in viverra. Mauris aliquam quam a finibus vulputate. In libero erat, placerat sed volutpat a, efficitur in tellus. Mauris in neque augue.',
      },
    },

    aside: {
      latest_projects: 'projetos recentes',
    },
  },

  contact: {
    title: 'Contato',
    main: {
      links: {
        email: {
          address: 'eu@camilasalles.dev',
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
