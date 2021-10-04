import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-info">
                <footer className="page-footer font-small blue pt-3">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="col-md-6 mt-md-0">
                                <img className="" style={{ width: '200px', height: '200px' }} src="https://www.kingsunitedindia.com/frontend/assets/images/kingslogo.png" alt="" />
                            </div>
                            <div className="col-md-3 mb-md-0 mb-3 mt-5">
                                <h5 className="text-uppercase fw-bold">Follow Us:</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none mb-2">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none mb-2">Teitter</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Youtube</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 mb-md-0 mb-3 mt-5">
                                <h5 className="text-uppercase fw-bold">Quick Links:</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none mb-2">Linkedin</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none mb-2">Discord</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">Media</a>
                                    </li>
                                    <li>
                                        <a href="#!" className="text-white text-decoration-none">blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="footer-copyright text-center py-3">© 2020 Copyright: <span className="fs-6 fw-bold">www.thekinginc.com</span>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;