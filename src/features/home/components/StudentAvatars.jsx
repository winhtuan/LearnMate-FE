import React from 'react';
import PropTypes from 'prop-types';
import { studentsImages } from '@/features/home/data/homeData';

function StudentAvatars({ count = "+10k", message = "Join 10,000+ students already learning" }) {
  return (
    <div className="mt-10 flex items-center gap-6">
      <div className="flex -space-x-3">
        {studentsImages.map((src, index) => (
          <img 
            key={index} 
            alt="Student" 
            className="size-10 rounded-full border-2 border-white object-cover" 
            src={src} 
          />
        ))}
        <div className="size-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
          {count}
        </div>
      </div>
      <p className="text-sm text-slate-500 font-medium">{message}</p>
    </div>
  );
}

StudentAvatars.propTypes = {
  count: PropTypes.string,
  message: PropTypes.string
};

export default React.memo(StudentAvatars);
