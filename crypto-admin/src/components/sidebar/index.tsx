import logoImg from '../../assets/logo.svg';
import homeImg from '../../assets/homeIcon.svg';
import storeImg from '../../assets/storeIcon.svg';
import exitImg from '../../assets/exitIcon.svg';
import settingsImg from '../../assets/settings.svg';
import graphicImg from '../../assets/graphicIcon.svg';
import { Container } from './styles';

export function Sidebar() {
    return(
        <Container>
            <img src={logoImg} alt="" />
            <a className='navClass' href='#'><img src={homeImg} alt="" /></a>
            <a className='navClass' href='#'><img src={graphicImg} alt="" /></a>
            <a className='navClass' href='#'><img src={storeImg} alt="" /></a>
            <a className='navClass' href='#'><img src={settingsImg} alt="" /></a>
            <a className='exitClass' href='#'><img src={exitImg} alt="" /></a>
        </Container>
    )
}