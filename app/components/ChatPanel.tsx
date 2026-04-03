"use client";

import { useState, useRef, useEffect } from "react";
import { getApiUrl, API_CONFIG } from "@/app/config/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  role: "user" | "assistant";
  content: string;
  documents?: Array<{
    content: string;
    metadata?: Record<string, any>;
  }>;
}

export default function ChatPanel() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) setIsExpanded(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isExpanded]);

  const sendQuestion = async (question: string) => {
    try {
      const url = getApiUrl(API_CONFIG.ENDPOINTS.RAG_QUERY);
      console.log("API 요청:", url, { query: question });
      
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          query: question,
          maxResults: 3 
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API 응답 오류:", response.status, errorText);
        throw new Error(`API 요청 실패: ${response.status}`);
      }

      const apiResponse = await response.json();
      console.log("API 응답:", apiResponse);
      
      // ApiResponseDto 구조 처리
      if (!apiResponse.success) {
        return {
          answer: apiResponse.error || "오류가 발생했습니다.",
          documents: []
        };
      }
      
      const data = apiResponse.data;
      return {
        answer: data.answer || "응답을 받지 못했습니다.",
        documents: data.relevantDocuments || []
      };
    } catch (error) {
      console.error("API 요청 오류:", error);
      if (error instanceof TypeError && error.message.includes("fetch")) {
        return {
          answer: "백엔드 서버에 연결할 수 없습니다. 서버가 실행 중인지 확인해주세요. (http://localhost:8080)",
          documents: []
        };
      }
      return {
        answer: "죄송합니다. 현재 응답을 받을 수 없습니다. 잠시 후 다시 시도해주세요.",
        documents: []
      };
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isSending) return;
    
    const question = input.trim();
    setIsSending(true);
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");
    setIsTyping(true);
    if (!isExpanded) setIsExpanded(true);

    const result = await sendQuestion(question);
    setIsTyping(false);
    setIsSending(false);
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: result.answer, documents: result.documents },
    ]);
  };

  const handleSuggestion = async (q: string) => {
    if (isSending) return;
    
    setIsSending(true);
    setMessages((prev) => [...prev, { role: "user", content: q }]);
    setIsTyping(true);
    if (!isExpanded) setIsExpanded(true);

    const result = await sendQuestion(q);
    setIsTyping(false);
    setIsSending(false);
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: result.answer, documents: result.documents },
    ]);
  };

  return (
    <>
      {/* Backdrop when expanded */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] animate-fade-in"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Chat bar container - always at bottom center */}
      <div
        className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isExpanded
            ? "bottom-6 left-1/2 -translate-x-1/2 w-[720px] max-w-[92vw]"
            : "bottom-6 left-1/2 -translate-x-1/2 w-[600px] max-w-[90vw]"
        }`}
      >
        {/* Expanded messages area */}
        {isExpanded && (
          <div
            className="bg-surface/95 backdrop-blur-md border border-border-light shadow-2xl mb-3 overflow-hidden animate-fade-up"
            style={{
              borderRadius: "16px",
              maxHeight: "min(480px, 60vh)",
              boxShadow: "0 24px 80px -12px rgba(0,0,0,0.12)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border-light">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent" style={{ borderRadius: "50%" }} />
                <span className="font-mono text-[11px] tracking-[0.15em] text-muted-light uppercase">
                  AI Assistant
                </span>
                <span
                  className="font-mono text-[9px] text-muted px-1.5 py-0.5 bg-background-warm border border-border-light"
                  style={{ borderRadius: "4px" }}
                >
                  RAG
                </span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-muted hover:text-foreground transition-colors font-mono text-[11px] tracking-wider cursor-pointer px-2 py-0.5 hover:bg-background-warm"
                style={{ borderRadius: "4px" }}
              >
                ESC
              </button>
            </div>

            {/* Messages */}
            <div className="overflow-y-auto px-5 py-4 space-y-4" style={{ maxHeight: "min(400px, 50vh)" }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 text-[13px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-foreground text-surface"
                        : "bg-background-warm border border-border-light text-foreground"
                    }`}
                    style={{ borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px" }}
                  >
                    {msg.role === "user" ? (
                      <div className="whitespace-pre-wrap break-words">{msg.content}</div>
                    ) : (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                          li: ({ children }) => <li className="ml-2">{children}</li>,
                          code: ({ inline, children, ...props }: any) =>
                            inline ? (
                              <code className="bg-accent-subtle px-1.5 py-0.5 rounded text-[12px] font-mono" {...props}>
                                {children}
                              </code>
                            ) : (
                              <code className="block bg-accent-subtle px-3 py-2 rounded text-[12px] font-mono overflow-x-auto my-2" {...props}>
                                {children}
                              </code>
                            ),
                          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                          em: ({ children }) => <em className="italic">{children}</em>,
                          a: ({ children, href }) => (
                            <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-accent-bright">
                              {children}
                            </a>
                          ),
                          h1: ({ children }) => <h1 className="text-[16px] font-semibold mb-2 mt-3 first:mt-0">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-[15px] font-semibold mb-2 mt-3 first:mt-0">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-[14px] font-semibold mb-2 mt-2 first:mt-0">{children}</h3>,
                          blockquote: ({ children }) => (
                            <blockquote className="border-l-2 border-border pl-3 my-2 text-muted-light italic">
                              {children}
                            </blockquote>
                          ),
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className="bg-background-warm border border-border-light px-4 py-3"
                    style={{ borderRadius: "16px 16px 16px 4px" }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-muted animate-float" style={{ borderRadius: "50%", animationDelay: "0s" }} />
                      <span className="w-1.5 h-1.5 bg-muted animate-float" style={{ borderRadius: "50%", animationDelay: "0.15s" }} />
                      <span className="w-1.5 h-1.5 bg-muted animate-float" style={{ borderRadius: "50%", animationDelay: "0.3s" }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>
        )}

        {/* Suggestion chips - shown when not expanded and no messages */}
        {!isExpanded && messages.length === 0 && (
          <div className="flex justify-center gap-2 mb-3 animate-fade-up">
            {[
              "어떤 프로젝트를 했나요?",
              "기술 스택은?",
              "경력을 알려주세요",
            ].map((q) => (
              <button
                key={q}
                onClick={() => handleSuggestion(q)}
                className="px-3 py-1.5 text-[11px] font-mono text-muted bg-surface/80 backdrop-blur-sm border border-border-light hover:border-accent/30 hover:text-foreground transition-all cursor-pointer shadow-sm"
                style={{ borderRadius: "20px" }}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input bar - ChatGPT style with prism border */}
        <div className="prism-border" style={{ borderRadius: "24px" }}>
          <div
            className="flex items-center gap-3 bg-surface px-5 py-3.5 shadow-lg"
            style={{
              borderRadius: "24px",
              boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08)",
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              onFocus={() => {
                if (!isExpanded && messages.length > 0) {
                  setIsExpanded(true);
                }
              }}
              onClick={() => {
                if (!isExpanded && messages.length > 0) {
                  setIsExpanded(true);
                }
              }}
              placeholder="저에 대해 무엇이든 물어보세요..."
              className="flex-1 bg-transparent text-[14px] outline-none placeholder:text-muted font-sans"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isSending}
              className="w-8 h-8 flex items-center justify-center bg-foreground text-surface disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer flex-shrink-0 hover:bg-accent"
              style={{ borderRadius: "10px" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
