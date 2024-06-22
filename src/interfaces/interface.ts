export interface User {
    userId:string,
    name:string,
    age:number,
    gender: string,
    rideOffered: number;
    rideTaken: number;
}   

export interface Vehicle {
    vehicleId:string,
    ownerId:string,
    vehicleName: string,
    plateNumber: string,
} 

export interface Ride {
    rideId:string
    offeredBy:string,
    availableSeat:number,
    startOrigin:string,
    endDestination:string,
    vehiclePlateNumber:string,
    status:number,
    offeredTo:string,
}