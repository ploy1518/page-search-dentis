import  './Boxdentis.css';

function BoxDentis(props){
    const {dataDentis} =props;
    return(
        <>
        <div className='box'> 
            <img className='imgdentis'src={dataDentis.imgdentis}/>
            
            <h5>
            <div className='dataname'>{dataDentis.dataname}</div>
            <div className='dataTM'>{dataDentis.dataTM}</div>
            <div className='dataPLAB'>{dataDentis.dataPLAB}</div>
            </h5>

            <button className='edit' style={{ cursor: 'pointer' }}><center>Edit Profile</center></button> {/*ใส่ฟังชั่นทีหลัง*/}
        </div>
        </>
    )
}

export default BoxDentis;