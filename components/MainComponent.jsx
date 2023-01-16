import HeaderApp from "./Header";


export default function MainComponent({ children }) {
    return (
        <>
            <HeaderApp />
            <div>{children}</div>
        </>
    )
}