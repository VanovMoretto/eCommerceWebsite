# eCommerceWebsite

An e-commerce site focused on selling clothes, built with React/TypeScript frontend and Node.js/Express backend.

## 🛍️ Features

- Modern React/TypeScript frontend with Vite
- RESTful API backend with Express and TypeScript
- Responsive product catalog with detailed product cards
- Product categories (T-Shirts, Jeans, Hoodies, Dresses, etc.)
- Shopping cart functionality
- Beautiful gradient UI design
- Sample clothing products data

## 📁 Project Structure

```
eCommerceWebsite/
├── frontend/          # React/TypeScript frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── types/        # TypeScript interfaces
│   │   └── api/          # API service layer
│   └── ...
├── backend/           # Node.js/Express backend
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── models/       # Data models
│   │   └── data/         # Sample data
│   └── ...
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The backend server will start on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:5173`

### Building for Production

**Backend:**
```bash
cd backend
npm run build
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
```

## 📡 API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:category` - Get products by category

## 🎨 Technologies Used

### Frontend
- React 18
- TypeScript
- Vite
- CSS3 (with modern gradient designs)

### Backend
- Node.js
- Express
- TypeScript
- CORS

## 📝 Sample Product Categories

- T-Shirts
- Jeans
- Hoodies
- Dresses
- Pants
- Jackets
- Shirts
- Shorts
- Blazers
- Sweaters

## 🔧 Development

The project uses:
- TypeScript for type safety
- Hot Module Replacement (HMR) for fast development
- ESLint for code quality
- Separate frontend and backend for better organization

## 📄 License

ISC

