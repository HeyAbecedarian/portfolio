import React,{useRef} from 'react'
import './contact.css';
import walmart from '../../assets/walmart.png'
import microsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'
import adobe from '../../assets/adobe.png'
import facebookIcon from '../../assets/facebook-icon.png'
import YoutubeIcon from '../../assets/youtube.png'
import twitterIcon from '../../assets/twitter.png'
import instagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_du3ljs5', 'template_0ftuf8v', form.current, 'pHUJJgm_z8LCtvtBFXzlz')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("email sent!!")
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My clients</h1>
            <p className='clientDesc'>
            It looks like you've already set up a position: sticky; for your navbar, which is the correct approach to creating a fixed navbar. However, there might be some other factors affecting the behavior. Here are a few things to check and consider:
            </p>
        </div>
        <div className='clientImgs'>
            <img src={microsoft} alt='' className='clientImg'/>
            <img src={walmart} alt='' className='clientImg'/>
            <img src={adobe} alt='' className='clientImg'/>
            <img src={facebook} alt='' className='clientImg'/>
        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact me</h1>
            <span className='contactDesc'>It looks like you've already set up a position: sticky; for your navbar, which is the correct approach to creating a fixed navbar. However, there might be some other factors affecting the behavior. Here are a few things to check and consider:</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='your name' name='your_name'/>
                <input type='email' className='email' placeholder='your email' name='your_email'/>
                <textarea name='message' className='msg' rows='5' placeholder='your message'/>
                <button className='submitBtn' type='submit'>Submit</button>
                <div className='links'>
                    <img src={facebookIcon} className='link'/>
                    <img src={instagramIcon} className='link'/>
                    <img src={twitterIcon} className='link'/>
                    <img src={YoutubeIcon} className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;
