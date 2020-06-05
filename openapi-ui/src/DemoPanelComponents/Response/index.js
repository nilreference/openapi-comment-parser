import React, { useContext } from 'react';
import Context from 'ApiDemoPanel/useMe';

function Response() {
  const { response, clearResponse } = useContext(Context);

  if (response === undefined) {
    return null;
  }

  return (
    <div className="nick-floating-button">
      <button onClick={() => clearResponse()}>Clear</button>
      <pre
        style={{
          background: '#242526',
        }}
      >
        {response || 'No Response'}
      </pre>
    </div>
  );
}

export default Response;
