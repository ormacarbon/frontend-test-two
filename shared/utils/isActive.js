import {useRouter} from 'next/router'

const isActive = (path) =>{
    const router = useRouter()
    return router.pathname.includes(path)
}

export default isActive