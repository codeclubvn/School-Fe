'use client'
import style from './layout.module.css'
import Link from 'next/link';
import { Button } from '../ui/button';

const Header = () => {
  return <header className={style.header} >
      <h1 className={style.branch}>E-learning</h1>
      <div className={style.navbar}>
        <div>
        <Link href={'/'}>Home</Link>
        </div>
        <div>
        <Link href={'/'}>About Us</Link>
        </div>
        <div>
        <Link href={'/'}>Services</Link>
        </div>
        <div>
        <Link href={'/'}>Contact Us</Link>
        </div>
      </div>
      <Button className='btnLogin'>Sign Up</Button>
  </header>;
};

export default Header;
