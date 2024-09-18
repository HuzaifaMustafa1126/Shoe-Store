import React from 'react'
import './mainsection.css'
import Shoe1 from '../../assets/shoe1.png'
import Shoe2 from '../../assets/shoe2.png'
import Shoe3 from '../../assets/shoe3.png'
import texture from '../../assets/texture.png'

function mainsection() {
  return (
    <div>
        <div className="main-banner">
        <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-4  ">
                <div className="rightcol">
                <h1 class="text-white bg-danger text main-text mb-5 mt-0 ">Men's Shoes</h1>
                <p className='fs-5'>It started with a simple idea: Create quality, well-designed products that I wanted myself.</p>
                <div className='d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 76 76" fill="none" className='m-1'>
					<path d="M52.6617 37.6496L58.7381 40.0325L75.0609 49.0874L66.6016 63.7422L49.9214 54.6872L45.1557 50.7554L46.1088 57.1892V75.18H28.952V57.1892L30.0243 50.5171L24.9011 54.6872L8.45924 63.7422L0 49.0874L16.3228 39.7942L22.3991 37.6496L16.3228 35.1475L0 26.2117L8.45924 11.557L25.1394 20.4928L30.0243 24.6629L28.952 18.3482V0H46.1088V18.3482L45.1557 24.4246L49.9214 20.4928L66.6016 11.557L75.0609 26.2117L58.7381 35.3858L52.6617 37.6496Z" fill="black"></path>
				</svg>
                <h1 className='mb-5'>Trendy and Classic for the New Season</h1>
                </div>
                <a href="#" >
                <button class="btn"> Shop now
                </button>
                </a>
                <div className="w-25 h-25 d-flex gap-4 mt-5 ">
                    <button className='shoebtn'>
                    <img src={Shoe1} alt="" className='navshoes'/>
                    </button>
                    <button className='shoebtn'>
                    <img src={Shoe2} alt="" className='navshoes'/>
                    </button>
                    <button className='shoebtn'>
                    <img src={Shoe3} alt="" className='navshoes'/>
                    </button>
                    </div>
                </div>
               
            </div>
            <div class="col-lg-8 animate-image">  
                <div>
                <img src={Shoe1} alt="" className='shoe1'/>
                </div>
            </div>
            
            
        </div>
      </div>
        </div>
    </div>
  )
}

export default mainsection