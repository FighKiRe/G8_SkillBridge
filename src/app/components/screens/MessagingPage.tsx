import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { Send, Building2 } from 'lucide-react';

const conversations = [
  {
    id: 1,
    name: 'TechStart Inc.',
    lastMessage: 'Great! Looking forward to your submission.',
    time: '2h ago',
    unread: 2,
    avatar: 'T',
  },
  {
    id: 2,
    name: 'Marketing Pro',
    lastMessage: 'Could you send the final draft by Friday?',
    time: '5h ago',
    unread: 0,
    avatar: 'M',
  },
  {
    id: 3,
    name: 'DevCorp',
    lastMessage: 'Thanks for applying! We\'ll review and get back to you.',
    time: '1d ago',
    unread: 1,
    avatar: 'D',
  },
];

const messages = [
  {
    id: 1,
    sender: 'employer',
    text: 'Hi Sarah! We received your design submission.',
    time: '10:30 AM',
  },
  {
    id: 2,
    sender: 'user',
    text: 'Thank you! I\'m happy to make any revisions if needed.',
    time: '10:35 AM',
  },
  {
    id: 3,
    sender: 'employer',
    text: 'The design looks fantastic! Just a minor adjustment to the color scheme on the hero section.',
    time: '11:00 AM',
  },
  {
    id: 4,
    sender: 'user',
    text: 'Absolutely! I\'ll update that today and send you the revised version.',
    time: '11:05 AM',
  },
  {
    id: 5,
    sender: 'employer',
    text: 'Great! Looking forward to your submission.',
    time: '11:10 AM',
  },
];

export default function MessagingPage() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setNewMessage('');
    }
  };

  return (
    <DashboardLayout role="graduate" userName="Sarah Chen">
      <div className="h-[calc(100vh-80px)] flex">
        {/* Conversations List */}
        <div className="w-80 border-r border-border bg-white">
          <div className="p-6 border-b border-border">
            <h2 className="text-xl font-bold">Messages</h2>
          </div>
          <ScrollArea className="h-[calc(100vh-160px)]">
            <div className="p-2">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`w-full p-4 rounded-lg text-left transition-colors mb-2 ${
                    selectedConversation === conversation.id
                      ? 'bg-primary/10'
                      : 'hover:bg-muted'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {conversation.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold truncate">{conversation.name}</h3>
                        {conversation.unread > 0 && (
                          <div className="w-5 h-5 bg-destructive rounded-full flex items-center justify-center text-xs text-white font-bold">
                            {conversation.unread}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                      <p className="text-xs text-muted-foreground mt-1">{conversation.time}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Messages Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-6 border-b border-border bg-white">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                T
              </div>
              <div>
                <h2 className="font-semibold text-lg">TechStart Inc.</h2>
                <p className="text-sm text-muted-foreground">Usually responds within 2 hours</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-4 max-w-3xl mx-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-md ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <p className={`text-xs text-muted-foreground mt-1 ${
                      message.sender === 'user' ? 'text-right' : 'text-left'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-6 border-t border-border bg-white">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-3 max-w-3xl mx-auto">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 h-12"
              />
              <Button type="submit" size="lg" className="h-12 px-6">
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
