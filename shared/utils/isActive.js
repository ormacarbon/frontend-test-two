import {useRouter} from 'next/router'

const isActive = (path) =>{
    const router = useRouter()
    return router.pathname === path
}

export default isActive