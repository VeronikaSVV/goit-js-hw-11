import{a as u,S as d,i as n}from"./assets/vendor-D1AWmRWP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="55630805-566a496cfd8411b4d8839b448";function f(i){return u.get("https://pixabay.com/api/",{params:{key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),m=new d(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"simple-lightbox-caption",overlayOpacity:.8});function h(i){const o=i.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" width="360" />
      </a>
            <div class="info">
        <p><b>Likes</b> ${t.likes}</p>
        <p><b>Views</b> ${t.views}</p>
        <p><b>Comments</b> ${t.comments}</p>
        <p><b>Downloads</b> ${t.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function y(){c.innerHTML=""}function g(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const L=document.querySelector(".form"),w=document.querySelector(".input");document.querySelector(".gallery");L.addEventListener("submit",S);function S(i){i.preventDefault();const o=w.value.trim();if(y(),!o){n.warning({message:"Please fill in the search field!",position:"topRight"});return}g(),f(o).then(t=>{if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits)}).catch(t=>{n.error({message:t.message,position:"topRight"})}).finally(()=>{b(),i.target.reset()})}
//# sourceMappingURL=index.js.map
