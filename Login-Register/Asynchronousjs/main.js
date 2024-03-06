// // xhr Request

// const getPosts = (resources)=>{

//     let request = new XMLHttpRequest();

// // Get Post Put...



// request.addEventListener('readystatechange', () =>{
//    if(request.readyState === 4 && request.status === 200) {
//     let data = JSON.parse(request.responseText)
//     console.log(data);
//    }else if(request.readyState === 4){
//      console.log('There Somethen')
//    }
// })

// request.open('Get', resources);

// request.send();
// }
// // getPosts('https://jsonplaceholder.typicode.com/posts/')
// getPosts('./posts.JSON')

// // // console.log(request.readyState);

// // Callback

// // function shouldPrintFirst(collback){
// //      setTimeout(() =>{
// //          console.log('Frist');
// //          collback();
// //      },1000)
// // }

// // function shouldPrintSecond(){
// //     console.log('Second');
// // }

// // shouldPrintFirst(shouldPrintSecond);


// // function sumUpNumbers (num1, num2, Callback) {
// //     let summedNumbers;
// //     setTimeout(() => {
// //         summedNumbers = num1 + num2;
// //        Callback(summedNumbers);
// //     }, 1000);
// // }

// // function printSummedNumbers (value) {
// //     console.log(`The Summed number ${value}`);
// // }

// // sumUpNumbers(20,30, printSummedNumbers)

// === Promises

// let conditon = false;

// const testPromises = new Promise((resolve , reject) =>{
//     if (conditon){
//         resolve('Promis is Lookin Ok !');
//     }else{
//         reject('Promise is Lookin Crazzy !');
//     }
// })

// testPromises.then( (successMessage) =>{
//     console.log(successMessage)
// }).catch((err) => console.log(err)) 

// ===Promise Real Api

// const getPosts = (resources)=>{
     
//     return new Promise((resolve, reject) =>{
       
//         let request = new XMLHttpRequest();

//         // Get Post Put...
        
//         request.addEventListener('readystatechange', () =>{
//            if(request.readyState === 4 && request.status === 200) {
//             let data = JSON.parse(request.responseText)
//             resolve(data);
//            }else if(request.readyState === 4){
//              reject('Waxbaa Meshaan Kaa qaldan saxiib...')
//            }
//         })
        
//         request.open('Get', resources);
        
//         request.send();


//     });


// }

// getPosts('https://jsonplaceholder.typicode.com/posts').then( (data) =>{
//     console.log(data);
//     return getPosts('https://jsonplaceholder.typicode.com/comments');
// }).then( date => {
//     console.log("COMENTS", date);
//     return getPosts('https://jsonplaceholder.typicode.com/albums');
// }).then(data =>{
//     console.log("Allbums", data);
// }).catch((err) => console.log(err));


//  FETCH API

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then((response) =>{
//     return response.json();
// }).then( data =>{
//     console.log(data)
// }).catch(err => console.log(err))


// 24:Async and Await

const getData = async () =>{
    const request = await fetch('https://jsonplaceholder.typicode.com/comments');

    const resbonse = await request.json();
    return resbonse;
}

getData().then(data =>{
    console.log(data);
}).catch((err) => console.log(err));