import './App.css';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function App() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  return (
    <div className="App">
      <img src="https://media.licdn.com/dms/image/C4E03AQFGtrAPIJxEsg/profile-displayphoto-shrink_800_800/0/1662919128435?e=1683158400&v=beta&t=bvnepyzByvftR2H_RGrSe9IqA9CzNSkOIGpANPta_vw"></img>
      <div className="main">
        <h1>Nitin M V S</h1>
        <h4>Student</h4>
        <h4>Software Engineer</h4>
        <h4>Frontend Developer</h4>
        <div className='btn'>
          <button className='github' onClick={() => openInNewTab('https://github.com/nitin0412')}><FaGithub size="1.1rem"/>Github</button>
          <button className='linkdein' onClick={() => openInNewTab('https://www.linkedin.com/in/venkata-sai-nitin-mavuduru-b31673203/')}><FaLinkedin size='1.1rem'/>Linkedin</button>
        </div>
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making visual component of websites. 
          I am also a software engineer good at programming and loves problem solving .</p>
        <h3>Interests</h3>
        <p>Movie buff. Chess lover. Reader. Internet fanatic. Cricket buff. 
          Travel geek. Pop culture ninja.Knowledge seeker</p>
      </div>
      <div className="footer">
        <a href="https://twitter.com/MVSNitin" target='_blank'><FaTwitterSquare size="2rem" /></a>
        <a href="https://www.facebook.com/profile.php?id=100010089487960" target='_blank'><FaFacebookSquare size="2rem" /></a>
        <a href="https://www.instagram.com/nitinmvs/" target='_blank'><FaInstagramSquare size="2rem" /></a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=mavudurunitin123@gmail.com&su=SUBJECT&body=BODY&tf=cm" target='_blank'><SiGmail size="2rem" /></a>
      </div>
    </div>
  );
}

export default App;
