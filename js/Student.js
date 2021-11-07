class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  set year(year) {
    const currentYear = new Date().getFullYear();
    const currentCourse = currentYear - year + 1;
    if (currentCourse >= 1 && currentCourse <= MAX_COURSE) {
      this._year = year;
    } else {
      throw new Error(
        `Wrong year, must be between ${
          currentYear - MAX_COURSE + 1
        } and ${currentYear}`
      );
    }
  }

  get year() {
    return this._year;
  }

  getCourse() {
    return new Date().getFullYear() - this._year + 1;
  }
}