import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
function Main() {
    let navigate = useNavigate();
    return(
        <div className="main">
            <Button className='btn_start' onClick={()=>{navigate('/game')}}>게임시작</Button>{' '}
        </div>
    );
}

export default Main;