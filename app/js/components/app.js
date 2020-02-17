import React from 'react';
import '../../styles/main.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="topnav">
                    <a className="active" href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <div className="search-container">
                        <form action="">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit"><i className="fa fa-search" /></button>
                        </form>
                    </div>
                </div>
                <div style={{ paddingLeft: '16px' }}>
                    <h2>Responsive Search Bar</h2>
                    <p>Navigation bar with a search box and a submit button inside of it.</p>
                    <p>Resize the browser window to see the responsive effect.</p>
                </div>
            </div>
        )
    }
}

export default App;