import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import api from "../services/api"

export default function Test(){
    const {data: session, status } = useSession()
    const [user, setUser]   = useState(null)

    function getProfile(){
        api.get(`user`, {
            headers: {
                "Accept": "application/vnd.github+json",
                "Authorization": `Bearer ${session.accessToken}`
            }
        })
        .then( res => {
            setUser(res.data)
        })
    }
   
    useEffect(() => {      
        getProfile()
    }, [])
    return (
        <h1>TESTE</h1>
    )
}