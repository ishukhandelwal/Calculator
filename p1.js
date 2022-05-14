
let buttons= document.querySelectorAll('button')
let display=document.getElementById('abc');
let valueText="";

for(items of buttons)
{
    items.addEventListener('click',(e)=>{

        buttonText=e.target.innerText;

        if(buttonText=='X')
        {
            buttonText = '*';
            valueText += buttonText;
            display.innerText=valueText;
        }
        else if(buttonText=='C')
        {   
            buttonText= "";
            valueText = buttonText;
            display.innerText=valueText;

        }
        else if(buttonText=='=')
        {
            if(valueText.length<=22)
            {
                valueText= eval(valueText);
                display.innerText=valueText;
            }
            else{
                display.innerText="calculation cannot possible";
            }
            
            
        }
        else if(buttonText== 'del')
        {
        
            str = display.innerText.substring(0, display.innerText.length - 1);
            valueText=str;
            display.innerText=valueText;
            

        }
        else if(buttonText== 'Exp')
        {
            buttonText = '';
            valueText += buttonText;
            display.innerText=valueText;
             
            

        }
        else if(valueText.length>=22)
        {  
            display.innerText = "calculation cannot possible";
        }
        
        else{
            valueText+= buttonText;
            display.innerText=valueText;
        }
    })
}
