import '../styles/components/pageprojects.sass'
import Projects from '../img/1000PalavrasEmInglês.png'
import Projects2 from '../img/organo.png'
import Projects3 from '../img/login-animado.png'
import Projects4 from '../img/testeJr.png'
import { Link } from "react-router-dom"
import {TiArrowBack} from 'react-icons/ti'

import {
    DiHtml5,
    DiCss3,
    DiReact,
    DiJsBadge
}from 'react-icons/di'
import '../styles/components/technologiescontainer.sass'


const projects = [
    {id:'jogo javascript', img:Projects,icon:[<span key='html5'><DiHtml5 id='html-project'/></span>,<span key='css3'><DiCss3 id='css3-project'/></span>, <span key='js'><DiJsBadge id='js-project'/></span> ], text:'Projeto pessoal realizado após o curso de JavaScript para testar aprendizado. Desenvolvi um jogo para o aprendizado das 1000 palavras em inglês, é um jogo casual para reforçar o vocabulario básico.',link:'https://leonardobotelho38.github.io/JogoNovo/'},
    {id:'projeto do curso em react', img:Projects2,icon:[<span key='html5'><DiHtml5 id='html-project'/></span>, <span key='css3'><DiCss3 id='css3-project'/></span>,<span key='js'><DiJsBadge id='js-project'/></span> , <span key='react'><DiReact id='react-project'/></span>], text:'Projeto feito durante o curso de React da Alura, onde desenvolvi um Organograma com dois formulários onde podiam ser incluídos funcionários e seus respectivos times.',link:'https://organo-olive.vercel.app/'
    },
    {id:'teste vaga Jr', img:Projects4,icon:[<span key='html5'><DiHtml5 id='html-project'/></span>,<span key='css3'><DiCss3 id='css3-project'/></span>, <span key='js'><DiJsBadge id='js-project'/></span> ], text:'Projeto pessoal que desenvolvi referente a um teste para uma vaga de desenvolvedor front-end Jr. O teste pedia uma aplicação que onde clicasse apareceria um circulo, e deveria ter um botão que apague um por um e outro que retorne todos criados. Não apliquei para vaga, era um teste antigo que havia sido aplicado aos candidatos.',link:'https://teste-vaga-junior.vercel.app/'   
    },
    {id:'login animado', img:Projects3,icon:[<span key='html5'><DiHtml5 id='html-project'/></span>,<span key='css3'><DiCss3 id='css3-project'/></span>], text:'Projeto pessoal para treinar media query e animações css3.',link:'https://login-animado-opal.vercel.app/'  
    }
]

const PageProjects = () =>{
    return(
        <section className='projects'>
            
            <h2>
                <div className='content-btn'>
                    <Link to="/" className="btn">
                    <TiArrowBack className='icon-return'/>
                    </Link>
                </div>
                Principais projetos
                
            </h2>
           
            <div className='container-projects'>
                    {projects.map((project)=>(
                       <div className='project' key={project.id}>
                            <img src={project.img} alt={project.id} /> 
                            <p>{project.icon}
                             <br/>{project.text}<br/><a className='project-link' href={project.link} target='_blank'>Link do projeto</a></p>
                            
                        </div>
                    ))}
                    
            </div>
        </section>
    )
}

export default PageProjects
