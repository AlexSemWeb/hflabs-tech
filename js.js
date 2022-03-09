class Parking {
  constructor(places, price) {
    this.placesInParking = places;
    this.priceForHour = price;
    this.carInParking = {};
  }

  placeCar(carNumber) {
    if (this.checkFreeParkingPlaces() > 0) {
      this.carInParking[carNumber] = new Date().getTime();
      return "OK";
    } else {
      return "Ошибка";
    }
  }

  getCar(carNumber) {
    let timeFromPlace = new Date(
      new Date().getTime() / 36000000 - this.carInParking[carNumber] / 36000000
    ).getTime();
    let price = timeFromPlace.toFixed(2) * 100;
    delete this.carInParking[carNumber];
    return price;
  }

  checkFreeParkingPlaces() {
    return this.placesInParking - Object.keys(this.carInParking).length;
  }
}

let exampleParking = new Parking(10, 100);
