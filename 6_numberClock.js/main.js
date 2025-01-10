

     function numberClock(number){
        let deqiqe =  number % 60 ;
        let saat = Math.floor(number/60) ;
        let result = saat + "saat" + " " + deqiqe + "deqiqe";

        return result;
     }

     console.log(numberClock(103));



     
    //   Template literals


    //  function numberClock(number){
    //      return `${Math.floor(number / 60)} : ${number % 60}`
    //  }
    //  console.log(numberClock(103));
     