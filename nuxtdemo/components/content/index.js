import { importAll } from './utils'

const componentsContext = require.context(
  '../../page/user/',
  true,
  /package.json/
)
export const components = importAll(componentsContext)

export const nav = [
  {
    title: 'Getting started',
    base: ''
  },
  {
    title: 'User Manage',
    base: 'components/',
    pages: components
  }
]
