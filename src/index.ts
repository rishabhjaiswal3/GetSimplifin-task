import { User, Vehicle, Ride } from './interfaces/interface';
import {
  _users,
  _vehicles,
  _offerRides,
  _selectRides,
} from './testCases/input';

class RideSharingApp {
  private users: User[] = [];
  private vehicles: { [key: string]: Vehicle } = {};
  private rides: Ride[] = [];

  // add users
  add_user(_user) {
    const isUserExisted = this.users.filter(
      (user) => user?.userId == _user?.userId
    );

    if (isUserExisted.length) {
      return `Failed:: user already existed with same userId ${_user?.userId}`;
    }
    this.users.push(_user);
    return `Success:: user created with userId ${_user?.userId}`;
  }

  // add vehicles
  add_vehicle(_vehicle) {
    let plateNumber = _vehicle?.plateNumber;
    if(!plateNumber) {
        return `Failed:: Invalid Plate Number`;
    }
    if (`${plateNumber}` in this.vehicles) {
        return `Failed:: Vehicle is already existed with plateNumber ${plateNumber}`;
    }
    this.vehicles[plateNumber] = _vehicle;
    return `Success:: vehicle added with plate number ${plateNumber}`;
  }

  // we can offer a ride 
  offer_ride(_ride) {
    const _sameOfferedVehicle = this.rides.filter((ride) => {
      return (
        ride.status == 1 && ride.vehiclePlateNumber === _ride.vehiclePlateNumber
      );
    });

    if (_sameOfferedVehicle.length) {
      return `Failed:: this vehicle with plate number ${_ride.vehiclePlateNumber} already existed, so we can't add it`;
    }
    this.rides.push(_ride);
    return `Success:: this vehicle with plate number ${_ride.vehiclePlateNumber} started to offer`;
  }

  // we can end the ride by giving the ride information
  end_ride(_ride) {
    const _rideIndex = this.rides.findIndex(
      (ride) => ride.rideId === _ride.rideId
    );
    if (_rideIndex >= 0) {
      this.rides[_rideIndex].status = 0;
      return `Success:: ride with id ${_ride.rideId} ended`;
    }
    return `Failed:: ride with id ${_ride.rideId} not existed with active Status`;
  }

  // find the direct route for the user from origin to destination
  find_direct_route(
    _startOrigin,
    _endDestination,
    _seats,
    most_vacant = false,
    preferredVehicle = null,
    userId
  ) {
    
    let possibleOfferRides = _offerRides.filter((offerRide) => {
        if (
          offerRide?.startOrigin == _startOrigin &&
          offerRide?.endDestination == _endDestination &&
          offerRide?.availableSeat >= _seats && offerRide?.status == 1 && userId != offerRide?.offeredBy
        ) {
         return offerRide;
        }
    });
    if(!possibleOfferRides.length)
      return null;
    let selectedRide: Ride = null;
    if (most_vacant) {
        possibleOfferRides.forEach((offerRide) => {
        if (selectedRide == null || selectedRide?.availableSeat < offerRide?.availableSeat) {
            selectedRide = offerRide;
        }
      });
    } 
    else {
        possibleOfferRides.some((offerRide) => {
            if((`${offerRide?.vehiclePlateNumber}` in this.vehicles) &&  this.vehicles[offerRide?.vehiclePlateNumber]?.vehicleName.toLowerCase() == preferredVehicle.toLowerCase() ) {
                selectedRide =  offerRide;
                return true;
            }
        });
    }
    return selectedRide;
  }

  // increase the count of rides taken and rider offered
  increase_count(userId,offeredBy) {

    this.users.forEach((user) => {
      if (user.userId == userId) {
        user.rideTaken++;
      }
      if(offeredBy && user.userId == offeredBy) {
        user.rideOffered++;
      }
    })

  }

  // select the rides for the user from offered rides
  select_ride(selectRide) {
    
    let { startOrigin, endDestination, seats, most_vacant = false, preferredVehicle = null, userId} = selectRide;  
    console.log("\n==========================  START  ===============================\n")
    console.log("::: ",selectRide)

    let directRouteRide = this.find_direct_route(startOrigin, endDestination,seats, most_vacant, preferredVehicle , userId)
    if(!directRouteRide) {
        console.log("\n::: We found no direct path\n")
        return;
    }
    console.log("Direct Path is ", directRouteRide)
    console.log("\n==========================  END  ===============================\n")

    // increase the count of ride taken and ride offered
    this.increase_count(userId,directRouteRide?.offeredBy)
    return;
  }

  // print user name, rides taken and rides offered count
  print_users() {
    console.log("=================================== My All Users ==================================")
    this.users.forEach((user)=>{
      console.log(user?.name," Ride Taken :  ",user?.rideTaken," , Ride Offered ",user?.rideOffered);
    })
    console.log("=================================== End ==================================")
  }

  // print rides and it's information
  print_ride_stats() {
    console.log("=================================== My Rides ==================================")
    this.rides.forEach((ride) =>{
      console.log(ride);
    })
    console.log("================================== End ========================================")
  }

}

var ridesApp = new RideSharingApp();

_users.forEach((_user) => {
  ridesApp.add_user(_user);
});

_vehicles.forEach((_vehicle) => {
  ridesApp.add_vehicle(_vehicle);
});

_offerRides.forEach((offerRide) => {
  ridesApp.offer_ride(offerRide);
});


_selectRides.forEach(selectRide => {
    ridesApp.select_ride(selectRide);
})

ridesApp.print_ride_stats()

ridesApp.print_users();