import {skills} from './data/skills.js'
import {projects} from './data/projects.js'

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let _tech_skills=document.querySelector('.skills-container');
let _s_text="";
skills.forEach(_type=>{
  _s_text+=`
  <div class="details-container">
  <h2 class="experience-sub-title">${_type.type}</h2>
  <div class="article-container">
      ${_type.data.map(ele=>{
        return `  
          <article>
          <img
            src="./images/checkmark.png"
            alt="Experience icon"
            class="icon"
          />
          <div>
            <h3>${ele.name}</h3>
            <p>${ele.level}</p>
          </div>
        </article>`
      }).join("")}
  </div>
  </div>
  `;
})


let _projects=document.querySelector('.projects-container');
let _skill_content=document.getElementById('skills');
let _project_content=document.getElementById('projects');
let _js_btn_skills=document.querySelector('.js-btn-skills');
let _js_btn_projects=document.querySelector('.js-btn-projects');
let _p_text="";

projects.forEach(_prj=>{
  _p_text+=`
        <div class="details-container color-container">
        <div class="article-container">
          <img
          src="./images/${_prj.id}.png"
          alt="${_prj.name}"
          class="project-img"
          />
        </div>
        <h2 class="experience-sub-title project-title">${_prj.name}</h2>
        <h4>${_prj.tools.map(_ele=>{
          return `${_ele}`;
        }).join(", ")}</h4>
        <p>${_prj.desc} </p>
        <div class="btn-container">
          <button
          class="btn btn-color-2 project-btn"
          onclick="location.href='${_prj.github}'"
          >
          Github
        </button>
        </div>
      </div>
  `;
})


_projects.innerHTML=_p_text;
_tech_skills.innerHTML=_s_text;

// _skill_content.innerHTML=`
//   <p class="section__text__p1">Explore My</p>
//   <h1 class="title">Technical Skills</h1>
//   <div class="experience-details-container">
//     <div class="about-containers skills-container">
//       <!-- script added -->
//       ${_s_text}
//     </div>
//   </div>
//   `;

  console.log(_skill_content.innerHTML);



_js_btn_skills.addEventListener('click',event=>{

  _js_btn_skills.classList.add("btn-color-1");
  _js_btn_projects.classList.remove("btn-color-1");

  _js_btn_skills.data.value="selected";
  _js_btn_projects.data.value="not selected";
})

_js_btn_projects.addEventListener('click',event=>{

  _js_btn_projects.classList.add("btn-color-1");
  _js_btn_skills.classList.remove("btn-color-1");

  _js_btn_projects.data.value="selected";
  _js_btn_skills.data.value="not selected";
})


