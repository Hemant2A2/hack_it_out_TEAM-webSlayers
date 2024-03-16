import React, { useState } from 'react';

const SearchCity = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const changeTo = (event) => {
    setTo(event.target.value);
  };
  const changeFrom = (event) => {
    setFrom(event.target.value);
  };
  return (
    <div>
      <header>
        <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor: "aliceblue"}} data-bs-theme="light">
            <div className="container-xxl py-1">
                <a className="navbar-brand fw-bold text-secondary" href="#intro">
                    <i className="bi bi-radar px-1"></i>
                    Bsafe
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end align-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#aboutUs">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">Features</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Others
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#reviews">Reviews</a></li>
                                <li><a className="dropdown-item" href="#contactUs">Contact Us</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#Feedback">Give us feedback!</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </header>

    <main>
        <section id="intro" style={{backgroundColor: "hsl(195, 100%, 93%)"}}>
            <div className="container lg py-3">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 text-centre text-md-start">
                        <h1>
                            <h1>Where do you want to get to?</h1>
                            <h3 className="text-body-secondary fw-1">Get there safely and prepared</h3>
                        </h1>
                        <form className="my-5">
                            <div className="mb-3">
                                <label htmlFor="fromLocation" className="form-label">From:</label>
                                <input type="text" className="form-control" value={from} onChange={changeFrom}/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="toLocation" className="form-label">To:</label>
                              <input type="text" className="form-control" value={to} onChange={changeTo}/>
                            </div>
                            <a href={`/map/${from}/${to}`} className="btn btn-outline-primary">Get the route!</a>
                        </form>
                    </div>
                    <div className="col-md-7 text-center d-none d-md-inline">
                        <img className="img-fluid rounded float-end" style={{height:"90vh"}} src="assets/hero.jpg" alt="Safest route!"/>
                    </div>
                </div>
            </div>
        </section>
        <section id="aboutUs">
            <div className="container py-3 my-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 text-center d-none d-md-inline">
                        <img className="img-fluid rounded float-start" src="assets/map-navigation-phone.png" alt="Us bro us"/>
                    </div>
                    <div className="col-md-5 text-center">
                        <p className="display-3">About Us!</p>
                        <p className="lead"><strong>We are here to help you out finding the safest path to your destination.</strong></p> <br/><p className="lead text-muted">Criminals are nuisance for the general public in the entire world for quite a while now and measures are required to reduce the crimes that are being committed, hence, you may use our website to prevent getting into such incidents.</p><br/>
                        <p className="lead"><strong>We also provide you with the weather information along the route so that you don't get wet at the wrong time</strong></p>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" style={{backgroundColor: "rgba(0, 0, 0, 0.579)"}}>
            <div className="container py-3 my-5">
                <div className="row justify-content-center align-items-center display-3" style={{color: "white"}}>
                We've covered everything you need...
                </div>
                
                <div id="carouselExampleCaptions" className="carousel slide my-3">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="https://s1.cdn.autoevolution.com/images/news/google-maps-apparently-told-someone-to-drive-into-a-mango-tree-the-internet-goes-nuts-177726_1.jpg" className="d-block w-100 rounded" alt="..."/>
                        <div className="carousel-caption d-none d-md-block" style={{backgroundColor: "rgba(0, 0, 0, 0.579)"}}>
                          <h5>Safest route</h5>
                          <p>Get a safe route for your journey on one click so that you and your loved ones can travel fearlessly</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/weather_forecasting_websites.jpg" className="d-block w-100 rounded" alt="..."/>
                        <div className="carousel-caption d-none d-md-block" style={{backgroundColor: "rgba(0, 0, 0, 0.579)"}}>
                          <h5>Weather Information</h5>
                          <p>Get the weather information of every point of your route at the same place</p>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src="assets/contactUs.jpg" class="d-block w-100 rounded" alt="..."/>
                        <div class="carousel-caption d-none d-md-block" style={{backgroundColor: "rgba(0, 0, 0, 0.579)"}}>
                          <h5>Emergency helpline</h5>
                          <p>Access to the nearest police station and hospitals in case of any emergency.<br/>Also contact the emergency helpline number on a single click.
                          </p>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>

            </div>
        </section>
    </main>
    <footer class="main-footer-section mt-3 py-3 text-white" style={{backgroundColor: "rgb(0, 149, 255)"}}>
        <div class="contact-datails">
            <div class="container-xxl" style={{backgroundColor: "rgba(82, 183, 255, 0.53)"}}>
                <div class="row justify-content-center align-items-center display-5 my-3" id="contactUs">
                    Contact Us
                </div>
                <div class="row g-0">
                    <div class="col-lg-4">
                        <div class="contact-div d-flex flex-column justify-content-center align-items-center">
                            <div class="icon-div rounded">
                                <h4><a href="#contact-number" style={{color: "white"}}><i class="bi bi-telephone-fill img-fluid"></i></a></h4>
                            </div>
                            <p id="contact-number"><small>+91 XXXXXXXXXX</small></p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="contact-div d-flex flex-column justify-content-center align-items-center">
                            <div class="icon-div rounded">
                                <h4><a href="#email-id" style={{color: "white"}}><i class="bi bi-envelope-fill"></i></a></h4>
                            </div>
                            <p id="email-id"><small>team.Bsafe@Bs***.com</small></p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="contact-div d-flex flex-column justify-content-center align-items-center">
                            <div class="icon-div rounded" >
                                <h4><a href="#office-address" style={{color: "white"}}><i class="bi bi-building-fill" ></i></a></h4>
                            </div>
                            <p id="office-address"><small>No physical office yet</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-xxl my-5">
            <div class="row justify-content-between align-items-top g-4">
                <div class="col-md-5">
                    <div class="fs-6"><em>Our mission</em></div><hr style={{marginTop:"0"}}/>
                    <p style={{color: "rgb(174, 215, 250)"}}><small><em>
                        Criminals are nuisance for the general public in the entire
                        world for quite a while now and measures are required to
                        reduce the crimes that are being committed. Current policing
                        procedures aim at finding the lawbreakers, fundamentally
                        after the crime has been committed. However, with the
                        assistance of technology, we can utilize historic crime data to
                        identify crime patterns and use them to predict crimes before
                        they are committed. We aim to completely solve this problem with the help of our website.
                    </em></small></p>
                </div>
                <div class="col-md-3">
                    <div class="fs-6"><em>Articles referred</em></div><hr style={{marginTop:"0"}}/>
                    <p><small><em>
                        <a href="https://zenodo.org/record/4743369/files/1.pdf" style={{color: "rgb(174, 215, 250)"}}>GEO PROFILING MAPS BASED ON CRIME by- 
                            Siddhant Magow, Harshit Kapoor, Chiranjeev Singh Bindra, Deepak Gupta
                            UG Student (Maharaja Agrasen Institute of Technology), UG Student (Maharaja Agrasen
                            Institute of Technology), UG Student (Maharaja Agrasen Institute of Technology), Assistant
                            Professor (Maharaja Agrasen Institute of Technology)</a>
                    </em></small></p>
                </div>
                <div class="col-md-2">
                    <div class="fs-6"><em>APIs used</em></div><hr style={{marginTop:"0"}}/>
                    <p style={{color: "rgb(174, 215, 250)"}}><small><em>
                        <a href="https://console.cloud.google.com/google/maps-apis/build?project=thinking-seer-417213" style={{color: "rgb(174, 215, 250)"}}>Google Maps API</a>
                    </em></small></p>
                    <p style={{color: "rgb(174, 215, 250)"}}><small><em>
                        <a href="https://www.weatherapi.com/" style={{color: "rgb(174, 215, 250)"}}>Weather API</a>
                    </em></small></p>

                </div>
            </div>
            <hr/>
            <div class="row justify-content-evenly align-items-top g-0">
                <div class="col-2">
                    <a href="#" style={{color: "white"}}><small>Terms and Conditions</small></a>
                </div>
                <div class="col-1">
                    <a href="#" style={{color: "white"}}><small>Services</small></a>
                </div>
                <div class="col-1">
                    <a href="#" style={{color: "white"}}><small>Google Maps</small></a>
                </div>
                <div class="col-1">
                    <a href="#" style={{color: "white"}}><small>E-mail</small></a>
                </div>
                <div class="col-1">
                    <a href="#" style={{color: "white"}}><small>Instagram</small></a>
                </div>
                <div class="col-1">
                    <a href="#" style={{color: "white"}}><small>Facebook</small></a>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default SearchCity;  
