'use client'
import style from './landing.module.css'
import Image from 'next/image';
import { revalia, roboto } from '@/config/font/font';
import { Button } from "@/components/ui/button"

import teachImg from '../../../public/img/teaching.png'
import introduce from '../../../public/img/anhcogiao.png'
import manTech from '../../../public/img/mantalkwithevo.png'
import contact from '../../../public/img/contact.png'

import Arrow from '../../config/icon/arrow';
import Ellip from '../../config/icon/ellip';
import Upper from '../../config/icon/upperArrow';
import PlayIcon from '../../config/icon/play';
import Audio from '../../config/icon/audio';
import Live from '../../config/icon/live';
import ArrowFly from '../../config/icon/arrowfly';
export default function Home() {
  const revaliaFont:any = revalia.className;
  const robotoFont :any = roboto.className

  return (
    <div className={`flex flex-col ${style.wrapper}`}>
          <div className={style.ellipOne}></div>
          <div className={style.ellipTwo}></div>
          <Arrow className={style.arrow} />
          {/* introduce */}
          <div className={style.introduce}>
              <div className={style.joinUs}>
                  <div className={style.title}>
                      <h1 className={`${style.headingTitle} ${revaliaFont}`}>Modern</h1><br/>
                      <h2 className={`${style.subTitle} ${revaliaFont}`}>Education</h2>
                      <p className={`${style.paragraph} ${robotoFont}`}>where learners can access and participate in online courses, interact with lecturers...</p>
                  </div>
                  <div className={style.btnJoin}>
                      <Button className={style.joinFree}  onClick={() => {alert('hello ahihi')}}>Join For Free</Button>
                      <button className={style.watch}>
                        <div className={style.circle}>
                          <div className={style.triangle}></div>
                        </div>
                      <span >WATCH VIDEO</span>
                      </button>
                  </div>
                  <div className={style.information}>
                    <div className={style.number}>
                      <h3>50 <span className={style.progress}>+</span></h3>
                      <p>Teacher</p>
                    </div>
                    <div className={style.number}>
                      <h3>2,5k <span className={style.progress}>+</span></h3>
                      <p>Student</p>
                    </div>
                  </div>
              </div>
            <div className={style.picture}>
              {/* <ArrowFly className={style.arrfly}/> */}
                <Image src={introduce}
                    alt='Introduce about us'
                    priority={true}
                    sizes="100vw"
                    style={{
                      width: 'auto',
                      height: '780px',
                      }}
                  />
                  <div className={style.ellipThree}></div>
            </div>
          </div>
          {/* video quality */}
          <div className={style.quality}>
              <div className={style.titleQuality}>
                  <h2 className={style.aboutVideo}>High quality video, audio & live classes</h2>
                  <p className={style.subTitleVideo}>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video image with considerably more than 480 vertical scan lines or 576 vertical lines is considered high-definition.</p>
              </div>
             <div className={style.imgClass}>
             <Image src={teachImg}
             alt='...'
                    priority={true}
                    style={{
                      margin:'auto',
                      borderRadius:'50px',
                      padding:'20px',
                      }}
              />

              <Ellip className={style.ellipVideo}/>
              <Upper className={style.upperArrow}/>
             </div>
             <div className={style.functional}>
                      <div className={style.functionalClass}>
                          <Audio/>
                          <h3>Audio Classes</h3>
                      </div>
                      <div className={style.functionalClass}>
                          <Live/>
                          <h3>Live Classes</h3>
                      </div>
                      <div className={style.functionalClass}>
                          <PlayIcon/>
                          <h3>Recorded Classes</h3>
                      </div>
             </div>
          </div>
          {/* Teacher */}
          <div className={style.obTeacher}>
            <Image
            alt='...'
              src={manTech}
              style={{
                width: '460px',
                height: '449px',
                boxShadow: `1px 10px #b6b6b6`,
              }}
            />
            <div className={`${roboto} ${style.aboutOurTeacher }`}>
                <div>
                <h2 className={style.titleAbOurTeacher}>Bridging Teachers and Students in a Virtual Learning Environmentt</h2>
                <p className={style.paragraphAbTeacher}>In a virtual learning environment, teachers and students break through the constraints of traditional classrooms. Using advanced online platforms and tools, teachers can interact with students in real-time, fostering significant connectivity and collaboration. This virtual space expands both space and time, allowing seamless interaction between teachers and students from anywhere in the world.</p>
                </div>
                <div className='flex flex-row-reverse'>
                  <Button className={style.btnLearn}>Learn</Button>
                </div>
            </div>
          </div>
          {/* contact */}
          <div className={style.contactUs}>
              <Image src={contact}
                alt='contact'
                style={{width: '440px',
                height: '562px',
                borderRadius: '24px',
                }}
                />
                <div className={style.formInfor}>
                  <div className={style.inputInfor}>
                    <h2 className={style.titleContact}>Contact</h2>
                    <input placeholder='...'/>
                    <input placeholder='...'/>
                    <input placeholder='...'/>
                    <input placeholder='...'/>
                  </div>
                  <div className={style.submitBtn}>
                    <Button>Send</Button>
                  </div>
                </div>
          </div>
    </div>
  );
}
