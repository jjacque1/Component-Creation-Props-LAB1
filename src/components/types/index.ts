//=====================ALERT BOX INTERFACE=============================

export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

//======================USER PROFILE INTERFACE===================

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (id: string) => void;
  children?: React.ReactNode;
}

//=========================PRODUCT INTERFACE ======================

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  freeDelivery?: string;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}
