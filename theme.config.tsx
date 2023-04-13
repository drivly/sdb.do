import React from 'react'
import { Logo } from './components/Logo'
import { Button } from './components/Button'
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
    extraContent: <Button/>
  }
}

export default config
