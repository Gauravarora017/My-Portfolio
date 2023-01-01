import React from "react"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{props.skills}</h2>
            <span>{props.subskills}</span>
          </div>
          
        </div>
        
       
      </div>
    </>
  )
}

export default Card
