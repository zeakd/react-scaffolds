import React from 'react'
import { connect } from 'react-redux'


const Root = (props) => {
  // console.log(props)
  return (
    <div>
      <h1>Hi</h1>
      <p>React App</p>
      <p>{props.ping.isPinging ? 'ping' : 'pong'}</p>
      <p>{props.message.message}</p>
      <button onClick={() => { props.dispatch({ type: 'PING' })}}>Ping</button>
      <button onClick={() => { props.dispatch({ type: 'HI' })}}>Say Hi</button>
      <button onClick={() => { props.dispatch({ type: 'PING_WITH_HI' })}}>PingWithPiing</button>
    </div>
  )
}

export default connect(state => ({ ping: state.ping, message: state.message }))(Root)