import React from 'react';
import robo from './assets/robo.jpg';
import women from './assets/women.png';
import comp from './assets/comp.jpg';
import cloud from './assets/cloud.jpg';

const Collab = () => {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
  return (
    <section className='div-collab'>
        <h2>Let's Collaborate</h2>
        <div className='component'>
            <div className='text'>
                <h1>AI + RPA is What we do</h1>
                <div className='text-box'>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</div>
                <a href='/Compo1'>AI + RPA Automation &rarr;</a>
            </div>
            <div className='img'>
                <img src={robo} alt="robot" width="400px" />
            </div>
        </div>
        <div className='component reveal'>
            <div className='text'>
                <h1>Make Boldeer Choices</h1>
                <div className='text-box'>Digital focused strategies to realize market-changing ideas</div>
                <a href='/Compo1'>Build Better Apps &rarr;</a>
            </div>
            <div className='img'>
                <img src={women} alt="women" width="400px" />
            </div>
        </div>
        <div className='component reveal'>
            <div className='text'>
                <h1>Innovate with Speed</h1>
                <div className='text-box'>Create higher quality software, deliver on customer expectations and business goals</div>
                <a href='/Compo1'>DevOps &rarr;</a>
            </div>
            <div className='img'>
                <img src={comp} alt="comp" width="400px" />
            </div>
        </div>
        <div className='component reveal'>
            <div className='text'>
                <h1>Embrace Cloud</h1>
                <div className='text-box'>With Cloud-First accelerate innovation and optimize performance</div>
                <a href='/Compo1'>Cloud Services &rarr;</a>
            </div>
            <div className='img'>
                <img src={cloud} alt="cloud" width="400px" />
            </div>
        </div>
      
    </section>
  )
}

export default Collab
