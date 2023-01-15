import styles from '../../styles/root-page/root-page.module.scss'
import { useState } from "react"
import SideMenu from '../components/side-menu'
import CatPage from '../cat-page'
import UsersPage from '../users-page'
import DogPage from '../dog-page'
import { useContext } from 'react'
import Theme from '@/pages/contexts/contexts'

export default function RootPage(props) {

    const [select, setSelect] = useState(0)
    const { theme, toggleTheme } = useContext(Theme);

    const Content = () => {

        switch (select) {
            case 0:
                return (
                    <UsersPage />
                )
                break;

            case 1:
                return (
                    <CatPage />
                )
                break;

            case 2:
                return (
                    <DogPage/>
                )
                break;
        }
    }

    return (
        <div className={theme ? styles.RootMainPage : styles.BlackRoot}>
            <div className={styles.MenuBox}>
                <SideMenu setSelect={setSelect} />
            </div>

            <div className={styles.ContentBox}>
                <Content />
            </div>

        </div>
    )
}