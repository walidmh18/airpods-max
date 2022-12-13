
const heroSection = document.getElementById('heroSection')
const heroAirpods = document.querySelector('.silverAirpodsHero')
const heroAirpodsTypo = document.querySelector('.airpodsHeroTypo')


addEventListener('scroll',() => {
   const heroSectionHeight = heroSection.offsetHeight
   const heroSectionTop = heroSection.offsetTop
   if (scrollY >= heroSectionTop && scrollY <= (heroSectionHeight + heroSectionTop)) {
      let zoomDiff = Math.floor((((scrollY + heroSectionTop)*0.3 )/ heroSectionHeight)*100)/100 -0.1
      heroAirpods.style.scale = (1 +zoomDiff)
      heroAirpodsTypo.style.scale = 1- zoomDiff
   }
})



const img  = document.querySelector('.airpodsImg')
const imgContainer = document.querySelector('.imgContainer')
const body = document.body
const html = document.html
addEventListener('scroll', ()=>{
   let sectionHeight = imgContainer.offsetHeight
   let screenHeight = window.innerHeight
   var pageHeight = Math.max( body.scrollHeight, body.offsetHeight);

   let sectionTop = imgContainer.offsetTop
   // console.log(scrollTop, sectionHeight , screenHeight, pageHeight, sectionTop);


   if (scrollY >= sectionTop && scrollY <= sectionHeight + sectionTop - screenHeight) {
      let frameIndex = Math.floor((scrollY- sectionTop)*45 / (sectionHeight- screenHeight))
      // console.log(frameIndex);

      img.src= `images/airpods reveal 3d/${frameIndex}.jpg`
      // console.log( img);
   }
})

console.log();