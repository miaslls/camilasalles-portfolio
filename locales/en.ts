export default {
  unscoped: {
    view_all: 'view all',
    dev_and_design: 'development & design',
  },

  tooltip: {
    header: {
      language: 'view in',
      current: ' (current)',
      theme: 'toggle light/dark mode',
    },

    footer: {
      maps: 'view in Google Maps',
      linkedin: 'view LinkedIn profile',
      github: 'view GitHub profile',
    },

    project: {
      demo: 'live demo',
      repo: 'repository',
    },

    contact: {
      copy: 'copy to clipboard',
    },

    form: {
      submit: 'submit',
      clear: 'clear',
    },
  },

  home: {
    title: 'Home',
    featured_projects: 'featured projects',
  },

  projects: {
    title: 'Projects',
    main: {
      featured_projects: 'featured',
      view_demo: 'view live demo',
    },

    aside: {
      all_projects: 'all projects',
    },
  },

  about: {
    title: 'About',
    main: {
      development: {
        title: 'development',
        text: 'Curabitur condimentum elementum venenatis. Mauris iaculis magna viverra, molestie turpis non, volutpat lorem. Nulla rhoncus diam sem. Nam justo eros, cursus id urna vel, sagittis gravida sapien. Pellentesque urna justo, auctor ultrices ullamcorper vel, rutrum sed dolor. Fusce volutpat urna nisl, vitae lobortis urna dapibus eget. Ut congue metus ac odio semper, in semper felis dignissim. Sed in diam non dolor vestibulum rhoncus quis at mauris.',
      },
      design: {
        title: 'design',
        text: 'Phasellus ac magna enim. Maecenas aliquam diam nec dui varius, sit amet blandit nisi congue. Donec maximus nulla dignissim, placerat erat quis, sollicitudin purus. Vivamus diam libero, scelerisque ut varius et, fermentum vel tellus. Suspendisse pellentesque tristique purus, ut tempus risus vestibulum a. Nulla facilisi. Sed elementum lacus orci, ut posuere orci tempor non. Nullam sed turpis et massa euismod porta eu vel eros. Nullam vehicula non lacus in viverra. Mauris aliquam quam a finibus vulputate. In libero erat, placerat sed volutpat a, efficitur in tellus. Mauris in neque augue.',
      },
    },

    aside: {
      latest_projects: 'latest projects',
    },
  },

  contact: {
    title: 'Contact',
    main: {
      links: {
        email: {
          address: 'me@camilasalles.dev',
          body: 'Sent%20from',
          toast: {
            copied: 'copied to clipboard!',
            error: 'error',
          },
        },
      },
    },

    aside: {
      message: 'message me',
      form: {
        required: 'required field',
        message_required: 'message is required!',
        name: 'name',
        email: 'email',
        phone: 'phone no.',
        message: 'message',
        submit_state: {
          loading: 'loading...',
          success: 'message sent!',
          error: 'something happened; try again',
        },
      },
    },
  },
} as const;
