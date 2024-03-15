import React, { useState } from 'react';

const SearchCity = () => {
  const [from, setFrom] = useState("Patna");
  const [to, setTo] = useState("Kashmir");
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
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true" href='/'>Buy Premium</a>
                        </li>
                    </ul>
                        <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
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
                            <div className="mb-3 form-check">
                              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                              <label className="form-check-label" htmlFor="exampleCheck1">Check me out if you are a human!</label>
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
                    Our Features...
                </div>
                
                <div id="carouselExampleCaptions" className="carousel slide my-3">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="https://s1.cdn.autoevolution.com/images/news/google-maps-apparently-told-someone-to-drive-into-a-mango-tree-the-internet-goes-nuts-177726_1.jpg" className="d-block w-100 rounded" alt="..."/>
                        <div className="carousel-caption d-none d-md-block" style={{backgroundColor: "rgba(0, 0, 0, 0.579)"}}>
                          <h5>First slide label</h5>
                          <p>Some representative placeholder content for the first slide.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/weather_forecasting_websites.jpg" className="d-block w-100 rounded" alt="..."/>
                        <div className="carousel-caption d-none d-md-block" style={{backgroundColor: "rgba(0, 0, 0, 0.579)"}}>
                          <h5>Second slide label</h5>
                          <p>Some representative placeholder content for the second slide.</p>
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
    <footer>
        
    </footer>
    </div>
  )
}

export default SearchCity;  
