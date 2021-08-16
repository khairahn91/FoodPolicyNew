import React, {useState} from "react";
import Form from './Form.jsx';
import Card from "./CardNew.jsx";
import Income from './Income';
import Tabs from './Tabs.jsx';
import avatar from './avatar.jpg';





function Result(){

    const [parentCounter, setParentCounter] = useState({
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
        fruits:0,
        others:0,  
        age: 23,
        age_group: "16 to 65",
        totalHousehold: "2",
        genderN: "male",
        ethnic: "malay",
        married: "notMarried",
        educationL: "spm",
        //employment: "public",
        locality: "urban",
        //residential: "Banglo",
        ownership: "owned",
        skill: "professional",
        centralDummy: "center",
        income: 2000
    })
    const income = parseFloat(parentCounter.income)
    const rice = parseFloat(parentCounter.rice)
    const bread_cakes = parseFloat(parentCounter.bread_cakes)
    const freshmeat = parseFloat(parentCounter.freshmeat)
    //const frozenmeat = parseInt(parentCounter.frozenmeat)
    //const processedmeat = parseInt(parentCounter.processedmeat)
    const freshfish = parseFloat(parentCounter.freshfish)
    const seafood = parseFloat(parentCounter.seafood)
    //const coconut = parseInt(parentCounter.coconut)
    //const tubers = parseInt(parentCounter.tuber)
    //const processedfish = parseInt(parentCounter.processedfish)
    const vege = parseFloat(parentCounter.vegetables)
    //const butter = parseInt(parentCounter.butter)
    const fruit = parseFloat(parentCounter.fruits)
    const others = parseFloat(parentCounter.others)
    //const age = parseInt(parentCounter.age)
    const age_group = parentCounter.age_group
    const house = parseFloat(parentCounter.totalHousehold)
    const gender = parentCounter.genderN
    const ethnic = parentCounter.ethnic
    const married = parentCounter.married
    const educationL = parentCounter.educationL
    //const employment = parentCounter.employment
    const locality = parentCounter.locality
    //const residential = parentCounter.residential
    const ownership = parentCounter.ownership
    const skill = parentCounter.skill
    const centralDummy = parentCounter.centralDummy

  var coef_B40_rice = -38.15;
  //var coef_B40_biscuit = -49.07;
  var coef_B40_bread_cakes = -49.07;
  var coef_B40_freshmeat = -8.26;
  //var coef_B40_frozenmeat = 19.1415;
  //var coef_B40_processedmeat = 5.1117;
  var coef_B40_freshfish = -11.64;
  var coef_B40_seafood = 11.85;
  //var coef_B40_coconut = -32.0846;
  //var coef_B40_tuber = -8.5024;
  //var coef_B40_processedFish = -10.3426;
  var coef_B40_vegetables = 104.26;
  //var coef_B40_butter = -25.1670;
  var coef_B40_fruits = -17.84;
  var coef_B40_others = -15.13;

  var coef_M40_rice = -104.14;
  //var coef_M40_biscuit = -124.9097;
  var coef_M40_bread_cakes = -11.72;
  var coef_M40_freshmeat = 1.22;
  //var coef_M40_frozenmeat = 25.2990;
  //var coef_M40_processedmeat = -3.7109;
  var coef_M40_freshfish = 4.88;
  var coef_M40_seafood = 1.28;
  //var coef_M40_coconut = -66.7216;
  //var coef_M40_tuber = 37.9392;
  //var coef_M40_processedFish = -30.7674;
  var coef_M40_vegetables = 126.18;
  //var coef_M40_butter = -2.0398;
  var coef_M40_fruits = 38.19;
  var coef_M40_others = -31.48;

  var coef_T20_rice = -137.86;
  //var coef_T20_biscuit = -173.4464;
  var coef_T20_bread_cakes = -23.28;
  var coef_T20_freshmeat = 2.08;
  //var coef_T20_frozenmeat = 29.1846;
  //var coef_T20_processedmeat = 10.6513;
  var coef_T20_freshfish = 8.09;
  var coef_T20_seafood = -8.92;
  //var coef_T20_coconut = -182.2972;
  //var coef_T20_tuber = 279.0388;
  //var coef_T20_processedFish = -30.7369;
  var coef_T20_vegetables = 166.45;
  //var coef_T20_butter = -4.2790;
  var coef_T20_fruits = 96.84;
  var coef_T20_others = -60.71;


  var coef_B40_income = 0.1103;
  //var coef_B40_age = 0.9167;
  var coef_B40_age_group = 23.64;
  var coef_B40_gender = -14.60;
  var coef_B40_married = 131.70;
  var coef_B40_ethnic = -7.96;
  var coef_B40_locality = 9.59;
  var coef_B40_house =107.18;
  //var coef_B40_house_banglo = 4.1639;
  //var coef_B40_house_semid = 45.7911;
  //var coef_B40_house_terrace = -9.8566;
  //var coef_B40_house_flat = 0.1369;
  //var coef_B40_education_spm = 0;
  //var coef_B40_education_diploma = 0;
  var coef_B40_education_degree =28.55;
  //var coef_B40_job_public = -21.7852;
  //var coef_B40_job_private = -16.0737;
  //var coef_B40_job_self = -10.9389;
  var coef_B40_ownership = 28.74;
  var coef_B40_skill_low= 20.52;
  //var coef_B40_skill_workman =-9.0918;
  //var coef_B40_sales = 8.1560;
  var coef_B40_centralDummy = 18.38;
  var stdB40 = 668.64;

  var coef_M40_income = 0.0390;
  //var coef_M40_age = 0.8824;
  var coef_M40_age_group = -28.98;
  var coef_M40_gender = -20.30;
  var coef_M40_house =138.99;
  var coef_M40_married = 54.2683;
  var coef_M40_ethnic = -16.77;
  var coef_M40_locality = 48.56;
  //var coef_M40_house_banglo = 17.7436;
  //var coef_M40_house_semid = 66.9784;
  //var coef_M40_house_terrace = 13.5184;
  //var coef_M40_house_flat = 22.1712;
  //var coef_M40_education_spm = 12.8313;
  //var coef_M40_education_diploma = 21.8569;
  var coef_M40_education_degree =18.9469;
  //var coef_M40_job_public = -56.0265;
  //var coef_M40_job_private = -59.7962;
  //var coef_M40_job_self = -16.4178;
  var coef_M40_ownership = 36.76;
  //var coef_M40_skill_professional= -24.6270;
  //var coef_M40_skill_workman =-7.7013;
  var coef_M40_skill_low= -1.64;
  //var coef_M40_sales = 2.1761;
  var coef_M40_centralDummy = -42.45;
  var stdM40 = 631.13;


  var coef_T20_income = 0.0129;
  //var coef_T20_age = 1.0492;
  var coef_T20_age_group = -121.39;
  var coef_T20_gender = -29.79;
  var coef_T20_married = 31.5471;
  var coef_T20_ethnic = -52.34;
  var coef_T20_locality = 79.31;
  var coef_T20_house =193.70;
  //var coef_T20_house_banglo = -12.9199;
  //var coef_T20_house_semid = 13.9619;
  //var coef_T20_house_terrace = -16.8730;
  //var coef_T20_house_flat = 9.3780;
  //var coef_T20_education_spm = -4.4914;
  //var coef_T20_education_diploma = 27.5202;
  var coef_T20_education_degree =33.0565;
  //var coef_T20_job_public = -10.4123;
  //var coef_T20_job_private = -43.2259;
  //var coef_T20_job_self = -12.2766;
  var coef_T20_ownership = 80.73;
  //var coef_T20_skill_professional= -21.1299;
  //var coef_T20_skill_workman =-15.8404;
  //var coef_T20_sales = 26.8417;
  var coef_T20_skill_low= 0.49;
  var coef_T20_centralDummy =-38.28 ;
  var stdT20 = 1375.65;

  
      let incomeVal
      function onChangeIncome(){
          if (income <2848 ){
              incomeVal="B40"
          }
          else if (income>2848  && income<6503){
              incomeVal="M40"
              
          }else {incomeVal="T20"}

          return incomeVal   
      }
      incomeVal = onChangeIncome();

      let ageGroupVal, genderVal, foodExpenditure , ethnicVal, marriedVal, localityVal, educationSPMVal, educationDiplomaVal, educationDegreeVal, employmentpublicVal, employmentprivateVal, employmentselfVal,
      residentialBangloVal, residentialSemiDVal, residentialFlatVal, residentialTerraceVal, ownershipVal, skillProVal, skillWorkVal, skillSalesVal, centralDummyVal;
      function calculateFoodExpenditure (){
        //check for age group
        if (age_group === "16 to 65"){
          ageGroupVal = 1
          console.log(ageGroupVal)
        } else {ageGroupVal = 0}

        //check for gender 
        if (gender === "male"){
            genderVal = 1
            console.log(genderVal)
        } else {genderVal = 0}

        //Check for married
        if (married === "isMarried"){
            marriedVal=1
        } else { marriedVal=0 }

        //Check for locality
        if (locality === "urban")
        {localityVal = 1}
        else {
         localityVal = 0}

         //Check for ethnic
         if(ethnic ==="malay"){
             ethnicVal =1
         } else {ethnicVal = 0}


        if(educationL==="spm"){
            educationSPMVal=1;
            educationDiplomaVal=0;
            educationDegreeVal=0;} 
          else if(educationL==="diploma"){
            educationSPMVal=0;
            educationDiplomaVal=1;
            educationDegreeVal=0; }
          else if(educationL==="degree"){
            educationSPMVal=0;
            educationDiplomaVal=0;
            educationDegreeVal=1; }
          else{
            educationSPMVal=0;
            educationDiplomaVal=0;
            educationDegreeVal=0;
          }
/*           if(employment==="public"){
            employmentpublicVal = 1;
            employmentprivateVal = 0;
            employmentselfVal= 0;
          } else if(employment==="private")
          {
            employmentpublicVal = 0;
            employmentprivateVal = 1;
            employmentselfVal= 0;
          } else if(employment==="self"){
            employmentpublicVal = 0;
            employmentprivateVal = 0;
            employmentselfVal= 1;
          } else {
            employmentpublicVal = 0;
            employmentprivateVal = 0;
            employmentselfVal= 0;
          } */

/*           if (residential==="Banglo") {
            residentialBangloVal = 1;
            residentialSemiDVal = 0;
            residentialFlatVal=0;
            residentialTerraceVal=0;
          } else if (residential==="Semi-D")
          {
            residentialBangloVal = 0;
            residentialSemiDVal = 1;
            residentialFlatVal=0;
            residentialTerraceVal=0;
          }
          else if(residential === "terrace"){
            residentialBangloVal = 0;
            residentialSemiDVal = 1;
            residentialFlatVal=0;
            residentialTerraceVal=1;

          }
          else if (residential==="flat"){
            residentialBangloVal = 0;
            residentialSemiDVal = 0;
            residentialFlatVal=1;
            residentialTerraceVal=0;
          } else {     residentialBangloVal = 0;
            residentialSemiDVal = 0;
            residentialFlatVal=0;
            residentialTerraceVal=0;} */

            if (ownership === "owned") {
                ownershipVal=1
            }else {ownershipVal =0}

            if (skill === "low skill"){
                skillProVal = 1;
            } else {
                skillProVal = 0;
            } 

            if (centralDummy === "center"){
              centralDummyVal = 1;
          } else {
            centralDummyVal = 0;
          } 


          genderVal = parseInt(genderVal);
          ageGroupVal = parseInt(ageGroupVal);
          marriedVal = parseInt(marriedVal);
          localityVal = parseInt(localityVal);
          educationSPMVal = parseInt(educationSPMVal);
          educationDegreeVal = parseInt(educationDegreeVal);
          educationDiplomaVal = parseInt(educationDiplomaVal);
          //employmentprivateVal = parseInt(employmentprivateVal);
          //employmentpublicVal = parseInt(employmentpublicVal);
          //employmentselfVal = parseInt(employmentselfVal);
          //residentialBangloVal = parseInt(residentialBangloVal);
          //residentialFlatVal = parseInt(residentialFlatVal);
          //residentialSemiDVal = parseInt(residentialSemiDVal);
          ownershipVal = parseInt(ownershipVal);
          skillProVal = parseInt(skillProVal);
          //skillWorkVal =parseInt(skillWorkVal);
          //skillSalesVal = parseInt(skillSalesVal);


        if (incomeVal === "B40") {
      
          foodExpenditure = stdB40 + (rice* coef_B40_rice) + (freshmeat * coef_B40_freshmeat)
          + (freshfish* coef_B40_freshfish) + (seafood* coef_B40_seafood) 
          + (fruit * coef_B40_fruits) + (vege* coef_B40_vegetables) + (bread_cakes * coef_B40_bread_cakes) + (others * coef_B40_others)
          + (income * coef_B40_income) + (ageGroupVal * coef_B40_age_group) + (genderVal* coef_B40_gender) + (marriedVal*coef_B40_married) + (ethnicVal* coef_B40_ethnic) + (localityVal* coef_B40_locality) 
          + (house * coef_B40_house) + (educationDegreeVal* coef_B40_education_degree) + (ownershipVal* coef_B40_ownership) 
          + (skillProVal* coef_B40_skill_low) + (centralDummyVal * coef_B40_centralDummy);
  
  
        }else if(incomeVal === "M40"){
          
          foodExpenditure = stdM40 + (rice* coef_M40_rice) + (freshmeat * coef_M40_freshmeat) 
          + (freshfish* coef_M40_freshfish) + (seafood* coef_M40_seafood) 
          + (fruit * coef_M40_fruits) +  (vege* coef_M40_vegetables) + (bread_cakes * coef_M40_bread_cakes) + (others * coef_M40_others)
          + (income * coef_M40_income) + (ageGroupVal * coef_M40_age_group) + (genderVal* coef_M40_gender) + (marriedVal*coef_M40_married)+ (ethnicVal* coef_M40_ethnic) + (localityVal* coef_M40_locality) 
          + (house * coef_M40_house)  + (educationDegreeVal* coef_M40_education_degree) + (ownershipVal* coef_M40_ownership) 
          + (skillProVal* coef_M40_skill_low) + (centralDummyVal * coef_M40_centralDummy);
  
        } else{
          
          foodExpenditure = stdT20+ (rice* coef_T20_rice) + (freshmeat * coef_T20_freshmeat)
          + (freshfish* coef_T20_freshfish) + (seafood* coef_T20_seafood) 
          + (fruit * coef_T20_fruits) + (vege* coef_T20_vegetables) + + (bread_cakes * coef_T20_bread_cakes) + (others * coef_T20_others)
          + (income * coef_T20_income) + (ageGroupVal * coef_T20_age_group) + (genderVal* coef_T20_gender) + (marriedVal*coef_T20_married)+ (ethnicVal* coef_T20_ethnic) + (localityVal* coef_T20_locality) 
          + (house * coef_T20_house) + (educationDegreeVal* coef_T20_education_degree) + (ownershipVal* coef_T20_ownership) 
          + (skillProVal* coef_T20_skill_low) + + (centralDummyVal * coef_T20_centralDummy);
  
  
        }
  
        return foodExpenditure.toFixed(2);


      }

     const total = calculateFoodExpenditure();
     





return(

<div  className="content-sc">

    <div className="grid-box">
        <div>
        <Tabs>
        <div label="Income Group">
        <Income setParentCounter = {setParentCounter} />
        </div>
        <div label="Demography">
        <div className="scroll">
            <div className="food-policy-container">
            <Form  setParentCounter = {setParentCounter}/>
          {/*   <button className="button-demography">Previous</button>
            <button className="button-demography">Next</button> */}
            </div>
        </div>
     
        </div>
        <div label="Food Policy">
        <div className="scroll">
        <div className="food-policy-container">
        <Card  setParentCounter = {setParentCounter}/>
        {/* <button className="button-demography">Previous</button> */}
        </div>
     
        
        </div>
        

        </div>
   
   </Tabs>
        
        
        </div>
        <div className="calculate">
        <div className="total-expenditure-top"></div>
            <img className="img" src={avatar} alt={"empty"}/>
            <div className="income-group">
                    <div>Income: RM {parentCounter.income}</div>
                    <div>Income Group: {incomeVal}</div>
            </div>
            <div className="total-expenditure">
              <div className="summary-food">
                <div> Rice: RM {rice} </div> 
                <div> Bread and Cakes: RM {bread_cakes} </div> 
                <div> Fresh Meat: RM {freshmeat} </div> 
                <div> Fresh Fish: RM {freshfish} </div> 
                <div> Fresh Seafood: RM {seafood} </div> 
                <div> Vegetables: RM {vege} </div> 
                <div> Others: RM {others} </div> 
                

              </div>
           
            <div className="title-food-expenditure"> Total Food Expenditure: </div> 
            <div className="total-food-expenditure"> RM: {total} </div>
            </div>

            <div className = "profile">
              <div> Total Household: {house} </div>
              <div> Age Group: {age_group} </div>
              <div> Gender: {gender} </div>
              <div> Ethnic: {ethnic} </div>
              <div> Marital Status: {married} </div>
              <div> Education Level: {educationL} </div>
              <div> Locality :  {locality} </div>
              <div> House Ownership: {ownership} </div>
            </div>
      

        </div>

    </div>



</div>

)

}

export default Result;
