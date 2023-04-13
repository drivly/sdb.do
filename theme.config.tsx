import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>SimpleDB</span>,
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
