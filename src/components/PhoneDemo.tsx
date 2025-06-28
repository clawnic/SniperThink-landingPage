// src/components/PhoneDemo.tsx
import ChatDemo from "./ChatDemo";
import CallingDemo from "./CallingDemo";
import "./PhoneDemo.css";

interface PhoneDemoProps {
  mode: "chat" | "calling";
}

const PhoneDemo = ({ mode }: PhoneDemoProps) => {
  return (
    <div className="phone-demo-container">
      <div className={`phone-frame ${mode}`}>
        {mode === "chat" ? <ChatDemo /> : <CallingDemo />}
      </div>
    </div>
  );
};

export default PhoneDemo;
