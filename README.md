## Code One



## 🚀 Features

- ✍️ **Code Editor**: Monaco-powered editor with syntax highlighting, themes, and font size control.
- 🧑‍💻 **Authentication**: Secure login/signup with Clerk.
- 🗂️ **Snippets**: Save, share, and comment on code snippets.
- ⚡ **Code Execution**: Run code in multiple languages via Piston API.
- ⭐ **Favorites**: Star and manage your favorite snippets.
- 💎 **Pro Subscription**: Unlock advanced features with Lemon Squeezy payments.
- 🌙 **Beautiful UI**: Responsive, dark-themed, and accessible.

---

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/)
- [Convex](https://convex.dev/) (Database & Functions)
- [Clerk](https://clerk.com/) (Authentication)
- [Lemon Squeezy](https://www.lemonsqueezy.com/) (Payments)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Nandkumar-Ladani23/Code_One.git
cd Code_One
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root and add your secrets:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CONVEX_DEPLOY_KEY=your_convex_deploy_key
LEMONSQUEEZY_API_KEY=your_lemonsqueezy_api_key
# ...other secrets
```
**Never commit your `.env` files!**

### 4. Run the development server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📝 Project Structure

```
Code_One/
├── convex/           # Convex backend functions & schema
├── public/           # Static assets (images, icons, etc.)
├── src/
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   ├── hooks/        # Custom hooks
│   ├── store/        # Zustand stores
│   └── types/        # TypeScript types
├── .env.local        # Environment variables (not committed)
├── package.json      # Project metadata & scripts
└── README.md         # This file
```

---

## 🛡️ Security & Best Practices
- **Secrets:** All API keys and secrets must be stored in `.env.local` and never committed.
- **.gitignore:** The repo is set up to ignore `.env*` files by default.
- **PRs:** Please open issues or pull requests for improvements or bug fixes.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 💡 Credits
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Clerk](https://clerk.com/)
- [Convex](https://convex.dev/)
- [Lemon Squeezy](https://www.lemonsqueezy.com/)
- [Piston API](https://github.com/engineer-man/piston)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

> Made with ❤️ by Nandkumar Ladani
