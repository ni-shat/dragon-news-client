import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import './QZone.css';


const QZone = () => {
    return (
        <div className="custom-bg-gray text-center my-4 py-4">
            <h4 className="mb-3">QZone</h4>
            <div>
                <img className='mb-3' src={qzone1} alt="" />
                <img className='mb-3' src={qzone2} alt="" />
                <img className='mb-3' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;