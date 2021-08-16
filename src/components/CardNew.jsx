import React, {useState} from "react";


function Card ({ setParentCounter },props){

    const [rangeval, setRangeVal] = useState({
        rice: 0,
        bread_cakes: 0,
        freshmeat: 0,
        //frozenmeat: 0,
        //processedmeat:0,
        freshfish:0,
        seafood:0,
        //coconut: 0,
        //tuber: 0,
        //processedfish:0,
        vegetables: 0,
        //butter: 0,
        others: 0,
        fruits:0,
        price_rice:0,
        price_bread:0,
        price_freshfish:0,
        price_freshmeat:0,
        price_seafood:0,
        price_vegetable:0,
        price_fruits:0,
        price_others: 0
      
    })
    


    function handleChange(event){
        const {name, value} = event.target;
        setRangeVal(prevrangeval => {
          return {
            ...prevrangeval,
            [name]:value
          };
        });

        setParentCounter(prevrangeval => {
            return {
              ...prevrangeval,
              [name]:value
            };
          });
        

      }



    
    

    return (

     

        <div>
        <div className="grid-style-2">

          
        <div className="card-2">
        <label> Base Price Rice: </label><br></br>  <input type="text" name="average_price_rice" value= "28.61"/><br></br>  
          {/* <label> Average Price: RM 28.61 </label><br></br> */}
          <label> Rice: {rangeval.rice/100*28.61 +28.61} </label><br></br>
          
            <div className = "box">
            <div class="value right">-20</div>
            <div class="slider-container">
            <span class="bar"><span class="fill"></span></span>
            <input type= "range" min= {-20} max={30} name="rice" value={rangeval.rice} className="slider"onChange= {handleChange}/></div>
            <div class="value right">30</div>
            </div>
            <div className="diff-card">
              <label> Difference Percentage: {rangeval.rice} % </label>
            </div>
            
   
        </div>


        <div className="card-2">
        <label> Base Price Bread and Cakes:  </label><br></br> RM <input type="text" onChange= {handleChange} name="price_bread" value={rangeval.price_bread} name="price_bread" /><br></br>  

        
        <label> bread and cakes: RM {rangeval.price_bread} </label><br></br>  
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
            <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="bread_cakes" value={rangeval.bread_cakes} className="slider"onChange= {handleChange}/>  </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.bread_cakes} % </label>
            </div>
        </div>


        <div className="card-2">
        <label>Base Price Fresh Meat: </label> <br></br>  <input type="text" name="average_fresh_meat" value= "20.26"/><br></br>  
        <label> Fresh Meat: {rangeval.freshmeat/100*20.26 + 20.26} </label><br></br>  
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="freshmeat" value={rangeval.freshmeat} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.freshmeat} % </label>
            </div>
        </div>

{/*         <div className="card-2">
        <label> Frozen Meat: {rangeval.frozenmeat} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="frozenmeat" value={rangeval.frozenmeat} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div>
         */}

{/*         <div className="card-2">
        <label> Processed Meat: {rangeval.processedmeat} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="processedmeat" value={rangeval.processedmeat} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div> */}




        <div className="card-2">
        <label>Base Price Fresh Fish: </label> <br></br>  <input type="text" name="average_fresh_fish" value= "16.79"/><br></br>  
        <label> Fresh Fish: {rangeval.freshfish/100*16.79 + 16.79} </label><br></br> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="freshfish" value={rangeval.freshfish} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.freshfish} % </label>
            </div>
        </div>

        <div className="card-2">
        <label>Base Price Fresh Seafood:</label> <input type="text" name="average_fresh_seafood" value= "22.64"/><br></br> 
        <label> Fresh Seafood: {rangeval.seafood/100*22.64 + 22.64} </label><br></br> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="seafood" value={rangeval.seafood} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.seafood} % </label>
            </div>
        </div>

{/*         <div className="card-2">
        <label>Coconut: {rangeval.coconut} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="coconut" value={rangeval.coconut} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div> */}

{/*         <div className="card-2">
        <label>Tuber: {rangeval.tuber} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="tuber" value={rangeval.tuber} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div> */}
{/* 
        <div className="card-2">
        <label>Processed Fish: {rangeval.processedfish} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="processedfish" value={rangeval.processedfish} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div> */}


        <div className="card-2">
        <label>Base Price Vegetables:</label><br></br> <input type="text" name="average_vegetables" value= "6.21"/><br></br>   
        <label>Vegetables: {rangeval.vegetables/100*6.21 + 6.21} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="vegetables" value={rangeval.vegetables} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.vegetables} % </label>
            </div>
        </div>


{/*         <div className="card-2">
        <label>Butter: {rangeval.butter} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="butter" value={rangeval.butter} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        </div> */}

        <div className="card-2">
        <label>Base Price Fruits:</label> <input type="text" name="average_fruits" value= "6.20"/><br></br>   
        <label>Fruits: {rangeval.fruits/100 * 6.2 +6.2} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="fruits" value={rangeval.fruits} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.fruits} % </label>
            </div>
        </div>

        <div className="card-2">
        <label>Base Price Others:</label> <input type="text" name="average_fruits" value= "14280"/><br></br>
        <label> Others: {rangeval.others/100*14280 + 14280} </label> 
        <div className = "box">
        <div class="value right">-20</div>
        <div class="slider-container">
        <span class="bar"><span class="fill"></span></span>
        <input type= "range" min= {-20} max={30} name="others" value={rangeval.others} className="slider"onChange= {handleChange}/> </div>
        <div class="value right">30</div>
        </div>
        <div className="diff-card">
              <label> Difference Percentage: {rangeval.others} % </label>
            </div>
        </div>
            
        </div>
            
         

        
        </div>


    )

}

export default Card;