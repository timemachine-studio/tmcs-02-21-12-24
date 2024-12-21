export interface Message {
  id: number;
  content: string;
  isAI: boolean;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  showHistory: boolean;
}

export interface ChatActions {
  handleSendMessage: (message: string) => Promise<void>;
  setShowHistory: (show: boolean) => void;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

export interface ShowHistoryProps {
  showHistory: boolean;
  onToggle: () => void;
}

export interface MessageProps {
  content: string;
  isLoading?: boolean;
}