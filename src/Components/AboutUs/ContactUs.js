import React from 'react';

function ContactUs(props) {

    const detailStyle = {
        width: "100%",
        float: "right"
    }

    let modeColor = {
        backgroundColor: (props.mode === 'light') ? 'white' : '#6c757d',
        color: (props.mode === 'light') ? 'black' : 'white'
    }

    let modeHeadColor = {
        backgroundColor: (props.mode === 'light') ? 'white' : '#272630',
        color: (props.mode === 'light') ? 'black' : 'white'
    }

  return (
    <>
    <div className='card' style={modeHeadColor}>
        <div className="card-header">
            Reach Out To Us On --
        </div>
        <ul className="list-group" style={detailStyle}>
            <li className="list-group-item d-flex justify-content-between align-items-center" style={modeColor}>
                Phone :- +91 9638520741
                {/* <span className="badge bg-primary rounded-pill">^</span> */}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center" style={modeColor}>
                Email :- textutils@demo.com
                {/* <span className="badge bg-primary rounded-pill">^</span> */}
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center" style={modeColor}>
                Address :- Somewhere on planet Earth
                {/* <span className="badge bg-primary rounded-pill">^</span> */}
            </li>
        </ul>
    </div>
    </>
  );
}

export default ContactUs;
