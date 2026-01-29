export default function BookingSidebar() {
    return (
        <div className="sticky top-24 space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                {/* Video/Preview Placeholder */}
                <div className="relative h-48 bg-slate-200 w-full group cursor-pointer overflow-hidden">
                    <img
                        alt="Teaching session preview"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCmrzFBEA54NTbZ90xcpCK8k9-CfqunBuZoLixqUHJmm4DbXQ3NeQ7n6mwiYS84S36t7_Ouq0iKDiTliABlbfiCyt9-3TQP0CVPwCYg9S_JXf0tosgXeWV1DFXEeFkCLvcn0q-GclDHSkvxc5vPGaCoSqbPAwZiA9G0BxAFietyHq1Oun7Z0bMKrjyHi628EiJzPxoHjsckhaJhXH_X2gWBzf3WiDxgHJSm26xvyKr2qSTrEHtaCFRARB9jSP4zCV2yvysItcXnAk"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                        <div className="size-12 rounded-full bg-white/90 backdrop-blur text-primary flex items-center justify-center shadow-lg">
                            <span className="material-symbols-outlined filled text-[28px] translate-x-0.5">play_arrow</span>
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <p className="text-sm text-slate-500">Hourly Rate</p>
                            <p className="text-3xl font-bold text-slate-900">$45<span className="text-base font-normal text-slate-500">/hr</span></p>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-1 text-green-600 text-sm font-bold">
                                <span className="material-symbols-outlined text-[16px]">bolt</span>
                                Instant Book
                            </div>
                        </div>
                    </div>
                    {/* Availability Preview */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold text-slate-900 text-sm">Available this week</h4>
                            <button className="text-xs text-primary font-medium hover:underline">Full Calendar</button>
                        </div>
                        {/* Day Tabs */}
                        <div className="flex justify-between gap-1 mb-3 text-center">
                            <div className="flex-1 rounded bg-primary text-white py-1 text-xs font-bold cursor-pointer">
                                Mon<br />13
                            </div>
                            <div className="flex-1 rounded bg-slate-100 text-slate-500 py-1 text-xs font-medium cursor-pointer hover:bg-slate-200">
                                Tue<br />14
                            </div>
                            <div className="flex-1 rounded bg-slate-100 text-slate-500 py-1 text-xs font-medium cursor-pointer hover:bg-slate-200">
                                Wed<br />15
                            </div>
                            <div className="flex-1 rounded bg-slate-100 text-slate-500 py-1 text-xs font-medium cursor-pointer hover:bg-slate-200">
                                Thu<br />16
                            </div>
                        </div>
                        {/* Time Slots */}
                        <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                            <button className="w-full py-2 text-sm border border-primary bg-primary/5 text-primary rounded hover:bg-primary hover:text-white transition-colors">4:00 PM</button>
                            <button className="w-full py-2 text-sm border border-slate-200 text-slate-600 rounded hover:border-primary hover:text-primary transition-colors">5:00 PM</button>
                            <button className="w-full py-2 text-sm border border-slate-200 text-slate-600 rounded hover:border-primary hover:text-primary transition-colors">6:30 PM</button>
                            <button className="w-full py-2 text-sm border border-slate-200 text-slate-600 rounded hover:border-primary hover:text-primary transition-colors">7:00 PM</button>
                        </div>
                    </div>
                    {/* CTAs */}
                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-600 transition-transform active:scale-[0.98]">
                            <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
                            Book a Lesson
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                            <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
                            Send Message
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-xs text-slate-400">Usually responds within 2 hours</p>
                    </div>
                </div>
            </div>

            {/* Similar Tutors */}
            <div className="hidden lg:block">
                <h4 className="font-bold text-slate-900 text-sm mb-4 px-1">Similar Tutors</h4>
                <div className="flex flex-col gap-3">
                    <div className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-sm transition-all cursor-pointer">
                        <img
                            alt="Tutor"
                            className="size-10 rounded-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfqOkpN-nvLHbEEWswrhGBB1vjJWRZ7BkBgY9bMEFEkA294YXVO0kH0adixTaSe75fL9HU8l8vXWi-k1GmFU6FJQAKqgX9_h_9MMrWfmbAuNEZhCikDIYxTJPiomwJUTshksHpsffDW8WS90kWqrEPbP7uJ9LM0Jgxe2jaiIaCD2vyEpB2L2nnlrDW_S8S4ylSH-nDQUvYI2ZkyiPxbwNMXXjae98oq_2QjABpUK7Q-IK73zAZEYRB53tg_LMb-yz0GSAcUyIphA4"
                        />
                        <div>
                            <p className="text-sm font-bold text-slate-900 group-hover:text-primary">David Kim</p>
                            <p className="text-xs text-slate-500">Calculus • $40/hr</p>
                        </div>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-sm transition-all cursor-pointer">
                        <img
                            alt="Tutor"
                            className="size-10 rounded-full object-cover"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZHHjP8uEpukspC7eWMI-zWNlzPSb2f_fjBEJIqEfp-52s0BOeaBTqE9Sa9OhOlByqNl2z7GZyy_40-UlQujtFWrGBBUKoKmkkdN3JlJlVS5jY8Ya9g8Lz4oY1-u-iqOT7hKL3vxfc9rO_PlLyY2-R4mv6Eg8bNAmFoJDx-R8S0QQXONopH_ilFkYtS-NrzZ-xHEPfjvP8njkLZzBuCYbZvIFcJ05g-xiw0TOpBiz_vEG4liLDZ445HEl1ZCaCsQv3HIl9Ocsf9Yo"
                        />
                        <div>
                            <p className="text-sm font-bold text-slate-900 group-hover:text-primary">Maria Garcia</p>
                            <p className="text-xs text-slate-500">Physics • $50/hr</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
