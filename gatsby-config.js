module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Anthony Ellis',
    // Main Site Title
    title: `Anthony Ellis | Game Developer`,
    // Description that goes under your name in main bio
    description: `Developing games since 2017`,
    // Optional: Github account URL
    github: `https://github.com/MNchino`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/supremeoverlord/`,
    // Content of the About Me section
    about: `I am a Software Engineer with a Bachelor's Degree in Computer Science from University of Maryland, Baltimore County.  In my side hustle, I develop small games over a variety of genres.`,
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    resume:  `https://drive.google.com/file/d/1GRKYh04PpF_y0DU_Znh9Pg9LV8WYjdYk/view?usp=sharing`,
    experience: [
      {
        name: 'JP Morgan Chase',
        description: 'Full-Stack Developer, July 2021 - Present',
        link: 'https://www.jpmorganchase.com/',
      },
      {
        name: 'Reality Analytics',
        description: 'Front-End Intern, April 2020 - June 2021',
        link: 'https://reality.ai/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, Angular.js, React.js, Loopback.js, Python 3, Java, C++, C, Clojure, Docker',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL',
      },
      {
        name: 'Game Engines',
        description:
          'Godot Game Engine, Unreal 4, GameMaker Studio 1.4, Defold Engine, Unity',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`,
      },
    },
  ],
};
