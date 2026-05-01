import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";


const form = document.querySelector(".form");
const input = document.querySelector(".input");
const gallery = document.querySelector(".gallery");
 
 

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) { 
    
    event.preventDefault();

    const query = input.value.trim();

    clearGallery();  

    if (!query) { iziToast.warning({ message: "Please fill in the search field!", position: "topRight", }); return; }

    showLoader();
    
    getImagesByQuery(query)
        .then(data => {
            if (data.hits.length === 0) {
        iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: "topRight",
        });
        return;
            }
            
            createGallery(data.hits);

        })
        .catch(error => {
        iziToast.error({
        message: error.message,
        position: "topRight",
      });
    })
        .finally(() => {
            hideLoader();
            event.target.reset();
        })

}