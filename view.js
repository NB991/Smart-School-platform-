function loadTeachers() {
    const teacherTable = document.getElementById('teacherTable');
    const teachers = JSON.parse(localStorage.getItem('teachers')) || [];
    teacherTable.innerHTML = '';

    teachers.forEach((teacher) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${teacher.name}</td>
        <td>${teacher.nationalId}</td>
        <td>${teacher.quota}</td>
        <td>${teacher.realquota}</td>
        <td>${teacher.delegation}</td>
        <td>${teacher.date}</td>
        `;
        teacherTable.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', loadTeachers);
