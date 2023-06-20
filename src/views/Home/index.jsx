import React from 'react';
import {Father} from './style'
import artem from '../../assets/images/pexels-artem-beliaikin-1832323-removebg-preview.png'
import elly from '../../assets/images/pexels-elly-fairytale-3823207 1.png'
import Footer from '../Home/Footer'
import recatngle from '../../assets/images/Rectangle 7.png'
import restangle7 from '../../assets/images/Rectangle 7 (1).png'
function Contact() {
  return (
    <Father>
      <div className='father'>
        <div className='grid-cols-2 grid ml-[110px] mt-[50px]'>
          <div className='text'>
            <div className='ml-5'>
              <p className='text-[18px] font-bold text-[#FDC435] cursor-pointer'>UI/UX Designer</p>
              <div className='ml-[-5px]'>
              <p className='text-[64px] cursor-pointer mt-4 font-bold title'>Hello,  my name is <br /> Axrorjon Adxmajonov</p>
              </div>
              <p className='text-[24px] text-[#828282] ml-[-5px] mt-5 cursor-pointer' >Short text with details about you,<br /> what you do or your professional career. You can add <br /> more information on the about page.</p>
            </div>
            <div className='buttons flex'>
              <button className='w-[119px] h-[43px] bg-[#FDC435] mt-10 ml-4 font-medium text-[18px] rounded-lg' >Projects</button>
              <button className='w-[119px] h-[43px] task mt-10 ml-5'>LinkedIn</button>
            </div>
          </div>
          <div className='w-[629px] h-[629] bg-[#FDC435] mt-[-50px]'>
            <img src={artem} alt="" />
          </div>
        </div>

        <div className='Projects mt-[100px]'>
          <p className='text-[48px] font-bold text-center'>Projects</p>
          <div className='bordertop'></div>
        </div>
        <div className='w-[992px] h-[524px] bg-[blue] mt-20 grid-cols-2 grid ml-[275px] shadov1'>
            <div className='w-[496px] h-[524px] bg-[#fff]'>
              <div className='mt-[130px] ml-10'>
                <p className='text-[40px] font-bold text-[#25282B] mt-3 title cursor-pointer'>Project Name</p>
                <p className='text-[18px] font-normal text-[#828282] mt-6 cursor-pointer'>I created this personal project in order to show <br /> how to create an interface in Figma using a <br /> portfolio as an example.</p>
                <button className='borders w-[115px] h-[37px] mt-3 cursor-pointer'>View Project</button>
              </div>
            </div>
            <div className='w-[496px] h-[524px]'>
              <img src={elly} alt="" />
            </div>
        </div>
        <div className='w-[992px] h-[524px] bg-[blue] mt-20 grid-cols-2 grid ml-[275px] shadov1'>
            <div className='w-[496px] h-[524px]'>
              <img src={recatngle} alt="" />
            </div>
            <div className='w-[496px] h-[524px] bg-[#fff]'>
              <div className='mt-[130px] ml-10'>
                <p className='text-[40px] font-bold text-[#25282B] mt-3 title cursor-pointer'>Project Name</p>
                <p className='text-[18px] font-normal text-[#828282] mt-6 cursor-pointer'>I created this personal project in order to show <br /> how to create an interface in Figma using a <br /> portfolio as an example.</p>
                <button className='borders w-[115px] h-[37px] mt-3 cursor-pointer'>View Project</button>
              </div>
            </div>
        </div>

        <div className='w-[992px] h-[524px] bg-[blue] mt-20 grid-cols-2 grid ml-[275px] shadov1'>
            <div className='w-[496px] h-[524px] bg-[#fff]'>
              <div className='mt-[130px] ml-10'>
                <p className='text-[40px] font-bold text-[#25282B] mt-3 title cursor-pointer'>Project Name</p>
                <p className='text-[18px] font-normal text-[#828282] mt-6 cursor-pointer'>I created this personal project in order to show <br /> how to create an interface in Figma using a <br /> portfolio as an example.</p>
                <button className='borders w-[115px] h-[37px] mt-3 cursor-pointer'>View Project</button>
              </div>
            </div>
            <div className='w-[496px] h-[524px]'>
              <img src={restangle7} alt="" />
            </div>
        </div>

        <div className='Projects mt-[100px]'>
          <p className='text-[48px] font-bold text-center'>Projects</p>
          <div className='bordertop'></div>
        </div>
        <Footer/>
      </div>
    </Father>
  )
}
export default Contact