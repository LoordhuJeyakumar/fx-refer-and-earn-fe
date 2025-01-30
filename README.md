# React-based Refer and Earn Frontend Application

This project is a React-based frontend application for a Refer and Earn program. It provides a user interface for referral management, including features like user authentication, referral submission, and FAQ sections.

## Repository Structure

The repository is structured as follows:

```
.
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── components
│   │   ├── BackToTop.jsx
│   │   ├── ContactUs.jsx
│   │   ├── Footer.jsx
│   │   ├── FrequentlyAskedQuestions.jsx
│   │   ├── LogoComponent.jsx
│   │   ├── Navbar.jsx
│   │   ├── NotFound.jsx
│   │   ├── PopoverComponent.jsx
│   │   ├── PopupModalForm.jsx
│   │   ├── Refer.jsx
│   │   ├── ReferAndEarnNavbar.jsx
│   │   ├── ReferButton.jsx
│   │   ├── ReferelBenifits.jsx
│   │   ├── ReferProcess.jsx
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   ├── Support.jsx
│   │   └── Tabs.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   └── ReferAndEarnLandingPage.jsx
│   └── routes
│       └── appRoutes.jsx
├── tailwind.config.js
└── vite.config.js
```

### Key Files:

- `src/main.jsx`: The entry point of the application.
- `src/App.jsx`: The main React component that sets up the application structure.
- `src/pages/ReferAndEarnLandingPage.jsx`: The main landing page for the Refer and Earn program.
- `src/components/`: Directory containing reusable React components.
- `package.json`: Defines project dependencies and scripts.
- `vite.config.js`: Configuration file for Vite.
- `tailwind.config.js`: Configuration file for Tailwind CSS.

## Usage Instructions

### Installation

1. Ensure you have Node.js installed (version 14 or higher).
2. Clone the repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run the following command to install dependencies:

```bash
npm install
```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

This will start the Vite development server, and you can access the application in your browser at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To create a production build, run:

```bash
npm run build
```

This will generate optimized production files in the `dist` directory.

### Linting

To lint the codebase, run:

```bash
npm run lint
```

This will run ESLint with the configured rules for React and React Hooks.

### Configuration

The application uses several configuration files:

- `vite.config.js`: Configure Vite settings and plugins.
- `tailwind.config.js`: Customize Tailwind CSS settings.
- `postcss.config.js`: Set up PostCSS plugins, including Tailwind CSS and Autoprefixer.

### Key Components

1. `Navbar`: The main navigation component.
2. `ReferAndEarnLandingPage`: The main page for the Refer and Earn program.
3. `FrequentlyAskedQuestions`: A component displaying FAQs in an accordion format.
4. `PopupModalForm`: A modal form for submitting referrals.

### API Integration

The application integrates with a backend API. The base URL for API requests is set to `http://localhost:3000`. Ensure that your backend server is running and accessible at this address, or update the `API_BASE_URL` constant in the `PopupModalForm.jsx` file to match your backend URL.

### Troubleshooting

1. If you encounter issues with missing dependencies, try deleting the `node_modules` folder and running `npm install` again.
2. For API-related issues, check that your backend server is running and the `API_BASE_URL` is correctly set.
3. If styles are not applying correctly, ensure that Tailwind CSS is properly configured in your `postcss.config.js` and `tailwind.config.js` files.

## Data Flow

The application follows a typical React data flow:

1. User interactions trigger state changes or API calls in components.
2. API calls are made using Axios to the backend server.
3. Responses update the component state, triggering re-renders.
4. The updated state is passed down to child components as props.

```
[User Interaction] -> [Component State/Props] -> [API Call] -> [State Update] -> [Re-render]
```

Key data flow points:
- User authentication (SignIn/SignUp components)
- Referral submission (PopupModalForm component)
- FAQ data display (FrequentlyAskedQuestions component)

## Infrastructure

This frontend application does not have a dedicated infrastructure stack. It is designed to be served as static files from a web server or CDN after building. The backend API it communicates with would typically be hosted separately.