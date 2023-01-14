import HeaderApp from "./Header"

export default function MainComponent({ children, toggleTheme }) {
    return (
        <>
            <HeaderApp toggleTheme={toggleTheme} />
            <div>{children}</div>
        </>
    )
}