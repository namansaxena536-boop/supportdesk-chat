export type Role = "customer" | "agent" | "admin";
export type ConversationStatus = "open" | "pending" | "closed";
// Pick: keep only some fields. Useful for showing a sender in the chat.
export type UserPreview = Pick<User , "id" | "name" | "avatarUrl" >;
// Omit: remove some fields. Useful when creating a message (the server sets id and date).

type newMessage = Omit<Message , "id" | "createdAt" | "readyBy" >;
export interface ApiResponse<T>{
  data:T;
  error?:string;
}
export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  text: string;
  createdAt: Date;
  readBy: string[]; // ids of users who have read it
}

export interface Conversation {
  id: string;
  customer: User;
  agent?: User; // optional: not assigned yet
  status: ConversationStatus;
  messages: Message[];
}

export function getUnreadCount(messages: Message[], userId: string): number {
  return messages.filter(
    (m) => m.senderId !== userId && !m.readBy.includes(userId)
  ).length;
}
export function getLast<T>(items:T[]):T | undefined{
  return items.at(-1);
}