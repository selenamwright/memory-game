import React from 'react';
import ReactCardFlip from 'react-card-flip';
import img from "../images/sunflower.jpeg";

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onMouseEnter={() => setIsFlipped((prev) => !prev)}
        className="CardFront"
      >
    <div class="shadow w-1/4 ">
  <img width="400" length ="300" src={img} alt=""/>
</div>
      </div>
      <div
        onMouseLeave={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
      <div class="shadow w-1/4 ">
  <img width="400"  height ="300" src={img} alt=""/>
</div>
      </div>
    </ReactCardFlip>
  );
};

function Project ({props}) {

  return(
    <div>
      <div className=''>
    {props.map(props => (
      <div key={props.title} class="relative content-center">
          <Card project={props} key={props.title} />
      </div>

    ))} 
    </div>
      </div>
    
    
    )}
    
     
     export default Project