type Role = "customer" | "agent" | "admin";
type ConversationStatus = "open" | "pending" | "closed";

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  text: string;
  createdAt: Date;
  readBy: string[]; // ids of users who have read it
}

interface Conversation {
  id: string;
  customer: User;
  agent?: User; // optional: not assigned yet
  status: ConversationStatus;
  messages: Message[];
}

function getUnreadCount(messages: Message[], userId: string): number {
  return messages.filter(
    (m) => m.senderId !== userId && !m.readBy.includes(userId)
  ).length;
}