import React from 'react';
import SinglePostContent from '../../Component/SinglePostContent/main';

const Single = () => {
  return (
    <div>
      <div className="single" style={{display: 'flex'}}>
        <SinglePostContent />
        {/* sidebar */}
      </div>
    </div>
  )
};

export default Single;