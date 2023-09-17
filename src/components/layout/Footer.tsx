import style from './layout.module.css'

import Email from '../../../public/icon/email';
import Phone from '../../../public/icon/Phone';
import Group from '../../../public/icon/groupsocial';
const Footer = () => {
  return <footer>
    <div className={style.footer}>
        <h3 className={style.name}>E-learning</h3>
        <div className={style.hug}>
          <div className={style.information}>
              <h2 className={style.title}>Giờ mở cửa</h2>
              <p className={style.sub}>Thứ 2- Thứ 6: 7h30-21h</p>
              <p className={style.sub}>Thứ 7 & Chủ nhật: 7h30- 14h</p>
          </div>
          <div className={style.information}>
              <h2 className={style.title}>Liên Hệ</h2>
              <p className={style.sub}><span><Email/></span>ABC@gmail.com</p>
              <p className={style.sub}><span><Phone/></span>00012309412</p>
          </div>
          <div className={style.information}>
              <h2 className={style.title}>Địa chỉ</h2>
              <p className={style.sub}>63 Lê Văn Ký, Trung hòa, <br/> Cầu Giấy, Hà Nội</p>
          </div>
        </div>
    </div>
    <div className={style.social}>
      <Group/>
    </div>
  </footer>;
};

export default Footer;
