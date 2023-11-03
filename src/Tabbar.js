import './Tabbar.css'

function Tabbar(){
    return(
        <div className="tabbar">
          <img className="logo" src="images-tabbar\logo.jpg" />
        <div className='grid'>
          <button className='home' style={{ cursor: 'pointer' }}><img className='imgtab'src='images-tabbar\home.svg'/>HOME</button>
          <button className='call' style={{ cursor: 'pointer' }}><img className='imgtab'src='images-tabbar\CALL.svg'/>0813568554</button>
          <button className='profile'style={{ cursor: 'pointer' }}><img className='imgtab'src='images-tabbar\porfilewhite.png'/>SHARCH PROFILE</button>
          <button className='appinment'style={{ cursor: 'pointer' }}><img className='imgtab'src='images-tabbar\calendar.png'/>BOOK APPOINMENT</button>
        </div>
        </div>
    )
}
export default Tabbar;