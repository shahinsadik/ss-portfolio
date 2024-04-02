
import Slider from "./Slider";

const testimonials = async () => {
 
  return (
    <div id="testimonials" className="lg:px-10 px-5  ">
      <h1 className="font-bold text-2xl text-white pb-3 border-b-[#333333] border-b-2">
      Testimonials
      </h1>
      <h1 className="text-right text-white mt-3">Testimonials</h1>
      
      <div>
       
         <Slider  />
    
      </div>
      
    </div>
  );
};

export default testimonials;
