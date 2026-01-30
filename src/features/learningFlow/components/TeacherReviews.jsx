export default function TeacherReviews() {
    const reviews = [
        {
            id: 1,
            initials: "JD",
            name: "Jason D.",
            time: "2 days ago",
            rating: 5,
            text: "Sarah is an absolute lifesaver! I was failing my Calculus class, but after just 5 sessions, I aced my midterm. She explains things so clearly.",
            avatarColor: "bg-orange-100 text-orange-600"
        },
        {
            id: 2,
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJveisnCzqFjJfN9UcdCUAE1Qbd_WYZl7QhAG_qJktuQVMiUUe8wEuyKHdK-KFT72-MdyrVdRZzxE7ePe2m_Ve-dbXAwNXXN2yfonXxkkbLtEo1VlSRiJxoP1Y3YHUQbW7zPnW7HBD0xOLGpdhrjBHEyfBmvgL9-VEEwSAKRcfpxmXc_N6J9DOgsXXJOGELPOegsmvfC-TWPiK1SKWh0koLHzJsguTbakRo10tEFilEStUX3Vnt5t9mqi2iGidRNrPAdd00JAqVMQ",
            name: "Michael Chen",
            time: "1 week ago",
            rating: 4,
            text: "Great tutor, very knowledgeable. Sometimes the scheduling is a bit tight because she is so popular, but totally worth the wait."
        },
        {
            id: 3,
            initials: "EM",
            name: "Emily M.",
            time: "3 weeks ago",
            rating: 5,
            text: "She helped me prepare for my SATs and my score went up by 150 points. Highly recommend for anyone looking for serious prep.",
            avatarColor: "bg-purple-100 text-purple-600"
        }
    ];

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900">Student Reviews (120)</h3>
                <div className="flex items-center gap-2">
                    <select className="form-select block w-full rounded-lg border-0 bg-slate-100 py-1.5 pl-3 pr-10 text-sm font-medium text-slate-700 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
                        <option>Most Recent</option>
                        <option>Highest Rated</option>
                        <option>Lowest Rated</option>
                    </select>
                </div>
            </div>
            <div className="space-y-6">
                {reviews.map((review, index) => (
                    <div key={review.id}>
                        {index > 0 && <div className="border-t border-slate-100 my-6"></div>}
                        <div className="flex gap-4">
                            <div className="shrink-0">
                                {review.avatar ? (
                                    <img alt="Student Avatar" className="size-10 rounded-full object-cover" src={review.avatar} />
                                ) : (
                                    <div className={`size-10 rounded-full flex items-center justify-center font-bold text-sm ${review.avatarColor}`}>
                                        {review.initials}
                                    </div>
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <p className="text-sm font-bold text-slate-900">{review.name}</p>
                                    <p className="text-xs text-slate-500">{review.time}</p>
                                </div>
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`material-symbols-outlined text-[16px] filled ${i < review.rating ? "text-yellow-400" : "text-slate-200"}`}>
                                            star
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm text-slate-600">{review.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full mt-6 py-2.5 text-sm font-semibold text-primary hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors border border-dashed border-primary/30">
                View all 120 reviews
            </button>
        </div>
    );
}
