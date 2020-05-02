function CalculateTip (Bill)
{ 
    
    if (Bill < 50)
    {
      return  Bill *  0.2;
     
    }
    else if (Bill >= 50 && Bill <= 200)
    {
        return Bill *  0.15;
    } 
    else
    {
    
       return Bill *  0.10;
    }
    
}

 console.log (CalculateTip (124));
console.log ( CalculateTip (48) );
console.log (CalculateTip (268));
var tip1 =  (CalculateTip (124));
var tip2 =  ( CalculateTip (48) );
var tip3 =  (CalculateTip (268));
console.log(tip1);

var Tips = [tip1, tip2, tip3];
console.log(Tips[0]);
console.log(Tips[1]);
console.log(Tips[2]);

function CalculateBill (B)
{
var B1 = B + tip1;
B + tip2;
 B+ tip3;
}

CalculateBill(124);
CalculateBill(48);
CalculateBill(268);
;
console.log(B1);
console.log(B2);
console.log(B3);
