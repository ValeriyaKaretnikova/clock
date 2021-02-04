window.addEventListener('load', function(e){

    const secondHand = document.querySelectorAll('.second-hand');
    const minsHand = document.querySelectorAll('.min-hand');
  
    console.log(secondHand);
    console.log(minsHand);
    
    function setDate() {
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
      const hour = now.getHours();
      const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;

      secondHand.forEach(hand => hand.style.transform = `rotate(${secondsDegrees}deg)`);
      
      minsHand.forEach(hand => hand.style.transform = `rotate(${minsDegrees}deg)`);

      //hours
      document.querySelector('.hand.edmonton').style.transform = `rotate(${hourDegrees}deg)`;
      document.querySelector('.hand.newyork').style.transform = `rotate(${hourDegrees+60}deg)`;
      document.querySelector('.hand.london').style.transform = `rotate(${hourDegrees+210}deg)`;
      document.querySelector('.hand.tokyo').style.transform = `rotate(${hourDegrees+120}deg)`;
      document.querySelector('.hand.beijin').style.transform = `rotate(${hourDegrees+90}deg)`;
      document.querySelector('.hand.moscow').style.transform = `rotate(${hourDegrees+300}deg)`;
      document.querySelector('.hand.sydney').style.transform = `rotate(${hourDegrees+180}deg)`;
      document.querySelector('.hand.brazilia').style.transform = `rotate(${hourDegrees+120}deg)`;
      
    }
    
    setInterval(setDate, 1000);
    
    setDate();

})
