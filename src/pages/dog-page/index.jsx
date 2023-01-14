/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner'
import styles from '../../styles/dog-page/dog-page.module.scss'
import Theme from '../contexts/contexts'
import { useContext } from 'react'

export default function DogPage(props) {

    const [loading, setLoading] = useState(false)
    const [dog, setDog] = useState(null)
    const { theme, toggleTheme } = useContext(Theme)

    async function fetchData() {
        setLoading(true)
        try {
            const response = await fetch('https://random.dog/woof.json?filter=mp4%2Cwebm');
            const json = await response.json();
            setDog(json)
        }
        catch (e) {
            setDog(null)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={styles.DogMainBox}>
            <article className={theme ? styles.Head : styles.BlackHead}>
                <h1 className={styles.Dark}>Veja aqui doguinhos bonitinhos :)</h1>
            </article>

            <section>
                {
                    loading ?
                        <div className={styles.LoadingBox}>
                            <Audio
                                height="80"
                                width="80"
                                radius="9"
                                color="#2F2F3B"
                                ariaLabel="loading"
                                wrapperStyle
                                wrapperClass
                            />
                        </div>

                        :
                        dog === null ?
                            <h1>Sem doguinho ainda :(</h1>
                            :
                            <img src={dog.url} alt="" />
                }
            </section>

            <article className={styles.Article}>
                <button
                    onClick={(e) => {
                        fetchData()
                    }}
                >
                    Carregar outro doguinho
                </button>
            </article>
        </div>
    )
}