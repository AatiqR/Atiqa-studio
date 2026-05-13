"use client";
import { useState, useEffect } from 'react';

interface Step {
  id: number;
  number: string;
  title: string;
  subtitle: string;
}

const WorkflowTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  const steps: Step[] = [
    {
      id: 1,
      number: '01',
      title: 'Know Your Audience',
      subtitle: 'Research Market, Define Target Audience'
    },
    {
      id: 2,
      number: '02',
      title: 'Craft Strategic Approach',
      subtitle: 'Set Goals, Choose Effective Channels'
    },
    {
      id: 3,
      number: '03',
      title: 'Execute Your Vision',
      subtitle: 'Optimize Website, Share Engaging Content'
    },
    {
      id: 4,
      number: '04',
      title: 'Analyze, Learn, Enhance',
      subtitle: 'Monitor, Analyze, Adapt for Growth'
    }
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 3 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      background: '#050505',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 16px',
      overflow: 'hidden'
    }}>
      {/* Ambient background */}
      <div 
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255, 170, 0, 0.06) 0%, transparent 60%)'
        }}
      />

      <div style={{ width: '100%', maxWidth: '1280px', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div 
          style={{
            textAlign: 'center',
            marginBottom: '48px',
            transition: 'all 1s ease-out',
            transform: mounted ? 'translateY(0)' : 'translateY(24px)',
            opacity: mounted ? 1 : 0
          }}
        >
          <p style={{
            color: '#ffa200',
            fontSize: 'clamp(10px, 2vw, 14px)',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '12px',
            textShadow: '0 0 10px rgba(255, 170, 0, 0.6), 0 0 20px rgba(255, 170, 0, 0.4), 0 0 30px rgba(255, 170, 0, 0.2)',
            animation: 'textGlow 2.5s ease-in-out infinite'
          }}>
            Workflow Process
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 900,
            color: '#fafafa',
            letterSpacing: '-0.025em',
            margin: 0
          }}>
            How we work
          </h2>
          <div style={{
            height: '4px',
            width: 'clamp(48px, 8vw, 80px)',
            background: '#ffa200',
            margin: '16px auto 0',
            borderRadius: '9999px',
            boxShadow: '0 0 8px rgba(255, 170, 0, 0.8), 0 0 16px rgba(255, 170, 0, 0.5), 0 0 24px rgba(255, 170, 0, 0.3)'
          }} />
        </div>

        {/* Timeline Container */}
        <div style={{ position: 'relative' }}>
          {/* Glowing Line - Desktop only */}
          <div style={{
            position: 'absolute',
            top: 'clamp(24px, 4vw, 40px)',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '75%',
            maxWidth: '768px',
            display: 'none'
          }} className="timeline-line">
            <div 
              style={{
                height: '3px',
                borderRadius: '9999px',
                background: 'linear-gradient(90deg, transparent 0%, #ffa200 15%, #ffa200 85%, transparent 100%)',
                boxShadow: '0 0 10px rgba(255, 170, 0, 0.8), 0 0 20px rgba(255, 170, 0, 0.5), 0 0 30px rgba(255, 170, 0, 0.3)',
                animation: 'lineGlow 3s ease-in-out infinite'
              }}
            />
          </div>

          {/* Steps Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'clamp(12px, 3vw, 32px)'
          }} className="steps-grid">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.7s ease-out',
                    transform: mounted ? 'translateY(0)' : 'translateY(32px)',
                    opacity: mounted ? 1 : 0,
                    transitionDelay: `${index * 150 + 300}ms`
                  }}
                >
                  {/* Dot Container */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'clamp(16px, 3vw, 32px)' }}>
                    <div style={{ position: 'relative' }}>
                      {/* Outer pulse ring */}
                      <div 
                        style={{
                          position: 'absolute',
                          width: isActive ? '48px' : '40px',
                          height: isActive ? '48px' : '40px',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          borderRadius: '50%',
                          background: 'radial-gradient(circle, rgba(255, 170, 0, 0.3) 0%, transparent 70%)',
                          animation: 'pulseGlow 2s ease-in-out infinite',
                          animationDelay: `${index * 0.3}s`
                        }}
                      />
                      
                      {/* Middle ring */}
                      <div 
                        style={{
                          position: 'absolute',
                          width: isActive ? 'clamp(40px, 6vw, 48px)' : 'clamp(32px, 5vw, 40px)',
                          height: isActive ? 'clamp(40px, 6vw, 48px)' : 'clamp(32px, 5vw, 40px)',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          borderRadius: '50%',
                          border: '2px solid #ffa200',
                          boxShadow: '0 0 10px rgba(255, 170, 0, 0.6), 0 0 20px rgba(255, 170, 0, 0.3)',
                          transition: 'all 0.5s ease-out',
                          animation: 'ringGlow 2.5s ease-in-out infinite',
                          animationDelay: `${index * 0.2}s`
                        }}
                      />
                      
                      {/* Center dot */}
                      <div 
                        style={{
                          position: 'relative',
                          width: isActive ? 'clamp(20px, 3vw, 24px)' : 'clamp(16px, 2.5vw, 20px)',
                          height: isActive ? 'clamp(20px, 3vw, 24px)' : 'clamp(16px, 2.5vw, 20px)',
                          borderRadius: '50%',
                          background: '#ffa200',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 0 8px #ffa200, 0 0 16px rgba(255, 170, 0, 0.6), 0 0 24px rgba(255, 170, 0, 0.4)',
                          transition: 'all 0.5s ease-out',
                          animation: 'dotGlow 2s ease-in-out infinite',
                          animationDelay: `${index * 0.15}s`
                        }}
                      >
                        <div style={{
                          width: isActive ? '8px' : '6px',
                          height: isActive ? '8px' : '6px',
                          borderRadius: '50%',
                          background: '#050505',
                          transition: 'all 0.3s'
                        }} />
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div 
                    style={{
                      position: 'relative',
                      borderRadius: 'clamp(12px, 2vw, 16px)',
                      padding: 'clamp(12px, 3vw, 24px)',
                      transition: 'all 0.5s ease-out',
                      transform: isActive ? 'scale(1.02)' : 'scale(1)',
                      background: isActive 
                        ? 'linear-gradient(180deg, rgba(255, 170, 0, 0.12) 0%, rgba(255, 170, 0, 0.03) 100%)' 
                        : 'linear-gradient(180deg, rgba(255, 170, 0, 0.04) 0%, transparent 100%)'
                    }}
                  >
                    {/* Card border */}
                    <div 
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'clamp(12px, 2vw, 16px)',
                        border: isActive ? '1px solid rgba(255, 170, 0, 0.5)' : '1px solid rgba(255, 170, 0, 0.2)',
                        boxShadow: isActive ? '0 0 20px rgba(255, 170, 0, 0.15), inset 0 0 20px rgba(255, 170, 0, 0.05)' : 'none',
                        transition: 'all 0.5s',
                        pointerEvents: 'none'
                      }}
                    />
                    
                    {/* Step label */}
                    <p style={{
                      fontSize: 'clamp(9px, 1.5vw, 12px)',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      color: isActive ? '#ffa200' : 'rgba(255, 170, 0, 0.7)',
                      textShadow: isActive ? '0 0 10px rgba(255, 170, 0, 0.6), 0 0 20px rgba(255, 170, 0, 0.4)' : 'none',
                      transition: 'all 0.5s',
                      margin: '0 0 clamp(8px, 1.5vw, 12px) 0'
                    }}>
                      Step {step.number}
                    </p>
                    
                    {/* Background number */}
                    <div
                      style={{
                        pointerEvents: 'none',
                        userSelect: 'none',
                        textAlign: 'center',
                        fontWeight: 900,
                        lineHeight: 1,
                        letterSpacing: '-0.05em',
                        fontSize: 'clamp(48px, 12vw, 112px)',
                        color: 'transparent',
                        WebkitTextStroke: isActive ? '2px rgba(255, 170, 0, 0.6)' : '1px rgba(255, 170, 0, 0.25)',
                        filter: isActive ? 'drop-shadow(0 0 20px rgba(255, 170, 0, 0.4))' : 'none',
                        transition: 'all 0.7s ease-out',
                        opacity: isActive ? 1 : 0.4
                      }}
                    >
                      {step.number}
                    </div>

                    {/* Title */}
                    <h3 
                      style={{
                        position: 'relative',
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: 'clamp(12px, 2.5vw, 20px)',
                        color: isActive ? '#fafafa' : 'rgba(250, 250, 250, 0.7)',
                        textShadow: isActive ? '0 0 20px rgba(255, 170, 0, 0.4)' : 'none',
                        transition: 'all 0.5s',
                        margin: 'clamp(-16px, -3vw, -32px) 0 0 0'
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Subtitle */}
                    <p 
                      style={{
                        margin: '0 auto',
                        marginTop: 'clamp(6px, 1vw, 12px)',
                        textAlign: 'center',
                        lineHeight: 1.6,
                        fontSize: 'clamp(10px, 1.8vw, 14px)',
                        maxWidth: '160px',
                        color: isActive ? 'rgba(250, 250, 250, 0.6)' : 'rgba(250, 250, 250, 0.4)',
                        transition: 'all 0.5s'
                      }}
                    >
                      {step.subtitle}
                    </p>
                    
                    {/* Active indicator */}
                    <div 
                      style={{
                        margin: '0 auto',
                        marginTop: 'clamp(12px, 2vw, 16px)',
                        height: '2px',
                        borderRadius: '9999px',
                        background: '#ffa200',
                        boxShadow: '0 0 8px rgba(255, 170, 0, 0.8), 0 0 16px rgba(255, 170, 0, 0.5)',
                        width: isActive ? 'clamp(32px, 5vw, 48px)' : '0',
                        opacity: isActive ? 1 : 0,
                        transition: 'all 0.7s ease-out'
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '24px'
        }}>
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              style={{
                width: index === activeStep ? '24px' : '8px',
                height: '8px',
                borderRadius: '9999px',
                border: 'none',
                background: '#ffa200',
                opacity: index === activeStep ? 1 : 0.4,
                boxShadow: index === activeStep ? '0 0 8px #ffa200, 0 0 16px rgba(255, 170, 0, 0.6)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.5s',
                padding: 0
              }}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @media (min-width: 640px) {
          .timeline-line {
            display: block !important;
          }
        }
        
        @media (min-width: 768px) {
          .steps-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        
        @keyframes textGlow {
          0%, 100% { 
            text-shadow: 
              0 0 10px rgba(255, 170, 0, 0.5),
              0 0 20px rgba(255, 170, 0, 0.3);
          }
          50% { 
            text-shadow: 
              0 0 15px rgba(255, 170, 0, 0.8),
              0 0 30px rgba(255, 170, 0, 0.5),
              0 0 45px rgba(255, 170, 0, 0.3);
          }
        }
        
        @keyframes lineGlow {
          0%, 100% { 
            box-shadow: 
              0 0 10px rgba(255, 170, 0, 0.6),
              0 0 20px rgba(255, 170, 0, 0.4),
              0 0 30px rgba(255, 170, 0, 0.2);
          }
          50% { 
            box-shadow: 
              0 0 15px rgba(255, 170, 0, 0.9),
              0 0 30px rgba(255, 170, 0, 0.6),
              0 0 45px rgba(255, 170, 0, 0.3);
          }
        }
        
        @keyframes dotGlow {
          0%, 100% { 
            box-shadow: 
              0 0 8px #ffa200,
              0 0 16px rgba(255, 170, 0, 0.5);
          }
          50% { 
            box-shadow: 
              0 0 12px #ffa200,
              0 0 24px rgba(255, 170, 0, 0.7),
              0 0 36px rgba(255, 170, 0, 0.4);
          }
        }
        
        @keyframes ringGlow {
          0%, 100% { 
            box-shadow: 
              0 0 8px rgba(255, 170, 0, 0.5),
              0 0 16px rgba(255, 170, 0, 0.3);
          }
          50% { 
            box-shadow: 
              0 0 12px rgba(255, 170, 0, 0.8),
              0 0 24px rgba(255, 170, 0, 0.5);
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
};

export default WorkflowTimeline;
