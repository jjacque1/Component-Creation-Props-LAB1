# Project Title:
Component Creation & Props

# My Solution ScreenShot:

![alt text](ProjectScreenShot.png)

# Project Requirements:

Component Implementation:

Component Testing:

Component Composition:

Documentation:


# Before Starting:

1. Create a new React TypeScript project using Vite:

  - npm create vite@latest component-library -- --template react-ts
  - cd component-library
  - npm install

2. Create Folder Structure:

src/
  components/
    AlertBox/
      AlertBox.tsx
      AlertBox.test.tsx
    UserProfileCard/
      UserProfileCard.tsx
      UserProfileCard.test.tsx
    ProductDisplay/
      ProductDisplay.tsx
      ProductDisplay.test.tsx
  types/
    index.ts

# Boiler Plate Code:

- # Boiler Plate Code:Create an AlertBox component that can display different types of alerts (success, error, warning, info) with customizable messages.

// types/index.ts
export type AlertType = 'success' | 'error' | 'warning' | 'info';
 
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

- # Create a UserProfileCard component that displays user information with optional sections.

// types/index.ts
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
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

- # Create a ProductDisplay component that shows product information with configurable display options.

// types/index.ts
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
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}


# How to Use:

1. cd into your project folder in vscode, run npm run dev
2. app will open in defalut browser
3. you can click the blue "Edit Profile" button to display dynamic alerts for each profile
4. you can click the green "Add to Cart" button to diaplay dynamic shopping cart messages
5. click the "xxx" to the right of you screen to display dynamic exit messages

# Challenges:

1. I struggled getting Tailwind to work properly, I initially deleted the App.css and the index.css that is automatically created when you download reach + vite. I had to reCreated both files manually. Then i had to Download tailwind manually in the terminal, make some changes inside postcss.config.js and tailwind.config.js, added @tailwind base;
@tailwind components;
@tailwind utilities; inside index.css before tailwind could work. 

2. I had to go back to previous lesson on interface to remember how to create the user interface for the UserProfileCardProps interface, same with product interface for ProductDisplayProps interface.

3. Destructuring props was also a challenge i faced, I tried to do it independently but nothing was working so i had to look at the example in Lesson 2/3.


# Relection: 

1. How did you handle optional props in your components?

2. What considerations did you make when designing the component interfaces?
3. How did you ensure type safety across your components?
4. What challenges did you face when implementing component composition?

# acknowledgement

