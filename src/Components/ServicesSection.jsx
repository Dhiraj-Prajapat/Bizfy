
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Bot, Frame, Database } from "lucide-react";
import "./ServicesSection.css"; 

const ServicesSection = () => {




  const data = [
    { name: "Jan", value: 40 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 45 },
    { name: "Apr", value: 35 },
    { name: "May", value: 55 },
    { name: "Jun", value: 40 },
    { name: "Jul", value: 50 },
  ];

  const services = [
    {
      title: "Workflow automations",
      description:
        "We automate your workflows by connecting your favourite applications. Boosting efficiency and enhancing productivity.",
      content: (
        <div className="content-box">
          <div className="content-item">
            <Frame className="content-icon" size={24} />
            <div>
              <div className="content-title">Framer</div>
              <div className="content-subtitle">New contact form submission</div>
            </div>
          </div>
          <div className="content-item">
            <Database className="content-icon" size={24} />
            <div>
              <div className="content-title">Airtable</div>
              <div className="content-subtitle">Add data to Airtable</div>
            </div>
          </div>
          <div className="content-item">
            <Bot className="content-icon" size={24} />
            <div>
              <div className="content-title">OpenAI</div>
              <div className="content-subtitle">Write personalised message</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Chatbot development",
      description:
        "We develop advanced chatbots that are reactive, understand nuances, and are capable of solving extremely complicated queries.",
      content: (
        <div className="chatbox">
          <div className="chatbox-item">
            <div className="chatbox-icon">
              <Bot className="chatbox-icon-style" size={30} />
            </div>
            <div>
              <div className="chatbox-header">
                <span className="chatbox-title">AI assistant</span>
                <span className="chatbox-subtitle">Siena Sinner</span>
              </div>
              <div className="chatbox-message">Sure, here's a summary:</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Business consulting",
      description:
        "Using our expertise, we delve deep into your organisation and consult you on how AI-driven automations could enhance your operations.",
      content: (
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="130%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#10B981"
                fill="url(#colorValue)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
          {/* <div className="chart-percentage">+15%</div> */}
        </div>
      ),
    },
  ];

  return (
    <div className="services-section" data-aos="fade-up">
      <nav className="service1">
        <h1 className="service2" data-aos="fade-up">
          Our <span className="highlight1">services</span>
        </h1>
      </nav>

      <div className="services-grid" data-aos="fade-up">
        {services.map((service, index) => (
          <div key={index} className="service-card">
             {service.content}
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
