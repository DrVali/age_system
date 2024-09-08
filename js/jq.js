 function about_age() {
    let lbl = document.getElementById("result");

     let num1 = document.getElementById("num").value;

          if(!isNaN(num1)){
              if( num1 >  17)
              {
               lbl.innerHTML= "You are an adult.";
              }
              else if( num1 > 12 && num1 < 18){
                 console.log("dllkllkd");
               lbl.innerHTML= "You are a teenager.";
              }
                 else if( num1 < 13){

               lbl.innerHTML= "You are a child.";
              }
          }
        else{
            alert(`Please Insert Your age Number.`);
        }
}
