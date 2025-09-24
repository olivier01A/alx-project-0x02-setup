// interfaces/index.ts

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}


// interfaces/index.ts

export interface PostProps {
  title: string;
  content: string;
  userId: number;
  id?: number; // optional, in case you want to store post ID
}
