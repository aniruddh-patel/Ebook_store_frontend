import React from 'react'

const ReviewWrite = () => {
  return (
    <div>
      <form className='OpinionForm' action="Submit">
        <div className='OpinionFormdiv'>
        <input  className='OpinionNameInput' type="text" placeholder='Name'/>
        <input  className='OpinionInput' type="text" placeholder='Write Your View..(20 words)'/>
        </div>
        
        <button className='OpinionButtons'>Cancel</button>
        <button className='OpinionButtons'>Send</button>
      </form>
    </div>
  )
}

export default ReviewWrite