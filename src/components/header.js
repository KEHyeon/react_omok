import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
function Header() {
    let navigate = useNavigate();   
    return(
        <header>
            <Nav as="ul">
                <Nav.Item as="li">
                    <Nav.Link onClick={()=>{navigate('/')}}>메인으로</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link onClick={()=>{navigate('/rule')}}>규칙보기</Nav.Link>
                </Nav.Item>
            </Nav>
        </header>

    )
}

export default Header;