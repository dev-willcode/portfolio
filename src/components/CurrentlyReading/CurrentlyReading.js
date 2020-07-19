import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import styles from '../../styles/currentlyReading.module.css'
import Button from '@material-ui/core/Button'

const LinearProgressWithLabel = ({ value }) => {
  return (
    <Box className={styles.progressMain}>
      <Box className={styles.progressBar}>
        <LinearProgress variant="determinate" value={value} />
      </Box>
      <Box className={styles.value}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          value
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
}

const CurrentlyReading = () => {
  const [progress, setProgress] = React.useState(90)
  const details =
    'With Redux, you manage the state of a web application in a single, simple object, practically eliminating most state-related bugs. Centralizing state with Redux makes it possible to quickly start saved user sessions, maintain a reliable state history, and smoothly transfer state between UIs. Plus, the Redux state container is fully programmable and integrates cleanly with React and other popular frameworks.'

  return (
    <Paper elevation={3} className={styles.root}>
      <div className={styles.imageDiv}>
        <img
          src={
            'https://images-na.ssl-images-amazon.com/images/I/41sscWDYKXL._SX258_BO1,204,203,200_.jpg'
          }
          className={styles.bookImage}
          alt="Currently Reading Book"
        />
      </div>
      <div className={styles.detailsDiv}>
        <Typography variant="h6">Currently Reading</Typography>
        <LinearProgressWithLabel value={progress} />
        <p className={styles.bookDetails}>{details}</p>
        <Button variant="contained" color="primary">
          Read More
        </Button>
      </div>
    </Paper>
  )
}

export default CurrentlyReading
