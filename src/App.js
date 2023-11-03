import React,{useState} from 'react';
import './App.css';
import Boxdentis from './Boxdentis.js';
import dataDentises from './dataDentuses.js';
import Null from './Null.js';
import Tabbar from './Tabbar.js'



function App() {
  const [searchText, setSearchText] = useState('');

  const filterdentis = dataDentises.filter((dataDentis) => {
    return dataDentis.dataname.includes(searchText)
  });
  
  // เอาข้อมูลอาเรย์มาใช้ สามารถแยกใส่ข้อมูลjsได้เลย
  const dataDentisesElements = filterdentis.map((dataDentis,index) => {
    return <Boxdentis key={index} dataDentis={dataDentis}/>
  });

  return (
    <>
      <Tabbar/>
    
      <center>
      <div className='app-search'>
        <input
          className="app-search-input"
          type="text"
          placeholder="    search dentis"
          value = {searchText}
          onChange={(event) => {setSearchText(event.target.value)}}
        />
        <img className='imgsearch' src='imagdentis\image 4.png'/>
        <button style={{ cursor: 'pointer' }}><img className='imgsearch'src='imagdentis\image 7.png'/></button>{/*ปุ่มกรอง*/ }
      </div>
      </center>
      
      <div className='app-grid'>
        {dataDentisesElements} {/*เรียกใช้ข้อมูลจากอาเรย์*/}
        <Null/>
      </div>

      

    </>
  );
}

export default App;
