import image from './menow.jpeg'
const AboutMe = () => {
    
   console.log("aboutme")
    return(
        <div className=" px-2 sm:px-4 py-2.5">
            <div className="text-xl">
About Me:
            </div>
            <img src={image} alt="Logo"className='w-24' />
<div className="text-black-400 px-8">
Im Charles Wright, a Computer Science Student at UofM and current student in a Georgia Tech bootcamp. Im studying to be a web develop and below some of my projects that are live will be displayed. 
I come from Georgia and have had a few internships so far.</div>
</div>
    )}
     
     export default AboutMe