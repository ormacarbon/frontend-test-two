import React, { useEffect, useState } from "react"
import CardComponent from "./components/card-component";
import { Audio } from 'react-loader-spinner'
import styles from '../../styles/users-page/users-page.module.scss'
import { useContext } from "react";
import Theme from "../contexts/contexts";

export default function UsersPage(props) {
    const [itens, setItens] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSeach] = useState('')
    const [loading, setLoading] = useState(false)
    const [searchItens, setSearchItens] = useState([])
    const pages = Math.ceil(itens.length / 12)
    const startIndex = currentPage * 12
    const endIndex = startIndex + 12;
    const currentItens = itens.slice(startIndex, endIndex)
    const {theme, toggleTheme} = useContext(Theme)

    const seachUser = (searchWord) => {
        let temp = []
        itens.forEach((item) => {
            if (item.email.includes(searchWord)) {
                temp.push(item)
            }
        })
        setSearchItens(temp)
    }

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://randomuser.me/api/?page=3&results=60&seed=abc');
            const json = await response.json();
            setItens(json.results)
        }
        catch (e) {
            console.log('erro')
        }
        setLoading(false)
    }

    useEffect(() => {

        fetchData()
    }, [])

    if (loading) {
        return (
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

        )
    }
    else {
        return (
            <div className={styles.HomeMainBox}>
                <nav>
                    <article className={styles.article}>
                        <h1 className={theme? styles.Light:styles.dark}>Usuários disponíveis</h1>
                        <p className={theme? styles.Light:styles.dark}>Aqui estão todos os usuários disponíveis no momento :)</p>
                        <input
                            type="text"
                            placeholder="Pesquisa"
                            onChange={(e) => {
                                var search = e.target.value;
                                setSeach(e.target.value)
                                seachUser(search)
                                console.log(search)
                            }}
                        />
                    </article>

                    <section className={styles.AlignBox}>
                        <div>

                            {
                                search.length < 3 ?
                                    currentItens.map(item => {
                                        return <CardComponent key={item.login.uuid} item={item} />
                                    })
                                    :
                                    searchItens.map(item => {
                                        return <CardComponent key={item.login.uuid} item={item} />
                                    })
                            }
                        </div>
                    </section>

                    {
                        search.length < 3 ?
                            <div className={styles.ControlsBox}>
                                <button
                                    onClick={(e) => {
                                        if (currentPage > 0) {
                                            setCurrentPage(currentPage - 1)
                                        }
                                    }}
                                >
                                    Anterior
                                </button>

                                <h4>{currentPage + 1}</h4>

                                <button
                                    onClick={(e) => {
                                        if (currentPage < pages) {
                                            setCurrentPage(currentPage + 1)
                                        }
                                    }}
                                >
                                    Próxima
                                </button>
                            </div>
                            :
                            <></>
                    }

                </nav>
            </div>
        )
    }

}