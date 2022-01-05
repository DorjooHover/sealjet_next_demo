import FooterStyle from '../styles/Footer.module.css'
 const FooterSection = () => {
  return (
    <>
      <div id="contact" className={FooterStyle.footer_top}>
    <div className={FooterStyle.footer_top_logo}>
        <img src="/img/sealjet-logo.png" width="80" height="70" alt="logo"/>
    </div>
    <div className={FooterStyle.footer_top_address}>Хаяг байршил:</div>
    <div className={FooterStyle.footer_top_text}>109-2, 13th microregion, Narnii zam, 25th khoroo, Улаанбаатар 13374</div>
    <div className={FooterStyle.footer_top_map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10697.65080797846!2d106.9347864!3d47.9090515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9216d2241acc9e8c!2sSealjet%20Mongolia!5e0!3m2!1sen!2smn!4v1639385853369!5m2!1sen!2smn" width="800" height="350"   loading="lazy"></iframe>
    </div>
</div>
<div className={FooterStyle.footer_bot}>
    <div className={FooterStyle.footer_bot_logo}>
        <img src="/img/sealjet-logo.png" width="80" height="80" alt="logo"/>
    </div>
    <div className={FooterStyle.footer_bot_contact}>
        Холбоо барих
    </div>
    <div className={FooterStyle.footer_bot_contact_icon}>
        <i className="fas fa-phone-alt"></i>
        77119596
    </div>
    <div className={FooterStyle.footer_bot_contact_text}>
        Marketing is a company that focus on developing company’s strategy for increase digital marketing
    </div>
    <div className={FooterStyle.footer_bot_contact_social} >
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram-square"></i>
        <i className="fab fa-twitter-square"></i>
    </div>
    <div className={FooterStyle.footer_bot_list}>
        <h2>Цэс</h2>
        
    </div>
    <div className={FooterStyle.footer_bot_list_bot}>
        <a href="#nuur"><p>Home</p></a>
        <a href="#product"><p>Features</p></a>
        <a href="#news"><p>Pricing About</p></a>
        <p>Contact Us</p>
    </div>
    <div className={FooterStyle.footer_bot_product}>
        <h2>Бүтээгдэхүүн</h2>
        
    </div>
    <div className={FooterStyle.footer_bot_product_bot}>
        <p>Content Strategy</p>
        <p>Content Development</p>
        <p>Content Creation</p>
        <p>Content Optamization</p>
    </div>
    <div className={FooterStyle.footer_bot_company}>
        <h2>Компани</h2>
        
    </div>
    <div className={FooterStyle.footer_bot_company_bot}>
        <p>site Map</p>
        <p>Terms of Use</p>
        <p>Privacy Notice</p>
        <p>Cookies</p>
        <p>Modern Slavery</p>
    </div>

</div>
    </>
  )
}


export default FooterSection