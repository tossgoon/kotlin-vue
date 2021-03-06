let users = [
  {
    slug: '/index',
    title: 'index'
  },
  {
    slug: '/add',
    title: 'add',
    exact: 'user/add'
  }
]

let blogs = [
  {
    slug: '/add',
    title: 'add'
  }
]

export const subNav = [
  {
    title: 'User',
    base: '/user',
    pages: users
  },
  {
    title: 'Blog',
    base: '/blog',
    pages: blogs
  }
]
