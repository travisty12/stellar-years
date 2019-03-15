export class Age {
  constructor(birthday) {
    this.earth = (((Date.now() - (new Date(birthday).getTime())) / 31557600000).toPrecision(5) * 1);
    this.rates = [["Mercury",0.24],["Venus",0.62],["Mars",1.88],["Jupiter",11.86]];
  }

  convertAge() {
    let strOut = `You have been alive for:
                  ${this.earth} Earth years
                  `;
    for (let i = 0; i < this.rates.length; i++) {
      let thisPlanet = this.rates[i][0];
      let thisAge = (this.earth / this.rates[i][1]).toPrecision(5) * 1;
      strOut += `${thisAge} ${thisPlanet} years
                `;
    }
    return strOut;
  }

  // timeLeft() {
  //
  // }

  toMercury() {
    return ((this.earth / 0.24)).toPrecision(5) * 1;
  }

  toVenus() {
    return ((this.earth / 0.62)).toPrecision(5) * 1;
  }

  toMars() {
    return ((this.earth / 1.88)).toPrecision(5) * 1;
  }

  toJupiter() {
    return ((this.earth / 11.86)).toPrecision(5) * 1;
  }

  toEarthDeath() {
    if (80 - this.earth > 0) {
      return (80 - this.earth).toPrecision(5) * 1;
    } else {
      const past = (-1 * (80 - this.earth)).toPrecision(5);
      return (`${past} past the expected lifespan!`)
    }
  }

  toMercuryDeath() {
    if (80 - this.earth > 0) {
      return ((80 - this.earth) / 0.24).toPrecision(5) * 1;
    } else {
      const past = ((-1 * (80 - this.earth)) / 0.24).toPrecision(5);
      return (`${past} past the expected lifespan!`)
    }
  }

  toVenusDeath() {
    if (80 - this.earth > 0) {
      return ((80 - this.earth) / 0.62).toPrecision(5) * 1;
    } else {
      const past = ((-1 * (80 - this.earth)) / 0.62).toPrecision(5);
      return (`${past} past the expected lifespan!`)
    }
  }

}
