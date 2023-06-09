import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">Resume: Brennon Sullivan</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
            I am a graduate from Sam Houston State University, and I recently completed a Full stack development program at Rice University. I have a passion for developing projects, exploring music, and experiencing new realities through video games. Strong foundation in programming languages and software development methodologies. Thrives on transforming ideas into tangible solutions, collaborating with teams, and staying up-to-date with industry advancements. Avid music enthusiast and gamer. Motivated and dedicated to making a meaningful impact in the field.





                <p class="mt-5">
                <a href="https://www.linkedin.com/in/brennonsullivan/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="DeWoody LinkedIn"/></a>
                </p>
                <p>
                Download my full <a href="https://github.com/brennonsullivan/20react-portfolio/raw/main/src/assets/Resume.pdf" class="link">resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2>Front End Experience</h2>
                <p>HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery, React.js, Angular.js, IndexedDB</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>Back End Experience</h2>
                <p>
                Node.js, Express.js, SQL (sqlite, mySQL, postgreSQL), Sequelize, NoSQL (MongoDB, Mongoose), Python, Django, API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;