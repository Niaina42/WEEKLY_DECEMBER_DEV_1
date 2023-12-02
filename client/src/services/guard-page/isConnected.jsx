import React, { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const IsConnected = ({children}) => {
    let connected = localStorage.getItem("userConnected")
    const nav = useNavigate()

    useEffect(() => {
        if(!connected) {
                nav('/')
        }

    }, [nav, connected])

    return(
        <div>
            {connected ? children : null}
        </div>
    )
}
export default IsConnected;