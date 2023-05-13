import React, { useState } from 'react'

function API() {
    const [dist, setdist] = useState('');
    const [state, setstate] = useState('');
    
  return (
    <>

    <div>API</div>

    <label> Enter dist</label>
    <input type="text" name="dist"  />
    
    <label> Enter taluka</label>
    <input type="text" name="taluka"  />
    </>
  )
}

export default API