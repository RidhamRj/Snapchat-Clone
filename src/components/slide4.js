import styled from 'styled-components'
import "../css/slide4.css"
const Slide4 = (props)=>{
    function myfunction(){
        var elemnt=document.getElementById('inactive')
        var element=document.getElementById('active')
        elemnt.classList.toggle("active")
        element.classList.toggle("active")
    }
    return (
        <div className="Slide4">
             <div className="infiniteVideo">
                <video playsInline autoPlay loop muted>
                    <source src='https://videos.ctfassets.net/adclj4ijug4e/7G4KmcxY27XBN2h57O7TXw/c65403f9c05e5c8c6b1bae4aae8635ab/spotlight_video.mp4' type='video/mp4'></source>
                </video>
            </div>
            <div className='video-content'>
                <h2>Express yourself with millions of Lenses.</h2>
                <form action="">
                <select name="" id="">
                    <option value="">AU +61</option>
                    <option value="">IN +91</option>
                    <option value="">BR +55</option>
                    <option value="">MX +52</option>
                    <option value="">US +1</option>
                </select>
                <input type="tel" id="input" onFocus={myfunction}  placeholder='Phone Number'></input>
                <tryNow>
                    <button >Open Spotlight</button>
                </tryNow>
                </form>
                
                <div className='inactive hoverText' id='inactive'>By clicking Try Now, I acknowledge that I have read the <u><b>Privacy Policy</b></u> and agreed to <u><b>Terms of Services.</b></u></div>
                <div className='inactive hoverText hoverText-2' id='active'>Message and data rates may apply.</div>
            </div>
        </div>
    )
}
export default Slide4;