import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import CubeOutlineIcon from 'mdi-react/CubeOutlineIcon'
import { Link, withRouter  } from 'react-router-dom'

const Home = () => (
    <Fragment>
        <Helmet><title>Quiz App - Home</title></Helmet>
            <div id="home">
                <section>
                    <div style={{textAlign: 'center'}}>
                        <CubeOutlineIcon className="cube" size={100} />
                    </div>
                    <h1>State Board Quiz</h1>
                    <div className="play-button-container">
                        <ul>
                            <li><Link  className="play-button" to="/play/quiz">Play</Link></li>
                        </ul>
                    </div>
                    {/* <div className="auth-container">
                        <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                        <Link to="/register" className="auth-buttons" id="signup-button">Sign up</Link>
                    </div> */}
                </section>
            </div>      
    </Fragment>
    )

export default Home