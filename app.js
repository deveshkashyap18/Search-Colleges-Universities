// function Hello(){
// console.log("Inside Hello function");
//     console.log("Hello World!");
// }
// function Demo(){
// console.log("Calling Hello function");
//     Hello();
// }
// // Hello();
// console.log("Calling Demo function");
// Demo();
// console.log("Done! bye!");


// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two()+one();//scope of variable(local var) 
//     console.log(ans);//3 is not print
// }
// three();


// setTimeout(()=>{
//     console.log("Apana College");
// },2000);

// setTimeout(()=>{
//     console.log("Hello College");
// },2000);

// console.log("Hello....");


// h1=document.querySelector("h1");

// function changeColor(color,delay){
//     setTimeout(()=>{
//     h1.style.color=color; 
//     },delay);
// }
//  changeColor("red",1000);
//  changeColor("green",2000);
//  changeColor("orange",3000);
//  changeColor("black",4000);
//OR

// h1=document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(()=>{
//     h1.style.color=color; 
//     if(nextColorChange) nextColorChange();
//     },delay);
// }
//  changeColor("red",1000, ()=>{
//     changeColor("green",1000, ()=>{
//         changeColor("orange",1000, ()=>{
//             changeColor("blue",1000, ()=>{
//                 changeColor("black",1000);
//             });  
//         });
//     });
//  });
//  //This Phenomina is called Callback Hell. 

        //OR

// h1=document.querySelector("h1");

// function changeColor(color, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*5)+1;
//             if(num>3){
//                 reject("Promise rejected.");
//             }
//             h1.style.color=color; 
//             console.log(`Color changed to ${color}!`);
//             resolve("Color changed.");
//         },1000);
//     });   
// }

// async function demo(){
//     try{
//     await changeColor("red");
//     await changeColor("green");
//     await changeColor("orange");
//     await changeColor("pink");
//     await changeColor("blue");
//     } catch(err){
//         console.log("Error Caught!");
//         console.log(err);
//     }
//     let a=10;
//     console.log(a);
//     console.log("New Number :",a+3);
    //or
    // await changeColor("red",1000);
    // await changeColor("green",1000);
    // await changeColor("pink",1000);
    // await changeColor("blue",1000);
    // await changeColor("orange",1000);
// }



    //OR

// changeColor("red",2000)
// .then(()=>{
//     console.log("red was completed.");
//     return changeColor("green",2000)
//     })
//     .then(()=>{
//         console.log("green was completed.");
//         return changeColor("orange",2000);
//     })
//     .then(()=>{
//         console.log("orange was completed.");
//         return changeColor("blue",2000);
//     })
//     .then(()=>{
//         console.log("blue was completed.");
//     })

    //OR

//  changeColor("red",1000, ()=>{
//     changeColor("green",1000, ()=>{
//         changeColor("orange",1000, ()=>{
//             changeColor("blue",1000, ()=>{
//                 changeColor("black",1000);
//             });  
//         });
//     });
//  });
 //This Phenomina is called Callback Hell.  


// function savetoDb(data, success, failure){
//     let neteworkSpeed=Math.floor(Math.random()*10)+1;
//     if(neteworkSpeed>4){
//         success();
//     } else{
//         failure();
//     }
   
// }
// savetoDb("Apna College", ()=>{
// console.log("Success: Your data was saved.");
// savetoDb("Hello World", 
//     ()=>{
//         console.log("Success2: Your data2 was saved.");
//         savetoDb("Mera College", ()=>{
//             console.log("Success3: Your data3 was saved.")
//         }, ()=>{
//             console.log("Failure3: weak connection.")
//         })
// },
//     ()=>{
//         console.log("Failure2: weak connection.");
//      }
//     );
//     },
//     ()=>{
//         console.log("Failure: Weak network connection.Data was not saved.");
//     }
// );

// function savetoDb(date){
//     return new Promise((resolve, reject)=>{//success, failure
//       let neteworkSpeed=Math.floor(Math.random()*10)+1;
//       if(neteworkSpeed>4) {
//         resolve("Success! Data was saved."); 
//       } else{
//         reject("Failure! Data was not saved.")
//       }
//     });
// }

// savetoDb("Apna College")
//     .then((result)=>{
//         console.log("Data1 saved.");
//         console.log("Result of Promise :",result);
//         return savetoDb("Hello World")
//     })
//     .then(()=>{
//         console.log("Data2 saved.");
//         console.log("Result of Promise :",result);
//         return savetoDb("Tera College");
//     })
//     .then(()=>{
//         console.log("Data3 saved.")
//         console.log("Result of Promise :",result);
//     })
//     .catch((error)=>{
//         console.log("Promise was rejected.");
//         console.log("Error of Promise :",error);
//     });

//  async function greet(){
//     // throw "404!";
//     return "hello world!";
//  }

//  greet()
//  .then((result)=>{
//     console.log("Promise was resolved.");
//     console.log("Result was :",result)
//  })
//  .catch((error)=>{
//     console.log("Promise was rejected",error);
//  })

// let demo = async ()=>{
//     return 5;
//  };


// function getNum(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num); 
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();//(await can use only inside the async function.)
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum(); 
//     await getNum();
//     await getNum();  
// }


// let jsonRes = '{"fact":"Some notable people who disliked cats:  Napoleon Bonaparte, Dwight D. Eisenhower, Hitler.","length":89}';
// let validRes=JSON.parse(jsonRes);   
// console.log(validRes);

// let student={
//     name:"Devesh",
//     age:23,
//     city:"Etah"
// };


// let url="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })   
// .then((data)=>{
//     console.log("Data1 :",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("Data2 :",data2.fact);
// })
// .catch((err)=>{
//     console.log("Error!",err);
// });
// console.log("apna college");

// async function getFats(){
//     try{
//     let res=await fetch(url);
//     let data=await res.json();
//     console.log(data.fact);

//     let res2=await fetch(url);
//     let data2=await res2.json();
//     console.log(data2.fact);

//     } catch(e){
//         console.log("Error :",e)
//     }
//     console.log("Apna College");
    
// }


// let btn=document.querySelector("button");

// btn.addEventListener("click", async ()=>{
//     console.log("Button was clicked");
//     let fact = await getFats();
//     console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerText=fact;
//     console.log(fact);
// });

// let url="https://catfact.ninja/fact";
// async function getFats(){
//     try{
//     let res=await axios.get(url);
//     return res.data.fact;
//     } catch(e){
//         console.log("Error :",e)
//         return "No fact found!";
//     }
// }


// let btn=document.querySelector("button");
// let url="https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async ()=>{
//     let link=await getImage();
//     // console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src",img);
//     console.log(link);
// });

// async function getImage(){
//     try{
//     let res=await axios.get(url);
//     return res.data.message;
//     } catch(e){
//         console.log("Error :",e)
//         return "No Image found!";
//     }
// }


// let url="https://icanhazdadjoke.com/";

// async function getJokes(){
//     try{
//         const config={headers: {Accept: "application/json"}};
//         let res=await axios.get(url, config);
//         console.log(res.data);
//     } catch(err){
//         console.log(err);
//     }
// }


let url = "http://universities.hipolabs.com/search?name=";

let btn=document.querySelector("button");

btn.addEventListener("click", async ()=>{
    console.log("Button was clicked.");
    let country=document.querySelector("input").value;
    console.log(country);
    let collArr=await getColleges(country);
    // console.log(collArr);
    show(collArr);
});

function show(collArr){
    let list=document.querySelector("#list");
    list.innerText=[];
    for(col of collArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}
// let country = "nepal";
 
async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    } catch(err){
        console.log("Error :",err);
        return [];
    }   
}


