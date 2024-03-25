function distanceFromHqInBlocks(pickupLocation){
    const scuberLocation = 42; 
    const distance = Math.abs(pickupLocation-scuberLocation);
    return distance; 
}
function distanceFromHqInFeet(blocks)
{
    const feet = distanceFromHqInBlocks(blocks)*264;
    return feet; 
}

function distanceTravelledInFeet(startBlock, endBlock)
{
    const distance = Math.abs(startBlock - endBlock)*264;
    return distance; 
}

function calculatesFarePrice(start, end)
{
    const distance = distanceTravelledInFeet(start,end);
    let cost; 
    if(distance<=400)
    {
        cost = 0;
    }
    else if(distance>400 && distance<=2000)
    {
        cost = (distance - 400)*.02;
    }
    else if(distance>2000 && distance<=2500)
    {
        cost = 25;
    }
    else
    {
        cost = "cannot travel that far";
    }
    return cost; 
}
