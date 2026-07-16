# SkillZone

SkillZone is a modern, responsive online learning platform built with the latest web technologies to provide a seamless user experience for browsing and managing educational courses.

## 🚀 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS & DaisyUI
* **Animation:** Framer Motion
* **Authentication:** Better-Auth
* **Database:** MongoDB
* **Deployment:** Vercel

## ✨ Key Features

* **Course Discovery:** Interactive `CourseCard` components featuring thumbnails, category tags, duration, and pricing details.
* **Dynamic Animations:** Smooth entry and hover transitions implemented via Framer Motion for a premium feel.
* **User Authentication:** Integrated session management using `better-auth`.
* **Responsive Design:** Fully styled with Tailwind CSS and DaisyUI components for desktop and mobile consistency.

## 🛠 Getting Started

### Prerequisites

* Node.js (LTS version recommended)
* MongoDB Instance
* npm or yarn

### Installation

1.  Clone the repository or navigate to your project folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Set up your environment variables. Create a `.env.local` file in the root directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_connection_string_here
    BETTER_AUTH_SECRET=your_secret_key
    BETTER_AUTH_URL=http://localhost:3000
    ```
4.  Run the development server:
    ```bash
    npm run dev
    ```

## ⚙️ Environment Configuration

To successfully run this project, ensure the environment variables are correctly configured both in your local `.env.local` and your production deployment settings (e.g., Vercel Environment Variables).

* **Type Safety:** This project is built with a modular component architecture, utilizing specific type definitions located in `src/type/types.tsx` to ensure type safety across the entire application.