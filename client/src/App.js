import React from 'react';
import FileUpload from './components/FileUpload';

const App = () => (
  <div className="container mt-4">
    <h4 className="display-4 text-center mb-4">
      <i className="fab fa-react" /> React File Upload
    </h4>
    <h3>Text</h3>
    <FileUpload />
  </div>
);

export default App;
