import {RiShipLine, RiTrainLine, RiCarLine, RiPlaneLine} from 'react-icons/ri'

export const transports = {
    name : "Transports",
    color: "rgb(112, 218, 151)",
    items : [
        {
            icon:  <RiPlaneLine/>,
            title: "Plane",
            href: "/plane"
        },
        {
            icon: <RiTrainLine/>,
            title: "Train",
            href: "/train"
        },
        {
            icon: <RiShipLine/>,
            title: "Ship",
            href: "/bus"
        },
        {
            icon: <RiCarLine/>,
            title: "Car",
            href: "/car"
        }
    ]
}