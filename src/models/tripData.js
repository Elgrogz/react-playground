import { startOfDay } from 'date-fns'

export default class TripData {
  constructor() {
    this.id = startOfDay(Date.now());
    this.startDate = null
    this.endDate = null
  }
}
