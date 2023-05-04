import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { ApiGetNoAuth } from '../../Api/Api';

function Share() {
    const [state, setState] = useState();

    useEffect(() => {
        ApiGetNoAuth("footer")
        .then((res) => {
           
            setState(res?.data?.result)
        })
        .catch((err) => console.log("AData", err))
    }, []);
    return (
        <section>
            <div class="share">
                <h5>Share <span></span></h5>
                <ul class="d-flex flex-column justify-content-center align-items-center">
                    <li><Link to={state?.footer?.facebook_link} target='_'><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    <li><Link to={state?.footer?.twitter_link} target='_'><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
                    <li><Link to={state?.footer?.instagram_link} target='_'><i class="fa fa-google" aria-hidden="true"></i></Link></li>
                    <li><Link to={state?.footer?.pinterest_link} target='_'><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                    <li><Link to={state?.footer?.youtube_link} target='_'><i class="fa fa-youtube-play" aria-hidden="true"></i></Link></li>
                </ul>
            </div>
        </section>
    )
}

export default Share