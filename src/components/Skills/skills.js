import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const skills = () => {
  return (
   <section id='skills'>
        <span className='skillTitle'>
            What I do?<br/>
        </span>
        <span className='skillDescription'>I am a skilled and passionate web designer from laitpur nepal and i am interested in desigining creative apps.</span>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
        </div>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>This is a web content</p>
                </div>
            </div>
        </div>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src={AppDesign} alt='' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>This is a demo for app design</p>
                </div>
            </div>
        </div>
   </section>
  )
}

export default skills
