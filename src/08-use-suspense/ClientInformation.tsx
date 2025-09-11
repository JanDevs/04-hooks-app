import { useEffect } from "react"
import { getUserAction } from "./api/get-user.action"


const ClientInformation = ({ id } : { id: number }) => {
  
    useEffect(() => {
        getUserAction( id ).then( console.log );
    }, [ id ])

    return (
    <div className='bg-gradient flex flex-col gap-4'>
      <h2 className='text-4xl font-thin text-white'>
        Jan - #123
      </h2>
      <p className='text-white text-2xl'>
        Ottawa, Canada
      </p>
      <p className='text-white text-xl'>
        Rol del usuario
      </p>
    </div>
  )
}

export default ClientInformation
