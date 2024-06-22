export const _users = [
    {
        userId: "user_1",
        name: "Rohan",
        gender: "M",
        age: 36,
        rideOffered: 0,
        ridesTaken: 0
    },
    {
        userId: "user_2",
        name: "Shashank",
        gender: "M",
        age: 29,
        rideOffered: 0,
        ridesTaken: 0,
    },
    {
        userId: "user_3",
        name: "Nandini",
        gender: "F",
        age: 29,
        rideOffered: 0,
        ridesTaken: 0
    },
    {
        userId: "user_4",
        name: "Shipra",
        gender: "F",
        age: 27,
        rideOffered: 0,
        ridesTaken: 0
    },
    {
        userId: "user_5",
        name: "Gaurav",
        gender: "M",
        age: 29,
        rideOffered: 0,
        ridesTaken: 0
    },
    {
        userId: "user_6",
        name: "Rahul",
        gender: "M",
        age: 35,
        rideOffered: 0,
        ridesTaken: 0
    }
]

export const _vehicles = [
    {
        vehicleId: "v_1",
        ownerId: "user_2",
        vehicleName: "Baleno",
        plateNumber: "TS-05-62395"
    },
    {
        vehicleId: "v_2",
        ownerId: "user_4",
        vehicleName: "Polo",
        plateNumber: "KA-05-414191"
    },
    {
        vehicleId: "v_3",
        ownerId: "user_4",
        vehicleName: "Activa",
        plateNumber: "KA-12-12332"
    },
    {
        vehicleId: "v_4",
        ownerId: "user_6",
        vehicleName: "XUV",
        plateNumber: "KA-0-1234"
    }
]

export const _offerRides = [

    {
        rideId:'ride_1',
        offeredBy:"user_1",
        availableSeat:1,
        startOrigin:"Hyderabad",
        endDestination:"Bangalore",
        vehiclePlateNumber:"KA-01-12345",
        status:1,
        offeredTo:null ,
    },
    {
        rideId:'ride_2',
        offeredBy:"user_4",
        availableSeat:1,
        startOrigin:"Bangalore",
        endDestination:"Mysore",
        vehiclePlateNumber:"KA-12-12332",
        status:1,
        offeredTo:null ,
    },
    {
        rideId:'ride_3',
        offeredBy:"user_4",
        availableSeat:2,
        startOrigin:"Bangalore",
        endDestination:"Mysore",
        vehiclePlateNumber:"KA-05-41491",
        status:1,
        offeredTo:null ,
    },
    {
        rideId:'ride_4',
        offeredBy:"user_2",
        availableSeat:2,
        startOrigin:"Hyderabad",
        endDestination:"Bangalore",
        vehiclePlateNumber:"TS-05-62395",
        status:1,
        offeredTo:null ,
    },
    {
        rideId:'ride_5',
        offeredBy:"user_6",
        availableSeat:5,
        startOrigin:"Hyderabad",
        endDestination:"Bangalore",
        vehiclePlateNumber:"KA-05-1234",
        status:1,
        offeredTo:null ,
    },
    {
        rideId:'ride_6',
        offeredBy:"user_1",
        availableSeat:1,
        startOrigin:"Bangalore",
        endDestination:"Pune",
        vehiclePlateNumber:"KA-01-12345",
        status:1,
        offeredTo:null ,
    },
]

export const _selectRides = [
    {
        userId:'user_3',
        startOrigin:"Bangalore",
        endDestination:"Mysore",
        seats:1,
        most_vacant:true,
        preferredVehicle:null,
    },
    {
        userId:'user_5',
        startOrigin:"Bangalore",
        endDestination:"Mysore",
        seats:1,
        most_vacant:false,
        preferredVehicle:"Activa",
    },
    {
        userId:'user_2',
        startOrigin:"Mumbai",
        endDestination:"Bangalore",
        seats:1,
        most_vacant:true,
        preferredVehicle:null,
    },
    {
        userId:'user_1',
        startOrigin:"Hyderabad",
        endDestination:"Bangalore",
        seats:1,
        most_vacant:false,
        preferredVehicle:"Baleno",
    },
    {
        userId:'user_2',
        startOrigin:"Hyderabad",
        endDestination:"Bangalore",
        seats:1,
        most_vacant:false,
        preferredVehicle:"Polo",
    }
]