import React, { useEffect, useRef } from 'react';
import './Process.css';
import { Github, MessageSquare, Slack } from 'lucide-react';


const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Subscribe",
      description: "Choose your preferred plan to start and cancel or pause at anytime you like. So you're as flexible as your business' needs.",
      content: (
        <div className="subscription-section">
          <div className="subscription-option">
            <div className="icon-circle">
              <div className="inner-circle"></div>
            </div>
            <span>Subscription</span>
          </div>
          <div className="button-group">
            <button className="basic-button">Basic</button>
            <button className="pro-button">Pro</button>
            <button className="custom-button">Custom</button>
          </div>
        </div>
      )
    },
    {
      number: "02",
      title: "Request",
      description: "Start requesting the workflow-automations and AI applications you need, your developers are right there to transform your ideas into reality.",
      content: (
        <div className="icon-grid">
          {[<Github />, <Slack />, <MessageSquare />, "🌐", "⚙️", "🚀", "📝", "💬"].map((icon, index) => (
            <div key={index} className="icon-box">
              {icon}
            </div>
          ))}
        </div>
      )
    },
    {
      number: "03",
      title: "Build",
      description: "Our developers swiftly begin building your stable solutions, prioritising speed without compromising quality.",
      content: (
        <div className="code-snippet">
          <pre>
            <code>
              {`import { FeatureSection } from 'nebula-template';
const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};`}
            </code>
          </pre>
        </div>
      )
    },
    {
      number: "04",
      title: "Test & optimise",
      description: "You either approve or request revisions - we're dedicated to refining our builds until you're fully satisfied.",
      content: (
        <div className="metrics">
          {[{ label: "Speed", value: 75 }, { label: "Security", value: 70 }, { label: "Accuracy", value: 45 }].map((metric, index) => (
            <div key={index} className="metric-item">
              <div className="metric-label">{metric.label}</div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${metric.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: "05",
      title: "Become an industry leader",
      description: "Continue requesting as many workflow-automations and AI-applications as you wish, and transform your organisation into a worldwide industry leader.",
      content: (
        <div className="globe-container">
          <svg viewBox="0 0 200 200" className="globe">
            <defs>
              <radialGradient id="globe-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="98" fill="none" stroke="url(#globe-gradient)" strokeWidth="0.5" />
            {Array.from({ length: 100 }).map((_, i) => (
              <circle key={i} cx={100 + Math.cos(i * 0.5) * 80} cy={100 + Math.sin(i * 0.5) * 80} r="0.5" fill="rgb(16, 185, 129)" fillOpacity="0.5" />
            ))}
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="process-container" data-aos="fade-up">
      <nav className="process-header">
        <h1 className="process-title" data-aos="fade-up">
          Our <span className="highlight">process</span>
        </h1>
      </nav>
      <div className="process-steps" data-aos="fade-up">
        {processSteps.map((step, index) => (
          <div key={index} className="process-step" data-aos="fade-up">
            <div className="step-content" data-aos="fade-up">{step.content}</div>
            <h2 className="step-title">
              {step.number}. {step.title}
            </h2>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
