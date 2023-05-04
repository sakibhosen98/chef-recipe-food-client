import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DownloadPdf = () => {
  return (
    <div>
        <h2>This is Download PDF</h2>
        <Link ><Button>Download PDF</Button></Link>
    </div>
  );
};

export default DownloadPdf;