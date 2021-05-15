export default class TripData {
  constructor() {
    this.id = Date.now().toString();
    this.startDate = null
    this.endDate = null

    console.log('created!')
  }
}
