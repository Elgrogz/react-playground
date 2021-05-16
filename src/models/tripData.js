export default class TripData {
  constructor(isFirstTrip = false) {
    this.id = Date.now().toString();
    this.startDate = null
    this.endDate = null
    this.isFirstTrip = isFirstTrip;

    console.log('created!')
  }
}
