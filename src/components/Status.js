import React from 'react'
import "../assets/Status.css"

function Status() {
  return (
    <div id='status'>
        <div id='information'>
            <div id='part1'>
                <p>Status:  Not started</p>
                <p>Team: At least 4 member</p>
                <p>Due date:dd/mm/yy </p> 
                <span></span>
                <p>Salary: $$$</p>            
            </div>

            {/* <div id='part2'>
                <p> Not started</p>
                <p>At least 4 member</p>
                <p>dd/mm/yy</p>
                <span></span>
                <p>$$$</p>
            </div> */}
        </div>

        <div>
            <button>Apply now</button>
            <span>---------or----------</span>
            <button>Find Teammates</button>
        </div>

    </div>
  )
}

export default Status