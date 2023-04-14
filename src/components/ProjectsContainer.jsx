import { Link } from "react-router-dom"

const ProjectsContainer = () =>{
    return(
        <section className="projects-container">
            <h2>Projetos</h2>
            <p>Desenvolvi diversos projetos durante os cursos, e alguns projetos pessoais como por exemplo um jogo pra o aprendizado de inglês com o uso de html5, css3 e javascript.
            Também possuo projetos em React e atualmente em paralelo com meus estudos desenvolvo uma aplicação Saas para controle de escala de trabalho.
                
            </p>
            <Link to="/projetos" className="btn">
            Ver Projetos
            </Link>

        </section>
    )
}

export default ProjectsContainer