'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import './FloatingChatBot.scss';

export default function ChatWidget({ bottom, bottomBox, translation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');
  const chatBodyRef = useRef();

  const toggleChat = () => setIsOpen((prev) => !prev);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  const handleSend = useCallback(async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    const loadingMsg = { sender: 'ai', text: translation('typing') };

    setChat((prev) => [...prev, userMsg, loadingMsg]);
    setInput('');

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: input }
          ],
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const aiText = data.choices?.[0]?.message?.content || translation('ai_error');

      setChat((prev) => {
        const updated = [...prev];
        updated.pop(); // remove "Typing..."
        return [...updated, { sender: 'ai', text: aiText }];
      });
    } catch (error) {
      console.error('Fetch error:', error);

      setChat((prev) => {
        const updated = [...prev];
        updated.pop(); // remove "Typing..."
        return [...updated, { sender: 'ai', text: translation('ai_fetch_error') }];
      });
    }
  }, [input, translation]);

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const renderMessages = () =>
    chat.map((msg, i) => (
      <div key={i} className={`chat-msg ${msg.sender}`}>
        {msg.text}
      </div>
    ));

  return (
    <>
      <div
        className={`chatbot-box ${isOpen ? 'open' : ''}`}
        style={{
          bottom: bottomBox
        }}
      >
        <div className="chat-header">
          <span>{translation('assistant')}</span>
          <span onClick={toggleChat} style={{ cursor: 'pointer' }}>
            <i className="fa fa-2x fa-close" style={{ color: '#000' }} />
          </span>
        </div>

        <div className="chat-body" ref={chatBodyRef}>
          {renderMessages()}
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
          <button onClick={handleSend}>{translation('send')}</button>
        </div>
      </div>

      <button
        className="chatbot-toggle"
        onClick={toggleChat}
        style={{
          bottom: bottom
        }}
      >
        <i className="fa fa-2x fa-comments" style={{ color: '#000' }} />
      </button>
    </>
  );
}
