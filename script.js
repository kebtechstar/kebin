window.addEventListener("DOMContentLoaded", ()=> {

    let title = document.querySelector('.title');
    let text = document.querySelector('.text');
    let code = document.querySelector('.coder');
    let hero = document.querySelector('.hero-img');
    let coder = document.querySelector('.evoke');
    let homeText = document.querySelector('.homeText');
    let aboutText = document.querySelector('.aboutText');
    let contactText = document.querySelector('.contactText'); 
    let techHome = document.querySelector('.techHome');
    let navbar = document.querySelector('.nav-bar ul');
    let menu = document.querySelector('.menu-bar');
    let cover = document.querySelector('.cover');
    let slider = document.querySelector('.slider');
    let message = document.querySelector('.fa-message');
    let mail = document.querySelector('.fa-envelope');
    let fb = document.querySelector('.fa-facebook');
    let phone = document.querySelector('.phoneContact');
    let move = 100;



   message.addEventListener("click", ()=> {
      slider.style.marginLeft =  0+"%"
   })

   
   mail.addEventListener("click", ()=> {
    slider.style.marginLeft =  `${-move}%`
 })

 
 fb.addEventListener("click", ()=> {
  slider.style.marginLeft =  `${-move * 2}%`
})


phone.addEventListener("click", ()=> {
  slider.style.marginLeft =  `${-move * 3}%`

})

   menu.addEventListener("click", ()=> {
    navbar.classList.toggle("open");
    if(window.innerWidth <=  700) {
    cover.classList.toggle("open");
    }else {
      cover.classList.remove("open")
    }
   })

   navbar.addEventListener("click", ()=> {
    navbar.classList.toggle("open")
    if(window.innerWidth <=  700) {
    cover.classList.remove("open")
    }else {
      cover.classList.remove("open")
    }
   })

   cover.addEventListener("click", ()=> {

    if(window.innerWidth <=  700) { 
     navbar.classList.toggle("open");
     cover.classList.toggle("open");
      }else {
        cover.classList.remove("open")
      }
   })


    

    window.addEventListener("scroll", ()=> {
  
      let homeTextView = homeText.getBoundingClientRect();

      if (homeTextView.top <= 400) {
        homeText.style.opacity = "1"
      }

      let aboutTextView = aboutText.getBoundingClientRect();

      if (aboutTextView.top <= 400) {
        aboutText.style.opacity = "1"
      }

      
      let contactTextView = contactText.getBoundingClientRect();

      if (contactTextView.top <= 400) {
        contactText.style.opacity = "1"
      }



    })


    title.style.marginTop = "10%";
    text.style.display = "none";



    let interval = setInterval(()=> {
    title.style.marginTop = "0%";
    text.style.display = "block";  
 
    clearInterval(interval)
    },2000)

    let codeInterval = setInterval(()=> {
    code.style.display = "block"
  clearInterval(codeInterval)
    }, 3000)

    let codeShow = setInterval(()=> {
        code.style.display = "none"
   coder.style.display = "block";
   clearInterval(codeShow)
    }, 6000)

    let codeImg = setInterval(()=> {
        coder.style.display = "none";
        hero.style.display = "block"
      clearInterval(codeImg)
        }, 7000)
  



})






let techHome = document.querySelector(".techHome");
let htmlImg = document.querySelector(".htmlImg");
let cssImg = document.querySelector(".cssImg");
let jsImg = document.querySelector(".jsImg");
let dbImg = document.querySelector(".dbImg");
let nodejsImg = document.querySelector(".nodejsImg");
let phpImg = document.querySelector(".phpImg");
let reactjsImg = document.querySelector(".reactjsImg");
let reactNativeImg = document.querySelector(".reactNativeImg");
let flutterImg = document.querySelector(".flutterImg");


const html = () => {

  cssImg.style.display = "none";
  jsImg.style.display = "none";
  dbImg.style.display = "none";
  nodejsImg.style.display = "none";
  phpImg.style.display = "none";
  reactjsImg.style.display = "none";
  reactNativeImg.style.display = "none";
  flutterImg.style.display = "none";

let text = document.querySelector(".technology")

techHome.style = "display: block";
htmlImg.style.display = "block";

text.innerHTML= "HTML stands for HyperText Markup Language. <br> Unlike a programming/scripting language that uses scripts to perform operations, HTML uses tags to create or identify contents<br><br>I use HTML to create the structure and layouts of webpages";

}


const css = () => {
  htmlImg.style.display = "none";
  jsImg.style.display = "none";
    dbImg.style.display = "none";
    nodejsImg.style.display = "none";
    phpImg.style.display = "none";
    reactjsImg.style.display = "none";
    reactNativeImg.style.display = "none";
    flutterImg.style.display = "none";

  let text = document.querySelector(".technology")
  
  techHome.style = "display: block";
  cssImg.style.display = "block";
  
  text.innerHTML= "CSS stands for Cascading Style Sheets <br>Cascading refers to the way CSS applies one style on top of another one <br>Style Sheets control the look and feel of web documents <br><br>I use CSS to design HTML contents and  determine how it is displayed in the User Interface";
  
  }


  
const js = () => {
  htmlImg.style.display = "none";
  cssImg.style.display = "none";
  dbImg.style.display = "none";
  nodejsImg.style.display = "none";
  phpImg.style.display = "none";
  reactjsImg.style.display = "none";
  reactNativeImg.style.display = "none";
  flutterImg.style.display = "none";

  let text = document.querySelector(".technology")
  
  techHome.style = "display: block";
  jsImg.style.display = "block";
  
  text.innerHTML= "Javascript is a scripting/programming language which is responsible for the behaviour of webpages. <br>whenever you see web applications that are interactive, Javascript is responsible for such  activities. <br><br>I use javascript to make web applications interactive.";
  
  }

   
const db = () => {
  htmlImg.style.display = "none";
  cssImg.style.display = "none";
  jsImg.style.display = "none";
  nodejsImg.style.display = "none";
  phpImg.style.display = "none";
  reactjsImg.style.display = "none";
  reactNativeImg.style.display = "none";
  flutterImg.style.display = "none";


  let text = document.querySelector(".technology")
    dbImg.style.display = "block";
  techHome.style = "display: block";
  
  
  text.innerHTML= "Databases are used to store informations, usually sensitive, like users data from an HTML form. <br>There are many types of databases some popular ones like mysql and mongodb are used to store informations <br><br>I use databases to store information that would be used for certain purposes";
  
  }

   
const nodejs = () => {
  htmlImg.style.display = "none";
  cssImg.style.display = "none";
  jsImg.style.display = "none";
  dbImg.style.display = "none";
  phpImg.style.display = "none";
  reactjsImg.style.display = "none";
  reactNativeImg.style.display = "none";
  flutterImg.style.display = "none";


  let text = document.querySelector(".technology")
  nodejsImg.style.display = "block";
  techHome.style = "display: block";
  
  
  text.innerHTML= "Nodejs is a Javascript runtime built on Chrome's v8 Javascript engine<br>Languages like express, react, react-native use nodejs.";
  
  }

  const php = () => {
    htmlImg.style.display = "none";
    cssImg.style.display = "none";
    jsImg.style.display = "none";
    dbImg.style.display = "none";
    nodejsImg.style.display = "none";
    reactjsImg.style.display = "none";
    reactNativeImg.style.display = "none";
    flutterImg.style.display = "none";
  
    let text = document.querySelector(".technology")
    phpImg.style.display = "block";
    techHome.style = "display: block";
    
    
    text.innerHTML= "PHP stands Hypertext Preprocessor. <br>It is a scripting language that is executed on the server<br><br>I use PHP to communicate with server,create and extablish database connections, open,read, close files on the server<br>Sometimes when you visit a webpage, scripting languages like PHP are running behind the scenes";
    
    }

    
  const react = () => {
    htmlImg.style.display = "none";
    cssImg.style.display = "none";
    jsImg.style.display = "none";
    dbImg.style.display = "none";
    nodejsImg.style.display = "none";
    phpImg.style.display = "none";
    reactNativeImg.style.display = "none";
    flutterImg.style.display = "none";
  
    let text = document.querySelector(".technology")
    reactjsImg.style.display = "block";
    techHome.style = "display: block";
    
    
    text.innerHTML= "React is a fast,popular Javascript library used for front-end web applications<br><br>I use React to create the front-end portion of web applications";
    
    }
  

    const reactNative = () => {
      htmlImg.style.display = "none";
      cssImg.style.display = "none";
      jsImg.style.display = "none";
      dbImg.style.display = "none";
      nodejsImg.style.display = "none";
      phpImg.style.display = "none";
      reactjsImg.style.display = "none";
      flutterImg.style.display = "none";
      let text = document.querySelector(".technology")

      
      techHome.style = "display: block";
      reactNativeImg.style.display = "block";
      
      text.innerHTML= "React-native is a fast,popular cross platform programming language used for building the UI of mobile, web and desktop applications<br><br>I use React-native to create the user inteface of mobile, web and desktop applications";
      }

      const flutter = () => {
        htmlImg.style.display = "none";
        cssImg.style.display = "none";
        jsImg.style.display = "none";
        dbImg.style.display = "none";
        nodejsImg.style.display = "none";
        phpImg.style.display = "none";
        reactjsImg.style.display = "none";
        reactNativeImg.style.display = "none";
        let text = document.querySelector(".technology")
  
        
        techHome.style = "display: block";
        flutterImg.style.display = "block";
        
        text.innerHTML= "Flutter is a very fast,popular cross platform programming language used for building the beautiful user interfaces of mobile, web and desktop applications.<br><br>I use flutter to build the user inteface of mobile, web and desktop applications";
        }
