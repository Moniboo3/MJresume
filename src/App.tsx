import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Briefcase, Code, User, Rocket } from 'lucide-react';
import Header from './components/Header';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16 space-y-32">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                John Doe
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Senior Software Engineer specializing in building exceptional digital experiences
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:contact@example.com" className="hover:text-blue-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Tech Leadership</h3>
                <p className="text-gray-300">Led multiple cross-functional teams of 10+ engineers, delivering enterprise-scale solutions</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Cloud Architecture</h3>
                <p className="text-gray-300">Designed and implemented cloud-native applications serving millions of users</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Innovation</h3>
                <p className="text-gray-300">Patent holder with proven track record of turning complex problems into elegant solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <Section icon={User} title="About Me">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 h-full">
              <p className="text-gray-300 leading-relaxed">
                With over 8 years of experience in software development, I've helped companies build scalable applications and lead teams to success. My passion lies in creating elegant solutions to complex problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, mentoring junior developers, or exploring new technologies. I believe in continuous learning and sharing knowledge with the community.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My approach combines technical expertise with strong leadership skills, enabling me to drive innovation while maintaining high standards of code quality and team collaboration.
              </p>
            </div>
            <div className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Workspace"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section icon={Briefcase} title="Experience">
          <div className="space-y-8">
            <ExperienceCard 
              title="Senior Software Engineer"
              company="Tech Corp"
              period="2020 - Present"
              description="Led development of cloud-native applications, mentored junior developers, and implemented CI/CD pipelines."
              bullets={[
                "Architected and deployed microservices-based platform reducing system latency by 40%",
                "Led migration of legacy systems to cloud infrastructure, resulting in 60% cost reduction",
                "Established coding standards and review processes, improving code quality metrics by 45%",
                "Mentored team of 5 junior developers, with 3 achieving senior positions within 18 months",
                "Implemented automated testing framework, achieving 90% code coverage"
              ]}
              technologies={['React', 'Node.js', 'AWS', 'Docker']}
            />
            <ExperienceCard 
              title="Software Engineer"
              company="Innovation Labs"
              period="2018 - 2020"
              description="Developed microservices architecture, improved system performance by 40%, and implemented automated testing."
              bullets={[
                "Designed and implemented RESTful APIs serving 1M+ daily requests",
                "Optimized database queries reducing response time by 60%",
                "Led integration of machine learning models into production environment",
                "Developed real-time analytics dashboard for business metrics"
              ]}
              technologies={['Python', 'Django', 'PostgreSQL', 'Redis']}
            />
            <ExperienceCard 
              title="Full Stack Developer"
              company="StartUp Inc"
              period="2016 - 2018"
              description="Built responsive web applications, implemented RESTful APIs, and managed database operations."
              bullets={[
                "Developed and launched company's first mobile-responsive web application",
                "Implemented payment processing system handling $500K+ monthly transactions",
                "Created automated deployment pipeline reducing deployment time by 70%",
                "Built custom CMS platform used by 50+ content creators"
              ]}
              technologies={['JavaScript', 'React', 'Express', 'MongoDB']}
            />
          </div>
        </Section>

        {/* Projects Section */}
        <Section icon={Rocket} title="Projects">
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Cloud Migration Initiative"
              description="Led complete infrastructure modernization project for a Fortune 500 company"
              details={[
                "Migrated 200+ services to AWS cloud infrastructure",
                "Reduced operational costs by 60%",
                "Improved system reliability to 99.99% uptime",
                "Implemented auto-scaling saving $100K monthly"
              ]}
              technologies={['AWS', 'Terraform', 'Docker', 'Kubernetes']}
            />
            <ProjectCard 
              title="AI-Powered Analytics Platform"
              description="Designed and built real-time analytics platform with ML capabilities"
              details={[
                "Processed 1TB+ daily data in real-time",
                "Reduced analysis time from hours to minutes",
                "Implemented predictive models with 95% accuracy",
                "Served 10K+ daily active users"
              ]}
              technologies={['Python', 'TensorFlow', 'React', 'GCP']}
            />
            <ProjectCard 
              title="E-commerce Platform Redesign"
              description="Complete redesign and re-architecture of legacy e-commerce system"
              details={[
                "Increased conversion rate by 45%",
                "Reduced page load time by 60%",
                "Implemented microservices architecture",
                "Enhanced security protocols"
              ]}
              technologies={['Next.js', 'Node.js', 'PostgreSQL', 'Redis']}
            />
            <ProjectCard 
              title="Open Source Framework"
              description="Created and maintained popular open-source testing framework"
              details={[
                "1000+ GitHub stars",
                "100+ community contributors",
                "Used by 50+ companies",
                "Regular conference speaker"
              ]}
              technologies={['TypeScript', 'Jest', 'GitHub Actions', 'npm']}
            />
          </div>
        </Section>

        {/* Skills Section */}
        <Section icon={Code} title="Skills">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js',
              'Python', 'AWS', 'Docker', 'Kubernetes',
              'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis',
              'CI/CD', 'Microservices', 'System Design', 'Agile'
            ].map((skill) => (
              <div key={skill} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-gray-800 mt-32">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;