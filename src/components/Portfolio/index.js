import React from 'react'; 
import ProjectCards from '../../components/Project'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section>
          <div className="project">
            <h1 className="title">Development Portfolio: Brennon Sullivan</h1>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
          {portfolio.map((project, index) => (
          <ProjectCards
            key={index + 1}
            id={index + 1} // Auto-incremented id
            image={project.image}
            name={project.name}
            github={project.github}
            deploy={project.deploy}
            topics={project.topics}
          />
        ))}

          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;