class Parking {
  constructor(places, price) {
    this.placesInParking = places;
    this.priceForHour = price;
    this.carInParking = {};
  }

  placeCar(carNumber) {
    if (this.checkFreeParkingPlaces > 0) {
      this.carInParking[carNumber] = new Date().getTime();
      return "OK";
    } else {
      return "Ошибка";
    }
  }

  getCar(carNumber) {
    let timeFromPlace = new newDate(
      new Date().getTime() - this.carInParking[carNumber]
    );
    let price = timeFromPlace.getHours() * 100;
    delete this.carInParking[carNumber];
    return price;
  }

  checkFreeParkingPlaces() {
    return this.placesInParking - this.carInParking.keys().length;
  }
}

let exampleParking = new Parking(10, 100);
