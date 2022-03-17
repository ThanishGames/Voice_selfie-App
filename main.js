var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function takephoto(){
    document.getElementById("textbox").innerHTML="";
    recognition.start   ();
}

recognition.onresult= function run(event){
    console.log(event);

    var context= event.results[0] [0].transcript;
    console.log(context);

    document.getElementById("textbox").innerHTML=context;
    
    if(context=="take my selfie")
    {
        console.log("taking my selfie ---");
        speak();
    }
   
}

function speak(){
    var mouse=window.speechSynthesis;
    var couch="Taking your selfie in 5 seconds";
    var beast= new SpeechSynthesisUtterance(couch);
    mouse.speak(beast);
    Webcam.attach(camera);
    setTimeout(function()
    {
        taking_picture();
        save();
    }, 5000);
        
  
}
Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");

function taking_picture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href=image;
    link.click();
}