
const heroSection = document.getElementById('heroSection')
const heroAirpods = document.querySelector('.silverAirpodsHero')
const heroAirpodsTypo = document.querySelector('.airpodsHeroTypo')


const featuresArr = [...document.querySelectorAll('.feature')]
const featuresContainer = document.querySelector('.features')

const personUsingAirpods = document.querySelector('.personUsingAirpodsImg')
const shadowDiv = document.querySelector('.shadowDiv')


const img  = document.querySelector('.airpodsImg')
const imgContainer = document.querySelector('.airpodsSpinning')
const body = document.body
const html = document.html


const navbar = document.querySelector('header')
const airpodsParts = document.querySelector('.airpodsParts')
const airpodsLowerPart = document.querySelector('.airpodsLowerPart')
img.style.top = `${navbar.offsetHeight}px `
img.style.height = `${window.innerHeight + navbar.offsetHeight}px`
airpodsParts.style.top = `${navbar.offsetHeight}px `
airpodsParts.style.height = `${window.innerHeight + navbar.offsetHeight}px`

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
         shadowDiv.style.height = `180%`
      }else{
         shadowDiv.style.height = `80%`
         

      }
      
      





   let sectionHeight = imgContainer.offsetHeight
   let screenHeight = window.innerHeight
   var pageHeight = Math.max( body.scrollHeight, body.offsetHeight);

   let sectionTop = imgContainer.offsetTop
   // console.log(scrollTop, sectionHeight , screenHeight, pageHeight, sectionTop);


   if (scrollY >= sectionTop && scrollY <= sectionHeight*2/3 + sectionTop - screenHeight) {
      let frameIndex = Math.floor((scrollY- sectionTop)*45 / (sectionHeight*2/3- screenHeight))
      // console.log(frameIndex);

      img.src= `images/airpods reveal 3d/${frameIndex}.jpg`

      console.log(frameIndex);
      
      airpodsParts.style.visibility = 'hidden'
      img.style.visibility = 'visible'

   }else if (scrollY > sectionHeight*2/3 + sectionTop - screenHeight && scrollY <= (sectionHeight-screenHeight+sectionTop + 250)) {
      img.style.visibility = 'hidden'
         airpodsParts.style.visibility = 'visible'
         let distValue = Math.floor(1000*(scrollY-sectionHeight*2/3 -sectionTop + screenHeight) / (sectionHeight-screenHeight+sectionTop)/1.45)
         console.log(distValue);
         airpodsLowerPart.style.top = distValue + 'px'
         airpodsParts.style.scale = 1 + distValue/500
   }
})

const sideAirpods = [...document.querySelectorAll('.sideAirpods')]

let loopIndex = 1
loopAirpodsSlider()



function blueToggle() {
   let verScroll = scrollY
   document.querySelector('#bluePods').scrollIntoView({
      // behavior:'smooth',
      inline: 'center',
      block: 'nearest'
   })

   sideAirpods.forEach(el => {
      if (el.classList[1] == 'blue') {
         el.style.opacity = 1
      }else{
         el.style.opacity = 0
      }
   });
   scrollTo({
      top: verScroll
   })
   loopIndex = 2
   loopAirpodsSlider()
}


function grayToggle() {
   let verScroll = scrollY
   document.querySelector('#grayPods').scrollIntoView({
      // behavior:'smooth',
      inline: 'center',
      block: 'nearest'
   })

   sideAirpods.forEach(el => {
      if (el.classList[1] == 'gray') {
         el.style.opacity = 1
      }else{
         el.style.opacity = 0
      }
   });
   scrollTo({
      top: verScroll
   })
   loopIndex = 3
loopAirpodsSlider()
}


function greenToggle() {
   let verScroll = scrollY
   document.querySelector('#greenPods').scrollIntoView({
      // behavior:'smooth',
      inline: 'center',
      block: 'nearest'
   })

   sideAirpods.forEach(el => {
      if (el.classList[1] == 'green') {
         el.style.opacity = 1
      }else{
         el.style.opacity = 0
      }
   });
   scrollTo({
      top: verScroll
   })
   loopIndex = 4
loopAirpodsSlider()
}


function pinkToggle() {
   let verScroll = scrollY
   document.querySelector('#pinkPods').scrollIntoView({
      // behavior:'smooth',
      inline: 'center',
      block: 'nearest'
   })

   sideAirpods.forEach(el => {
      if (el.classList[1] == 'pink') {
         el.style.opacity = 1
      }else{
         el.style.opacity = 0
      }
   });
   scrollTo({
      top: verScroll
   })
   loopIndex = 5
loopAirpodsSlider()
}


function silverToggle() {
   let verScroll = scrollY
   document.querySelector('#silverPods').scrollIntoView({
      // behavior:'smooth',
      inline: 'center',
      block: 'nearest'
   })

   sideAirpods.forEach(el => {
      if (el.classList[1] == 'silver') {
         el.style.opacity = 1
      }else{
         el.style.opacity = 0
      }
   });
   scrollTo({
      top: verScroll
   })
   loopIndex = 1
loopAirpodsSlider()
}
function loopAirpodsSlider() {
   setInterval(()=>{
      if (loopIndex == 1) {
         blueToggle()
      } else if(loopIndex == 2) {
         grayToggle()
      } else if (loopIndex == 3) {
         greenToggle()
      } else if (loopIndex == 4) {
         pinkToggle()
      } else if (loopIndex == 5) {
         silverToggle()
      }
   },3000)
      
   }