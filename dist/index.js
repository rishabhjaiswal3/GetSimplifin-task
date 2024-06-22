"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("./testCases/input");
class RideSharingApp {
    constructor() {
        this.users = [];
        this.vehicles = {};
        this.rides = [];
        // get_rides() {
        //   return this.rides;
        // }
        // get_users() {
        //     return this.users;
        // }
        // get_vehicles() {
        //     return this.vehicles;
        // }
    }
    add_user(_user) {
        const isUserExisted = this.users.filter((user) => (user === null || user === void 0 ? void 0 : user.userId) == (_user === null || _user === void 0 ? void 0 : _user.userId));
        if (isUserExisted.length) {
            return `Failed:: user already existed with same userId ${_user === null || _user === void 0 ? void 0 : _user.userId}`;
        }
        this.users.push(_user);
        return `Success:: user created with userId ${_user === null || _user === void 0 ? void 0 : _user.userId}`;
    }
    add_vehicle(_vehicle) {
        let plateNumber = _vehicle === null || _vehicle === void 0 ? void 0 : _vehicle.plateNumber;
        if (!plateNumber) {
            return `Failed:: Invalid Plate Number`;
        }
        if (`${plateNumber}` in this.vehicles) {
            return `Failed:: Vehicle is already existed with plateNumber ${plateNumber}`;
        }
        this.vehicles[plateNumber] = _vehicle;
        return `Success:: vehicle added with plate number ${plateNumber}`;
    }
    offer_ride(_ride) {
        const _sameOfferedVehicle = this.rides.filter((ride) => {
            return (ride.status == 1 && ride.vehiclePlateNumber === _ride.vehiclePlateNumber);
        });
        if (_sameOfferedVehicle.length) {
            return `Failed:: this vehicle with plate number ${_ride.vehiclePlateNumber} already existed, so we can't add it`;
        }
        this.rides.push(_ride);
        return `Success:: this vehicle with plate number ${_ride.vehiclePlateNumber} started to offer`;
    }
    end_ride(_ride) {
        const _rideIndex = this.rides.findIndex((ride) => ride.rideId === _ride.rideId);
        if (_rideIndex >= 0) {
            this.rides[_rideIndex].status = 0;
            return `Success:: ride with id ${_ride.rideId} ended`;
        }
        return `Failed:: ride with id ${_ride.rideId} not existed with active Status`;
    }
    find_indirect_route() { }
    find_direct_route(_startOrigin, _endDestination, _seats, most_vacant = false, preferredVehicle = null) {
        let possibleOfferRides = input_1._offerRides.filter((offerRide) => {
            if ((offerRide === null || offerRide === void 0 ? void 0 : offerRide.startOrigin) == _startOrigin &&
                (offerRide === null || offerRide === void 0 ? void 0 : offerRide.endDestination) == _endDestination &&
                (offerRide === null || offerRide === void 0 ? void 0 : offerRide.availableSeat) >= _seats && (offerRide === null || offerRide === void 0 ? void 0 : offerRide.status) == 1) {
                return offerRide;
            }
        });
        if (!possibleOfferRides.length)
            return null;
        let selectedRide = null;
        if (most_vacant) {
            possibleOfferRides.forEach((offerRide) => {
                if (selectedRide == null || (selectedRide === null || selectedRide === void 0 ? void 0 : selectedRide.availableSeat) < (offerRide === null || offerRide === void 0 ? void 0 : offerRide.availableSeat)) {
                    selectedRide = offerRide;
                }
            });
        }
        else {
            possibleOfferRides.some((offerRide) => {
                var _a;
                if ((`${offerRide === null || offerRide === void 0 ? void 0 : offerRide.vehiclePlateNumber}` in this.vehicles) && ((_a = this.vehicles[offerRide === null || offerRide === void 0 ? void 0 : offerRide.vehiclePlateNumber]) === null || _a === void 0 ? void 0 : _a.vehicleName.toLowerCase()) == preferredVehicle.toLowerCase()) {
                    selectedRide = offerRide;
                    return true;
                }
            });
        }
        return selectedRide;
    }
    select_ride(selectRide) {
        console.log("\n==========================  START  ===============================\n");
        console.log("::: ", selectRide);
        let { startOrigin, endDestination, seats, most_vacant = false, preferredVehicle = null } = selectRide;
        let directRouteRide = this.find_direct_route(startOrigin, endDestination, seats, most_vacant, preferredVehicle);
        if (!directRouteRide) {
            console.log("\n::: We Found no direct Route\n");
            return;
        }
        console.log("Direct Route is ", directRouteRide);
        console.log("\n==========================  END  ===============================\n");
        return;
    }
}
var ridesApp = new RideSharingApp();
input_1._users.forEach((_user) => {
    ridesApp.add_user(_user);
});
input_1._vehicles.forEach((_vehicle) => {
    ridesApp.add_vehicle(_vehicle);
});
input_1._offerRides.forEach((offerRide) => {
    ridesApp.offer_ride(offerRide);
});
input_1._selectRides.forEach(selectRide => {
    ridesApp.select_ride(selectRide);
});
//# sourceMappingURL=index.js.map