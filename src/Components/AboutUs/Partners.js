import React from 'react';

function Partners(props) {

    const detailStyle = {
        width: "100%",
        float: "right"
    }

    const spacingStyle = {
        paddingRight: "0"
    }

    let modeColor = {
        backgroundColor: (props.mode === 'light') ? 'white' : '#272630',
        color: (props.mode === 'light') ? 'black' : 'white'
    }

  return (
    <>
        <div className="row" style={detailStyle}>
            <div className="col-6" style={spacingStyle}>
                <div className="card" style={modeColor}>
                <div className="card-body">
                    <h4 className="card-title">Oxford University</h4>
                    <p className="card-text">Oxford University provides world-class research and education to benefit society on a local, regional, national and global scale.</p>
                    <a href="https://www.ox.ac.uk/" target='_blank' className="btn btn-primary">Visit Site</a>
                </div>
                </div>
            </div>
            <div className="col-6">
                <div className="card" style={modeColor}>
                <div className="card-body">
                    <h5 className="card-title">Harvard University</h5>
                    <p className="card-text">Harvard University is devoted to excellence in teaching, learning, and develop leaders who make a difference globally.</p>
                    <a href="https://www.harvard.edu/" target='_blank' className="btn btn-primary">Visit Site</a>
                </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default  Partners;
