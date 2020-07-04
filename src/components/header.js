import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import styles from '../styles/header.module.css'

const Header = ({ children }) => {
  return (
    <AppBar position="static" className={styles.main}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
