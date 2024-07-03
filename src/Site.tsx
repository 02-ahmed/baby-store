/* import React from 'react' */
import logo from './images/logo.jpg';
import { FaUserCircle } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import baby from "./images/baby.jpg"
import walker from './images/walker.jpg';
import toySet from './images/toy-set.jpg';
import feedingBottle from './images/feeding bottle.jpg';
import diapers from './images/diapers.jpg';
import babyCare from './images/childCare.jpg'
import './App.css'


const Site = () => {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md bg-body-transparent">
          <div className="container-fluid">
            <a href="#" className="navbar-brand"><img src={logo} height={50} /></a>

            <div className="col-4 col-md-2 ms-auto d-flex justify-content-end order-md-2">
                <button className=' btn btn me-2 ms-2 px-0'><FaUserCircle size={30} className='nav-icon' /></button>
                <button className=' btn me-2 ms-2 px-0'><FaCartPlus size={30} className='nav-icon'/></button>
                <button className='navbar-toggler ms-2' type='button' data-bs-toggle="collapse" data-bs-target="#navbarDrop">
                <span className='navbar-toggler-icon'></span>
              </button>
            </div>
            <div className='collapse navbar-collapse' id='navbarDrop'>
              <ul className='navbar-nav ms-auto me-auto'>
                <li className='nav-item'>
                  <a href="#" className="nav-link active fw-bold " style={{fontSize:"20px"}}>Home</a>
                </li>
                <li className='nav-item'>
                  <a href="#products" className="nav-link fw-bold" style={{fontSize:"20px"}}>Products</a>
                </li>
                <li className='nav-item'>
                  <a href="#blog" className="nav-link fw-bold" style={{fontSize:"20px"}}>Blog</a>
                </li>
                <li className='nav-item'>
                  <a href="#contact-us" className="nav-link fw-bold" style={{fontSize:"20px"}}>Contact us</a>
                </li>
              </ul> 
            </div>

             
          </div>
        </nav>

        <section id='home '>
          <div className="container-fluid">
            <div className="row g-5">
              <div className="col-12 col-md-6 " >
                <div className="rounded-4 d-flex justify-content-md-end justify-content-center">
                  <img src={baby} alt="" className="img-fluid rounded-4" style={{height:"320px"}} />
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
                <div className=" bg-secondary rounded-4 home-card d-flex justify-content-center justify-content-md-start" style={{maxWidth:"480px"}}>
                  <div className='ps-3 pe-3 pb-4 ' style={{maxHeight:"320px", minHeight:"320px"}}>
                    <h5 className='mt-3 mt-md-5'>Welcome to BabyPharm where we offer the best</h5>
                    <p className='mt-1 mt-md-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae eum optio reiciendis officia, perspiciatis aspernatur cupiditate rem cum velit sequi sapiente quisquam et nemo porro error nesciunt fugiat dolores.</p>
                    <button className="btn btn-warning mt-3">Find more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3 d-flex justify-content-center mt-3 pb-5">
              <div className="col-md-3 d-flex justify-content-center">
                <div className='img-container1 mini-container'>
                  <button className='btn btn-warning text-light px-0 py-0 ms-3 mt-3'>Promotional</button>
                  <h3 className='mt-2 ms-3 text-light'>Best skin <br /> care</h3>
                  <button className="btn btn-primary mt-3 ms-3 mt-md-2">View More</button>
                </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
              <div className='img-container2 mini-container'>
                  <h1 className='text-light ms-3 fw-bold'>$37</h1>
                  <h5 className='text-light ms-3 discount'>$189</h5>
                  <h4 className='mt-2 ms-3 text-light'>Best skin <br /> care</h4>
              </div>
              </div>
              <div className="col-md-3 d-flex justify-content-center">
              <div className='img-container3 mini-container'>
                  <h1 className='text-light ms-3 fw-bold'>$37</h1>
                  <h5 className='text-light ms-3 discount'>$189</h5>
                  <h4 className='mt-2 ms-3 text-light'>Best baby <br /> care</h4>
              </div>
              </div>
            </div>
          </div>
        </section>
        <section id='products'>
          <div className="container-fluid mt-0 mb-3">
          <h1 className='theme-color text-center mb-4'>Products</h1>
            <div className="row g-2 ">
              <div className="col-md-3 col-6">
                <div className="card col-12">
                  <div className="card-head">
                    <div className="text-center">
                      <img src={walker} alt="" className='img-fluid product-img' />
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className='text-center theme-color'>Baby Walker</h3>
                    <h5 className='text-center theme-color'>GHC 845</h5>
                    <div className="text-center">
                      <button className="btn btn-outline-primary">Add to Cart</button>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="col-md-3 col-6">
              <div className="card col-12">
                  <div className="card-head">
                    <div className="text-center">
                      <img src={toySet} alt="" className='img-fluid product-img' />
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className='text-center theme-color'>Baby Set</h3>
                    <h5 className='text-center theme-color'>GHC 299</h5>
                    <div className="text-center">
                      <button className="btn btn-outline-primary">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
              <div className="card col-12">
                  <div className="card-head">
                    <div className="text-center">
                      <img src={feedingBottle} alt="" className='img-fluid product-img' />
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className='text-center theme-color'>Feeding Bottle</h3>
                    <h5 className='text-center theme-color'>GHC 145</h5>
                    <div className="text-center">
                      <button className="btn btn-outline-primary">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-6">
              <div className="card col-12">
                  <div className="card-head">
                    <div className="text-center">
                      <img src={diapers} alt="" className='img-fluid product-img' />
                    </div>
                  </div>
                  <div className="card-body">
                    <h3 className='text-center theme-color'>Pampers Diaper</h3>
                    <h5 className='text-center theme-color'>GHC 767</h5>
                    <div className="text-center">
                      <button className="btn btn-outline-primary">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='blog'>
          <div className="container-fluid mt-5 pt-5">
            <div className="blog-title text-center">
              <h1 className='theme-color fw-bold'>Taking Care of Your Baby</h1>
            </div>
            <div className="row g-3 mt-3 ms-md-5 me-auto mb-5">
              <div className="col-md-6 text-center">
                  <img src={babyCare} className='img-fluid' />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className='text-center'>
                  <h2 className='theme-color text-center'>
                    Proper child care is essential for the healthy development of your baby
                  </h2>
                  <p className='theme-color ps-5 pe-5 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam quidem corporis et enim similique reiciendis maiores? Recusandae, voluptatum harum error nemo blanditiis maiores! Architecto totam ipsum labore ipsa. Ipsam?</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='contact-us'>
          <div className="container-fluid pt-5 mb-5 pb-5">
            <div className="row g-5">
              <div className="col-md-6">
                <h3 className='theme-color'>Contact us for any enquiries or questions you may have</h3>
                <p className='theme-color'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, cumque blanditiis. Nemo at error obcaecati culpa molestiae aperiam ab. Sint enim beatae soluta officia cumque culpa temporibus eveniet consequatur explicabo.</p>
                <div className="row">
                  <div className="col-6 d-flex flex-column">
                    <h5 className='theme-color'>Tema</h5>
                    <a className="text-decoration-none theme-color" href=""><FaLinkedin size={20}/>  02</a>
                    <a className="text-decoration-none theme-color" href=""><FaGithub size={20} />  02</a>
                  </div>
                  <div className="col-6 d-flex flex-column">
                  <h5 className='theme-color'>Kpone</h5>
                    <a className="text-decoration-none theme-color" href=""><FaLinkedin size={20}/>  Ahmed Boabae</a>
                    <a className="text-decoration-none theme-color" href=""><FaGithub size={20} />  Ahmed Boabae</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row g-3">
                <div className='col-12'>
                  <input type="text" className="form-control rounded-pill theme-color custom-input" placeholder='Name'/>
                </div>
                <div className='col-12'>
                <input type="email" className="form-control rounded-pill theme-color custom-input" placeholder='Your e-mail'/>
                </div>
                <div className='col-12'>
                <textarea className="form-control rounded-3 theme-color custom-input" placeholder='Message' style={{height:"100px"}}></textarea>
                </div>
                
                </div>
                <button className="btn btn-primary mt-3">Submit</button>
              </div>
            </div>
          </div>
        </section>
        <footer className=''>
          <div className="container-fluid">
            <div className="row mt-5">
              <div className="col-4">
              <a className="text-decoration-none theme-color" href=""><FaLinkedin size={20}/>  Ahmed </a>
              </div>
              <div className="col-4">
              <a className="text-decoration-none theme-color" href=""><FaGithub size={20} />  Ahmed </a>
              </div>
              <div className="col-4">
              <a className="text-decoration-none theme-color" href=""><FaTwitter size={20} />  Ahmed</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Site