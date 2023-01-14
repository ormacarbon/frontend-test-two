import styles from '../../styles/root-page/root-page.module.scss'
import { useState } from "react"
import SideMenu from '../components/side-menu'
import CatPage from '../cat-page'
import UsersPage from '../users-page'
import { useContext } from 'react'
import Theme from '@/pages/contexts/contexts'

export default function RootPage(props) {

    const [select, setSelect] = useState(0)
    const a = false
    const b = useContext(Theme)

    const Content = () => {

        switch (select) {
            case 0:
                return (
                    <CatPage/>
                )
                break;

            case 1:
                return (
                    <UsersPage/>
                )
                break;

            case 2:
                return (
                    <></>
                )
                break;

            case 3:
                return (
                    <>dsd</>
                )
                break;
        }
    }

    return (
        <div className={a?styles.RootMainPage: styles.BlackRoot}>
            <div className={styles.MenuBox}>
              <SideMenu setSelect={setSelect}/>
            </div>

            <div className={styles.ContentBox}>
                <Content />
            </div>

        </div>
    )
}