
import './index.css'

const Sidebar = () =>{
    return(
        <div>
              <ul id='sidebar'>
                <div className='page'>
                <img src='./Images/Dashboard.png' alt='dashboard' className='sidebar-icons'/>
                <a href='#teacherName'><li><b>Dashboard</b></li></a></div>
                <div className='page'><img src='./Images/course.png' alt='courses' className='sidebar-icon'/>
                <li>Courses</li></div>
                <div className='page'><img src='./Images/student.png' alt='students' className='sidebar-icon'/>
                <li>Students</li></div>
                <div className='page'><img src='./Images/Assignments.png' alt='assignments' className='sidebar-icons'/>
                <li>Assignments</li></div>
            </ul>
        </div>
    )
};

export default Sidebar;