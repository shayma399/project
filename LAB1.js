
     
      var quantityInputs = document.getElementsByClassName('tst')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', inputsyChanged)
        
    }
       
function inputsyChanged(event) {
    var input = event.target
    
    if(isNaN(input.value) || input.value < 10) {
        input.value = 10
        alert('Enter a positive digit greater than 10')
        
    }
    calsPerDay() 
}

var AGE = document.getElementsByClassName('AGE')
for( var i=0; i<AGE.length;i++){  
  ageField=AGE[i]

ageField.addEventListener('change', AGEchanged )}

function AGEchanged (event) {
    var AGE = event.target
    if((isNaN(AGE.value) || AGE.value < 4) || (AGE.value>14 )){
       AGE.value = 4
        alert('Enter a positive digit greater than 4 and less than 14')
        
    }
    calsPerDay()
}



function calsPerDay() {
function find(id) { return document.getElementById(id) }

var age = find("age").value
var height = find("hight").value * 2.54
console.log(height )
var weight = find("weight").value / 2.2
var result = 0
if (find("Male").checked) 
result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age))
else if (find("Female").checked)
result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age))
find("totalCals").innerHTML = Math.round( result )+' Kcal/day'
console.log(result)
}
calsPerDay()

   

function measureBMI () {
// true = metric, false = imperial
let unit = document.getElementById("bmi-metric").checked,
  weight = document.getElementById("bmi-weight"),
  weightu = document.getElementById("bmi-weight-unit"),
  height = document.getElementById("bmi-height"),
  heightu = document.getElementById("bmi-height-unit");

if (unit) {
weightu.innerHTML = "KG";
weight.min = 16;
weight.max = 120;
heightu.innerHTML = "CM";
height.min = 10;
height.max = 180;
} else {
weightu.innerHTML = "LBS";
weight.min = 2;
weight.max = 700;
heightu.innerHTML = "IN";
height.min = 21;
height.max = 107;
}
}

var mayabutton=document.getElementById('maya')

var lastpart= ``






function calcBMI () {

let bmi = null,
  unit = document.getElementById("bmi-metric").checked, 
  weight = parseInt(document.getElementById("bmi-weight").value),
  height = parseInt(document.getElementById("bmi-height").value),
  results = document.getElementById("bmi-results");



if (unit) {
height = height / 100;
bmi = weight / (height * height);
}

else {
bmi = 703 * (weight / (height * height));
}

bmi = Math.round(bmi * 100) / 100; 
if (bmi < 18.5) {
results.innerHTML = bmi + " - Underweight";
} else if (bmi < 25) {
results.innerHTML = bmi + " - Normal weight";
} else if (bmi < 30) {
results.innerHTML = bmi + " - Pre-obesity";
} else if (bmi < 35) {
results.innerHTML = bmi + " - Obesity class I";
} else if (bmi < 40) {
results.innerHTML = bmi + " - Obesity class II";
} else {
results.innerHTML = bmi + " - Obesity class III";
}
return false;
}






 var prevent=document.getElementById('PREVENT')
 prevent.addEventListener('submit',(e)=>{
   e.preventDefault()
 })
 function openfolder() {

var a;
a = document.getElementById("div1");
a.innerHTML = "&#xf114;";
setTimeout(function () {
  a.innerHTML = "&#xf115;";
}, 1000);
}
openfolder();
setInterval(openfolder, 2000);





var picture_frame = document.getElementById("picture_frame");
var img = document.createElement("IMG");
picture_frame.appendChild(img);
var tiptext=document.getElementById('tiptext').innerHTML
img.src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-geometry-dialog-helpful-tips-png-image_5370840.jpg"
img.width = "400"; 
img.height = "200"; 

    
    console.log(img.src)

var counter = 0;
var images = ["https://w7.pngwing.com/pngs/26/206/png-transparent-breakfast-muffin-bakery-toast-pancake-honey-honey-bee-food-baking.png","https://downloadwap.com/thumbs2/android-games/thumbs/new2/6/maya-01.jpg","https://www.violey.com/images/produkte/500x500sc/4005047166142.jpg","https://i2.wp.com/mmprintable.com/wp-content/uploads/2016/08/Water-Bottle-Label-2-14.jpg?fit=1094%2C906&ssl=1","https://i.pinimg.com/originals/79/df/34/79df34d77454e41ceed4299364525cb1.jpg"]; 
var tipss=["Sweet, nutritious and sugar freee!! A daly dose of honey can help your metabolisme restore",
"keep all IT devises a part and go explore the  new intellectual games with good  company 'FRIENDS !!' ", 
"After a lon day your body need a good periode of time to rest and restore your energy kids in 4-14 YO need 8h OF sleep  ",
"your body should be always hydreted to mantain its functions; Drink watter is the best way to get rid of dehydration "]
var arrow_right = document.getElementById("arrow_right"); 
var arrow_left = document.getElementById("arrow_left"); 
function Fowardtips()
 { 
    counter += 1; 
    if (counter >= images.length) { 
        counter = images.length-1; 
    } else {
        img.src =  images[counter] ; 
      tiptext=tipss[counter]
}

    
};

 function BackwardTips() { 
    counter -= 1;
    
    if (counter < 0) { 
        counter = 0; 
    } else {
        img.src =  images[counter] 
  tiptext=tipss[counter]
}
};


var resultContainer =document.getElementById('resultContainer')
var affichage1=document.getElementById('affichage1')
var img2 = document.createElement("IMG");
resultContainer.appendChild(img2);
var tiptext1=document.createElement("p")
resultContainer.appendChild(tiptext1)
tiptext1.innerHTML='Fill the form and get a program'

img2.width = "400";  
img2.height = "200"; 
var GIRL=["https://cdn2.momjunction.com/wp-content/uploads/2014/05/Planks.jpg",
"https://cdn2.momjunction.com/wp-content/uploads/2014/05/Side-leg-raise.jpg",
"https://cdn2.momjunction.com/wp-content/uploads/2014/05/Skipping.jpg ",
"https://cdn2.momjunction.com/wp-content/uploads/2014/05/Running.jpg",
"https://cdn2.momjunction.com/wp-content/uploads/2014/05/Crunches.jpg",
"https://cdn2.momjunction.com/wp-content/uploads/2014/05/Joggin.jpg",
" https://cdn2.momjunction.com/wp-content/uploads/2014/05/Stretching.jpg",
"https://cdn2.momjunction.com/wp-content/uploads/2014/05/Backstretch.jpg",
"https://cdn2.momjunction.com/wp-content/uploads/2014/05/Overhead-shoulder-stretch.jpg",
" https://cdn2.momjunction.com/wp-content/uploads/2014/05/Splits.jpg"]
var GIRLDES=["It is an ideal exercise for strengthening vital core muscles covering the abdomen, back, hips, and pelvis. This exercise could also help improve posture and strengthen the muscles of the lower back",
  "The side leg raise could help strengthen and tone the muscles of the hips and inner thighs",
 "Rope skipping is a simple and effective morning exercise that can enhance physical fitness and improve agility and stamina in children. It also relieves stress and improves blood circulation",
"Running is a full-body workout that can vary in intensity. This exercise burns a lot of energy and demands more effort from the heart, lungs, and muscles. It is also an easy exercise since it requires minimal equipment ",
"Crunches are a multi-joint exercise that focuses on abdominal muscles. It could help improve agility and the overall fitness levels of the child",
"Jogging means sustained running at a slow and steady pace. When compared to running, jogging is less taxing and requires less energy, but can be sustained for a longer time."]
var boys =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXWG9vDXsKgf75hmMqyiVvsceSgRquYDUaA&usqp=CAU",
"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX34288982.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPjlah0G1dDrJdZAdMZvThpBJZfVLhNLV2Q&usqp=CAU",
"https://comps.canstockphoto.com/sit-up-stock-illustration_csp18104164.jpg",
"https://i.pinimg.com/600x315/55/9c/58/559c58daf21ca1274f7129b8a0141ace.jpg",
"https://image.freepik.com/vecteurs-libre/enfant-heureux-faire-exercice-gymnastique_29937-5154.jpg",
"https://elements-cover-images-0.imgix.net/a0aae4d3-0d87-41e4-9c10-ef070a494d41?auto=compress&crop=edges&fit=crop&fm=jpeg&h=630&w=1200&s=bfb5c2ed43f18225ef7d13699a1ac17e",
"https://atlas-content1-cdn.pixelsquid.com/assets_v2/211/2119052530309666814/jpeg-600/G03.jpg"
]
var boysdes=["Stretching on a regular basis can have several health benefits. Many people know that stretching before physical activity is important, but stretching every day regardless of physical activity is important as well. Here are five benefits that stretching has.",
"Jump squats increase your explosive power, improve upper and lower body strength, and burn calories faster than regular squats. Explosive power gives you the ability to take off faster and move quicker",
"Meditation practitioners for thousands of years have known that befriending one’s breath keeps the mind and body healthy. It also is good for living a more peaceful life. Scientists have been working to translate these ancient practices for today’s world. From very practical stress reduction to exploring one’s emotions, programs are being developed to meet contemporary problems.",
"Like situps, crunches help you build muscle. But unlike situps, they work only the abdominal muscles. This intense muscle isolation makes them a popular exercise for people trying to get six-pack abs. This also makes them ideal for strengthening your core, which includes your lower back muscles and obliques."
]
var counter=0
 img2.src ="https://thumbs.dreamstime.com/b/woman-man-doing-sport-exercise-training-gym-woman-man-doing-crunches-sport-exercise-training-gym-fitness-153889884.jpg  // the first image to show on load"
 function imageChange()  {
  let  imageCheck=document.getElementById('LastMale').checked
   console.log(imageCheck)
   if(imageCheck==false){
    console.log(imageCheck)
    img2.src=GIRL[0]
    tiptext1.innerHTML=GIRLDES[0]
   }
   else{
    img2.src=boys[0]
    
   }
   
 }
 

var slideNavR=document.getElementById('arrow_right1')
var slideNavL=document.getElementById('arrow_left1')
slideNavR.addEventListener('click',function(){
  let kidgender=document.getElementById('LastFemale').checked
  counter += 1; 
  console.log(counter)
  

    if (counter >= images.length) {
        counter = images.length-1; 
    } else if(kidgender) {
      
        img2.src = GIRL[counter]; 
        tiptext1.innerHTML=GIRLDES[counter]
      }

        else{ img2.src =boys[counter]}
        tiptext.innerHTML=boysdes[counter]
        
      
      

})
slideNavL.addEventListener("click", function () { 
  counter -= 1;
  var kidgende1=document.getElementById('LastFemale').checked
  if (counter < 0) { 
      counter = 0; 
  } 
    else if(kidgende1) {
      
      img2.src = GIRL[counter];
      tiptext.innerHTML=GIRLDES[counter] }
      
        else {img2.src =boys[counter]}
        tiptext.innerHTML=boysdes[counter]



    })


