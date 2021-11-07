'use strict';

const st1 = new Student('Kim', 'Lee', 2021);
const st2 = new Student('Elon', 'Musk', 2017);
const st3 = new Student('Olga', 'Polyakova', 2019);

const group = new Group('My group', [st1, st2, st3]);
group.showStudents();