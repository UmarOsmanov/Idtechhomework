


let title = "Hello World";

search("l");
function search(text){
    toplam = 0;
    for(i=0; i < title.length; i++){
        if(title.charAt(i).toLowerCase() === text.toLowerCase()){
           toplam += 1;
        }
    }
    console.log(toplam);
    
}