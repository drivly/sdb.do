import React from 'react'
import { Logo } from './components/Logo'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <Logo/>,
  project: {
    link: 'https://github.com/drivly/sdb.do',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/drivly/sdb.do',
  footer: {
    text: 'SimpleDB',
  },
  navbar: {
    extraContent: <span>SimpleDB</span>
  }
}

export default config
