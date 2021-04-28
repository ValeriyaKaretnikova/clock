window.addEventListener('load', function(e){

    const secondHand = document.querySelectorAll('.second-hand');
    const minsHand = document.querySelectorAll('.min-hand');
    
    function setDate() {
      const now = new Date();
      
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;

      secondHand.forEach(hand => hand.style.transform = `rotate(${secondsDegrees}deg)`);
      minsHand.forEach(hand => hand.style.transform = `rotate(${minsDegrees}deg)`);

      //Get hours 
      //local time in msec
      const  localTime = now.getTime();
      //local UTC offset (in min) convert to msec
      const localOffset = now.getTimezoneOffset()*60*1000;
      //utc time in msec
      const utcTime = localTime + localOffset;

      //TimeZones     
      const timeZonesList =
      [{name: "edmonton", offset: -6},
       {name: "newyork", offset: -4},
       {name: "london", offset: 1},
       {name: "tokyo", offset: 9},
       {name: "beijing", offset: 8},
       {name: "moscow", offset: 3},
       {name: "sydney", offset: 10},
       {name: "brasilia", offset: -3}
      ]

      timeZonesList.forEach(timeZone => {
          const destinationOffset  = timeZone.offset;
          const destinationTime = utcTime + (3600000*destinationOffset);
          const destinationDate = new Date(destinationTime);
          const hour = destinationDate.getHours();
          const min = destinationDate.getMinutes();
          const hourDegrees = ((hour / 12) * 360) + ((min/60)*30) + 90;

          document.querySelector('.hand.'+ timeZone.name).style.transform = `rotate(${hourDegrees}deg)`;
      })
    }
    
    setInterval(setDate, 1000);
    setDate();
})
