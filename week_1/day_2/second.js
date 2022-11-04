// // console.log(this);

// // var a = 5;
// function atest(){
//     console.log(this.a);
//     console.log(this);
// }

// // window.atest();

// var obj = {
//     a: 5,
//     atest: atest

// }

// obj.atest();

// var obj2 = {
//     a: 20,
//     atest: atest
// }
// obj2.atest();

// var obj = {
//     a: 20,
//     test: function (){
//         console.log(this.a);
//         console.log(this);
//         const test1=()=>{
//             console.log(this.a);
//             console.log(this);
//         }
//         test1();
//     }
// }

// obj.test();

var count = 5;

if (count>6){
    console.log('FALSE');
}
else { console.log('TRUE');}

(count>6) ? console.log('FALSE') : console.log('TRUE');

