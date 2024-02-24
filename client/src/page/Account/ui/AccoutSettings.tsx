import React from 'react'
import { useAppSelector } from '../../../redux/hooks'

export default function AccoutSettings():JSX.Element {
    const user = useAppSelector((state)=>state.authSlice)
    console.log(user)
  return (
    <div>
      <div style={{height:"300px", width:"300px"}}>
        <img src={user.img} alt="aaaaa" />
      </div>
    </div>
  )
}
