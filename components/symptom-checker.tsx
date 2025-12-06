"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type Language, getTranslation } from "@/lib/i18n";
import { Send, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface SymptomCheckerProps {
  language: Language;
}

const suggestedQuestions: Record<Language, string[]> = {
  uz: [
    "Bosh og‘rig‘iga nima yordam beradi?",
    "Isitma tushmayapti, nima qilay?",
    "Ichim og‘riyapti, sababi nima?",
  ],
  ru: [
    "Что помогает от головной боли?",
    "Температура не спадает, что делать?",
    "Болит живот, в чём может быть причина?",
  ],
  en: [
    "What helps with headaches?",
    "Fever won't go down, what should I do?",
    "Stomach pain — what could it be?",
  ],
};

export function SymptomChecker({ language }: SymptomCheckerProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/health-advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          language,
          messages: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.response || "Javob olishda xatolik yuz berdi.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "Internet aloqasi yo‘q yoki server javob bermadi.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-180px)] md:max-h-[680px] bg-card rounded-xl border border-border overflow-hidden shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b bg-primary/5 shrink-0">
        <Sparkles className="h-5 w-5 text-primary" />
        <p className="font-semibold">Sog‘liq maslahatchisi</p>
      </div>

      <ScrollArea className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4 min-h-full">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full min-h-96 text-center">
              <div className="text-6xl mb-4">Sog‘liq</div>
              <p className="text-lg font-medium mb-2">
                Salom! Qanday yordam bera olaman?
              </p>
              <div className="w-full max-w-md space-y-3 mt-8">
                {suggestedQuestions[language].map((q, i) => (
                  <Button
                    key={i}
                    variant="secondary"
                    className="w-full justify-start text-left h-auto py-3 px-4 text-sm"
                    onClick={() => setInput(q)}
                  >
                    {q}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-sm break-words ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted border border-border"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-muted border px-4 py-3 rounded-2xl flex items-center gap-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:150ms]" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                    <span className="text-sm">Yozmoqda...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} className="h-1" />
            </>
          )}
        </div>
      </ScrollArea>

      <div className="border-t border-border bg-card p-4 shrink-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <Input
            placeholder="Xabaringizni yozing..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            className="h-12 text-base"
            autoFocus
          />
          <Button
            type="submit"
            disabled={loading || !input.trim()}
            size="icon"
            className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
