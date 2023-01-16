import Link from "next/link"
import styled, { ThemeProvider } from "styled-components"
import { themeLightMode } from "../../theme/theme"

export default function RecepieCard(props) {
    return (
        <ThemeProvider theme={themeLightMode}>
        <Link href={props.to}>
            <StyledRecepieCard style={{
                backgroundImage: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7)), url(${props.img})`
            }}>
                <h3>
                    {props.title}
                </h3>
            </StyledRecepieCard>
        </Link>
        </ThemeProvider>
    )


}

const StyledRecepieCard = styled.div`
    min-width: 100%;
    min-height: 100%;
    word-wrap: break-word;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.7);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    color: ${p => p.theme.colors.secondaryFontColor};

    @media screen and (max-width: 625px) {
        font-size: 0.8rem;
    }
`

