import React, { useState, useEffect } from "react";
import axios from 'axios'
import {useHistory , useParams} from 'react-router-dom'

export default function DetailPage() {

    const [showImg, setshowImg] = useState([]);
    const [ShowDetails , setDetails] = useState([]);
    const [Rating , setRating] = useState([]); 
    const [genre , setgenres] = useState([])

    const  {id}  = useParams()

    const history = useHistory()
    const back =()=>{
        history.push("/");
    }
    
    
    const DPCall = async () => {
        try {
          const res = await axios.get(`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`);
          setshowImg(res.data.image.original);
          setDetails(res.data)
          setRating(res.data.rating.average)
          setgenres(res.data.genres)
        } 
        catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        DPCall();
      }, [id]);

    return (
       
        <div className="DP_main">
            <div className="container">
            <div className="back_btn" onClick={back}>
            <i className="fas fa-hand-point-left btn_back"></i>
            </div>
            

            <div className="Details">
                <div className="img">
                 <img src={showImg} className="showImg" alt="Error" />
                </div>

                <div className="details">
                    <h1 style={{fontWeight: '600'}}>{ShowDetails.name}</h1>
                    <h5>Language: <span style={{fontWeight: '300'}}>{ShowDetails.language}</span></h5>
                    <h5>Rating: <span style={{fontWeight: '300'}}>{Rating} <i class="fas fa-star" style={{color:' #e59866 '}}></i></span></h5>
                 

                 <div className="genres" style={{display:'flex'}}>
                 <h5>Genres: </h5>
                     {
                         genre.map(genrees=>(
                             <h5><span style={{fontWeight: '300'}}> {genrees}.</span> </h5>
                         ))
                     }
                 </div>
                </div>

                <div className="Summary">
                <h5>Summary :-</h5>
                <h6><span style={{fontWeight: '400'}}>{ShowDetails.summary}</span></h6>
                </div>

            </div>
            </div>
        </div>
    
    )
}
