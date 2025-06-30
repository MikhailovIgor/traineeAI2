# User Management Application

A modern, responsive React TypeScript application for managing user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com). Built with Vite, React 19, TypeScript, and CSS Modules.

## 🚀 Features

- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🔍 Real-time Search**: Filter users by name, email, username, company, or city
- **👥 User Management**: Create, read, update, and delete user records
- **🎨 Modern UI**: Beautiful glassmorphism design with smooth animations
- **⚡ TypeScript**: Full type safety and better developer experience
- **🔄 Real-time Updates**: Optimistic UI updates with proper error handling
- **♿ Accessibility**: Keyboard navigation and screen reader support
- **🎯 CSS Modules**: Scoped styling for better maintainability

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Styling**: CSS Modules with modern features (Grid, Flexbox, CSS Variables)
- **API**: JSONPlaceholder REST API

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd traineeAI2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── UserCard.tsx     # User card display component
│   ├── UserCard.module.css # Component-specific styles
│   ├── UserForm.tsx     # Create/edit user form
│   ├── UserForm.module.css # Form-specific styles
│   ├── UserDetail.tsx   # Detailed user view modal
│   ├── UserDetail.module.css # Modal-specific styles
│   ├── SearchBar.tsx    # Search functionality
│   ├── SearchBar.module.css # Search-specific styles
│   ├── LoadingSpinner.tsx # Loading states
│   ├── LoadingSpinner.module.css # Spinner-specific styles
│   ├── ErrorMessage.tsx # Error handling
│   └── ErrorMessage.module.css # Error-specific styles
├── hooks/               # Custom React hooks
│   └── useUsers.ts      # User data management hook
├── services/            # API services
│   └── api.ts           # HTTP client and API calls
├── styles/              # Shared styles
│   └── global.module.css # Global button and shared styles
├── types/               # TypeScript type definitions
│   └── user.ts          # User data interfaces
├── App.tsx              # Main application component
├── App.module.css       # App-specific styles
├── index.css            # Global styles
└── main.tsx             # Application entry point
```

## 🎯 Key Components

### UserCard
Displays user information in a responsive card format with action buttons for view, edit, and delete operations.

### UserForm
Comprehensive form for creating and editing users with validation and error handling.

### UserDetail
Modal component showing detailed user information with clickable links for email, phone, and website.

### SearchBar
Real-time search functionality with debouncing for optimal performance.

## 🎨 CSS Modules Implementation

The application uses CSS Modules for better style organization and scoping:

- **Component-scoped styles**: Each component has its own `.module.css` file
- **Global shared styles**: Common styles like buttons are in `global.module.css`
- **No style conflicts**: CSS Modules automatically scope class names
- **Better maintainability**: Styles are co-located with components
- **Type safety**: TypeScript support for CSS class names

### Style Organization

```typescript
// Component with CSS Modules
import styles from './Component.module.css';
import globalStyles from '../styles/global.module.css';

// Usage
<div className={styles.container}>
  <button className={`${globalStyles.btn} ${globalStyles.btnPrimary}`}>
    Click me
  </button>
</div>
```

## 🔧 API Integration

The application integrates with the JSONPlaceholder API to provide:

- **GET /users** - Fetch all users
- **GET /users/:id** - Fetch specific user
- **POST /users** - Create new user
- **PUT /users/:id** - Update existing user
- **DELETE /users/:id** - Delete user

## 🎨 Design Features

- **Glassmorphism**: Modern glass-like UI elements with backdrop blur
- **Gradient Backgrounds**: Beautiful color gradients throughout the app
- **Smooth Animations**: Hover effects and transitions for better UX
- **Responsive Grid**: CSS Grid layout that adapts to different screen sizes
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **CSS Modules**: Scoped styling for better maintainability

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔍 Search Functionality

The search feature filters users by:
- Name
- Email address
- Username
- Company name
- City

Search is debounced (300ms delay) to optimize performance.

## 🎯 User Actions

### View User
- Click the eye icon (👁️) to view detailed user information
- Opens a modal with comprehensive user data
- Includes clickable links for contact information

### Edit User
- Click the edit icon (✏️) to modify user information
- Form pre-populated with current user data
- Real-time validation with error messages

### Delete User
- Click the delete icon (🗑️) to remove a user
- Confirmation dialog prevents accidental deletions
- Optimistic UI updates for better UX

### Create User
- Click "Add New User" button to create a new user
- Comprehensive form with all required fields
- Client-side validation before submission

## 🛡️ Error Handling

- Network error handling with retry functionality
- Form validation with real-time feedback
- User-friendly error messages
- Graceful fallbacks for failed operations

## ♿ Accessibility

- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels
- Focus management
- High contrast design

## 🔮 Future Enhancements

- [ ] Pagination for large datasets
- [ ] Advanced filtering options
- [ ] Export functionality (CSV, PDF)
- [ ] Bulk operations
- [ ] User authentication
- [ ] Offline support with service workers
- [ ] Dark mode toggle
- [ ] Data visualization charts
- [ ] Styled Components integration option
- [ ] CSS-in-JS solution

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue in the repository.
