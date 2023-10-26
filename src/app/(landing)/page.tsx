import Image from 'next/image';

import { Button } from '@/components/ui/button';

import { revalia, roboto } from '@/config/font/font';

import introduce from '../../../public/img/anhcogiao.png';
import contact from '../../../public/img/contact.png';
import manTech from '../../../public/img/mantalkwithevo.png';
import teachImg from '../../../public/img/teaching.png';
import Arrow from '../../config/icon/arrow';
import ArrowFly from '../../config/icon/arrowfly';
import Audio from '../../config/icon/audio';
import Ellip from '../../config/icon/ellip';
import Live from '../../config/icon/live';
import PlayIcon from '../../config/icon/play';
import Upper from '../../config/icon/upperArrow';
import style from './landing.module.css';

import introduceMb from '@/../public/img/Ảnh cô ko nền 1.png';

export default function Home() {
  const revaliaFont: any = revalia.className;
  const robotoFont: any = roboto.className;

  return (
    <div className={`flex flex-col`}>
      <div
        className={`${style.ellipOne} w-[379px] h-[379px] top-[-189px] left-1/2 `}
      ></div>
      <div className={`${style.ellipTwo} w-[228px] h-[228px] top-[362px] left-1/2`}></div>

      {/* introduce */}
      <div
        className={`relative h-[860px] flex justify-between px-[100px] max-sm:flex-col max-sm:px-0 max-sm:justify-center max-sm:h-auto`}
      >
        <div className="flex flex-col justify-center max-w-[600px] max-sm:mx-5">
          <div className="flex flex-col max-sm:items-center">
            <h1
              className={`${style.headingTitle} text-[68px] font-[400] ${revaliaFont} max-sm:text-[36px]`}
            >
              Modern
            </h1>
            <br />
            <h2
              className={` text-black text-[68px] font-[400] leading-[100%] ${revaliaFont} max-sm:text-[36px]`}
            >
              Education
            </h2>
            <p
              className={` text-black text-[34px] font-[400] leading-[100%] my-[32px] ${robotoFont} max-sm:text-[20px] max-sm:text-center max-sm:mx-[40px]`}
            >
              where learners can access and participate in online courses, interact with
              lecturers...
            </p>
          </div>
          <div className="flex px-[6px] items-center gap-[84px] self-stretch max-sm:gap-12 ">
            <Button className={style.joinFree}>Join For Free</Button>
            <button className={style.watch}>
              <div
                className={`${style.circle} w-[56px] h-[56px] max-sm:w-[43px] max-sm:h-[43px]`}
              >
                <div className={style.triangle}></div>
              </div>
              <span className="text-[#23bbeb] text-[24px] font-[400] leading-[100%] max-sm:text-[12px]">
                WATCH VIDEO
              </span>
            </button>
          </div>
          <div className="flex px-2 items-start gap-[49px] self-stretch max-sm:justify-between">
            <div className={style.number}>
              <h3>
                50 <span className={style.progress}>+</span>
              </h3>
              <p>Teacher</p>
            </div>
            <div className={style.number}>
              <h3>
                2,5k <span className={style.progress}>+</span>
              </h3>
              <p>Student</p>
            </div>
          </div>
        </div>
        <div className="relative max-sm:flex max-sm:justify-center">
          {/* <ArrowFly className={style.arrfly}/> */}
          <Arrow className={style.arrow} />
          <Image
            src={introduce}
            alt="Introduce about us"
            priority={true}
            className="max-sm:hidden"
          />
          <Image src={introduceMb} alt="..." className=" md:hidden" />
          <div className={`${style.ellipThree} max-sm:hidden`}></div>
        </div>
      </div>
      {/* video quality */}
      <div className="w-[1136px] h-[1120px] m-auto max-sm:w-screen max-sm:h-auto">
        <div className="">
          <h2 className="w-[556px] text-[#0a033c] text-center text-[45px] font-[700] leading-[55px] mt-69px mx-auto max-sm:mt-[84px] max-sm:text-[24px] max-sm:w-full max-sm:leading-10">
            High quality video, audio & live classes
          </h2>
          <p className="w-[840px] text-[#5d5a6f] text-center text-[16px] font-[400] leading-[30px] mt-[20px] mx-auto mb-[24px] max-sm:text-[12px] max-sm:font-[500] max-sm:w-full max-sm:px-4">
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video image with considerably more than 480
            vertical scan lines or 576 vertical lines is considered high-definition.
          </p>
        </div>
        <div>
          <Image
            src={teachImg}
            alt="..."
            priority={true}
            className="mx-auto rounded-[50px] p-[20px]"
          />
        </div>
        <div className="flex justify-around mt-[100px] max-sm:mt-[12px]  max-sm:text-[14px]">
          <div className="h-[100px] flex items-center max-sm:h-[51px]  max-sm:shadow-slate-300 max-sm:shadow-lg max-sm:px-2">
            <Audio />
            <h3 className="text-[#0a033c] text-[25px] font-[600] ml-[20px] max-sm:text-[14px]">
              Audio Classes
            </h3>
          </div>
          <div className="h-[100px] flex items-center max-sm:h-[51px]  max-sm:shadow-slate-300 max-sm:shadow-lg max-sm:px-2">
            <Live />
            <h3 className="text-[#0a033c] text-[25px] font-[600] ml-[20px] max-sm:text-[14px]">
              Live Classes
            </h3>
          </div>
          <div className="h-[100px] flex items-center max-sm:hidden">
            <PlayIcon />
            <h3 className="text-[#0a033c] text-[25px] font-[600] ml-[20px]">
              Recorded Classes
            </h3>
          </div>
        </div>
        <div
          className={`h-[100px] flex items-center md:hidden max-sm:h-[51px] max-sm:shadow-lg max-sm:shadow-slate-300 max-sm:px-2 max-sm:w-[200px] max-sm:mx-auto`}
        >
          <PlayIcon />
          <h3 className="text-[#0a033c] text-[25px] font-[600] ml-[20px] max-sm:text-[14px]">
            Recorded Classes
          </h3>
        </div>
      </div>
      {/* Teacher */}
      <div className="flex w-auto h-[500px] justify-center max-sm:w-screen max-sm:flex-col-reverse max-sm:mt-10">
        <Image
          alt="..."
          src={manTech}
          className="w-[460px] h-[449px]  max-sm:px-[90px] max-sm:w-screen max-sm:h-auto max-sm:my-[40px]"
        />
        <div className={`${roboto} flex flex-col ml-[49px] max-sm:ml-0 max-sm:px-5`}>
          <div>
            <h2 className="w-[732px] text-[#373535] text-[34px] font-[400] leading-[100%] max-sm:w-full max-sm:text-[16px] max-sm:font-bold max-sm:text-center">
              Bridging Teachers and Students in a Virtual Learning Environmentt
            </h2>
            <p className="mt-[46px] w-[657px] text-[#373535] text-[20px] font-[400] leading-[120%] max-sm:w-full max-sm:text-[12px] max-sm:text-center max-sm:my-4 ">
              In a virtual learning environment, teachers and students break through the
              constraints of traditional classrooms. Using advanced online platforms and
              tools, teachers can interact with students in real-time, fostering
              significant connectivity and collaboration. This virtual space expands both
              space and time, allowing seamless interaction between teachers and students
              from anywhere in the world.
            </p>
          </div>
          <div className="flex flex-row-reverse max-sm:justify-center max-sm:px-[8px]">
            <Button className="text-white w-[224px] h-[53px] flex rounded-[28px] bg-[#0e81a5] py-[12px] px-[80px] text-[24px] font-[400] items-center mt-[100px] max-sm:mt-0 max-sm:w-[135px]   max-sm:text-[12px]">
              Learn
            </Button>
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="flex justify-center items-center h-[716px] max-sm:flex-col-reverse max-sm:h-auto max-sm:px-5">
        <Image
          src={contact}
          alt="contact"
          className="w-[440px] h-[562px] rounded-[24px] max-sm:w-full  max-sm:h-auto"
        />
        <form className="flex flex-col w-[502px] items-center gap-[21px] ml-[64px] max-sm:w-screen max-sm:ml-0  ">
          <div className="flex flex-col items-center w-screen max-sm:px-5">
            <h2 className={` text-[#0e81a5] text-[28px] font-bold mb-12`}>Contact</h2>
            <input
              placeholder="Your Name"
              className="w-[500px] rounded-lg border border-solid border-[#949494] h-11 placeholder:pl-3 max-sm:w-full "
            />
            <input
              placeholder="Email"
              className="w-[500px] rounded-lg border border-solid border-[#949494] h-11 my-4 placeholder:pl-3 max-sm:w-full "
            />
            <textarea
              placeholder="Your message"
              className="w-[500px] border border-solid border-[#949494] min-h-[288px] placeholder:pl-3 max-sm:w-full "
              rows={4}
              cols={40}
            />
          </div>
          <div className={style.submitBtn}>
            <Button className="bg-[#0E81A5] flex px-[80px] py-[12px] justify-center items-center rounded-[40px] max-sm:my-5">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
