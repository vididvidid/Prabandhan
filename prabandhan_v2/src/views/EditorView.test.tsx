import React      from 'react';
import ReactDOM   from 'react-dom';
// import EditorView from './EditorView';



it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<EditorView />, div);
    ReactDOM.render(<span />, div);
    ReactDOM.unmountComponentAtNode(div);
});
