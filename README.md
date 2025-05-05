🎓 SmartDaro Frontend

SmartDaro Frontend is the user-facing interface for the SmartDaro system — a smart academic management platform powered by AI. Built with React and styled for performance and clarity, it allows students, lecturers, and administrators to interact with features like room allocation, timetables, and real-time alerts.

    🔗 SmartDaro Backend – Built with Node.js & Express.js.
    [**Live Demo**](https://smartdarofronted.vercel.app/)

🖼️ Frontend Preview

Here’s how the SmartDaro UI looks and functions:
![DEMO](https://i.postimg.cc/KY3vbBcG/smararo-1.jpg)

✅ AI-Based Room Allocation Interface
Interact with smart room assignments based on availability and preferences.

✅ Dynamic Timetable Viewer
Students and lecturers can view personalized, AI-generated schedules in a clean calendar interface.

✅ Real-Time Alerts & Notifications
Get notified instantly about room changes, timetable conflicts, or admin announcements.

✅ Modern UI
Responsive, accessible, and mobile-ready design built for ease of use.
🧰 Tech Stack

    Framework: React.js + Vite

    Routing: React Router

    Styling: Tailwind CSS / ShadCN UI / Custom CSS

    State Management: Context API or Redux (if used)

    API Communication: Axios or Fetch

    Notifications: Toast / Sonner / Custom Alerts

📁 Project Structure

src/
├── components/      # Reusable UI components
├── pages/           # Main page views (Home, Dashboard, Timetable, etc.)
├── assets/          # Images and icons
├── hooks/           # Custom React hooks
├── services/        # API service logic
├── App.jsx          # Root component
└── main.jsx         # Vite entry point

🔐 Auth Integration

SmartDaro uses JWT authentication to manage sessions and roles (student, lecturer, admin). On login, a token is stored securely and used for authorized API requests.
📈 Planned Enhancements

    🔒 Role-Based Dashboards

    📊 Analytics & Usage Statistics

    📤 Push/SMS Notification Integration

    🧠 Trainable AI Interface

    🧾 Printable Timetables & Reports