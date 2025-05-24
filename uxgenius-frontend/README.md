# UXGenius AI Frontend

A modern, AI-powered user experience design platform built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- Modern, responsive UI built with Next.js and Tailwind CSS
- AI-powered UX design assistance
- Real-time collaboration tools
- Component library powered by Flowbite
- Type-safe development with TypeScript
- Hot toast notifications for better user feedback

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Flowbite React
- **Icons:** Lucide React
- **Notifications:** React Hot Toast
- **Utilities:** clsx

## 📋 Prerequisites

- Node.js 18.x or later
- npm 9.x or later
- Git

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/uxgenius_AI.git
   cd uxgenius-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_API_URL=http://localhost:8000
   # Add other required environment variables
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📁 Project Structure

```
uxgenius-frontend/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── lib/             # Utility functions and shared logic
├── public/          # Static assets
├── styles/          # Global styles and Tailwind config
└── types/           # TypeScript type definitions
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### TypeScript
TypeScript configuration is in `tsconfig.json`.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Fabrice - Initial work

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
- [Lucide Icons](https://lucide.dev/)
