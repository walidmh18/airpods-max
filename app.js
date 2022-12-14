
const heroSection = document.getElementById('heroSection')
const heroAirpods = document.querySelector('.silverAirpodsHero')
const heroAirpodsTypo = document.querySelector('.airpodsHeroTypo')


const featuresArr = [...document.querySelectorAll('.feature')]
const featuresContainer = document.querySelector('.features')

const personUsingAirpods = document.querySelector('.personUsingAirpodsImg')
const shadowDiv = document.querySelector('.shadowDiv')


const img  = document.querySelector('.airpodsImg')
const imgContainer = document.querySelector('.imgContainer')
const body = document.body
const html = document.html


addEventListener('scroll',() => {
   const heroSectionHeight = heroSection.offsetHeight
   const heroSectionTop = heroSection.offsetTop
   if (scrollY  >= heroSectionTop && scrollY <= (heroSectionHeight + heroSectionTop)) {
      let zoomDiff = Math.floor((((scrollY + heroSectionTop)*0.3 )/ heroSectionHeight)*100)/100 -0.1
      heroAirpods.style.scale = (1 +zoomDiff)
      heroAirpods.style.top = (-20 *zoomDiff)+'px'
      heroAirpodsTypo.style.scale = 1- zoomDiff
   }


   let featuresTop = featuresContainer.offsetTop
   let featuresBottom = featuresTop + featuresContainer.offsetHeight
   if (scrollY >= featuresTop && scrollY <= featuresBottom) {

   for (let i = 0; i < featuresArr.length; i++) {
      if (scrollY + window.innerHeight /2 > featuresArr[i].offsetTop + featuresTop) {
         featuresArr[i].style.opacity = 1
         featuresArr[i].style.transform = 'translateY(-10px)'
      }else{
         featuresArr[i].style.opacity = 0
         featuresArr[i].style.transform = 'translateY(0)'

      }
      
      
   }
        }
        if (scrollY + window.innerHeight /2 > personUsingAirpods.offsetTop  + featuresTop) {
         console.log('g');
         shadowDiv.style.height = `130%`
      }else{
         shadowDiv.style.height = `200%`
         

      }
      
      





   // let sectionHeight = imgContainer.offsetHeight
   // let screenHeight = window.innerHeight
   // var pageHeight = Math.max( body.scrollHeight, body.offsetHeight);

   // let sectionTop = imgContainer.offsetTop
   // // console.log(scrollTop, sectionHeight , screenHeight, pageHeight, sectionTop);


   // if (scrollY >= sectionTop && scrollY <= sectionHeight + sectionTop - screenHeight) {
   //    let frameIndex = Math.floor((scrollY- sectionTop)*45 / (sectionHeight- screenHeight))
   //    // console.log(frameIndex);

   //    img.src= `images/airpods reveal 3d/${frameIndex}.jpg`
   // }
})





