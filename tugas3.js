for(let a = 1 ; a <= 100 ; a++){
    if(a %2 === 0 ){
        console.log(a + ' GENAP')
    } else {
        console.log(a + ' GANJIL')
    }
} 
for(let a = 1 ; a <= 100 ; a +=2){
   if(a %3 === 0){
       console.log(a + ' KELIPATAN 3')
   } else {
       console.log(a + '')
   }
}
for(let a = 1 ; a <= 100 ; a +=5){
    if(a %6 === 0){
        console.log(a + ' KELIPATAN 6')
    } else {
        console.log(a + '')
}
}
for(let a = 1 ; a<= 100 ; a +=9){
    if(a %10 === 0){
        console.log(a + ' KELIPATAN 10')
    } else {
        console.log(a + '')
}
}