var menuList = document.getElementById("nav");
menuList.style.maxHeight = "0px";

function togglemenu(){
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "130px";
  }
  else {
    menuList.style.maxHeight = "0px";
  }
}

const header = {
  method: 'GET'
};

async function get_joke() {
  let response = await fetch('https://backend-omega-seven.vercel.app/api/getjoke', header);
  let data = await response.json();
  return data[0]; // Access the first element of the array
}
async function display_joke() {
    let response = await fetch('https://backend-omega-seven.vercel.app/api/getjoke', header);
    let data = await response.json();
    let joke = data[0];
    let question = joke["question"];
    let punchline = joke["punchline"];
    return { question, punchline };
}
const typedJoke = new Typed("#question", {
    strings: [""],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    contentType: 'html', // Set content type to HTML
    onComplete: async (self) => {
      let { question, punchline } = await display_joke();
      let joke = question + "<br>" + punchline; // concatenate question and punchline
      self.strings = [joke];
      self.start();
    }
});
async function change_joke() {
    let { question, punchline } = await display_joke();
    let joke = question + "<br>" + punchline; // concatenate question and punchline
    typedJoke.strings = [joke];
    typedJoke.start();
}
  
setInterval(change_joke, 5000);
function oncon() {
  window.location.href = "/contact"
}