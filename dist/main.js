(()=>{"use strict";function t(t,e){const n=document.createElement("button");n.classList.add(t);const c=document.createElement("span");return c.textContent=e,n.appendChild(c),n.classList.add("tab"),n}const e=function(){const t=document.getElementById("tab-content");t.classList.add("flex-layout"),t.classList.remove("grid-layout"),t.textContent="";const e=function(){const t=document.createElement("section");t.classList.add("section");const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="About",t.appendChild(e);const n=document.createElement("p");return n.classList.add("section-description"),n.textContent="Tams House е авторски ресторант в сърцето на гр. Пловдив - кв. Капана. Създаден да демонстрира безкрайните възможности на творчеството, познанията и ароматите, Tams House се отличава с подчертана естетика и характерен стил. В съчетание с първокласно обслужване и лично отношение, всеки гост може да се наслади на бутиково изживяване с дъх на вино",t.appendChild(n),t}();!function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementsByClassName("home")[0].classList.add("active")}(),t.appendChild(e)};function n(t,e){const n=document.createElement("section");n.classList.add("section");const c=document.createElement("h2");return c.classList.add("section-title"),c.textContent=t,n.appendChild(c),e.forEach((t=>{const e=document.createElement("p");e.classList.add("section-description"),e.textContent=t,n.appendChild(e)})),n}const c=function(){const t=document.getElementById("tab-content");t.classList.add("flex-layout"),t.classList.remove("grid-layout"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementsByClassName("contact")[0].classList.add("active")}();const e=n("Телефони:",["0894211525","+359894211525"]),c=n("address",["some address"]);t.appendChild(e),t.appendChild(c)};function s(t,e,n,c){const s=document.createElement("div");s.classList.add("food");const o=document.createElement("img");o.setAttribute("src",t),o.setAttribute("alt",c);const a=document.createElement("p");a.classList.add("description");const d=document.createElement("h3");d.textContent=e;const i=document.createElement("h2");return i.textContent=n,a.appendChild(d),a.appendChild(i),s.appendChild(ing),s.appendChild(a),s}const o=function(){const t=document.getElementById("tab-content");t.classList.add("grid-layout"),t.classList.remove("flex-layout"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementsByClassName("menu")[0].classList.add("active")}(),[s()].forEach((e=>{t.appendChild(e)}))};(function(){const e=document.getElementById("content"),n=function(t,e){const n=document.createElement("header");n.classList.add("header");const c=document.createElement("h1");return c.textContent="Tams House",n.appendChild(c),n}();e.appendChild(n);const c=function(e){const n=document.createElement("nav");n.classList.add("nav");const c=t("home","home"),s=t("menu","menu"),o=t("contact","contact");return n.appendChild(c),n.appendChild(s),n.appendChild(o),n}();e.appendChild(c);const s=function(t){const e=document.createElement("main");return e.setAttribute("id",t),e.classList.add(t),e}("tab-content");e.appendChild(s);const o=function(t,e){const n=document.createElement("footer");return n.classList.add("footer"),document.createElement("h3").textContent="Copyright © 2022 DimitarGateshki",n.appendChild.h3,n}();e.appendChild(o)})(),e(),function(){const t=document.getElementsByClassName("home")[0],n=document.getElementsByClassName("menu")[0],s=document.getElementsByClassName("contact")[0];t.addEventListener("click",e),n.addEventListener("click",o),s.addEventListener("click",c)}()})();