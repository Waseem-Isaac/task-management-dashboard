# Boardly

A task management app for teams — create boards, manage tasks, and collaborate.

> **Note:** This is a learning project, not intended for enterprise or production use.

**Live:** [waseem-isaac.github.io/boardly](https://waseem-isaac.github.io/boardly/)

---

## Tech Stack

| Layer    | Technology                          | Hosting       |
|----------|-------------------------------------|---------------|
| Frontend | Angular v21                         | GitHub Pages  |
| Backend  | Node.js, Express                    | Vercel        |
| Database | MongoDB, Mongoose                   | MongoDB Atlas |
| Auth     | JWT, bcrypt, Nodemailer, Gmail      | —             |

> All services used are completely free.

---

## How It Works

A **Team Lead** creates a board and invites members to collaborate. Each board contains tasks that can be assigned, tracked, and moved across columns (e.g., To Do → In Progress → Done).

### Roles

| | Team Lead | Team Member |
|---|---|---|
| **How they join** | Self-registration | Invitation by a Team Lead |
| **Can send invitations** | ✅ | ❌ |

### Permissions

| Action | Team Lead | Team Member |
|---|---|---|
| Create a board | ✅ | ❌ |
| See a board | ✅ All boards | ✅ Only boards with their tasks |
| Create a task | ✅ | ✅ |
| Edit a task | ✅ Any task | ✅ Own tasks only |
| Assign a task | ✅ Any task | ✅ Own tasks only |
| Remove a task | ✅ Any task | ✅ Own tasks only |
| Move task across columns | ✅ | ✅ |
| Add/remove team members | ✅ | ❌ |
