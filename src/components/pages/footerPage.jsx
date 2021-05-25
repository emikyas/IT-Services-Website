import React from "react";
import { Link } from "react-router-dom";

const FooterPage = () => {
  return (
      <footer className="footer bg-red">
          <div className="container">
              <div className="row py-3 text-white">
                  <div className="col-md-6 m-auto">
                      <h4>IT Services</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                  <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                            <h4>Menu</h4>
                            <ul class="list-group list-group-flush">
                                <li className="list-group-item bg-transparent"><Link className="text-white" to="#">Home</Link></li>
                                <li className="list-group-item bg-transparent"><Link className="text-white" to="#">Our Services</Link></li>
                                <li className="list-group-item bg-transparent"><Link className="text-white" to="#">About Us</Link></li>
                                <li className="list-group-item bg-transparent"><Link className="text-white" to="#">Resources</Link></li>
                                <li className="list-group-item bg-transparent"><Link className="text-white" to="#">Blog</Link></li>
                                <li className="list-group-item bg-transparent"><Link className="text-white" to="#">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h4>Social Media</h4>
                            <ul class="list-group list-group-flush">
                                <li className="list-group-item bg-transparent"><Link className="text-white" to="#">Facebook</Link></li>
                                <li className="list-group-item bg-transparent"><Link className="text-white" to="#">Instagram</Link></li>
                                <li className="list-group-item bg-transparent"><Link className="text-white" to="#">Youtube</Link></li>
                                <li className="list-group-item bg-transparent"><Link className="text-white" to="#">Twitter</Link></li>
                                <li className="list-group-item bg-transparent"><Link className="text-white" to="#">LinkedIn</Link></li>
                            </ul>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
            <div className="text-center bg-maroon py-3">
                <div className="col-md-12">
                    <span className="text-white">&copy; Copyright: IT Services</span>
                </div>
            </div>
      </footer>
  );
}

export default FooterPage;