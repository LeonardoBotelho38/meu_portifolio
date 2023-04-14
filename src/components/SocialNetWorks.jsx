import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn/>, url: 'https://www.linkedin.com/in/leonardo-botelho-5a9408271/'},
    {name: "github", icon: <FaGithub/>, url: 'https://github.com/LeonardoBotelho38'}
]
const SocialNetWorks = () =>{
    return(
        <section id='social-networks'>
            {socialNetworks.map((network)=>(
                <a href={network.url} target='_blank' className='social-btn' id={network.name} key={network.name}>{network.icon}</a>
            ))}
        </section>
    )
}

export default SocialNetWorks