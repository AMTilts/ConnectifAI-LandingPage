import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { OpenAILoading, ClaudeLoading, GeminiLoading, PerplexityLoading } from './components/LoadingIcons';

const models = [
  {
    name: 'ChatGPT',
    icon: OpenAILoading,
    color: 'chatgpt', // Use the key defined in tailwind.config.js
    initialResponse: "How can I help you today?",
    userQuery: "I'd like to explore some creative ideas.",
    aiResponse: "I'd be happy to help you explore creative ideas. Let's start by understanding what specific areas or types of creativity you're interested in..."
  },
  {
    name: 'Claude',
    icon: ClaudeLoading,
    color: 'claude', // Use the key defined in tailwind.config.js
    initialResponse: "Greetings! What's on your mind?",
    userQuery: "Tell me about large language models.",
    aiResponse: "Certainly! Large language models, or LLMs, are a type of artificial intelligence trained on vast amounts of text data. They can understand and generate human-like text for various tasks..."
  },
  {
    name: 'Gemini',
    icon: GeminiLoading,
    color: 'gemini', // Use the key defined in tailwind.config.js
    initialResponse: "Hi there! How can I assist?",
    userQuery: "What's the weather like in London?",
    aiResponse: "Okay, let me check the current weather for London. It appears to be partly cloudy with a temperature around 15°C. There's a slight chance of rain later today..."
  },
  {
    name: 'Perplexity',
    icon: PerplexityLoading,
    color: 'perplexity', // Use the key defined in tailwind.config.js
    initialResponse: "Hello! Ask me anything.",
    userQuery: "Explain quantum computing simply.",
    aiResponse: "Imagine a regular computer uses bits, like light switches that are either on or off (1 or 0). Quantum computers use 'qubits', which can be on, off, or both at the same time, allowing them to explore many possibilities at once..."
  }
];

// No longer need the colorStyles mapping object, we'll use dynamic class names

// Component for a single chat window with streaming text
const ChatWindow = ({ model, index }) => {
  const [streamedText, setStreamedText] = useState('');
  const [isStreaming, setIsStreaming] = useState(true);
  const Icon = model.icon;
  const fullResponse = model.aiResponse;
  // Directly use model.color key with Tailwind opacity modifiers for darker glass
  const bgColor = `bg-${model.color}/50`; // Darker background (e.g., bg-chatgpt/50)
  const borderColor = `border-${model.color}`; // Border color (e.g., border-chatgpt)
  const headerBgColor = `bg-${model.color}/60`; // Slightly darker header tint (e.g., bg-chatgpt/60)
  const bubbleBgColor = `bg-${model.color}/70`; // AI bubble background (e.g., bg-chatgpt/70)

  useEffect(() => {
    setStreamedText(''); // Reset on model change
    setIsStreaming(true);
    let charIndex = 0;
    const intervalId = setInterval(() => {
      if (charIndex < fullResponse.length) {
        setStreamedText((prev) => prev + fullResponse[charIndex]);
        charIndex++;
      } else {
        clearInterval(intervalId);
        setIsStreaming(false);
      }
    }, 35);

    return () => clearInterval(intervalId);
  }, [fullResponse]);

  return (
    <div
      className={`absolute w-80 h-96 ${bgColor} ${borderColor} border rounded-lg shadow-xl backdrop-blur-lg
        transform transition-all duration-1000 hover:scale-105 animate-float-${index + 1} flex flex-col overflow-hidden`}
      style={{
        top: `${15 + index * 12}%`,
        left: `${10 + index * 18}%`,
        animationDelay: `${index * 0.2}s`
      }}
    >
      {/* Header */}
      <div className={`flex items-center space-x-2 p-3 ${headerBgColor} border-b ${borderColor} border-opacity-50 flex-shrink-0`}>
        <Icon />
        <span className="text-white font-medium text-sm">{model.name}</span>
      </div>

      {/* Chat Content */}
      <div className="flex-grow space-y-3 p-3 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {/* Initial AI Message */}
        <div className={`${bubbleBgColor} rounded p-2 text-gray-100 text-sm max-w-[90%]`}> {/* Adjusted text color for contrast */}
          {model.initialResponse}
        </div>
        {/* User Message */}
        <div className="bg-gray-700/60 rounded p-2 text-gray-100 text-sm ml-auto max-w-[80%]"> {/* Slightly darker user bubble */}
          {model.userQuery}
        </div>
        {/* AI Response Area */}
        <div className="flex items-start space-x-2">
           {/* Animated Icon next to streaming text */}
           {isStreaming && (
             <div className="flex-shrink-0 mt-1">
               <Icon />
             </div>
           )}
          {/* Streaming Text Bubble */}
          <div className={`${bubbleBgColor} rounded p-2 text-gray-100 text-sm ${isStreaming ? 'flex-grow' : 'max-w-[90%]'}`}> {/* Adjusted text color */}
            {streamedText}
            {/* Blinking cursor simulation */}
            {isStreaming && <span className="inline-block w-2 h-4 bg-gray-100 ml-1 animate-pulse"></span>} {/* Cursor color adjusted */}
          </div>
        </div>
      </div>
    </div>
  );
};


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
            {models.map((model, i) => (
              <ChatWindow key={model.name} model={model} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
