// Code your solution in this file!

//returns the number of blocks given a value
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    return Math.abs(someValue - hqLocation)
  }

  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;  
    return blocks * feetPerBlock
  }

  //returns the number of feet traveled
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(destination - start) * feetPerBlock
  }

  //fare for the customer
  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destination - start) * feetPerBlock;

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
