export default {
  unscoped: {
    dev_and_design: 'development & design',
    view_all: 'view all',
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
      intro: {
        text: "I'm Camila Salles, a full-stack developer and UI/UX designer with a proven track record in both education and technology. After 15 years honing my analytical skills in the classroom, I transitioned to the world of code, finding a passionate outlet for my creative expression. Today, I leverage my expertise in React, NestJS, and TypeScript to build robust and scalable web applications, while utilizing Figma, Photoshop, and Illustrator to craft intuitive and engaging user interfaces.",
      },
      development: {
        title: 'development',
        text: 'I approach software development with meticulous attention to detail and a commitment to clean, efficient code. My recent role at Labareda Drinks & BBQ provided me the opportunity to design, build, and deploy their entire online menu platform, demonstrating my ability to handle projects from conception to completion. Expect high-performing, well-maintained systems that meet your needs consistently.',
      },
      design: {
        title: 'design',
        text: 'My design philosophy centers around usability and visual clarity. I prioritize functionality and user experience, ensuring that every element serves a purpose and communicates effectively with your audience. From social media posts to website interfaces, I craft designs that resonate with your brand identity and seamlessly integrate with your overall digital strategy. Expect polished, professional outcomes that elevate your online presence.',
      },
      collaboration: {
        title: 'collaboration',
        contact_link: 'contact me',
        text: "I seek like-minded collaborators who value both technical excellence and design finesse. If you're looking for a partner who can seamlessly bridge the gap between code and aesthetics, I'm here to bring your vision to life. Expect open communication, a collaborative spirit, and a dedication to exceeding expectations.",
      },
    },

    aside: {
      latest_projects: 'latest projects',
    },
  },

  contact: {
    title: 'Contact',
    main: {
      text: "I'm always eager to hear from potential clients and collaborators. Reach out if you have a project in mind!",
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
