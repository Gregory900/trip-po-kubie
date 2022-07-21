const FOTOS=document.querySelectorAll(".foto img");
const FULLGALLERY=document.querySelector(".fullgallery");
const FULLGALLERY_CLOSE=document.querySelector(".fullgallery__close");
const FULLGALLERY_IMG=document.querySelector(".fullgallery__img");
const FULLGALLERY_LEFT=document.querySelector(".fullgallery__arrow--left");
const FULLGALLERY_RIGHT=document.querySelector(".fullgallery__arrow--right");

let currentImageIndex;

FOTOS.forEach((foto,index)=>{
	foto.addEventListener("click",(event)=>{
		FULLGALLERY.classList.remove("hidden");
		FULLGALLERY_IMG.src=event.target.src;
		currentImageIndex=index;
		});
});

FULLGALLERY_CLOSE.addEventListener("click",()=>{
	FULLGALLERY.classList.add("hidden");
});

FULLGALLERY_LEFT.addEventListener("click",()=>{
	currentImageIndex=currentImageIndex-1;
	if (currentImageIndex<0) currentImageIndex=15;
	FULLGALLERY_IMG.src=FOTOS[currentImageIndex].src;	
});


FULLGALLERY_RIGHT.addEventListener("click", () => {
	currentImageIndex=currentImageIndex+1;
	if (currentImageIndex>15) currentImageIndex=0;
	FULLGALLERY_IMG.src=FOTOS[currentImageIndex].src;
});