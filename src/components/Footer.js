import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer className="d-flex flex-wrap justify-content-between align-items-center my-4 border-top">
    <section>
    <div className="container-fluid">
  
      <div className="row">
            
        <div className="feature-box col-lg-4">
          <h3 style={{"color":"#800020"}}>About Us</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <div>
    <div className="col-md-4 d-flex align-items-center justify-content-center w-100">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      </Link>
      <span className="text-muted">© 2023 Food-o-Frenzy, Inc</span>
    </div>

        </div>
  
        <div className="feature-box col-lg-4">
          <h3 style={{"color":"#800020"}}>Contact Us</h3>
          <a className="footer-link" href="https://www.linkedin.com/in/ananya-seth-646099205/" style={{"textDecoration":"None","color":"#B37A4C"}} target="_blank">Ananya Seth</a><br/>
          <a className="footer-link" href="https://www.linkedin.com/in/arpan-bhattacharya-91342a1b9" style={{"textDecoration":"None","color":"#B37A4C"}} target="_blank">Arpan Bhattacharya</a> 
        </div>
  
        <div className="feature-box col-lg-4">
          <h3 style={{"color":"#800020"}}>Links</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
    <div>

    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="me-2 text-muted">
      </Link>
      <p className="text-center">© 2023 Food-o-Frenzy, Inc</p>
    </div>
    </div>
    </div>
    </section>
    </footer>
    </>
  )
}