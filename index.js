// Code your solution in this file!
function distanceFromHqInBlocks(location)
{
    const address = 42;
    if(location >= address)
    {
        return location-address;
    }
    else
    {
        return address - location; 
    }
}
function distanceFromHqInFeet(location)
{   
    
    let feet = distanceFromHqInBlocks(location)*264;
    return feet;
}
function distanceTravelledInFeet(start, destination)
{
    let feet;
    if (start >= destination)
    {
        feet = (start - destination)*264;
        return feet;
    }
    else
    {
        feet = (destination - start)*264;
        return feet;
    }
}
function calculatesFarePrice(start,destination)
{
    let distance =distanceTravelledInFeet(start,destination);
    let cost;
    if(distance<=400)
    {
        cost = 0;
        return cost;
    }
    else if(distance>400&&distance<=2000)
    {
        cost = (distance-400)*.02;
        return cost;
    }
    else if(distance>2000 && distance<=2500)
    {
        cost = 25;
        return cost;
    }
    else
    {
        cost = ("cannot travel that far");
        return cost;
    }
}