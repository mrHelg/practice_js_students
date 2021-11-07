class Group {
  constructor(name, students) {
    this.name = name;
    this.students = students;
  }

  set name(name) {
    if (typeof name === 'string' && name.length > 2) {
      this._name = name;
    } else {
      throw new Error('Name ' + STRING_ERROR);
    }
  }

  get name() {
    return this._name;
  }

  set students(students) {
    if (
      students instanceof Array &&
      students.reduce((result, item) => result && item instanceof Student, true)
    ) {
      this._students = students;
    } else {
      throw new Error('Students must be an array of Student');
    }
  }

  get students() {
    return this._students;
  }

  showStudents() {
    if (this._students.length === 0) {
      console.log('The group has no students');
    } else {
      this._students.forEach((student) => {
        console.log(`${student.surname} ${student.name[0]}.`);
      });
    }
  }
}
