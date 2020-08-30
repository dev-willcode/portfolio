import React, { useState, useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import output from '../utils/output'
import styled from 'styled-components'
import { primaryRoute } from '../routes'
import sleep from '../utils/sleep'

const TerminalWrapper = styled.div`
  .log {
    color: white;
  }

  .terminal {
    margin-top: -20px;
    margin-bottom: -20px;
  }

  .load {
    margin: 0px;
    padding: 0px;
    width: 100%;
    background: black;
  }

  .rootname {
    color: rgb(69, 236, 69);
  }

  .term {
    color: #fff;
    opacity: 0.8;
    font-size: 1.5em;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    padding-top: 10px;
    padding-left: 20px;
  }

  .init {
    color: #fff;
    opacity: 0.8;
    font-size: 1.5em;
    overflow-y: hidden;
    overflow-x: hidden;
    padding-top: 10px;
    padding-left: 20px;
  }

  .term:after {
    content: '_';
    opacity: 1;
    animation: cursor 1s infinite;
  }

  @keyframes cursor {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @media (max-width: 680px) {
    .term {
      font-size: 12px;
    }

    .init {
      font-size: 10px;
    }
  }
`

const Terminal = () => {
  let i = 0
  let time = 1
  let text = 'sh sayan_website.sh'

  const [TextSize, setText] = useState(0)
  const [root, updateRoot] = useState('')
  const [preArray, setPreArray] = useState([])

  useEffect(() => {
    runner()
  }, [i])

  const runner = () => {
    i++
    setTimeout(function() {
      if (i < text.length) {
        if (i === 1) updateRoot(root.concat('sh '))
        if (i === 3) updateRoot(root.concat('sh s'))
        if (i === 5) updateRoot(root.concat('sh say'))
        if (i === 6) updateRoot(root.concat('sh saya'))
        if (i === 7) updateRoot(root.concat('sh sayan'))
        if (i === 8) updateRoot(root.concat('sh sayan_'))
        if (i === 9) updateRoot(root.concat('sh sayan_w'))
        if (i === 10) updateRoot(root.concat('sh sayan_we'))
        if (i === 11) updateRoot(root.concat('sh sayan_web'))
        if (i === 12) updateRoot(root.concat('sh sayan_webs'))
        if (i === 13) updateRoot(root.concat('sh sayan_websi'))
        if (i === 14) updateRoot(root.concat('sh sayan_websit'))
        if (i === 15) updateRoot(root.concat('sh sayan_website'))
        if (i === 16) updateRoot(root.concat('sh sayan_website.'))
        if (i === 17) updateRoot(root.concat('sh sayan_website.sh'))
        setText(i)
        runner()
      } else {
        i = 0
        setTimeout(function() {
          feedbacker()
        }, 1000)
      }
    }, Math.floor(Math.random() * 220) + 50)
  }

  function feedbacker() {
    setPreArray(preArray => [...preArray, `${output[i]}`])
    window.scrollTo(0, document.body.scrollHeight)
    i++
    time = Math.floor(Math.random() * 100) + 1
    setTimeout(function() {
      if (i < output.length) {
        feedbacker()
      } else {
        sleep(1500)
        navigate(primaryRoute.home)
      }
    }, time)
  }

  return (
    <TerminalWrapper>
      <div className="terminal">
        <div className="load">
          <pre className="term">
            <span className="rootname">sayanide@dev:~$ </span>
            {root}
          </pre>

          {preArray.map((initializeMessage, i) => {
            if (i < output.length - 2) {
              return (
                <pre key={i} className="init">
                  {initializeMessage}
                  <br></br>
                </pre>
              )
            } else {
              return (
                <pre key={i} className="init">
                  <br></br>
                  <br></br>
                  {initializeMessage}
                  <br></br>
                </pre>
              )
            }
          })}
        </div>
      </div>
    </TerminalWrapper>
  )
}

export default Terminal
