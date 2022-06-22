//Course Class
class Course {
    constructor(title, instructor, image, courseId) {
        this.courseId = Math.floor(Math.random() * 10000);
        this.title = title;
        this.instructor = instructor;
        this.image = image;
    }
}
//UI Class
class UI {
    addCourseToList(course) {
        const list = document.getElementById('course-list');
        var html = `
            <tr>
                <td><img class='kücük' src='/ES6 Class Demo/img/${course.image}'></td>
                <td>${course.title}</td>
                <td>${course.instructor}</td>
                <td><a href="#" data-id="${course.courseId}" class="btn btn-danger delete">Sil</td>
            </tr>
            
        `;

        list.innerHTML += html;
    }

    clearControls() {
        const title = document.getElementById('title').value = "";
        const instructor = document.getElementById('instructor').value = "";
        const image = document.getElementById('image').value = "";
    }

    deleteCourse(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove();
            return true;
        }
    }

    showAlert(message, type) {
        var alert = `
        <div class="alert alert-${type}" role="alert"> 
            ${message}
        </div>
    `;

        const row = document.querySelector('.row');
        //beforeBegin, afterBegin, beforeEnd, afterEnd **Parametreler
        row.insertAdjacentHTML('beforeBegin', alert); //row elementinden önce alert html etiketini ekler.

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 5000);
    }

    saveToLocalStorage(object) {
        localStorage.setItem('course-list')
    }
}
//Storage Class
class Storage {
    static getCourses() {
        let courses;

        if (localStorage.getItem('courses') === null) {
            courses = [];
        } else {
            courses = JSON.parse(localStorage.getItem('courses'));
        }
        return courses;
    }

    static displayCourses() {
        const courses = Storage.getCourses(); //LS den gelen data

        courses.forEach(course => {   //Gelen datayı tabloya ekledik.
            const ui = new UI();
            ui.addCourseToList(course);
        })
    }

    static addCourse(course) {
        const courses = Storage.getCourses();
        courses.push(course);
        localStorage.setItem('courses', JSON.stringify(courses));
    }

    static deleteCourse(element) {
        if (element.classList.contains('delete')) {
            const id = element.getAttribute('data-id');

            const courses = Storage.getCourses(); //LS deb course objelerini çağırdık.

            courses.forEach((course, index) => {
                console.log(course);
                console.log(index);
                if (course.courseId == id) {
                    courses.splice(index, 1);
                }
            });
            localStorage.setItem('courses', JSON.stringify(courses));
        }
    }
}

UI.prototype.showAlert = function (message, type) {
    var alert = `
        <div class="alert alert-${type}" role="alert"> 
            ${message}
        </div>
    `;

    const row = document.querySelector('.row');
    //beforeBegin, afterBegin, beforeEnd, afterEnd **Parametreler
    row.insertAdjacentHTML('beforeBegin', alert); //row elementinden önce alert html etiketini ekler.

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
};

document.addEventListener('DOMContentLoaded', Storage.displayCourses); //DOM objeleri yüklenirken lsden gelen courselar display edilecek.

document.getElementById("new-course").addEventListener("submit", function (e) {
    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //Course sınıfından obje türetme
    const course = new Course(title, instructor, image);

    //Creating UI
    const ui = new UI();

    if (title === '' || instructor === '' || image === '') {
        ui.showAlert('Please full complete the form', 'danger');
    } else {

        //add course to list
        ui.addCourseToList(course);
        //Add Courses to LS
        Storage.addCourse(course); //Local Storage a course u ekledik.

        //clear controls
        ui.clearControls();

        ui.showAlert('Form submit success', 'success');
    }
    e.preventDefault();
})

document.getElementById('course-list').addEventListener('click', function (e) {
    const ui = new UI();
    //Delete Course
    
    //Delete course from LS
    if(ui.deleteCourse(e.target)){
        Storage.deleteCourse(e.target);
        ui.showAlert('Course has been deleted', 'warning');
    }
})