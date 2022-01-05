import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
 const Nav = () => {
  return (
    <div>
       <div id={navStyles.nuur}> 
        <input type="checkbox" id={navStyles.check}/>
        <label htmlFor="check" className={navStyles.checkbtn}>
            <i className="fas fa-bars"></i>
        </label>
        <div className={navStyles.logo}>
            <img src="/img/sealjet-logo.png" width="80" height="70"/>
        </div>
        <ul>
            <li><a href="#home" className={navStyles.active}>Нүүр</a></li>
            <li><a href="#product" >Бүтээгдэхүүн</a></li>
            <li><a href="#news">Мэдээ</a></li>
            <li><a href="#contact">Холбоо</a></li>
            <li>
                <div className={navStyles.cart_btn}>
                    <Link href="/">Захиалах</Link>
                </div>
            </li>
        </ul>

    </div>
    </div>
  )
}

export default Nav