import React from 'react';
import {Content} from './style'
import pixel from '../../assets/images/pexels-artem-beliaikin-1832323-remov1ebg-preview.png'
import Footer from '../../views/Home/Footer'
function Contact() {
  return (
    <Content>
      <div className='grid-cols-2 grid ml-[120px]'>
          <div className='mt-[100px]'>
            <p className='text-[48px] font-bold play cursor-pointer'>About me</p>
            <p className='text-[24px] font-normal text-[#828282] mt-10'>Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor <br /> duis tortor neque auctor dis ipsum. Pretium cras amet odio amet <br /> eleifend id sed cras sed. Aliquet risus <br /> posuere aliquet imperdiet sit.</p>
            <button className="w-[114px] h-[43px] bg-[#FDC435] text-[#25282B] text-[18px] font-medium rounded-lg mt-14">Resume</button>
          </div>

          <div className='w-[524px] h-[524px] bg-[#FDC435] rounded-[600px] mt-[50px] ml-[80px]'>
            <img src={pixel} alt="" />
          </div>
        </div>
        <Footer className='mt-[40px]'/>
    </Content>
  )
}
export default Contact