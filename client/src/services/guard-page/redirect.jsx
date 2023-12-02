import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Redirect = ({children}) => {
    let connected = localStorage.getItem("userConnected")
    const nav = useNavigate()

    useEffect(() => {
        if(connected) {
                nav('/my-board')
        }

    }, [nav, connected])

    return(
        <div>
            {connected ? null : children}
        </div>
    )
}
export default Redirect;