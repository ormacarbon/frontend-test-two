export default function Icon({ index, isActive = false, menuItems }){
    const configIcons = {
        size: 22,
        color:"#cbcad2",
        fill: "#cbcad2"
    }

    const Icon = menuItems[index].icon

    configIcons.color = isActive ? '#e22b8d' : configIcons.color
    configIcons.fill  = isActive ? '#e22b8d' : configIcons.color

    return <Icon  {...configIcons} ></Icon>
}