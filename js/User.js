class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
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

  set surname(surname) {
    if (typeof surname === 'string' && surname.length > 2) {
      this._surname = surname;
    } else {
      throw new Error('Surname ' + STRING_ERROR);
    }
  }

  get surname() {
    return this._surname;
  }

  getFullName() {
    return this._name + ' ' + this._surname;
  }

  setFullName(fullName) {
    if (typeof fullName === 'string') {
      const nameArray = fullName.split(' ');
      if (nameArray.length === 2){
        this._name = nameArray[0];
        this._sname = nameArray[1];
      } else {
        throw new Error('Full name must contain name and surname');  
      }
    } else {
      throw new Error('Full name ' + STRING_ERROR);
    }
  }
}