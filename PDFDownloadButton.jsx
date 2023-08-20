// PDFDownloadButton.js
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

const PDFDownloadButton = ({ data }) => (
  <PDFDownloadLink document={<PDFDocument data={data} />} fileName="document.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : 'Download as PDF'
    }
  </PDFDownloadLink>
);

export default PDFDownloadButton;
