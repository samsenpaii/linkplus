LinkPlus
LinkPlus is a modern web application for saving, organizing, and managing web links. Users can authenticate via Google OAuth, save URLs, and view them in a visually appealing two-column grid layout. The app automatically generates titles and descriptions for links using the Google Gemini API, stores data in MongoDB, and provides a dialog-based interface for viewing link details. Built with Next.js, Tailwind CSS, and Radix UI, LinkPlus offers a responsive and user-friendly experience.
Deployed App: LinkPlus
Features

User Authentication: Secure login via Google OAuth using NextAuth.js.
Link Management: Save URLs with auto-generated titles and descriptions via Gemini API.
Two-Column Grid: Display links in a responsive grid (first column list, second flex column).
Dialog Interface: Click links to view details (title, description, hostname) in a dialog.
MongoDB Storage: Persistent storage of user-specific links.
Responsive Design: Mobile-friendly UI with Tailwind CSS and Radix UI components.
Dark/Light Mode: Theme switching with next-themes.

Tech Stack

Frontend: Next.js 15.2.4, React 19.0.0, Tailwind CSS 4, Radix UI (@radix-ui/react-*), lucide-react for icons.
Backend: Next.js API routes, MongoDB (via mongoose 8.13.1).
Authentication: NextAuth.js 5.0.0-beta.25 (Google OAuth).
AI Integration: Google Gemini API (@google/generative-ai 0.24.1).
Utilities: class-variance-authority, clsx, tailwind-merge for styling, tw-animate-css for animations.
Dev Tools: ESLint 9, TypeScript 5, PostCSS for Tailwind.

Prerequisites

Node.js (v18 or later)
MongoDB (local or Atlas)
Google Cloud Console account (for OAuth credentials)
Google AI Studio account (for Gemini API key)

Setup Instructions
Follow these steps to set up LinkPlus locally:

Clone the Repository:
git clone https://github.com/<your-username>/linkplus.git
cd linkplus


Install Dependencies:
npm install


Set Up Environment Variables:

Copy env.example to .env.local:cp env.example .env.local


Edit .env.local with your values:# Generate with `openssl rand -base64 32`
AUTH_SECRET=your-random-secret

# From Google Cloud Console (OAuth 2.0 Client IDs)
AUTH_GOOGLE_ID=your-google-client-id
AUTH_GOOGLE_SECRET=your-google-client-secret

# MongoDB connection string (e.g., mongodb+srv://<user>:<password>@cluster0.mongodb.net/linkplus)
MONGODB_URI=your-mongodb-uri

# App URL (http://localhost:3000 for development)
NEXTAUTH_URL=http://localhost:3000

# From Google AI Studio
GOOGLE_AI_API_KEY=your-gemini-api-key




Run the Development Server:
npm run dev

Open http://localhost:3000 in your browser.

Authenticate:

Sign in with Google OAuth to save and view links.
Use the "Add Link" button to save URLs, which appear in the two-column grid.



Project Structure

src/app/: Next.js App Router pages (e.g., my/page.tsx for link grid).
src/components/: React components (AddLinkBtn, Content, Link).
src/app/api/: API routes (getLink for POST/GET).
src/app/db/: MongoDB connection and models (links schema).
env.example: Environment variable template.

Troubleshooting

Empty Link List:
Verify MONGODB_URI connects to a database with links collection.
Ensure userId from NextAuth.js matches MongoDB entries (e.g., "105619902759746318627").
Test API: POST http://localhost:3000/api/getLink with {"url":"https://example.com","userId":"your-user-id"}.


Auth Issues:
Check AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET, NEXTAUTH_URL in .env.local.
Ensure Google OAuth redirects to http://localhost:3000/api/auth/callback/google.


API Errors:
Confirm GOOGLE_AI_API_KEY is valid (1,500 requests/day limit).
Check server logs for GET userId.



Deployment
The app is deployed at https://linkplus-lmxn.vercel.app/. To deploy your own:

Push to a GitHub repository.
Connect to Vercel, set environment variables in Vercel dashboard.
Deploy with vercel --prod.

Contributing
Contributions are welcome! Please:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m 'Add feature').
Push to branch (git push origin feature/your-feature).
Open a pull request.

License
MIT License. See LICENSE for details.
Contact
For issues or suggestions, open a GitHub issue or contact [your-email@example.com].
