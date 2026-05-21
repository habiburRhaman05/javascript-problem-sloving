
function formatName(name){

     let output = "";

     for (let i = 0; i < name.length; i++) {
      
      if(i === 0){
        output += name[i].toUpperCase();
      }else if(i > 0){
        output += name[i].toLowerCase()
      }
      
     }
   return output;

};

console.log(formatName("habib"));
console.log(formatName("rakib"));
console.log(formatName("lIMON"));




