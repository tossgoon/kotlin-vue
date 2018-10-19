let users = [
  {
    slug: '/',
    title: 'index'
  },
  {
    slug: '/add',
    title: 'add'
  },
  {
    slug: '/test',
    title: 'test'
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
