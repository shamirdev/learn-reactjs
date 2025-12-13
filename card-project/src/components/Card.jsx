import React from 'react'

const Card = (props) => {

  return (
    <>
      <div className='container'>
        <div className='top'>
          <img style={{ border: "2px solid #aaa9a9" }} src={props.companyLogo} alt="" />
          <button type='submit'>Save <i class="fa-solid fa-bookmark"></i></button>
        </div>
        <div className='midSection'>
          <div className='comapnyNamePostedTime'>
            <h5 style={{ fontSize: "20px" }}>{props.companyName}</h5>
            <p style={{ fontSize: "16px", marginTop: "4px" }}>{props.jobPosted}</p>
          </div>
          <h2 style={{ fontSize: "25px" }}>{props.post}</h2>
          <div className='badges'>
            <div className='badgealignment' style={{ backgroundColor: "#afafaf", width: "90px", height: "27px", textAlign: "center", borderRadius: "5px" }}>
              <p style={{ fontSize: "16px" }}>{props.timing}</p>
            </div>
            <div className='badgealignment' style={{ backgroundColor: "#afafaf", width: "90px", height: "27px", textAlign: "center", borderRadius: "5px" }}>
              <p style={{ fontSize: "16px" }}>{props.level}</p>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <h2 style={{ fontSize: "25px" }}>{props.salary}</h2>
          <button type='submit'>Apply</button>
        </div>
      </div>
    </>
  )
}

export default Card
