# 🎨 Student Performance Prediction - Frontend

A modern, responsive React frontend for the Student Performance Prediction System. Built with React, Vite, and Tailwind CSS for a seamless user experience.

## ✨ Features

- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🎯 Interactive Form**: User-friendly form with real-time validation
- **📊 Animated Results**: Beautiful animated prediction results with circular progress indicators
- **🎨 Modern UI**: Clean, professional design using Tailwind CSS
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🔄 Real-time Updates**: Instant feedback and error handling

## 🛠️ Technology Stack

- **React 19**: Latest version with modern hooks and features
- **Vite**: Fast build tool and development server
- **Tailwind CSS v4**: Utility-first CSS framework
- **JavaScript ES6+**: Modern JavaScript features
- **PostCSS**: CSS processing with autoprefixer

## 🚀 Quick Start

### Prerequisites

- Node.js 16 or higher
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to http://localhost:5173

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── StudentForm.jsx  # Main form component
│   └── ResultsDisplay.jsx # Results visualization
├── services/            # API and external services
│   └── api.js          # Backend API integration
├── assets/             # Static assets
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Components

### StudentForm.jsx
- **Purpose**: Collects student information for prediction
- **Features**:
  - Form validation
  - Error handling
  - Loading states
  - Responsive layout

### ResultsDisplay.jsx
- **Purpose**: Displays prediction results with visual feedback
- **Features**:
  - Animated score counter
  - Circular progress indicator
  - Performance analysis
  - Grade calculation
  - Print functionality

### API Service (api.js)
- **Purpose**: Handles communication with FastAPI backend
- **Features**:
  - Prediction requests
  - Health checks
  - Error handling
  - Response validation

## 🎯 Form Fields

The student form collects the following information:

| Field | Type | Options |
|-------|------|---------|
| Gender | Select | Male, Female |
| Race/Ethnicity | Select | Group A, B, C, D, E |
| Parental Education | Select | Some High School → Master's Degree |
| Lunch Type | Select | Standard, Free/Reduced |
| Test Preparation | Select | None, Completed |
| Reading Score | Number | 0-100 |
| Writing Score | Number | 0-100 |

## 🎨 Styling

### Tailwind CSS Configuration

The project uses Tailwind CSS v4 with custom configurations:

- **Custom Colors**: Primary and secondary color schemes
- **Typography**: Inter font family
- **Components**: Reusable button and input styles
- **Responsive**: Mobile-first responsive design

### Custom CSS Classes

```css
.btn-primary     # Primary action buttons
.btn-secondary   # Secondary action buttons
.input-field     # Form input styling
.card           # Card container styling
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the Frontend directory:

```env
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=Student Performance Prediction
```

### API Configuration

Update `src/services/api.js` to change the backend URL:

```javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Adaptive form layout (1 column on mobile, 2 columns on desktop)
- Flexible button sizing
- Optimized typography scaling
- Touch-friendly interface elements

## 🧪 Testing

### Manual Testing Checklist

- [ ] Form validation works for all fields
- [ ] API integration functions correctly
- [ ] Responsive design works on all screen sizes
- [ ] Loading states display properly
- [ ] Error handling works as expected
- [ ] Results animation plays smoothly

### Browser Compatibility

Tested and supported browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Static Hosting

The built files can be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload `dist` contents

## 🐛 Troubleshooting

### Common Issues

1. **Tailwind styles not loading**
   - Check PostCSS configuration
   - Verify Tailwind CSS installation

2. **API connection errors**
   - Ensure backend is running on port 8000
   - Check CORS configuration

3. **Build errors**
   - Clear node_modules and reinstall
   - Check for TypeScript errors

### Development Tips

- Use React Developer Tools for debugging
- Check browser console for errors
- Use network tab to monitor API calls
- Test on multiple screen sizes

## 🤝 Contributing

1. Follow React best practices
2. Use functional components with hooks
3. Maintain responsive design principles
4. Add proper error handling
5. Write clean, readable code

## 📄 License

This project is part of the Student Performance Prediction System and follows the same MIT License.

---

**Built with ⚛️ React and ❤️**
