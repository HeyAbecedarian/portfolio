import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My portfolio</h2>
        <span className='worksDesc'>It looks like you've already set up a position: sticky; for your navbar, which is the correct approach to creating a fixed navbar. However, there might be some other factors affecting the behavior. Here are a few things to check and consider:</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='' className='worksImg'/>
            <img src={Portfolio2} alt='' className='worksImg'/>
            <img src={Portfolio3} alt='' className='worksImg'/>
            <img src={Portfolio4} alt='' className='worksImg'/>
            <img src={Portfolio5} alt='' className='worksImg'/>
            <img src={Portfolio6} alt='' className='worksImg'/>
        </div>
        <button className='worksBtn'>See more</button>
    </section>
  )
}

export default works
