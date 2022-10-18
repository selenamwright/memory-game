import Project from "./project"
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import img from "../images/sunflower.jpeg"
const Projectdata= [
{title: "OasisAI", TechStack: "Nextjs, MongoDB,GraphQL,Strapi,Tailwindcss",description:"This is a project geared around startups that use the hackathon style of coding event in order to help and solved relvavant problems and use the coding time spent to create real utilized components",link:"", img:img}]

const Webpage = () => {
    return(<div>

        <Project props={Projectdata}/>
        
        </div>

    )}

     export default Webpage