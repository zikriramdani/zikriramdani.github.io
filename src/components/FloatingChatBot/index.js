'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import './FloatingChatBot.scss';

export default function ChatWidget({ bottom, bottomBox, translation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const chatBodyRef = useRef(null);
  const LOCAL_STORAGE_KEY = 'chatMessages';

  const toggleChat = () => setIsOpen((prev) => !prev);

  const scrollToBottom = useCallback(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, []);

  const clearChat = () => {
    setChat([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const appendMessage = (newMsg) => {
    setChat((prev) => [...prev, newMsg]);
  };

  const replaceLastMessage = (newMsg) => {
    setChat((prev) => [...prev.slice(0, -1), newMsg]);
  };

  const handleSend = useCallback(async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    appendMessage({ sender: 'user', text: trimmedInput });
    appendMessage({ sender: 'ai', text: translation('typing') });
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: trimmedInput }] }],
          }),
        }
      );

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      const aiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || translation('ai_error');

      replaceLastMessage({ sender: 'ai', text: aiText });
    } catch (error) {
      console.error('Fetch error:', error);
      replaceLastMessage({ sender: 'ai', text: translation('ai_fetch_error') });
    } finally {
      setIsLoading(false);
    }
  }, [input, translation]);

  useEffect(() => {
    scrollToBottom();
  }, [chat, scrollToBottom]);

  useEffect(() => {
    const savedChat = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedChat) setChat(JSON.parse(savedChat));
  }, []);

  useEffect(() => {
    if (chat.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(chat));
    }
  }, [chat]);

  return (
    <>
      {/* Chat box */}
      <div
        className={`chatbot-box ${isOpen ? 'open' : ''}`}
        style={{ bottom: bottomBox }}
      >
        <div className="chat-header">
          <span>{translation('assistant')}</span>
          <div className="chat-header-actions">
            <button onClick={clearChat} className="clear-chat-btn">
              {translation('clear_chat')}
            </button>
            <button onClick={toggleChat} className="close-chat-btn">
              <i className="fa fa-2x fa-close" style={{ color: '#000' }} />
            </button>
          </div>
        </div>

        <div className="chat-body" ref={chatBodyRef}>
          {chat.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder={translation('type_message')}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="text-truncate"
          />
          <button onClick={handleSend} disabled={isLoading}>
            {translation('send')}
          </button>
        </div>
      </div>

      {/* Toggle button */}
      <button
        className="chatbot-toggle"
        onClick={toggleChat}
        style={{ bottom }}
      >
        <i className="fa fa-2x fa-comments" style={{ color: '#000' }} />
      </button>
    </>
  );
}
