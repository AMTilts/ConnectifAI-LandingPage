import React from 'react';
import { Sparkles } from 'lucide-react';
import { OpenAILoading, ClaudeLoading, GeminiLoading, PerplexityLoading } from './components/LoadingIcons';

const models = [
  {
    name: 'ChatGPT',
    icon: OpenAILoading,
    color: 'from-emerald-500/20 to-emerald-600/20'
  },
  {
    name: 'Claude',
    icon: ClaudeLoading,
    color: 'from-orange-500/20 to-orange-600/20'
  },
  {
    name: 'Gemini',
    icon: GeminiLoading,
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    name: 'Perplexity',
    icon: PerplexityLoading,
    color: 'from-purple-500/20 to-purple-600/20'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0F1C] via-[#141B2D] to-[#0A0F1C] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-blue-900/10 animate-gradient"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto h-screen flex items-center relative z-10">
        {/* Left side content */}
        <div className="w-full lg:w-2/5 space-y-8 px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Chat with Multiple AIs
            <span className="block text-blue-400">Simultaneously</span>
          </h1>
          
          <p className="text-xl text-gray-300">
            Experience the power of concurrent AI conversations. Stream responses from up to 4 different AI models in real-time.
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center space-x-2 transform transition hover:scale-105">
            <Sparkles className="w-5 h-5" />
            <span>Start Chatting Now</span>
          </button>
        </div>

        {/* Right side with floating chat windows */}
        <div className="hidden lg:block w-3/5 relative h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            {models.map((model, i) => {
              const Icon = model.icon;
              return (
                <div
                  key={i}
                  className={`absolute w-72 h-96 bg-gradient-to-br ${model.color} backdrop-blur-lg rounded-xl p-4 shadow-2xl 
                    transform transition-all duration-1000 hover:scale-105 animate-float-${i + 1}`}
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${10 + i * 15}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <Icon />
                    <span className="text-white font-medium">{model.name}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded p-2 text-gray-300 text-sm">
                      How can I help you today?
                    </div>
                    <div className="bg-white/10 rounded p-2 text-gray-200 text-sm ml-auto max-w-[80%]">
                      I'd like to explore some creative ideas.
                    </div>
                    <div className="bg-white/5 rounded p-2 text-gray-300 text-sm animate-pulse">
                      I'd be happy to help you explore creative ideas. Let's start by understanding what specific areas or types of creativity you're interested in...
                    </div>
                    <div className="flex space-x-2 text-gray-400 text-sm">
                      <span className="animate-pulse">●</span>
                      <span>AI is typing...</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
