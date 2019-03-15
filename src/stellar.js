export class Age {
  constructor(birthday) {
    this.earth = (((Date.now() - (new Date(birthday).getTime())) / 31557600000).toPrecision(5) * 1);
  }

  toMercury() {
    this.mercury = (this.earth / 0.24)
  }

}
