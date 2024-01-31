//section hero
let heroInfo = {
    name: "Minh Cường",
    job: "freelance react developer",
    imgUrl: "https://picsum.photos/200/300",
  };
localStorage.setItem("heroInfo",JSON.stringify(heroInfo));
heroInfo=JSON.parse(localStorage.getItem("heroInfo"));
function renderHero(){
    document.getElementsByClassName("section_hero")[0].innerHTML="";
    let heroHTML=`
    <div class="section_hero_left">
          <img src="${heroInfo.imgUrl}" alt="" />
        </div>
        <div class="section_hero_right" >
          <div class="hero_right_name" id="Resume">Hi,I'm ${heroInfo.name}</div>
          <div class="hero_right_detail">I'm a ${heroInfo.job}</div>
          <div class="hero_right_button">
            <button>Download CV</button>
          </div>
        </div>
    `
    document.getElementsByClassName("section_hero")[0].innerHTML=heroHTML
}
renderHero();
//section personal detail

  let personalDetail = {
    name: "Minh Cường",
    dob: "06 June 1995",
    spokenLanguages: ["English", "France", "German"],
    nationality: "Vietnam",
    interest: ["Music", "Reading", "Journey"],
    techs: [
      {
        id: 1,
        imgUrl: "https://i.postimg.cc/cHdfNH2Z/android.png",
        techName: "Android",
        exp: 2,
      },
      {
        id: 2,
        imgUrl: "https://i.postimg.cc/nrCjHQk8/Angular.png",
        techName: "Angular",
        exp: 1,
      },
      {
        id: 3,
        imgUrl: "https://i.postimg.cc/G3VJ4csP/bootstrap.png",
        techName: "Bootstrap",
        exp: 3,
      },
      {
        id: 4,
        imgUrl: "https://i.postimg.cc/dt91z6v7/vue.png",
        techName: "Vue",
        exp: 2,
      },
      {
        id: 5,
        imgUrl: "https://i.postimg.cc/XNdXg3zk/react.png",
        techName: "React",
        exp: 2 / 3,
      },
      {
        id: 6,
        imgUrl: "https://i.postimg.cc/PfgYt2B2/mongodb.png",
        techName: "Mongodb",
        exp: 0.25,
      },
      {
        id: 7,
        imgUrl: "https://i.postimg.cc/RZzFYYjx/laravel.png",
        techName: "Laravel",
        exp: 1,
      },
      {
        id: 8,
        imgUrl: "https://i.postimg.cc/X7N3ybSJ/nodejs-icon.png",
        techName: "Node.js",
        exp: 5 / 6,
      },
    ],
  };
  localStorage.setItem("personalDetail",JSON.stringify(personalDetail));
  personalDetail=JSON.parse(localStorage.getItem("personalDetail"));
function renderPersonnalDetail(){
    document.getElementById("tablePersonal").innerHTML="";
    let tablePersonal=`
        <tr>
            <th>Date of birth</th>
            <td>:</td>
            <td class="td_right">${personalDetail.dob}</td>
        </tr>
        <tr>
            <th>Spoken Languages</th>
            <td>:</td>
            <td class="td_right">${personalDetail.spokenLanguages.join('-')}</td>
        </tr>
        <tr>
            <th>Nationality</th>
            <td>:</td>
            <td class="td_right">${personalDetail.name}</td>
        </tr>
        <tr>
            <th>Interest</th>
            <td id="Services">:</td>
            <td class="td_right">${personalDetail.interest.join(', ')}</td>
        </tr>
    `
    document.getElementById("tablePersonal").innerHTML=tablePersonal;
    document.getElementsByClassName("detail_bottom_first")[0].innerHTML="";
    document.getElementsByClassName("detail_bottom_second")[0].innerHTML="";
    let cnt=0;
    for(let btn of personalDetail.techs){
        cnt++;
        let itemBtn=`
        <div class="bottom_box">
            <div class="img">
              <img src="${btn.imgUrl}" alt="" />
            </div>
            <div class="bottom_box_text">
              <div class="box_text_name">${btn.techName}</div>
              <div class="box_text_detail">${btn.exp *12} Months Experience</div>
            </div>
          </div>
        `
        
        if(cnt<=5){
            document.getElementsByClassName("detail_bottom_first")[0].innerHTML+=itemBtn;
        }else{
                document.getElementsByClassName("detail_bottom_second")[0].innerHTML+=itemBtn;
            }
    }
}
renderPersonnalDetail();
  projects=JSON.parse(localStorage.getItem("projects"));
  function renderProjects(){
    document.getElementsByClassName("projectBox")[0].innerHTML="";
    for(let btn of projects){
        let projectItem=`
    <div class="projectBoxItem">
    <div class="projectBoxItemTop">
      <div class="img">
        <img src="${btn.imgUrl}" alt="" />
      </div>
      <div class="projectBoxItemTopText">
        <div class="BoxItemName">${btn.projectName}</div>
        <div class="BoxItemDetail">
          <p>${btn.link}</p>
          <i class="fa-solid fa-share-from-square"></i>
        </div>
      </div>
    </div>
    <div class="projectBoxItemBottom">
       <div class="projectBoxButton">${btn.tags.join('&nbsp &nbsp')}</div>
    </div>
  </div>  
    `
    document.getElementsByClassName("projectBox")[0].innerHTML+=projectItem;
    }
  }
  renderProjects();