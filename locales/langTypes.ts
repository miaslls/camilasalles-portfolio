export type LocaleKeys = {
  unscoped: {
    dev_and_design: string;
    view_all: string;
  };
  tooltip: {
    header: {
      language: string;
      current: string;
      theme: string;
    };
    footer: {
      maps: string;
      linkedin: string;
      github: string;
    };
    project: {
      demo: string;
      repo: string;
    };
    contact: {
      copy: string;
    };
    form: {
      submit: string;
      clear: string;
    };
  };
  home: {
    title: string;
    featured_projects: string;
  };
  projects: {
    title: string;
    main: {
      featured_projects: string;
      view_demo: string;
    };
    aside: {
      all_projects: string;
    };
  };
  about: {
    title: string;
    main: {
      intro: {
        text: string;
      };
      development: {
        title: string;
        text: string;
      };
      design: {
        title: string;
        text: string;
      };
      collaboration: {
        title: string;
        contact_link: string;
        text: string;
      };
    };
    aside: {
      latest_projects: string;
    };
  };
  contact: {
    title: string;
    main: {
      text: string;
      links: {
        email: {
          address: string;
          body: string;
          toast: {
            copied: string;
            error: string;
          };
        };
      };
    };
    aside: {
      message: string;
      form: {
        required: string;
        message_required: string;
        name: string;
        email: string;
        phone: string;
        message: string;
        submit_state: {
          loading: string;
          success: string;
          error: string;
        };
      };
    };
  };
};

export type LocaleNamespace = keyof LocaleKeys;
