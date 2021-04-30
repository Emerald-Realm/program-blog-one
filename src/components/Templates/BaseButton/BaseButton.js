import React from 'react'

export function BaseButtonOne(props) {
 return (
  <div className={props.newClass}>
   <button className='base-button-one h5'>
    <p>{props.buttonText}</p>
    <p>{props.buttonIcon}</p>
   </button>
  </div>
 )
}



export const BaseButtonTwo = (props) => {
 return (
  <div className={props.newClass}>
   <button className='base-button-two h6'>
    <p>{props.buttonText}</p>
    <p>{props.buttonIcon}</p>
   </button>
  </div>
 )
}


export const BaseButtonThree = (props) => {
 return (
  <div className={props.newClass}>
   <button className='base-button-three h5'>
    <p>{props.buttonText}</p>
    <p>{props.buttonIcon}</p>
   </button>
  </div>
 )
}




