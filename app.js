// Start HI


// function startHi(str){
//     if ((str[0] === 'h' && str[1]==='i') || (str[0] === 'H' && str[1]==='I'))
//   {
//     return true;
//   }else{
//     return false;
//   }
// }


// in 10 20 
// function in1020(a, b){
//     if ((a>=10 && a<=99) && (b >= 10 && b<=99)){
//       return true;
//     }else{
//       return false;
//     }
//   }


// has teen

// function hasTeen(a, b, c){
//   if (a>=13 || b >= 13 || c >= 13){
//     return true;
//   }else{
//     return false;
//   }
// }

//  =lone teen

// function loneTeen(a, b){
//     if ((a>=13 || b>=13) && (a != b)){
//       return true;
//     }else{
//       return false;
//     }
//   }


// mix start

// function mixStart(str){
//     if (str[1] === 'i' && str[2] === 'x'){
//       return true;
//     }else{
//       return false;
//     }
//   }

// Start Oz

// function startOz(str){
//     if(str[0] === 'o' && str[1] === 'z'){
//       return 'oz';
//     }else if(str[0] === 'o' && str[1] !== 'z'){
//       return 'o';
//     }else if(str[0] !== 'o' && str[1] === 'z'){
//       return 'z';
//     }else{
//       str = ''
//       return str;
//     }
//   }

// int max

// function intMax(a, b, c){
//     let k = [a, b, c];
//     let max = k[0];
//     for (let i = 0; i < 3; i++){
//       if (k[i] >= max){
//         max = k[i];
//       }
//     }
//     return max;
//   }

// Close 10

// function close10(a, b){
//     if((10-a === 2 || 10-a === 1 || 10-a === 0)){
//         return a;
//     }else if(10-b === 2 || 10-b === 1 || 10-b === 0){
//         return b;
//     }else{
//         return 0;
//     }
// }

// in 3050

// function in3050(int a, int b) {
//     if ((a >= 30 && a <= 40) && (b >= 30 && b <= 40)) {
//      return true;
//    }else if ((a >= 40 && a <= 50) && (b >= 40 && b <= 50)) {
//      return true;
//    }else{    return false;}
//  }

// max 1020

// function max1020(a, b){
//    if (b > a) {
//     let temp = a;
//     a = b;
//     b = temp;
//   }
//   if (a >= 10 && a <= 20) {return a;}
//   if (b >= 10 && b <= 20) {return b;}
//   return 0;
// }

// string E

// function stringE(str){
//     let z = 0;
 
//    for (let i=0; i<str.length; i++) {
//      if (str.charAt(i) == 'e') z++;
//    }
 
//    return (z >= 1 && z <= 3);
//  }

// last digit

// function lastDigit(a, b){
//     if (a % 10 == b % 10){
//       return true;
//     }else{
//       return false}
//   }

// EndUp

// function endUp(str){
//     if (str.length <= 3) {
//         return str.toUpperCase();
//     }else{
//    let cut = str.length - 3;
//    let front = str.substring(0, cut);
//    let back  = str.substring(cut);
   
//    return front + back.toUpperCase();
//     }
//  }


// everyNth

// function everyNth(str, n){
//     let a = "";
//    for (let i=0; i<str.length; i = i + n) {
//      a = a + str.charAt(i);
//    }
//    return a;
//  }

