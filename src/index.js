import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Square component
class Square extends React.Component {
    render() {
        return (
            <button className="square"> 
            {this.props.value} 
            </button>
            );
    }
}


// Board component
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
}

// Game component
class Game extends React.Component {
    
}
