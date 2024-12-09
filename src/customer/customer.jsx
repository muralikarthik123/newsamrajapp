import React, { useState, useEffect, useRef } from 'react';
import './customer.css'; // Import styling
import { useNavigate } from 'react-router-dom';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am the Samraj Solar Energies Bot. So May I Know your Query is about Subsidy or other?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();
  
  // Reference to scroll to the bottom of the chat container
  const chatEndRef = useRef(null);

  // Dynamic response function
  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // Check if input contains certain keywords
    if (lowerInput.includes("samraj solar")) {
      return "Samraj Solar energy is a renewable source that helps reduce electricity bills and decreases the carbon footprint. It’s clean, green, and cost-effective in the long run.";
    } else if (lowerInput.includes("subsidy")) {
      return "To claim subsidies, you need to apply through the government portal and within 30 to 45 Days You can Claim Your Subsidy  as per Government Noms or get in touch with our team at Samraj Solar Energies for assistance.If u have Query still please Click Yes Otherwise PLease Click No";
    }
    else if (lowerInput.includes("fine")) {
      return "So many I Know your Query is about Subsidy or other.";
    } 
    else if (lowerInput.includes("installation")) {
      return "Have you Recived the Solar Pannels From the Samraj Solar Energies?. If u have received Click received or else Click not received.";
    } 
    else if (lowerInput.includes("not")) {
      return " We Kindly Appolizes you for the  Delay , Due to heavy Delivery in the City,the Process has been Delayed. We will Soon Deliver You Solar Pannels,if u have any Query please Click yes otherwise Click No";
    }
    else if (lowerInput.includes("received")) {
      return "As You have recevied the Solar Pannels from Samraj Solar Energies We will Soon Assign Site Surey to you and Install the Pannels as soon as Possible,if u have any Query please Click yes otherwise Click No";
    } 

    else if (lowerInput.includes("other")) {
      return "About the Installation or About Warranty or About samraj or if u have any other query please Book an appionment a Memeber from our team will Kindly Contact you";
    }
    else if (lowerInput.includes("warranty")) {
      return "Service Warranty is upto 25 years and Structure Warranty is About 5 Years if u have any Query please Click yes otherwise Click No";
    }
    else if (lowerInput.includes("yes")) {
      return "If your Query is About the Installation or About Warranty  or if u have any other query please Book an appionment a Memeber from our team will Kindly Contact you";
    }
    else if (lowerInput === "no") {
      // Redirect to the home page when user types "no"
     setInterval(() => {
      navigate("/");  
     }, 3000);    
      return "Thank You.... we will Soon  Redirect you to Home Page  Shortly ";
    }
    else {
      return "I'm sorry, I didn't quite understand your query. If u are having any Querys please book the appoinment or Contact us on +918121005746";
    }
  };

  // Handle user input change
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() === "") return;

    // Append user message to the conversation
    const newMessages = [...messages, { sender: 'user', text: userInput }];
    
    // Get dynamic response from bot
    const botResponse = getBotResponse(userInput);
    
    // Append bot message to the conversation
    newMessages.push({ sender: 'bot', text: botResponse });
    
    // Update the state with new messages
    setMessages(newMessages);
    setUserInput('');
  };

  // Scroll to the bottom when messages change
  // Reference for scrolling


  // Scroll to the bottom when messages change
  useEffect(() => {
    // Scroll to the bottom of the chat container when a new message is added
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chatbox">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
            <span>{msg.text}</span>
        </div>
      ))}
      {/* Reference for scrolling */}
    <div ref={chatEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Ask me about solar energy or Samraj Solar Energies..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
