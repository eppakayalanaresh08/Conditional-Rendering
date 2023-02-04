import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }
  //  <p>if else conditional</p>
  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return (
  //         <button className="button" type="button">
  //           Logout
  //         </button>
  //       )
  //     }
  //     return (
  //       <button className="button" type="button">
  //         Login
  //       </button>
  //     )
  //   }

  render() {
    const {isLoggedIn} = this.state
    //  <p>using-Element variable</p>

    // let authButton
    // if (isLoggedIn) {
    //   authButton = (
    //     <button className="button" type="button">
    //       Logout
    //     </button>
    //   )
    // } else {
    //   authButton = (
    //     <button className="button" type="button">
    //       Login
    //     </button>
    //   )
    // }
    return (
      <div className="container">
        <Welcome greeting="Hello" />
        {/* {authButton} */}
        {/* <p>ternary operators</p>    */}
        {/* {isLoggedIn ? (
          <button className="button" type="button">
            Logoff
          </button>
        ) : (
          <button className="button" type="button">
            Login
          </button>
        )} */}

        {/* {isLoggedIn ? (
          <button className="button" type="button">
            Logout
          </button>
        ) : null} */}

        {isLoggedIn && (
          <button className="button" type="button">
            Logout
          </button>
        )}
        {!isLoggedIn && (
          <button className="button" type="button">
            Login
          </button>
        )}
      </div>
    )
  }
}

export default App
