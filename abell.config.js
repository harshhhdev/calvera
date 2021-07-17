module.exports = {
  themePath: 'theme', // Source files of the blog in 'theme' directory.
  contentPath: 'content', // Content of the blog is in 'content' directory.
  outputPath: 'dist', // On npm run build, website is created in 'dist' directory.
  globalMeta: {
    title: 'Harsh Singh',
    description:
      'Hi, welcome! Edit the abell.config.js to get started using Calvera!',
    email: 'hi.harsh@pm.me',
    domain: 'https://harshhhdev.github.io/calvera',
    linkedin: 'https://www.linkedin.com/in/harsh-singh-5ba6b31b8/',
    twitter: 'harshhhdev',
    github: 'harshhhdev',
    repo: 'harshhhdev/harshhhdev.github.io',
    talks: [
      {
        name: 'Talk Title',
        conf: 'Conference 2006',
        location: 'Noida',
        date: '26 July 2006',
        role: 'Main Speaker',
        link: 'reactindia.io',
      },
      {
        name: 'Your Talk',
        conf: 'Prisma Day',
        location: 'Berlin',
        date: '15 September 2014',
        role: 'Main Speaker',
        link: 'prisma.io/day'
      },
    ],
    uses: {
      software: [
        {
          name: 'NeoVim',
          description: 'Currently learning...',
          link: 'neovim.io',
        },
        {
          name: 'Visual Studio Code',
          description: 'Until I learn NeoVim',
          link: 'code.visualstudio.com',
        },
        {
          name: 'Arch Linux',
          description: 'Been my distro for a few months now',
          link: 'archlinux.org',
        },
        {
          name: 'i3wm',
          description: 'Amazing tiling window manager',
          link: 'i3wm.org',
        },
        {
          name: 'Calvera Dark',
          description: 'Recently switched to this theme',
          link: 'marketplace.visualstudio.com/items?itemName=saurabh.calvera-dark',
        },
        {
          name: 'JetBrains Mono',
          description: 'Favourite monospaced font',
          link: 'jetbrains.com/lp/mono',
        },
        {
          name: 'Lexend',
          description: 'Favourite sans-serif font',
          link: 'lexend.com',
        },
        {
          name: 'Alacritty',
          description: "Best terminal emulator I've used",
          link: 'github.com/alacritty/alacritty',
        },
        {
          name: 'Brave',
          description: 'Fastest browser, by far',
          link: 'brave.com',
        },
        {
          name: 'Spotify',
          description: 'My favourite genre is rap',
          link: 'spotify.com',
        },
      ],
      tech: [
        {
          name: 'TypeScript',
          description: 'In the process of learning',
          link: 'typescriptlang.org',
        },
        {
          name: 'Next.js',
          description: 'Favourite frontend framework by far',
          link: 'nextjs.org',
        },
        {
          name: 'GraphQL',
          description: 'Learning more about rap',
          link: 'graphql.org',
        },
        {
          name: 'Figma',
          description: 'Prototyping, and creating UI',
          link: 'figma.com',
        },
        {
          name: 'Prisma',
          description: 'ORM I use with PostgreSQL',
          link: 'prisma.io',
        },
        {
          name: 'PostgreSQL',
          description: 'Recently switched from MongoDB',
          link: 'postgresql.org',
        },
        {
          name: 'Fastify',
          description: "Fastest web server I've used",
          link: 'fastify.io',
        },
        {
          name: 'ESLint',
          description: 'To write better code',
          link: 'eslint.org',
        },
        {
          name: 'Node.js',
          description: 'Until I find motivation to learn actix',
          link: 'nodejs.org',
        },
        {
          name: 'Prettier',
          description: 'Customisable, and easy-to-use code formatter',
          link: 'prettier.io',
        },
        {
          name: 'Vercel',
          description: 'I just love it-',
          link: 'vercel.com',
        },
        {
          name: 'Heroku',
          description: 'For Node.js backends',
          link: 'heroku.com',
        },
      ],
      gear: [
        {
          name: 'HP Laptop 14',
          description: 'Dual core i3 @2.4ghz',
          link: 'browser.geekbench.com/v4/cpu/15055681',
        },
        {
          name: 'HP EliteDisplay E222',
          description: 'Good monitor for the price',
          link: 'amazon.com/HP-EliteDisplay-21-5-inch-Monitor-computer/dp/B01B9K4CQW',
        },
        {
          name: 'Logitech K330 Wireless',
          description: 'I type at ~120wpm',
          link: 'amazon.com/Logitech-Wireless-Desktop-Keyboard-Mouse/dp/B07NHN6B8T',
        },
        {
          name: 'Logitech M325 Wireless',
          description: 'Small and handy mouse',
          link: 'bestbuy.com/site/logitech-m325-wireless-optical-mouse-silver/2577677.p',
        },
        {
          name: 'Apple EarPods',
          description: 'Came with my iPhone, been using for a while',
          link: 'apple.com/shop/product/MMTN2AM/A/earpods-with-lightning-connector',
        },
        {
          name: 'iPhone XR',
          description: 'Snapchat, Instagram... that stuff',
          link: 'apple.com/shop/buy-iphone/iphone-xr/6.1-inch-display-128gb-black-verizon?cid=aos-us-seo-pla&purchaseOption=cp',
        },
        {
          name: 'Xbox One S',
          description: 'Gaming with friends',
          link: 'xbox.com/en-US/consoles/xbox-one-s',
        },
        {
          name: 'iPad 2018 (6th Gen)',
          description: 'For general use',
          link: 'walmart.com/ip/Apple-iPad-32GB-6th-Gen-with-Wi-Fi-Cellular/202918138',
        },
      ]
    },
  },
}
