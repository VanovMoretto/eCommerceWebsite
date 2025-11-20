# Quick Start Guide

## Running the Application

### 1. Start the Backend Server

```bash
cd backend
npm install
npm run dev
```

The backend will start on `http://localhost:5000`

### 2. Start the Frontend (in a new terminal)

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:5173`

### 3. Access the Application

Open your browser and navigate to: `http://localhost:5173`

## Production Build

### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd frontend
npm run build
# Serve the dist folder with your preferred static file server
```

## Features Implemented

- ✅ React/TypeScript frontend with Vite
- ✅ Node.js/Express backend with TypeScript
- ✅ RESTful API for products
- ✅ 10 sample clothing products
- ✅ Shopping cart functionality
- ✅ Responsive design
- ✅ Error handling and loading states
- ✅ Modern gradient UI design

## Tech Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- CSS3

**Backend:**
- Node.js
- Express
- TypeScript
- CORS

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:category` - Get products by category
