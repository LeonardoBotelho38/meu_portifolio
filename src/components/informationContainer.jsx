import { AiOutlineMail, AiFillEnvironment} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs'
import '../styles/components/informationcontainer.sass';
import '../styles/components/mediaquery.sass'

const InformationContainer = () =>{
    return(
        <section id='information'>
            <div className='info-card'>
            <BsWhatsapp id='whats'/>
                <div>
                    <h3>Telefone</h3>
                    <p> (51)98418-9206  ou  (51)98056-1837 </p>
                </div>
                <div>
                <p> </p>
                </div>
            </div>
            <div className='info-card'>
                <AiOutlineMail id='email-icon'/>
                <div>
                    <h3>E-mail</h3>
                    <p>leonardobotelho.dev@gmail.com</p>
                </div>
            </div>
            <div className='info-card'>
                <AiFillEnvironment id='pin-icon'/>
                <div>
                    <h3>Localização</h3>
                    <p>Cachoeirinha - RS</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer;