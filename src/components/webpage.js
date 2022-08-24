import Project from "./project"
import React from 'react';

const Projectdata= [{title: "OasisAI", TechStack: "Nextjs, MongoDB,GraphQL,Strapi,Tailwindcss",description:"This is a project geared around startups that use the hackathon style of coding event in order to help and solved relvavant problems and use the coding time spent to create real utilized components",link:""},
{title: "Galavanter", TechStack: "Handlebars, ExpressJs, NodeJS MySQL", description:"This project was made in order to provide a one stop shop for anyone to get proper information for traveling needs.",link:"https://project-1-gt.herokuapp.com/", github:"https://github.com/Groceat/Gallivanter?organization=Groceat&organization=Groceat"},
{title: "Note Taking App", TechStack: "Nodejs ExpressJS", description:"A simple note taking app that interacts with a JSON database", link:"https://challengeheroku-gt.herokuapp.com/", github:"https://github.com/Groceat/challenge-11"},
{title: "The Final Countdown", TechStack: "Javascript Css", description:"The final countdown webpage is essentially an end-of-the-world (EOW) tracker. At first glance, the user will see multiple cards, each containing a different topic retaining to signs that the end is near. In one card, the user can click through recent natural disasters around the world. In other cards, the user will click through recent positive COVID numbers for each state, or click through data that tracks global warming. ", link:"https://canslercp.github.io/the_final_countdown/", github:"https://github.com/canslercp/the_final_countdown"},
{title: "TBA", TechStack: "React", description:"E-Commerce", link:""},
{title: "TBA", TechStack: "React", description:"Project 3", link:""},
]

const Webpage = () => {
    return(
    
        <Project props={Projectdata}/>
      

    )}

     export default Webpage