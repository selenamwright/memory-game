import React from 'react';
import ReactCardFlip from 'react-card-flip';
import img from "../images/sunflower.jpeg";
import backimg from "../images/back.jpeg"
const Card = ({ project, func,count }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onClick={() => {func(count+1)
          setIsFlipped((prev) => !prev)}}
        className="relative"
      >
     <div class="flex h-screen">
     <div class="m-auto">
  <img width="400"  height ="300" src={img} alt=""/>
  </div>
</div>
      </div>
      <div
        onClick={() => {func(count+1)
          setIsFlipped((prev) => !prev)}}
        className=" "
      >
     <div class="relative flex h-screen">
     <div class="m-auto">
  <img width="400"  height ="300" src={img} alt=""/>
  </div>
</div>
      </div>
    </ReactCardFlip>
  );
};

function Project ({props}) {
  const [count, setCount] = React.useState(0);
  return(
    <div>
      <div className=''>
    {props.map(props => (
      <div key={props.title} class="grid grid-cols-2">
        <div>
          <Card project={props} key={props.title} count={count} func={setCount}/>
          </div>

          <div className='px-4 text-4xl'>
  Times flipped: {count}

  <div className=' py-11 text-4xl'>
  What color is the flower?
  </div>
  <form class="bg-white shadow-md rounded px-8 py-10 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Answer"/>
    </div>
   
    
  </form>
  </div>


          
      </div>
    ))} 
    
    </div>
      </div>
    
    
    )}
    
     
     export default Project