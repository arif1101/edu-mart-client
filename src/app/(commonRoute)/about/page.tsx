
import { BookOpen, Users, Target, Award, Heart, Lightbulb, Sparkles, TrendingUp, Globe, Zap, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '50K+', label: 'Active Students', icon: <Users className="w-5 h-5" /> },
    { number: '500+', label: 'Expert Instructors', icon: <Award className="w-5 h-5" /> },
    { number: '1000+', label: 'Online Courses', icon: <BookOpen className="w-5 h-5" /> },
    { number: '95%', label: 'Success Rate', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'Democratizing education by providing accessible, high-quality learning experiences that empower individuals to achieve their personal and professional goals.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and modern pedagogy to create engaging, interactive learning experiences tailored to diverse learning styles.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Community',
      description: 'Fostering a supportive global community where learners, instructors, and mentors collaborate and inspire each other to reach new heights.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
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

  const faqs = [
    {
      question: 'What is EduMart?',
      answer: 'EduMart is a comprehensive online learning platform that connects students with expert instructors worldwide. We offer over 1,000 courses across various categories including technology, business, design, and personal development.'
    },
    {
      question: 'How do I enroll in a course?',
      answer: 'Simply browse our course catalog, select the course you\'re interested in, and click "Enroll Now". You\'ll need to create an account if you haven\'t already. Once enrolled, you\'ll have immediate access to all course materials.'
    },
    {
      question: 'Do I get a certificate after completing a course?',
      answer: 'Yes! Upon successful completion of any course, you\'ll receive a certificate of completion that you can share on LinkedIn, add to your resume, or showcase in your portfolio.'
    },
    {
      question: 'Can I access courses on mobile devices?',
      answer: 'Absolutely! EduMart is fully responsive and we also offer dedicated mobile apps for iOS and Android. Learn on-the-go, anytime and anywhere.'
    },
    {
      question: 'What if I\'m not satisfied with a course?',
      answer: 'We offer a 30-day money-back guarantee on all courses. If you\'re not completely satisfied, simply contact our support team within 30 days of purchase for a full refund.'
    },
    {
      question: 'Are the courses self-paced or scheduled?',
      answer: 'Most of our courses are self-paced, allowing you to learn at your own speed. However, we also offer live cohort-based courses with scheduled sessions and real-time interaction with instructors.'
    },
    {
      question: 'Do I need any prerequisites to start learning?',
      answer: 'Prerequisites vary by course. Each course page clearly lists any required knowledge or skills. We offer courses for all levels—from complete beginners to advanced professionals.'
    },
    {
      question: 'How long do I have access to course materials?',
      answer: 'Once you enroll in a course, you have lifetime access to all course materials, including future updates. Learn at your own pace without any time pressure.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-sky-100 border border-sky-200 text-sky-600 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            About EduMart
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Empowering Learners
            <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mt-2">
              Around the World
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            EduMart is more than just an online learning platform—we&apos;re a movement dedicated to making quality education accessible, affordable, and transformative for everyone.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="relative py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 rounded-2xl p-6 hover:border-sky-300 hover:shadow-lg transition-all text-center">
                  <div className="text-sky-500 mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-4xl font-bold text-sky-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2020, EduMart was born from a simple yet powerful idea: education should be a right, not a privilege. Our founders, a group of passionate educators and technologists, recognized the gaps in traditional education systems and set out to create something different.
                </p>
                <p>
                  What started as a small platform with just 10 courses has grown into a comprehensive learning ecosystem serving over 50,000 students across 120+ countries. We&apos;ve partnered with industry experts, prestigious universities, and leading companies to bring you courses that truly matter.
                </p>
                <p>
                  Today, EduMart stands at the forefront of online education, combining innovative technology with proven teaching methodologies. Every course is designed with care, every instructor is vetted for excellence, and every student success story motivates us to do even better.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">What Sets Us Apart</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-sky-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make and shape the culture of our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-100 rounded-2xl p-8 hover:border-sky-300 hover:shadow-lg transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600">
              Key milestones that shaped EduMart into what it is today.
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-sky-300 last:border-0 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-sky-500 rounded-full -translate-x-[9px] ring-4 ring-slate-50"></div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-sky-300 hover:shadow-md transition-all ml-4">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-bold text-sky-500">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-slate-900">{milestone.event}</h3>
                  </div>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experienced professionals passionate about transforming education for the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-sky-300 hover:shadow-lg transition-all">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sky-500 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about EduMart. Can&apos;t find the answer you&apos;re looking for? Contact our support team.
            </p>
          </div>
          
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Still have questions?</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition-all shadow-md hover:shadow-lg">
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg text-sky-50 mb-8 max-w-2xl mx-auto">
              Join thousands of students already transforming their careers and achieving their goals with EduMart.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 rounded-xl font-bold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-2xl">
              Browse Courses
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}