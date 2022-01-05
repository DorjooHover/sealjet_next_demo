import styles from '../styles/Layout.module.css'
import Nav from './Nav'
const Layout = ({children}) => {
  return (
    <>
    <Nav />
    <div className={styles.main_container}>

      {children}

    </div>
    </>
  )
}
export default Layout