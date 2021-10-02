import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

export default function Home() {
  const [show, setshow] = useState([]);
  const Apicall = async () => {
    try {
      const res = await axios.get(`https://api.tvmaze.com/search/shows?q=all`);
      setshow(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Apicall();
  }, []);

  return (
    <>
      <div className="home_main">
        <div className="container">
          <div className="row">
            {show.map((item) => (
              
              <div className="col-md-4 col-xs-12">
                <div class="card" style={{ width: "18rem"}}>
                  <img
                    class="card-img-top"
                    src={item.show.image.original}
                    alt="Card"
                  />

                  <div class="card-body">
                    <h5>Name: <span style={{fontWeight: "200"}}>{item.show.name}</span></h5>
                    <h5>IMBD: <span style={{fontWeight: "200"}}>{!item.show.rating.average ? "Not Available" : item.show.rating.average }</span> </h5>

                    <div className="btn">
                    <Link to={`/DetailPage/${item.show.externals.thetvdb}`} className="btn">More</Link>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
