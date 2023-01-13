import styles from '../../styles/root-page/root-page.module.scss'
import { useState } from "react"
import SideMenu from '../components/side-menu'
import CatPage from '../cat-page'

export default function RootPage(props) {

    const [select, setSelect] = useState(0)

    const Content = () => {

        switch (select) {
            case 0:
                return (
                    <CatPage/>
                )
                break;

            case 1:
                return (
                    <></>
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
        <div className={styles.RootMainPage}>
            <div className={styles.MenuBox}>
              <SideMenu/>
            </div>

            <div className={styles.ContentBox}>
                <Content />
            </div>

        </div>
    )
}