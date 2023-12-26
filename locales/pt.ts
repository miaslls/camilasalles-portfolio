export default {
  unscoped: {
    view_all: 'ver todos',
  },

  home: {
    title: 'Home',
    featured_projects: 'projetos em destaque',
  },

  projects: {
    title: 'Projetos',

    main: {
      featured_projects: 'em destaque',
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
        mail: 'enviar email',
        copy: 'copiar endereço',
        profile: 'ver perfil',
        repos: 'ver repositórios',
        inbox: 'mensagem inbox',
      },
    },

    aside: {
      message: 'mensagem',
    },
  },
} as const;
