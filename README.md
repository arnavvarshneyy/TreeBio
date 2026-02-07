



🔥 TreeBio – Smart Link-in-Bio Platform

TreeBio is a dynamic link-in-bio web application where users can create a personal profile and manage all their social links and projects in one place. It provides full CRUD  functionality with real-time activity tracking for better engagement insights.
       
🚀 Features-

 1. Authentication with Clerk
       Secure login and user management using Clerk.
 2. CRUD for Links & Projects
       Add, update, delete social links and project URLs easily.
 3. Tap Analytics System
       Tracks how many times each link is clicked.
 4. IP Address Tracking
       Logs visitor IP addresses for activity monitoring and unique visit analysis.
 5. Activity Dashboard
       Users can view engagement stats for each link.
 6. Responsive UI
       Clean and mobile-friendly interface.  
 7. Fast & Scalable Architecture
       Built for performance and smooth user experience.
  
 🧠 Technical Highlights-
 
 1. Implemented CRUD operations for social links and projects.
 2. Built a tap tracking system to count link clicks in real time.
 3. Integrated IP logging to analyze visitor behavior.
 4. Designed a scalable backend API for managing user data.
 5. Optimized UI for fast interaction and clean UX.

 
 🛠 Tech Stack-
 
 Frontend:  Next.js
 Authentication: Clerk
 Backend: Node.js / API Routes
 Database: postgresql
 Styling: Tailwind CSS/ shadcn UI
 Deployment: Vercel



⚙️ Installation & Setup

1️⃣ Clone the repository

       git clone https://github.com/arnavvarshneyy/TreeBio.git
       cd TreeBio
      
2️⃣ Install dependencies

       npm install
      
 3️⃣ Setup environment variables 
Create a .env.local file and add:

       NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
       CLERK_SECRET_KEY=your_key_here
       DATABASE_URL=put_your_neon_key
       NODE_ENV=development
      
 4️⃣ Run the project
 
       npm run dev

 App will run on: http://localhost:3000


## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-                        app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
