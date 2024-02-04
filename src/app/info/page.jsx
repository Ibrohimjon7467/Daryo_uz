import Navbar from "../components/Navbar"

function info() {
  return (
    <div>
      <Navbar />
      <div className="info-block">
        <div>
          <span className="badge">MAHALLIY (O‘ZB)</span>
          <h1>“Oyoq kiyimlarimiz 5 ming so‘mdan. Bundan <br /> biroz foyda ham qoladi” (video)</h1>
          <p>Ijtimoiy tarmoqlarda Namangandagi bozorda 5 ming so‘mdan oyoq kiyimlar sotilayotgani, bunday narx hatto Xitoyda ham yo‘qligi bildirilgan video tarqaldi. “Daryo” muxbiri Azizbek Abduvaliyev ushbu bozorga borib, sotuvchilar bilan suhbatlashdi.</p>
        </div>
        <div className="inform">
          <div className="media">
            <span className="big">Media is too big</span>
            <button className="btn">view in telegram</button>
          </div>
          <div className="comment">
            <h3>“Оёқ кийимларимиз 5 минг сўмдан. Бундан бироз фойда ҳам қолади”</h3>
            <span className="text">Ижтимоий тармоқларда Намангандаги бозорда 5 минг сўмдан оёқ кийимлар сотилаётгани, бундай нарх ҳатто Хитойда ҳам йўқлиги билдирилган видео тарқалди. “Дарё” мухбири Азизбек Абдувалиев ушбу бозорга бориб, сотувчилар билан суҳбатлашди. <br /> <br />  Уларнинг айтишича, бу нархда сотилаётган пойабзаллар йўлкирани қоплаб, бироз фойда ҳам келтиради.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default info