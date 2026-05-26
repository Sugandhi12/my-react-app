import React, { useState } from 'react'; 



function Calculator({ onBack }){
   
    

    let buttons = ["AC", "(", ")", "/", "7", "8" , "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
    const [value, setValue] = useState("");
    const [operator, setOperator] = useState("");
    const [first, setFirst] = useState("");



    function handleClick(button){

        
    if(button === "AC"){
        setValue("");
    }

    else if(button === "+"){
        setFirst(Number(value));
        setOperator("+");
        setValue("");
        
    }


    else if(button === "-"){
        setFirst(Number(value));
        setOperator("-");
        setValue("");
    }


    else if(button === "*"){
        setFirst(Number(value));
        setOperator("*");
        setValue("");
    }

    else if(button === "/"){
        setFirst(Number(value));
        setOperator("/");
        setValue("");
    }

    else if(button === "="){
        let second = Number(value);

       if(operator === "+"){
        setValue(first + second);
       } 

       else if(operator === "-"){
          setValue(first - second)
       }

       else if(operator === "*"){
        setValue(first * second)
       }

       else if(operator === "/"){
        setValue(first / second)
       }
    }

    else{
        setValue(value+button)
    }

    }

    return(
      <div className="calculator">
       
       <button onClick={onBack}>
      Back to Home
      </button>


       <div className="screen">{value}</div>

        <div className="buttons">
         {buttons.map(button => (
            <button onClick={() => handleClick(button)}>
                {button}
            </button>
         )) }

        </div>



        
      </div>
        
    );


}

export default Calculator