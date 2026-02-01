import React from 'react';
import PropTypes from 'prop-types';

function TutorCard({ name, subject, tags, price, rating, image }) {
  return (
    <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
      <div className="relative h-48 overflow-hidden">
        <img 
          alt={`Tutor ${name}`} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          src={image} 
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
          <span className="material-symbols-outlined text-yellow-500 text-sm fill-current">star</span>
          <span className="text-xs font-bold text-slate-900">{rating}</span>
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-bold text-slate-900 mb-1">{name}</h4>
        <p className="text-xs text-slate-500 mb-4">{subject}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-slate-50 text-[10px] font-bold text-slate-600 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-slate-900">
            ${price}
            <span className="text-slate-400 font-normal">/hr</span>
          </p>
          <button className="text-primary text-xs font-bold hover:text-blue-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

TutorCard.propTypes = {
  name: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default React.memo(TutorCard);
