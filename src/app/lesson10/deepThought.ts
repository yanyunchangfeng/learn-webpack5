import React from 'react';
console.log('REAct',React)
self.onmessage = ({ data: { question } }) => {
    self.postMessage({
      answer: 42,
      reactVersion:React.version
    });
  };