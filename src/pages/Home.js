import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";

function Home() {
    return (
        <div>
             <Jumbotron />
        <div><Navbar /></div>
<div>
            <p>Welcome to your employee directory, where you can see all employees, sort them by category or complete a specific search.
            </p>
        </div>
        <div>
            <ul>
                <li>To see a list of all employees click "See Employees"</li>
                <li>To sort by column simply click on the column name (once for ascending order, twice for descending)</li>
            </ul>
        </div>
        </div>
    );
}

export default Home;