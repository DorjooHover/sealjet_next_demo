import NewsStyle from '../styles/News.module.css'
 const NewsSection = () => {
  return (

      <div id="news" className={NewsStyle.news}>
    
    <div  className={NewsStyle.top_left}>
       <h2>Мэдээ,Мэдээлэл</h2>
    </div>
    <div className={NewsStyle.top_right}>
        <a className={NewsStyle.top_right_1} href="#">Сүүлд оруулсан</a>
        <a className={NewsStyle.top_right_2} href="#">Бусад</a>
    </div>
    <div className={NewsStyle.mid_1}>
        <div className={NewsStyle.mid_1_img}>
            <img src="/img/mid-1.jfif" width="740" height="483" alt="zurag"/>
        </div>
        
        <p>12 сарын 13, 2021</p>
        <h3>“ДЭВШИЛТЭТ ТЕХНОЛОГИ, ШИНЖЛЭХ УХААНЫ ОЛОЛТЫГ НЭВТРҮҮЛСЭН ШИЛДЭГ” </h3>
    </div>
    <div className={NewsStyle.mid_2}>
        <div className={NewsStyle.mid_2_img}>
            <img src="/img/mid-2.jpg" width="300" height="280" alt="zurag"/>
        </div>
        
        <p>12 сарын 13, 2021</p>
        <h3>“ӨРСӨЛДӨХ ЧАДВАРТАЙ МОНГОЛ" </h3>
        <p>Бизнесийн салбарт өөрийн мэдлэг боловсрол, авъяас чадвар, оюун ухаанаа ...
        </p>
    </div>
    <div className={NewsStyle.mid_3}>
        <div className={NewsStyle.mid_3_img}>
            <img src="/img/mid-3.jfif" width="260" height="280" alt="zurag"/>
        </div>
        
        <p>12 сарын 13, 2021</p>
        <h3>“САЛЬНИКИЙН ТӨРӨЛЖСӨН ДЭЛГҮҮР ШИНЭЭР НЭЭЛЭЭ” </h3>
        <p>Монголын сальникийн үйлдвэрийн салбарт тэргүүлэгч "Сийл Жет Монгол"
        </p>
    </div>
    <div className={NewsStyle.bot}>
        <a href="#">Дэлгэрэнгүй</a>
    </div>
    

</div>

  )
}

export default NewsSection
