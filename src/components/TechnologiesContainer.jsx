import {
    DiHtml5,
    DiCss3,
    DiReact,
    DiJsBadge,
    DiSass,
}from 'react-icons/di'
import '../styles/components/technologiescontainer.sass'

const technologies = [
    {id: 'html', name: 'HTML5', icon: <DiHtml5/>, text: 'Conhecimento em tags semânticas, em formulários,  e em acessibilidade.'},
    {id: 'css', name: 'CSS3', icon: <DiCss3/>, text: 'Conhecimento em design responsivo com uso de flexbox, grid e mediaquery, animações, variaveis.'},
    {id: 'js', name: 'JavaScript', icon: <DiJsBadge/>, text: 'Conhecimento de sua sintaxe básica, tipos de dados, variáveis, estruturas de repetição, manipulação de DOM, eventos, consumo de Apis e funções assíncronas. '},
    {id: 'react', name: 'React', icon: <DiReact/>, text: 'Conhecimento em componentes reutilizáveis, controle de estado dos componentes, bibliotecas. '},
    {id: 'sass', name: 'Sass', icon: <DiSass/>, text: 'Estudando sobre este pré-processador no momento'}

]

const TechnologiesContainer = () =>{
    return(
        <section className='technologies-container'>
            <h2>Tecnologias</h2>
            <div className='technologies-grid'>
                {technologies.map((tech)=>(
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            </section>
    )
}

export default TechnologiesContainer