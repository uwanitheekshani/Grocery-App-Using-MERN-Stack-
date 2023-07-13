import { style } from '@mui/system';
import * as React from 'react';


function Hero() {
  return (
    <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
 
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

 
  <div class="carousel-inner">
   
    <div class="carousel-item active">
      <img src="https://i.postimg.cc/2Sxgb4th/pho.jpg" style={{height:'88vh'}}  class="d-block w-100" />
    </div>

  </div>
</div>
  );

  
}
export default Hero;
