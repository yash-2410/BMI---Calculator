

    let button = document.getElementById("bt");
  
    // Function for calculating BMI
    button.addEventListener("click", (e)=>{
        let heightid = document.getElementById('h');
        let height =parseFloat(heightid.value);
    
        /* Getting input from user into weight variable. 
        Input is string so typecasting is necessary.*/
        let weightid = document.getElementById('w');
         let weight = parseFloat(weightid.value);
        let result = document.getElementById("result");
          
          
          // if(weightid.value==="" || isNaN(weight))
          // result.innerText="Enter valid weight";
          // else if(heightid.value==="" || isNan(height))
          // result.innerText="Enter valid height";
          // else{
            let bmi=weight/(height*height).toFixed(2);
            result.innerText=bmi;
          if(bmi<18.6)
          document.getElementById("level").innerText="You are under weight. Have a good diet 😳"
          else if(bmi>18.6 && bmi<24.9)
          document.getElementById("level").innerText="You are normal. Be Happy 😋"
          else
          document.getElementById("level").innerText="You are over weight. What is this 🤨"
          // }
         
    });
