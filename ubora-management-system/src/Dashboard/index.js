import './index.css'
import Sidebar from '../Sidebar';
const Dashboard = () =>{
    return(
        <div>

            <div id='logo-navbar'>
            <img src="./Images/logo.png" alt="logo" id="logo"></img>
            <div id='navbar'>
            <div>
            <input type="text" name="search" id="searchBar"></input>
            <i class="fa fa-search"></i>
            </div>

            <div>
            <img src="./Images/notification.png" alt="notify" className="icons"/>
            <img src="./Images/profile.png" alt="profile" className="icons"/>
            <label id='user'>Grace Daniel</label></div>
            </div>
            </div>
            <hr/>

            <div id='dashboard'>

                <Sidebar/>
                
            <div>
                 <p id='teacherName'>Hello Grace,</p>
                 <label className='student-month'>Kristin</label>
                 <img src='./Images/dropDown.png' alt='DropDown' id='student-dropDown'/>
                 <label className='student-month'>July</label>
                 <img src='./Images/dropDown.png' alt='DropDown' id='month-dropDown'/>
                 <div><img src='./Images/barChart.png' alt='bar Chart' id='bar-chart'/></div>
            </div>

            <div id='student-perfomance'>
                <h1 id='pieChart-heading'>Students Perfomance in Courses</h1>
                <img src='./Images/pieChart.png' alt='Pie Chart'/>
                <div id='colors'>
                <label className='practicalCategories'>Modelling</label>
                <div id='yellow' className='color'></div>
                <label className='practicalCategories'>Cooking</label>
                <div id='purple' className='color'></div>
                <label className='practicalCategories'>Knitting</label>
                <div id='green' className='color'></div></div>
            </div>

            </div>

        </div>
    )
};

export default Dashboard;