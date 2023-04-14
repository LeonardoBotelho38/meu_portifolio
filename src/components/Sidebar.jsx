import SocialNetWorks from './SocialNetWorks'
import Avatar from '../img/Eu2.png'
import '../styles/components/sidebar.sass'
import InformationContainer from './informationContainer'
const Sidebar = () => {
    return(
       <aside id="sidebar">
            <img src={Avatar} alt="Leonardo Botelho" />
            <p className="title">Front-end Developer</p>
            <SocialNetWorks />
            <InformationContainer />
            
       </aside>
    )
}

export default Sidebar