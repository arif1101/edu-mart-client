import React from 'react';
import { GraduationCap, DollarSign, Users, FileText, Book, Star, Clock, Activity } from 'lucide-react';

// Stat Card Component
type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
};

const StatCard = ({ title, value, icon: Icon, iconColor }: StatCardProps) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm">
    <div className="flex items-start justify-between mb-3">
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <Icon className={`w-5 h-5 ${iconColor}`} />
    </div>
    <h3 className="text-4xl font-bold text-gray-900">{value}</h3>
  </div>
);

// Simple Line Chart Component
const StudentEnrollmentChart = () => {
  const data = [
    { month: '2025-Mar', enrolled: 0, signup: 0 },
    { month: '2025-Apr', enrolled: 0, signup: 0 },
    { month: '2025-May', enrolled: 0, signup: 0 },
    { month: '2025-Jun', enrolled: 0, signup: 0 },
    { month: '2025-Jul', enrolled: 0, signup: 0 },
    { month: '2025-Aug', enrolled: 10, signup: 5 },
    { month: '2025-Sep', enrolled: 100, signup: 100 },
  ];

  const maxValue = 100;
  const height = 300;
  const width = 100;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Student Enrollment Trend</h2>
      <div className="relative" style={{ height: `${height}px` }}>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400">
          <span>1</span>
          <span>0.75</span>
          <span>0.5</span>
          <span>0.25</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 mr-4 h-full relative">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="border-t border-gray-200 border-dashed"></div>
            ))}
          </div>

          {/* SVG for lines */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            {/* Enrolled line */}
            <polyline
              points={data.map((d, i) => {
                const x = (i / (data.length - 1)) * 100;
                const y = 100 - (d.enrolled / maxValue) * 100;
                return `${x}%,${y}%`;
              }).join(' ')}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            {/* Signup line */}
            <polyline
              points={data.map((d, i) => {
                const x = (i / (data.length - 1)) * 100;
                const y = 100 - (d.signup / maxValue) * 100;
                return `${x}%,${y}%`;
              }).join(' ')}
              fill="none"
              stroke="#ec4899"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            {/* Dots for enrolled */}
            {data.map((d, i) => {
              const x = (i / (data.length - 1)) * 100;
              const y = 100 - (d.enrolled / maxValue) * 100;
              return <circle key={`e-${i}`} cx={`${x}%`} cy={`${y}%`} r="4" fill="#8b5cf6" />;
            })}
            {/* Dots for signup */}
            {data.map((d, i) => {
              const x = (i / (data.length - 1)) * 100;
              const y = 100 - (d.signup / maxValue) * 100;
              return <circle key={`s-${i}`} cx={`${x}%`} cy={`${y}%`} r="4" fill="#ec4899" />;
            })}
          </svg>

          {/* X-axis labels */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-400">
            {data.map((d, i) => (
              <span key={i} className="text-center">{d.month}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
          <span className="text-sm text-gray-600">enrolled</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-pink-500"></div>
          <span className="text-sm text-gray-600">signup</span>
        </div>
      </div>
    </div>
  );
};

// Simple Bar Chart Component
const CoursePopularityChart = () => {
  const data = [
    { name: 'Advanced JavaScript Programming', value: 35 }
  ];

  const maxValue = 36;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Course Popularity</h2>
      <div className="relative h-80">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-16 flex flex-col justify-between text-xs text-gray-400">
          <span>36</span>
          <span>27</span>
          <span>18</span>
          <span>9</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full flex items-end justify-center pb-16">
          {/* Grid lines */}
          <div className="absolute left-8 right-0 top-0 bottom-16 flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="border-t border-gray-200 border-dashed"></div>
            ))}
          </div>

          {/* Bar */}
          <div className="relative w-full max-w-md">
            <div 
              className="bg-emerald-500 rounded-t-lg mx-auto transition-all duration-500"
              style={{ 
                height: `${(data[0].value / maxValue) * 100}%`,
                width: '60%'
              }}
            ></div>
            <div className="text-center mt-4 text-sm text-gray-600">
              Advanced JavaScript Programming
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="w-3 h-3 bg-emerald-500"></div>
        <span className="text-sm text-gray-600">total</span>
      </div>
    </div>
  );
};

// Main Dashboard Component
export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-[1800px] mx-auto">
        {/* First Row - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5">
          <StatCard 
            title="Active Courses" 
            value="9" 
            icon={GraduationCap} 
            iconColor="text-emerald-500" 
          />
          <StatCard 
            title="Total Revenue" 
            value="0" 
            icon={DollarSign} 
            iconColor="text-purple-500" 
          />
          <StatCard 
            title="Enrolled Students" 
            value="35" 
            icon={Users} 
            iconColor="text-blue-500" 
          />
          <StatCard 
            title="Exams Conducted" 
            value="1" 
            icon={FileText} 
            iconColor="text-red-500" 
          />
        </div>

        {/* Second Row - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-5">
          <StatCard 
            title="Total Books" 
            value="2" 
            icon={Book} 
            iconColor="text-yellow-500" 
          />
          <StatCard 
            title="Avg. Course Rating" 
            value="0" 
            icon={Star} 
            iconColor="text-purple-500" 
          />
          <StatCard 
            title="Completion Rate" 
            value="90.19" 
            icon={Clock} 
            iconColor="text-pink-500" 
          />
          <StatCard 
            title="Total Students" 
            value="41" 
            icon={Activity} 
            iconColor="text-teal-500" 
          />
        </div>

        {/* Charts Section - 2 columns */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <StudentEnrollmentChart />
          <CoursePopularityChart />
        </div>
      </div>
    </div>
  );
}