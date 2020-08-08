import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import styles from '../styles/header.module.css'

const Header = ({ children }) => {
  return (
    <AppBar color="default" position="static" className={styles.root}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
