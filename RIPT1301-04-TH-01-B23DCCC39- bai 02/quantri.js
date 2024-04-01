var students = [];


function displayStudents() {
    var tableBody = document.getElementById('studentList');
    tableBody.innerHTML = '';

    students.forEach(function(student, index) {
        var row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.address}</td>
            <td>${student.phone}</td>
            <td>${student.email}</td>
            <td>${student.class}</td>
            <td>
                <button onclick="editStudent(${index})">Sửa</button>
                <button onclick="deleteStudent(${index})">Xóa</button>
            </td>
        `;
    });
}

function addStudent(name, age, address, phone, email, classRoom) {
    var student = {
        name: name,
        age: age,
        address: address,
        phone: phone,
        email: email,
        class: classRoom
    };
    students.push(student);
    displayStudents();
}

document.getElementById('addStudentBtn').addEventListener('click', function() {
    document.getElementById('modalTitle').innerText = 'Thêm sinh viên';
    document.getElementById('studentForm').reset(); 
    document.getElementById('studentModal').style.display = 'block';
});


document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var studentId = document.getElementById('studentId').value;
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var classRoom = document.getElementById('class').value;

    if (studentId === '') {
        addStudent(name, age, address, phone, email, classRoom);
    } else {
   
        updateStudent(studentId, name, age, address, phone, email, classRoom);
    }

    document.getElementById('studentModal').style.display = 'none'; 
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('studentModal').style.display = 'none';
});

function editStudent(index) {
    var student = students[index];
    document.getElementById('studentId').value = index;
    document.getElementById('name').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('address').value = student.address;
    document.getElementById('phone').value = student.phone;
    document.getElementById('email').value = student.email;
    document.getElementById('class').value = student.class;

    document.getElementById('modalTitle').innerText = 'Sửa sinh viên';
    document.getElementById('studentModal').style.display = 'block';
}

function deleteStudent(index) {
    if (confirm('Bạn có chắc chắn muốn xóa sinh viên này không?')) {
        students.splice(index, 1);
        displayStudents();
    }
}