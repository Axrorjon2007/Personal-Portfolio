import React from "react";
import { Wrapper} from './style'
import { useFormik } from 'formik';
import footer from '../../../assets/images/Vector.png'
import * as Yup from 'yup';
import {AiFillInstagram  ,AiFillLinkedin , AiFillFacebook } from 'react-icons/ai'

const validationSchema = Yup.object().shape({
      Last_name: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Kiritish majburiy'),

      Email: Yup.string()
      .min(2, 'Too Short!')
      .required('Kiritish majburiy'),


      First_Name: Yup.string()
      .min(2, 'Too Short!')
      .max(1000, 'Too Long!')
      .required('Kiritish majburiy'),

  });
  
  function Footer() {
    const formik = useFormik({
      initialValues: {
        Last_name: '',
        First_Name: '',
        Email: '',
      },
      validationSchema,
      onSubmit: (values) => {
      },
    });
  
    return (
        <Wrapper>
            <div className="mt-[70px] text-center">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <p className="email">Name</p>
            <input className={`${formik.errors.Last_name ? 'border-2 border-red-600' : ''} out bg-[#fff] w-[400px] h-[40px]`}   value={formik.values.Last_name} type='text' name='Last_name' onChange={formik.handleChange}/>
            <span style={{marginLeft:'10px'}}>{formik.errors.Last_name && formik.touched.Last_name && formik.errors.Last_name} </span>
          </div>
            <div>
                <p className="email mt-4 ml-[-100px]">Email </p>
                <input className="out bg-[#fff] w-[400px] h-[40px]'" value={formik.values.Email} type='email' name='Email' onChange={formik.handleChange}/>
                <span style={{marginLeft:'10px'}} >{formik.errors.Email && formik.touched.Email && formik.errors.Email} </span>
            </div>
          <div>
            <p className="email mt-4">Message</p>
            <textarea className='out bg-[#fff] w-[400px] h-[160px] p-[0] m-[0]'  type='text-area' value={formik.values.First_Name} name='First_Name' placeholder="" onChange={formik.handleChange}/>
            <span style={{marginLeft:'10px'}}>{formik.errors.First_Name && formik.touched.First_Name &&  formik.errors.First_Name}</span>
          </div>
          <button className="w-[89px] h-[43px] bg-[#FDC435] text-[#25282B] text-[18px] font-medium rounded-lg ml-[310px] mt-6">Send</button>
        </form>
            </div>
            <div className="flex justify-center mt-[70px]">
              <div>
               <AiFillInstagram className="text-[45px] ml-7 text-[#25282B] cursor-pointer"/>
              </div>
              <div>
                <AiFillLinkedin className="text-[45px] ml-7 text-[#25282B] cursor-pointer"/>
              </div>
              <div>
                <AiFillFacebook className="text-[45px] ml-7 text-[#25282B] cursor-pointer"/>
              </div>
            </div>
            <div className="text-center mt-7">
              <p className="text-[16px] font-normal text-[#828282] cursor-pointer">Madelyn Torff 2021 </p>
            </div>

            <div>
              <img className="w-[100%]" src={footer} alt="" />
            </div>
      </Wrapper>
    )
}
export default Footer;