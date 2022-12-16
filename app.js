
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


   const xraySection = document.querySelector('.Xray')
   const xrayImages = [...document.querySelectorAll('.xrayImg')]
   const xrayImagesContainer = document.querySelector('.xrayImgsContainer')
   const xrayText = document.querySelector('.xrayText')
   let xrayStart = xraySection.offsetTop +  xrayText.offsetHeight + xrayImages[0].offsetHeight/2
   let xrayBottom = xraySection.offsetTop + xraySection.offsetHeight - screenHeight
   let xrayRange = xrayBottom - xrayStart


   // console.log(xrayStart, xrayBottom , xrayRange);
   if (scrollY > xrayStart && scrollY < xrayBottom) {
      let airpodsMoveValue = 100 + ( scrollY - xrayBottom) *100 / xrayRange
      console.log(airpodsMoveValue);
      xrayImagesContainer.style.top = (-xrayImagesContainer.offsetHeight/4 - airpodsMoveValue ) + 'px'
      if (scrollY < xrayStart + xrayRange/3) {
         xrayImages[2].style.opacity = 1
         document.querySelector('.part1').classList.add('active')
         document.querySelector('.part2').classList.remove('active')
         document.querySelector('.part1').style.top = (screenHeight/2 - airpodsMoveValue ) + 'px'
         
      }else if (scrollY >= xrayStart + xrayRange/3 && scrollY < xrayStart + xrayRange*2/3) {
         xrayImages[2].style.opacity = 0
         xrayImages[1].style.opacity = 0
         document.querySelector('.part1').classList.remove('active')
         document.querySelector('.part2').classList.add('active')
         document.querySelector('.part3').classList.remove('active')
         document.querySelector('.part2').style.top = (screenHeight/2 - airpodsMoveValue ) + 'px'


      }else if(scrollY >= xrayStart + xrayRange*2/3 && scrollY < xrayStart + xrayRange){
         xrayImages[1].style.opacity = 1
         xrayImages[2].style.opacity = 0
         document.querySelector('.part2').classList.remove('active')
         document.querySelector('.part3').classList.add('active')
         document.querySelector('.part3').style.top = (screenHeight/2 - airpodsMoveValue ) + 'px'


      } else {
         xrayImages[2].style.opacity = 1
         document.querySelector('.part3').classList.remove('active')
         
      }
   }else{
      document.querySelector('.part1').classList.remove('active')
      document.querySelector('.part3').classList.remove('active')
   }

})

const sideAirpods = [...document.querySelectorAll('.sideAirpods')]
const switchesArr = [...document.querySelectorAll('.switch')]


let loopIndex = 1
carouselLoop()
 let carouselInterval =  setInterval(carouselLoop,3000)
      
function resetInterval(n) {
   clearInterval(carouselInterval)
   carouselInterval = setInterval(carouselLoop,3000)
   loopIndex = n
}

blueToggle()


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
   switchesArr.forEach(el => {
      el.classList.remove('active')
   });
   document.querySelector('.blueSwitch').classList.add('active')
   scrollTo({
      top: verScroll
   })
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
   switchesArr.forEach(el => {
      el.classList.remove('active')
   });
   document.querySelector('.graySwitch').classList.add('active')
   scrollTo({
      top: verScroll
   })
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


   switchesArr.forEach(el => {
      el.classList.remove('active')
   });
   document.querySelector('.greenSwitch').classList.add('active')
   scrollTo({
      top: verScroll
   })
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


   switchesArr.forEach(el => {
      el.classList.remove('active')
   });
   document.querySelector('.pinkSwitch').classList.add('active')
   scrollTo({
      top: verScroll
   })
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

   switchesArr.forEach(el => {
      el.classList.remove('active')
   });
   document.querySelector('.silverSwitch').classList.add('active')
   scrollTo({
      top: verScroll
   })
}


   function carouselLoop() {
      if (loopIndex > 5) {
         loopIndex = 1
      }
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
         loopIndex++      
   }