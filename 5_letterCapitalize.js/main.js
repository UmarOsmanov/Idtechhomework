

   function letterCapitalize(str){
   let ilkHerf = str.charAt(0).toUpperCase()
   let geriQalan = str.slice(1,str.length)
   let result = ilkHerf+geriQalan;
   return result
   }
   console.log(letterCapitalize("hello world"));
   

   // .charAt() istediyimiz herfi teyin etmek ucun
      