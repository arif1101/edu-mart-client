import { BookOpen, Users, Target, Award, Heart, Lightbulb, Sparkles, TrendingUp, Globe, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '50K+', label: 'Active Students', icon: <Users className="w-5 h-5" /> },
    { number: '500+', label: 'Expert Instructors', icon: <Award className="w-5 h-5" /> },
    { number: '1000+', label: 'Online Courses', icon: <BookOpen className="w-5 h-5" /> },
    { number: '95%', label: 'Success Rate', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Our Mission',
      description: 'Democratizing education by providing accessible, high-quality learning experiences that empower individuals to achieve their personal and professional goals.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and modern pedagogy to create engaging, interactive learning experiences tailored to diverse learning styles.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Community',
      description: 'Fostering a supportive global community where learners, instructors, and mentors collaborate and inspire each other to reach new heights.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach',
      description: 'Breaking geographical barriers to deliver world-class education to every corner of the planet, making learning truly borderless.'
    }
  ];

  const team = [
    { 
      name: 'Sarah Johnson', 
      role: 'CEO & Founder', 
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: 'Former educator with 15+ years in EdTech'
    },
    { 
      name: 'Michael Chen', 
      role: 'Head of Education', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'PhD in Educational Psychology'
    },
    { 
      name: 'Emily Rodriguez', 
      role: 'CTO', 
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Tech innovator, AI specialist'
    },
    { 
      name: 'David Kim', 
      role: 'VP of Product', 
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: '10+ years in product development'
    }
  ];

  const milestones = [
    { year: '2020', event: 'EduMart Founded', description: 'Started with a vision to transform online education' },
    { year: '2021', event: '10,000 Students', description: 'Reached our first major milestone in student enrollment' },
    { year: '2022', event: 'Global Expansion', description: 'Expanded to 50+ countries worldwide' },
    { year: '2023', event: 'Award Recognition', description: 'Named Best EdTech Platform by Industry Leaders' },
    { year: '2024', event: '50,000+ Community', description: 'Built a thriving global learning community' }
  ];

  const features = [
    'Expert-crafted curriculum',
    'Lifetime access to courses',
    'Interactive learning tools',
    'Certificate of completion',
    'Community support',
    'Mobile learning app'
  ];

  return (
    <div className="w-full space-y-12">
      {/* Header Section */}
      <section className="py-8 md:py-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-cyan-400 rounded-md text-xs font-semibold mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          About EduMart
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
          Empowering Learners <span className="text-indigo-600 dark:text-cyan-400">Around the World</span>
        </h1>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          EduMart is dedicated to making quality education accessible, affordable, and transformative for everyone.
        </p>
      </section>

      {/* Stats Grid */}
      <section className="py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 text-center shadow-xs hover:border-indigo-500/50 transition">
              <div className="text-indigo-600 dark:text-cyan-400 mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-0.5">
                {stat.number}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-xs font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-8 md:py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
            <div className="space-y-3 text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Founded in 2020, EduMart was born from a simple idea: education should be accessible, empowering, and practical.
              </p>
              <p>
                What started with 10 courses has grown into a comprehensive learning ecosystem serving over 50,000 students across 120+ countries.
              </p>
              <p>
                Every course is designed with care, every instructor is vetted for excellence, and every student success story motivates us forward.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-xs">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">What Sets Us Apart</h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0" />
                  <span className="text-xs text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 md:py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Our Core Values
          </h2>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-xl mx-auto">
            These principles guide every decision we make and shape our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-xs hover:border-indigo-500/50 transition">
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/60 rounded-md flex items-center justify-center text-indigo-600 dark:text-cyan-400 mb-3">
                {value.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                {value.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-8 md:py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Our Journey
          </h2>
        </div>
        
        <div className="space-y-4 max-w-2xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-indigo-600 dark:text-cyan-400">{milestone.year}</span>
                <div>
                  <h3 className="text-xs font-bold text-gray-900 dark:text-white">{milestone.event}</h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 md:py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Meet Our Leadership
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-xs">
              <div className="h-48 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-xs font-semibold text-indigo-600 dark:text-cyan-400">{member.role}</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}