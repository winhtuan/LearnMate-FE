import React, { useEffect, useState } from 'react';

export default function RateTeacherModal({ isOpen, onClose, tutor }) {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [selectedTags, setSelectedTags] = useState([]);
    const [reviewText, setReviewText] = useState('');

    // Reset state when modal opens/closes or tutor changes
    useEffect(() => {
        if (!isOpen) {
            setRating(0);
            setHoverRating(0);
            setSelectedTags([]);
            setReviewText('');
        }
    }, [isOpen, tutor]);

    if (!isOpen || !tutor) return null;

    const tags = [
        "Friendly",
        "Clear explanation",
        "Good materials",
        "Punctual",
        "Fun atmosphere"
    ];

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl shadow-slate-900/20 transform transition-all flex flex-col max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                {/* Modal Header */}
                <div className="flex flex-col items-center pt-8 px-8 pb-4 text-center">
                    <div className="relative mb-4">
                        <div
                            className="size-20 rounded-full shadow-lg ring-4 ring-white bg-center bg-cover"
                            style={{ backgroundImage: `url('${tutor.avatar}')` }}
                            role="img"
                            aria-label={`Tutor ${tutor.name}`}
                        ></div>
                        <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1 border-2 border-white shadow-sm">
                            <span className="material-symbols-outlined text-sm font-bold block">school</span>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">How was your lesson?</h2>
                    <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
                        Rate your session with <span className="font-bold text-slate-900">{tutor.name}</span>. Your feedback helps the community learn better.
                    </p>
                </div>

                {/* Rating Section */}
                <div className="px-8 pb-6 flex flex-col items-center gap-6">
                    {/* Stars */}
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                className="group transition-transform active:scale-90 focus:outline-none"
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => setRating(star)}
                            >
                                <span className={`material-symbols-outlined text-4xl transition-colors ${star <= (hoverRating || rating)
                                    ? 'filled text-primary'
                                    : 'text-slate-300 hover:text-primary'
                                    }`}>
                                    star
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Quick Select Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {tags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${selectedTags.includes(tag)
                                    ? 'border-primary/30 bg-primary/10 text-primary'
                                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                                    }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Review Text Area */}
                    <div className="w-full">
                        <label className="sr-only" htmlFor="review">Review</label>
                        <textarea
                            className="w-full resize-none rounded-xl bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all p-4 text-sm focus:outline-none"
                            id="review"
                            placeholder="Write a private note to the tutor or a public review..."
                            rows="4"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-between px-8 py-6 border-t border-slate-100 bg-slate-50/50">
                    <button
                        onClick={onClose}
                        className="text-slate-500 text-sm font-bold hover:text-slate-800 px-4 py-2 rounded-lg transition-colors"
                    >
                        Skip
                    </button>
                    <button
                        onClick={() => {
                            // Handle submit logic here
                            console.log({ rating, selectedTags, reviewText });
                            onClose();
                        }}
                        className="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-8 py-3 rounded-xl shadow-lg shadow-primary/30 transition-all transform active:scale-95"
                    >
                        Submit Review
                    </button>
                </div>

                {/* Close Button (Top Right) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
        </div>
    );
}
