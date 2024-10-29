import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SlOptions } from "react-icons/sl";
import { FaEarthAmericas } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaCommentDots } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { BsEmojiHeartEyes } from "react-icons/bs";


import './style.css';
import user from './assets/Muhammad Yasir.jpg'
import car from './assets/car1.jpg'
import bird from './assets/Bird-2.jpg'
import river1 from './assets/river.webp'
import smit1 from './assets/smit.png'




function Post(Props) {
  return (
    <div className="post-container">

      <div className='post-header'>
        <div className='post-user'>
          <img
            src={user}
            alt="Muhammad Yasir"
            className="dp"
            id="my-id">
          </img>

          <div className='post-name'>
            <h3>Muhammad Yasir</h3>
            <span>10 min ago.</span>
            <FaEarthAmericas />
          </div>

        </div>
        <SlOptions />
      </div>

      <div className='post-image'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div>
          {
            
            typeof Props.postImage === 'string' ? 
            <img
              src={Props.postImage}
              alt="Post media"
              className="post-photo"
              id="my-id"
            /> 
            : Props.postImage
          }
        </div>
      </div>

      <div className='two'>
        <div>
        <FcLike style={{fontSize: 22}} />
        <SlLike style={{fontSize: 22, marginLeft: 5}} />
        <BsEmojiHeartEyes style={{fontSize: 22, marginLeft: 5}} />

        </div>
        <div className='likes'>
          Shehzad Iqbal and 291 others
        </div>
        <div className='comments'>
          65 comments
        </div>
        </div>

      <div className='lcs'>
      
        <div className='one'>
          <AiFillLike />

          <span>Like</span>
        </div>
        <div className='one'>
          <FaCommentDots />
          <span>Comment</span>
        </div>
        <div className='one'>
          <IoIosShareAlt />
          <span>Share</span>
        </div>
      </div>

    </div>
  )
}

function App(){
  return<>
  <Post postImage={user} />
  <Post postImage={smit1}/>
  <Post postImage={<iframe width="100%" height="400px" src="https://www.youtube.com/embed/UKayXMGBhEI?si=piE5yF1dq5vDu2W8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} />
  <Post postImage={bird}/>
  <Post postImage={river1}/>
  <Post postImage= {<iframe width="100%" height="400" src="https://www.youtube.com/embed/B5BWNRhU2mQ?si=mMSILocaQyd2_UvH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} />
  <Post postImage={<iframe width="100%" height="400px" src="https://www.youtube.com/embed/nvrHmb-x-1w?si=GguY33XFuQ8bbcwO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>} />
  <Post postImage={car}/>
  <Post postImage={<iframe width="100%" height="400px" src="https://www.youtube.com/embed/IJ5Z7luKrKQ?si=Wahod8jkpaV0PX-q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}/>
  </>
  
  }
  
  
  
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  


// function Post(Props){
// return(

// <div className="post-container">

// <div className='post-header'>
// <div className='post-user'>
// <img 
//   src={user} 
//   alt="Muhammad Yasir" 
//   className="dp"
//   id="my-id">
//   </img>

// <div className='post-name'>
// <h3>Muhammad Yasir</h3>
// <span>10 min ago.</span>
// <FaEarthAmericas />
// </div>

// </div>
// <SlOptions />
// </div>

// <div className='post-image'>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
// <div>
// if(postImage === img){
//   <img 
//   src={Props.postImage} 
//   alt="Hyundai Vezel" 
//   className="post-photo"
//   id="my-id"
//   >
//   </img>
//     }
// else(postImage === video){
//   <video src={Props.postImage}></video>
// }
// </div>

//   </div>

// <div className='lcs'>
// <div className='one'>
// <FcLike />
// <span>Like</span>
// </div>
// <div className='one'>
// <FaCommentDots />
// <span>Comment</span>
// </div>
// <div className='one'>
// <IoIosShareAlt />
// <span>Share</span>
// </div>
// </div>


//   </div>
// )  
// }


