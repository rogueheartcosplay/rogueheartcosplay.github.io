import Hero from '../../components/Hero/Hero.jsx'
import './Contact.css'

function Contact() {

  return (
    <div className="contact">
      <Hero/>
      <div className="content">
        <h1>Contact</h1>
        <h2>Email</h2>
        <p>rogueheartcosplay@gmail.com</p>
        <h2>Social Media</h2>
        <a href="https://www.instagram.com/rogueheartcosplay/" target="_blank">Instagram</a>
        <a href="https://www.youtube.com/@rogueheartcosplay" target="_blank">Youtube</a>
        <a href="https://rogueheartcosplay.tumblr.com" target="_blank">Tumblr</a>
        <a href="https://x.com/rogueheartcos" target="_blank">Twitter</a>
      </div>
    </div>
  )
};

export default Contact