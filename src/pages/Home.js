import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";

function Home() {
    return (
        <div>
             <Jumbotron />
        <div><Navbar /></div>
<div style={{margin: "20px"}}>
            <p>Welcome to your employee directory, where you can see all employees, sort them by category or search by role.
            </p>
        {/* </div>
        <div> */}
            <ul>
                <li>To see a list of all employees click "Employees"</li>
                <li>To sort by column simply click on the column name (once for ascending order, twice for descending)</li>
                <li>To search employees by role, simply type the role you're looking for into the search bar </li>
            </ul>
        </div>
        </div>
    );
}

export default Home;