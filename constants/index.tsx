export const CONTACT_LINKS = [
  {
    name: 'github',
    label: 'Github',
    url: 'https://github.com/Kantelabs'
  },
  {
    name: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/amidou-kante/'
  },
  {
    name: 'email',
    label: 'Email',
    url: 'mailto:0xkante@gmail.com'
  },
  {
    name: 'resume',
    label: 'Resume',
    url: '/dou-resume.pdf'
  }
]

export const WORK_EXPERIENCE = {
  'nvidia': {
    name: 'NVIDIA AI',
    description: 'explorer for interacting with different AI models',
    url: 'https://build.nvidia.com/',
    image: '/nvidia.png',
    year: '2024 - Present',
  },
  'nvidia-ngc': {
    name: 'NVIDIA NGC',
    description: 'supported gpu cloud ui development',
    url: 'https://www.nvidia.com/en-us/gpu-cloud/',
    image: '/nvidia.png',
    year: '2020 - 2024',
  },
  'apple': {
    name: 'Apple',
    description: 'frontend engineer on iPad Air',
    url: 'https://www.apple.com/',
    image: '/sentible.png',
    year: '2020',
  },
}

export const PROJECTS = {
  'ibkart': {
    name: 'ibk.studio',
    description: 'portfolio website for local artist',
    url: 'https://ibkart.studio/',
    image: '/ibkart.png',
    year: '2024',
  },
  'ghopay': {
    name: 'GhoPay',
    description: 'decentralized social payments on lens.xyz',
    url: 'https://github.com/KanteLabs/ghopay',
    // url: 'https://blog.connext.network/scaling-ethereum-hackathon-winners-c2a33d9ad626#:~:text=GhoPay%20%E2%80%94%20Great%20xApp%20Winner%20(%24500)',
    image: '/ghopay.png',
    year: '2023',
  },
  'sentible': {
    name: 'Sentible',
    description: 'web3 explorer and aave.com grantee',
    url: 'https://github.com/Sentible',
    image: '/sentible.png',
    year: '2021 - 2022',
  },
  'mycrypto': {
    name: 'MyCrypto',
    description: 'open source contributor',
    // url: 'https://mycrypto.com/',
    url: 'https://github.com/MyCryptoHQ/MyCrypto/commits?author=KanteLabs',
    image: '/mycrypto.png',
    year: '2019',
  },
  'supreme': {
    name: 'Supreme',
    description: 'api wrapper for https://supremenewyork.com',
    url: 'https://github.com/KanteLabs/supreme-api',
    image: '/supreme.png',
    year: '2018',
  },
  'visualizer': {
    name: 'Audio Visualizer',
    description: 'built with three.js and over 350+ songs visualized by users',
    url: 'https://amidoukante.com/Music-Visualizer/',
    image: '/visualizer.png',
    year: '2017',
  },
}

export const CURRENT_ROLE = (
  <div className="current">
    <h4>
      Amidou Kante
      <br />
      <span className="role-title">
        Senior Frontend Engineer&nbsp;@
        <a
          target="_blank"
          rel="noopener noreferrer" href="https://build.nvidia.com/"
        >
          NVIDIA
        </a>
      </span>
      <br />
      <span className="role-title">
        Prev&nbsp;@
        <a
          target="_blank"
          rel="noopener noreferrer" href="https://www.apple.com/"
        >
          Apple
        </a>
      </span>
    </h4>
  </div>
)
