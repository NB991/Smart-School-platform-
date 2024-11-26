const form = document.getElementById('teacherForm');
const teacherTable = document.getElementById('teacherTable');


function loadTeachers() {
    const teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    teacherTable.innerHTML = '';

    teachers.forEach((teacher, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${teacher.name}</td>
        <td>${teacher.nationalId}</td>
        <td>${teacher.quota}</td>
        <td>${teacher.realquota}</td>
        <td>${teacher.delegation}</td>
        <td>${teacher.date}</td>
        <td><button onclick="deleteTeacher(${index})">حذف</button></td>
        `;
        teacherTable.appendChild(row);
    });
}


function addTeacher(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const nationalId = document.getElementById('nationalId').value;
    const quota = document.getElementById('quota').value;
    const realquota = document.getElementById('realquota').value;
    const delegation = document.getElementById('delegation').value;
    const date = document.getElementById('date').value;

    const teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    teachers.push({
        name, nationalId, quota, delegation
    });
    localStorage.setItem('teachers', JSON.stringify(teachers));

    form.reset();
    loadTeachers();
}


function deleteTeacher(index) {
    const teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    teachers.splice(index, 1);
    localStorage.setItem('teachers', JSON.stringify(teachers));
    loadTeachers();
}


form.addEventListener('submit', addTeacher);
document.addEventListener('DOMContentLoaded', loadTeachers);
