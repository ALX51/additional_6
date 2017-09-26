module.exports = function zeros(expression) {
   //        var arr = expression.split('*');
//        for(var i = 0; i < arr.length; i++){
//           if ( arr[i].indexOf('!!') == -1) {
//               arr[i] = parseInt(arr[i]);
//               var count = 0;
//               for (var j = 5; j <= arr[i]; j *= 5) {
//                     
//                   count += Math.floor(arr[i] / j);               количество нулей в факториале
//               }
//               arr[i] = count;
//               
//           } else {
//             arr[i] = parseInt(arr[i]);
//               var count = 0;
//               if (arr[i] % 2 == 0) {
//                   for (var j = 10; j <= arr[i]; j *= 5) {
//
//                       count += Math.floor(arr[i] / j);           количество нулей в четном двойном факториале
//                   }
//                   arr[i] = count;
//               } else {
//                   arr[i] = 0;                                    количество нулей в не четном двойном факториале
//               }
//           }
//        }        
//        return arr.reduce(function (a, b) {return a + b});        не знаю как найти в произведении факториалов, поэтому пошел простым перемножением
//        }
        
        var arr = expression.split('*');
        for(var i = 0; i < arr.length; i++){
            
           if ( arr[i].indexOf('!!') == -1) {
               arr[i] = parseInt(arr[i]);
               if (arr[i] == 1) {
                       arr[i] ='1';
                       continue;
                   }
                   if (arr[i] == 2) {
                       arr[i] ='2';
                       continue;
                   }
               for (var j = arr[i] - 1; j > 0; j--) {
                   
                   arr[i] = multiply(arr[i] + '', j + '');
               }
           } else {
             if ( arr[i].indexOf('!!') != -1) {
               arr[i] = parseInt(arr[i]);
                if (arr[i] == 1) {
                       arr[i] ='1';
                       continue;
                   }
                   if (arr[i] == 2) {
                       arr[i] ='2';
                       continue;
                   }
               for (var j = arr[i] - 2; j > 0; j = j - 2) {
                   
                   arr[i] = multiply(arr[i] + '', j + '');
               }
             }
           }
        }
        var res = arr.reduce(function (a, b) {return multiply(a, b)});
        var resalt = 0;
        for (var i = (res.length - 1); i > 0; i-- ) {
            if (res[i] == '0') {
                resalt++;    
            } else{
                break
            }
        }
        return resalt;
        
        function multiply(first, second) {
          if ( first.length <= second.length) {
            var arr1 = first.split('').reverse();
            var arr2 = second.split('').reverse();
        } else {
            var arr1 = second.split('').reverse();
            var arr2 = first.split('').reverse();
        }
        var arr3 = [];
        var q;
        for (var i = 0; i < arr1.length; i++) {
            q = i;
            var promResult = 0;
            for ( var j = 0 ; j < arr2.length; j++) {
                str = (arr1[i] * arr2[j]) + '';
                if (j == (arr2.length - 1)) {
                    if (arr3[q] == undefined) {
                        if ( (arr1[i] * arr2[j]) >= 10 ) {
                            arr3[q] = (+str[1] + promResult);
                            arr3[q + 1] = +str[0];
                            
                        } else {
                            arr3[q] = (+str[0] + promResult);
                            
                        }
                    } else {
                        if ( (arr1[i] * arr2[j]) >= 10 ) {
                            arr3[q] += (+str[1] + promResult);
                            arr3[q + 1] = +str[0];
                            
                        } else {
                            arr3[q] += (+str[0] + promResult);
                            
                        }
                    }
                    if (arr3[q] >= 10) {
                        arr3[q] += '';
                        if (arr3[q + 1] == undefined) {
                            arr3[q + 1] = +arr3[q][0];
                            arr3[q] = +arr3[q][1];
                        } else {
                            arr3[q + 1] += +arr3[q][0];
                            arr3[q] = +arr3[q][1];
                        }
                   
                    }
                 break;
                }
                if ( (arr1[i] * arr2[j]) >= 10 ) {
                    if (arr3[q] == undefined) {
                        arr3[q] = +str[1] + promResult;
                        promResult = +str[0]; 
                    } else {
                        arr3[q] += (+str[1] + promResult);
                        
                        promResult = +str[0];
                    }
                } else {
                    if (arr3[q] == undefined) {
                        arr3[q] = +str[0] + promResult;
                        promResult = 0; 
                    } else {
                        arr3[q] += (+str[0] + promResult);
                        promResult = 0;
                    }
                }
                if (arr3[q] >= 10) {
                        arr3[q] += '';
                        if (arr3[q + 1] == undefined) {
                            arr3[q + 1] = +arr3[q][0];
                            arr3[q] = +arr3[q][1];
                        } else {
                            arr3[q + 1] += +arr3[q][0];
                            arr3[q] = +arr3[q][1];
                        }
                    }
                
                q++
            }
        }
        
       return arr3.reverse().join('');
      }
}
