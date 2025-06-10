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

  const [isTyping, setIsTyping] = useState(false);
  const [isFullPage, setIsFullPage] = useState(false);

  const toggleChat = () => {
    setIsOpen((prev) => {
      const newState = !prev;

      // Jika membuka chat, scroll ke bawah setelah animasi selesai
      if (!prev) {
        setTimeout(() => {
          scrollToBottom();
        }, 500); // Sesuaikan dengan durasi animasi di CSS (500ms di contoh ini)
      }

      return newState;
    });
  };

  const toggleFullPage = () => {
    setIsFullPage((prev) => !prev); // Toggle full-page mode
  };

  const scrollToBottom = useCallback(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, []);

  const clearChat = () => {
    setChat([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const appendMessage = (newMsg) => {
    setChat((prev) => [...prev, newMsg]);
  };

  const typeTextAnimation = (text, callback) => {
    let index = 0;
    const speed = 20; // kecepatan mesin tik (ms per karakter)

    const type = () => {
      if (index <= text.length) {
        callback(text.slice(0, index));
        index++;
        setTimeout(type, speed);
      }
    };

    type();
  };

  const replaceLastMessageWithTyping = (finalText) => {
    setIsTyping(true);
    typeTextAnimation(finalText, (partialText) => {
      setChat((prev) => {
        const updated = [...prev.slice(0, -1), { sender: 'ai', text: partialText }];
        return updated;
      });

      if (partialText === finalText) {
        setIsTyping(false); // Selesai mengetik
      }
    });
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
            contents: [{ parts: [{ text: trimmedInput }] }]
          })
        }
      );

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text || translation('ai_error');

      replaceLastMessageWithTyping(aiText);
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
    if (savedChat) {
      setChat(JSON.parse(savedChat));
    }
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
        className={`chatbot-box ${isOpen ? 'open' : ''} ${isFullPage ? 'fullpage' : ''}`}
        style={{ bottom: bottomBox }}>
        <div className="chat-header">
          <span>{translation('assistant')}</span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={clearChat} className="clear-chat-btn" disabled={isTyping}>
              {translation('clear_chat')}
            </button>
            <span
              onClick={toggleFullPage}
              className="d-flex item-center"
              style={{ cursor: 'pointer' }}>
              <i
                className={`fa fa-2x fa-${isFullPage ? 'compress' : 'expand'}`}
                style={{ color: '#000', fontSize: '1.7rem' }}
              />
            </span>
          </div>
        </div>

        <div className="chat-body" ref={chatBodyRef}>
          {chat.map((msg, i) => (
            <div
              key={i}
              className={`chat-msg ${msg.sender}`}
              dangerouslySetInnerHTML={{ __html: msg.text }}></div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder={translation('type_message')}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-truncate w-100"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            rows="1"
          />
          <button onClick={handleSend} disabled={isLoading || isTyping}>
            {translation('send')}
          </button>
        </div>
      </div>

      {/* Toggle button */}
      <button
        className="chatbot-toggle"
        onClick={toggleChat}
        style={{ bottom }}
        aria-label="Open Chatbot">
        <i className={`fa fa-2x fa-${isOpen ? 'close' : 'comments'}`} style={{ color: '#000' }} />
        {/* <i className="fa fa-2x fa-comments" style={{ color: '#000' }} /> */}
      </button>
    </>
  );
}
