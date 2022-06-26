import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Project yang sudah saya buat",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "simple_crud_framework_nuxtjs",
      title: "Simple CRUD Framework Nuxt.js",
      category: "Web Application",
      img: "https://vuejsexamples.com/content/images/2021/11/Blog-with-firebase-CRUD-NuxtJs.jpg",
      publishDate: "23, 06, 2022",
      tag: "UI / Frontend",
      clientTitle: "Tentang Projek",
      objectivesTitle: "Objective",
      objectivesDetails:
        "membuat simple crud menggunakan localhost rest api",
      techTitle: "Tools & Technologies",
      detailsTitle: "Deskripsi",
      socialTitle: "Share This",
      projectImages: [
        {
          id: uuidv4(),
          title: "Simple CRUD Framework Nuxt.js",
          img: "https://vuejsexamples.com/content/images/2021/11/Blog-with-firebase-CRUD-NuxtJs.jpg",
        }
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: " Simple CRUD Framework Nuxt.js",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "Coming-soon (Localhost)",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "085930258437",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "vuetify,"
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Deskripsi Kosong",
        },

      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/#",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/nabilss24",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/channel/UCBJEoGYJLx6LkB-JY2ncAWQ",
        },
      ],
    }
  ],
  clientsHeading: "Cita cita saya bekerja di?",
  clients: [
    {
      id: uuidv4(),
      title: "Tokopedia",
      img: "https://www.tmlenergy.co.id/wp-content/uploads/2019/04/0055-logo-tokopedia.jpg",
    },
    {
      id: uuidv4(),
      title: "Gojek",
      img: "https://lelogama.go-jek.com/cms_editor/2021/05/28/info-gojek-2.png",
    }
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Halo, saya nabil sahsada suratno, umur saya adalah 17th, saya adalah indie developer,saya senang dengan coding karena menurut saya itu menantang, saya sedang belajar beberapa bahasa yaitu Java,Javascript,C#, dan python, framework yang sedang saya pelajari adalah laravel, nuxt js, vue js, contoh projek dari nuxt adalah website ini sendiri saya bangun menggunakan framework nuxt js dengan css dari tailwind",
    }
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/nabils24",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/#",
    },
    {
      id: uuidv4(),
      name: "Medium",
      icon: "book",
      url: "https://nabils24.vercel.app",
    },
    {
      id: uuidv4(),
      name: "Instagram",
      icon: "instagram",
      url: "https://instagram.com/nabilss24",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "mobile",
      name: "Mobile Applicaiton",
    },
    {
      id: uuidv4(),
      value: "ui-ux",
      name: "UI/UX Design",
    },
    {
      id: uuidv4(),
      value: "branding",
      name: "Branding & Animations",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
