export default function PerformanceChart({ data }) {
  const { title, subtitle, legend, yAxisLabels, xAxisLabels, currentValue } = data;

  return (
    <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
        </div>
        <div className="flex gap-4 p-1.5 bg-slate-50 rounded-lg border border-slate-100">
          {legend.map((item, index) => (
            <span key={index} className={`flex items-center gap-2 text-xs font-semibold px-2 py-1 ${item.active ? 'text-slate-700' : 'text-slate-500'}`}>
              <span className={`size-2 rounded-full ${item.color} ${item.active ? 'shadow-[0_0_8px_rgba(37,99,235,0.5)]' : ''}`}></span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
      
      <div className="relative h-[320px] w-full pt-4">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs font-medium text-slate-400 w-8 py-2">
          {yAxisLabels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
        
        {/* Chart area */}
        <div className="ml-10 h-full relative">
          {/* Grid lines */}
          <div className="absolute w-full h-px border-t border-dashed border-slate-200 top-[0%]"></div>
          <div className="absolute w-full h-px border-t border-dashed border-slate-200 top-[25%]"></div>
          <div className="absolute w-full h-px border-t border-dashed border-slate-200 top-[50%]"></div>
          <div className="absolute w-full h-px border-t border-dashed border-slate-200 top-[75%]"></div>
          <div className="absolute w-full h-px border-t border-dashed border-slate-200 top-[100%]"></div>
          
          {/* SVG Chart */}
          <svg className="absolute inset-0 w-full h-full overflow-visible z-10" preserveAspectRatio="none">
            <defs>
              <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15"></stop>
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            
            {/* District average line (dashed) */}
            <path 
              className="text-slate-300" 
              d="M0,80 C100,90 200,80 300,85 S500,82 600,85 S700,80 800,80" 
              fill="none" 
              stroke="currentColor" 
              strokeDasharray="6 6" 
              strokeWidth="2" 
              vectorEffect="non-scaling-stroke"
            />
            
            {/* Class average area fill */}
            <path 
              d="M0,120 C150,110 250,130 350,80 S550,50 800,30 L800,320 L0,320 Z" 
              fill="url(#areaGradient)" 
              vectorEffect="non-scaling-stroke"
            />
            
            {/* Class average line */}
            <path 
              d="M0,120 C150,110 250,130 350,80 S550,50 800,30" 
              fill="none" 
              filter="drop-shadow(0px 4px 6px rgba(37, 99, 235, 0.2))" 
              stroke="#2563EB" 
              strokeLinecap="round" 
              strokeWidth="3" 
              vectorEffect="non-scaling-stroke"
            />
            
            {/* Data point at 35% */}
            <g className="group/point" transform="translate(35%, 25%)">
              <circle className="fill-white stroke-primary stroke-[3]" cx="0" cy="0" r="6"></circle>
            </g>
            
            {/* Current data point with tooltip */}
            <g className="group/point" style={{ transformBox: 'fill-box', transformOrigin: 'center' }} transform="translate(100%, 9%)">
              <circle className="fill-primary stroke-white stroke-[3] cursor-pointer hover:scale-125 transition-transform duration-300 shadow-lg" cx="0" cy="0" r="7"></circle>
              <foreignObject height="50" width="100" x="-110" y="-15">
                <div className="bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-xl text-center">
                  Current: {currentValue}
                </div>
              </foreignObject>
            </g>
          </svg>
        </div>
        
        {/* X-axis labels */}
        <div className="ml-10 mt-4 flex justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
          {xAxisLabels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
