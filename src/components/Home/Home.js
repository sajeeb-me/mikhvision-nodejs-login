import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Home({ user, setUser }) {
    const navigate = useNavigate();

    return (
        <section className="text-center">
            {/* <!-- Background image --> */}
            <div className="p-5 bg-image" style={{
                backgroundImage: `url('https://mdbootstrap.com/img/new/textures/full/171.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                height: "300px"
            }}></div>

            {/* <!-- Background image --> */}

            <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
                "marginTop": "-100px",
                "marginBottom": "50px",
                "background": "hsla(0, 0%, 100%, 0.8)",
                "backdropFilter": "blur(30px)"
            }}>
                <div className="card-body py-5 px-md-5">
                    {
                        user ?
                            <article>
                                <h3 className='mb-4'>Hello {user.firstName}</h3>
                                <Button variant="warning" onClick={() => setUser(null)}>Log out</Button>
                            </article>
                            :
                            <article>
                                <h3 className='mb-4'>Please Login</h3>
                                <Button variant="primary" onClick={() => navigate('/login')}>Login here</Button>
                            </article>
                    }
                </div>
            </div>
        </section>
    )
}

export default Home