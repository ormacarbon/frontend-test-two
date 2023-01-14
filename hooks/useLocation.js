import { useContext } from "react"
import { LocationContext } from "../contexts/LocationContext"

const useLocation = () => {
    const context = useContext(LocationContext)
    if (!context) {
        throw new Error("useLocation must be used within a LocationProvider")
    }
    return context
}

export default useLocation