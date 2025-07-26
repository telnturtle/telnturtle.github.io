const repositories = [
  {
    title: 'Random UUID Version 4 Maker',
    description: 'A simple UUIDv4 maker',
    url: '/uuid4',
  },
  {
    title: 'Sha256 Hash Encoder',
    description: '',
    url: '/sha256-encoder',
  },
  {
    title: 'Yacht Dice Game',
    description: 'A game',
    url: '/yachtdice',
  },
  {
    title: 'Unix Timestamp Calculator',
    description: '',
    url: '/utcalc',
  },
  {
    title: 'Nat Du Si',
    description: 'A simple Hangul Nat Du Si clock',
    url: '/nat-du-si',
  },
  {
    title: 'Blog',
    description: 'Developer blog',
    url: 'https://medium.com/@telnturtle',
  },
  {
    title: 'Minesweeper',
    description: 'A game',
    url: '/minesweeper',
  },
]

// shuffle function
const shuffle = (list) => {
  list.sort(() => Math.random() - 0.5)
}

// shuffle repositories
shuffle(repositories)

const outputEl = document.querySelector('#output')

repositories.forEach((repo) => {
  const div = document.createElement('div')
  div.innerHTML = `
    <a href="${repo.url}" target="_blank">
      <h2>${repo.title}</h2>
      <p>${repo.description}</p>
    </a>
  `
  div.classList.add('repo-item')
  outputEl.appendChild(div)
})

const setHeadingWeight = (weight) => {
  // font-variation-settings: ""wght" 606;
  document.documentElement.style.setProperty('--heading-weight', weight)
}

{
  let weight = 900
  let diff = -1
  let pause = 0
  setInterval(() => {
    if (pause-- > 0) {
      return
    }
    weight += diff
    if (weight >= 1000) {
      diff = -1
      pause = 250
    } else if (weight <= 100) {
      diff = 1
      pause = 250
    }
    setHeadingWeight(weight)
  }, 10)
}
