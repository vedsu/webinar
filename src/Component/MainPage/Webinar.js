import React from 'react'
import './Webinar.css';
const sliderImageUrl = [
  //First image url
  {
    url:
      "https://profshr.com/img/v2.png"
  },
  {
    url:
      "https://profshr.com/img/v2.png"
  },
  //Second image url
  {
    url:
      "https://profshr.com/img/v2.png"
  },
  //Third image url
  {
    url:
      "https://profshr.com/img/v2.png"
  },

  //Fourth image url

  {
    url:
      "https://profshr.com/img/v2.png"
  },
  {
    url:
      "https://profshr.com/img/v2.png"
  },
  {
    url:
      "https://profshr.com/img/v1.png"
  },
  {
    url:
      "https://profshr.com/img/v1.png"
  },


];
export const Webinar = () => {
  return (
    <div className="container-fluid video-block section-padding">
    <div className="row">

    <div className="col-md-2"></div>
    <div className="col-md-10">
    <h6 className='speakertext'>Featured Videos</h6>
    <div className="row">
    {sliderImageUrl.map((imageUrl, index) => {
          return (
    <div className="col-xl-3 col-sm-6 mb-3">
    <div className="video-card">
    <div className="video-card-image">
    <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
    <a href="#"><img className="img-fluid" src={imageUrl.url} alt/></a>
    <div className="time">3:50</div>
    </div>
    <div className="video-card-body">
    <div className="video-title">
    <a href="#">There are many variations of passages of Lorem</a>
    </div>
    <div className="video-page text-success">
    Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
    </div>
    <div className="video-view">
    1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
    </div>
    </div>
    </div>
    </div>
     );
    })}
   
    </div>
    </div>
    </div>
    </div>
  )
}

export default Webinar