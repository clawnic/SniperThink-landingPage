import { useState, useRef, useEffect } from "react";
import "./LaptopCallingDemo.css";

const botReplies = [
  "I'd be happy to help you with that. Let me check our available options.",
  "Great! I've noted your preferences. Is there anything else you'd like to know?",
  "Hello! I'm your AI assistant. How can I help you today?"
];

type CallStatus = "idle" | "in-call" | "ended";

const getTime = () => new Date().toLocaleTimeString();

const LaptopCallingDemo = () => {
  const [callStatus, setCallStatus] = useState<CallStatus>("idle");
  const [messages, setMessages] = useState<
    { sender: "user" | "ai"; text: string; time: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [replyIndex, setReplyIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const startCall = () => {
    setCallStatus("in-call");
    setMessages([
      {
        sender: "ai",
        text: "Call connected! AI agent is ready to assist you.",
        time: getTime()
      }
    ]);
  };

  const endCall = () => {
    setCallStatus("ended");
    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: "Call ended. Thank you for using SniperThink!",
        time: getTime()
      }
    ]);
  };

  const handleSend = (text: string) => {
    if (!text.trim() || callStatus !== "in-call") return;
    setMessages((prev) => [
      ...prev,
      { sender: "user", text, time: getTime() }
    ]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: botReplies[replyIndex % botReplies.length],
          time: getTime()
        }
      ]);
      setReplyIndex((i) => i + 1);
    }, 1100);
  };

  const handleHoldToSpeak = () => {
    if (input.trim()) handleSend(input);
  };

  return (
    <div className="laptopcall-window">
      <div className="laptopcall-messages">
        {messages.map((msg, idx) => (
          <div className={`laptopcall-bubble ${msg.sender}`} key={idx}>
            <div>{msg.text}</div>
            <div className="laptopcall-time">{msg.time}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="laptopcall-controls">
        {callStatus === "idle" || callStatus === "ended" ? (
          <button className="start-call-btn" onClick={startCall}>
            <span className="call-icon">📞</span> Start Call
          </button>
        ) : (
          <>
            <button className="hold-btn" onClick={handleHoldToSpeak}>
              <span className="mic-icon">🎤</span> Hold to Speak
            </button>
            <button
              className="mic-btn"
              onClick={handleHoldToSpeak}
              aria-label="Mic"
            >
              <span className="mic-icon">🎤</span>
            </button>
            <button className="end-call-btn" onClick={endCall}>
              End Call
            </button>
          </>
        )}
      </div>
      {callStatus === "in-call" && (
        <div className="laptopcall-input-row">
          <input
            className="laptopcall-input"
            placeholder="Say something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleHoldToSpeak();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default LaptopCallingDemo;
