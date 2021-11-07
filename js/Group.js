class Group {
  constructor(name, students = []) {
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
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new Error('Studens must be an array');
    }
  }

  get students() {
    return this._students;
  }

  showStudents() {
    this._students.forEach((student) => {
      console.log(`${student.surname} ${student.name[0]}.`);
    });
  }
}
