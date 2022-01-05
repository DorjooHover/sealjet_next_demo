import productStyles from '../styles/Product.module.css'
export const ProductSection = () => {
  return (
    <div>
        <div id="product" className={productStyles.erkhem_body}>
        <div className={productStyles.container}>
            <h2>Бүтээгдэхүүн мэдээлэл</h2>
            <div className={productStyles.form}>
                <div className={productStyles.inputText}>
                    <div className={productStyles.search_logo}>
                        <i className='bx bx-search'></i>
                    </div>
                    <div className={productStyles.search_input}>
                        <input type="text" placeholder="Хайлт хийх бүтээгдэхүүнээ оруулна уу." className={productStyles.Search_Bar}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={productStyles.choosen_product}>
            <div className={productStyles.product_img}>
                <img src="http://www.sealjet.mn/pictures/product/2c0228ceefbe30f1c590d03163ebc5c4.jpg" width="145" alt=""/>
            </div>
            <div className={productStyles.product_text}>
                <h2>KO1-P</h2>
                <p>Гидравлик, нэг талын ажиллагаатай. Стандарт хэрэглээнд зориулагдсан тэгш бус хэмт бүлүүрийн сальник. Тохирсон үүрэнд сууж байж стандарт хэрэглээ болдог.</p>
            </div>
            <div className={productStyles.product_details1}>
                <h3>ТЕМПРАТУР</h3>
            </div>
            <div className={productStyles.product_details2}>
                <h3>ШИЛЖИЛТИЙН ХУРД</h3>
            </div>
            <div className={productStyles.product_details3}>
                <h3>ДАРАЛТ</h3>
            </div>
            <div className={productStyles.product_details4}>
                <h3>МАТЕРИАЛ</h3>
            </div>
            <div className={productStyles.temp}>
                <p>-30C...+110C</p>
                <p>-30C...+110C</p>
                <p>-30C...+110C</p>
                <p>-30C...+110C</p>
                <p>-30C...+110C</p>
            </div>
            <div className={productStyles.speed}>
                <p>0.5m/s</p>
                <p>0.5m/s</p>
                <p>0.7m/s</p>
                <p>0.5m/s</p>
                <p>0.5m/s</p>
            </div>
            <div className={productStyles.pressure}>
                <p>400 bar(5800 psi)</p>
                <p>400 bar(5800 psi)</p>
                <p>400 bar(5800 psi)</p>
                <p>400 bar(5800 psi)</p>
                <p>400 bar(5800 psi)</p>
               
            </div>
            <div className={productStyles.material}>
                <p>Экопур</p>
                <p>H-Экопур</p>
                <p>S-Экопур</p>
                <p>T-Экопур</p>
                <p>G-Экопур</p>
            </div>
        </div>
        <div className={productStyles.product_title}>
            <h2>Бүтээгдэхүүн сонгох</h2> 
        </div>
        <div className={productStyles.product_select}>
            <div className={productStyles.product_image}>
                <img src="./img/KO-1P.jpg" width="145px" alt=""/>
            </div>
            <div className={productStyles.product_image}>
                <img src="./img/KO-1P.jpg" width="145px" alt=""/>
            </div>
            <div className={productStyles.product_image}>
                <img src="./img/KO-1P.jpg" width="145px" alt=""/>
            </div>
            <div className={productStyles.product_image}>
                <img src="./img/KO-1P.jpg" width="145px" alt=""/>
            </div>
        </div>
        <div className={productStyles.pagination}>
            <li className={productStyles.page_item , productStyles.current_page}><a className={productStyles.page_link} href="#">1</a> </li>
            <li className={productStyles.page_item , productStyles.current_page}><a className={productStyles.page_link} href="#">2</a> </li>
            <li className={productStyles.page_item , productStyles.current_page}><a className={productStyles.page_link} href="#">3</a> </li>
            <li className={productStyles.page_item , productStyles.dots}><a className={productStyles.page_link} href="#"></a> </li>
        </div>
    </div>
    </div>
  )
}
