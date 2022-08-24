import React from 'react';

function Project ({props}) {
console.log(props)
  return(
    <div>
      <div className='grid grid-cols-4 gap-2 px-8 py-6'>
    {props.map(props => (
      <div key={props.title} class="">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{props.title}</div>
      <p class="text-gray-700 text-base"> {props.description} </p>
      <p class="text-gray-700 text-base"> Tech Stack: {props.TechStack} </p>
      <a href={props.github} class="text-blue-400 text-base"> Github Link </a>
      <a href={props.link} class="text-blue-400 text-base"> Deployment Link </a>
    
    </div>
    </div>
    ))} 
    </div>
      </div>
    
    
    )}
    
     
     export default Project