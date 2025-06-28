import React, { useState, useEffect, useRef } from "react";
import "./LaptopChatDemo.css";

const botReplies = [
  "I'd be happy to help you with that. Let me check our available options.",
  "Great! I've noted your preferences. Is there anything else you'd like to know?",
  "Hello! I'm your AI assistant. How can I help you today?"
];

const LaptopChatDemo = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! I'm your AI assistant. How can I help you today?",
      time: new Date().toLocaleTimeString()
    }
  ]);
  const [input, setInput] = useState("");
  const [replyIndex, setReplyIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const now = new Date();
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: input,
      time: now.toLocaleTimeString()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    if (textareaRef.current) {
      textareaRef.current.focus();
    }

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: botReplies[replyIndex % botReplies.length],
        time: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
      setReplyIndex(i => i + 1);
    }, 1100);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      if (input.trim()) {
        handleSend();
        // Removed window.scrollTo to prevent flicker and double scroll
      }
      return false;
    }
  }
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent any default button behavior
    e.preventDefault();
    e.stopPropagation();
    handleSend();
    return false;
  };

  return (
    <div className="laptopchat-window">
      <div className="laptopchat-messages">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`laptopchat-bubble ${msg.sender}`}
          >
            <div className="laptopchat-text">{msg.text}</div>
            <div className="laptopchat-time">{msg.time}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="laptopchat-input-row">
        <textarea
          ref={textareaRef}
          className="laptopchat-input"
          placeholder="Type your message here..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          onSubmit={(e) => {
            e.preventDefault();
            return false;
          }}
        />
        <button
          onClick={handleButtonClick}
          className="laptopchat-send-btn"
          aria-label="Send"
          type="button"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
            <path d="M3 19L21 11L3 3V10L17 11L3 12V19Z" fill="#fff"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LaptopChatDemo;
