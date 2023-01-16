import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

export default function Characters({ characters }) {
    return (
        <>
            <ConteinerCharacters>
                {characters.map((character) => {
                    return (
                        <Link key={character.url} style={{ textDecoration: 'none', color: 'inherit' }} href={character.url}>
                            <div>
                                <Image loader={() => character.images.jpg.image_url} unoptimized={true} src={character.images.jpg.image_url} alt={character.name} width={200} height={200} />
                                <p>Name: {character.name}</p>
                                <p>Name in Kanji: {character.name_kanji}</p>
                            </div>
                        </Link>
                    )
                })}
            </ConteinerCharacters>
        </>
    )
}

export const getServerSideProps = async () => {
    const response = await fetch("https://api.jikan.moe/v4/characters?limit=24");
    const { data } = await response.json();

    return {
        props: {
            characters: data
        }
    }
}

const ConteinerCharacters = styled.main`
    margin-top: 20px;
    display: flex;
    column-gap: 15px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    div {
        box-sizing: content-box;
        width: 200px;
        padding: 10px;
        &:hover {
            top:-4px;
            box-shadow:1px 1px 4px 4px #999;
            transition: all .2s ease-in-out;
        }
    }

    p {
        font-family: 'Jacques Francois', serif;
    }
`