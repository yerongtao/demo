/**
 * Created by yerongtao on 2017/5/22.
 */
var c = 0;
 function print() {
     console.log(c)
 }

function plus(callback) {
     setTimeout(function () {
         c += 1
         callback(c)
     }, 1000)

}

plus(print)
