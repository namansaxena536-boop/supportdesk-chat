# SupportDesk Chat

An open-source, real-time customer support chat app. Customers chat with support agents live, and admins see stats on conversations and response times.

> 🚧 Work in progress: being built step by step. Follow the commits to see how it evolves.

## Features (planned)

- [ ] Chat UI with conversation list, message thread and composer
- [ ] Sign up / login with JWT (httpOnly cookies)
- [ ] Roles: customer, agent, admin
- [ ] Real-time messaging with Socket.io (rooms, typing indicator, online status)
- [ ] Message history with cursor-based pagination and infinite scroll
- [ ] Admin dashboard: chats per day, average response time
- [ ] Unit and component tests (Jest + React Testing Library)
- [ ] Dockerized, with CI/CD on GitHub Actions
- [ ] Deployed on Azure

## Tech stack

| Layer | Tech |
| --- | --- |
| Frontend | Next.js (App Router), React, TypeScript, Tailwind CSS, Redux Toolkit |
| Backend | Node.js, Express, TypeScript, zod |
| Database | MongoDB (Mongoose) |
| Real-time | Socket.io |
| Testing | Jest, React Testing Library, MSW |
| DevOps | Docker, docker-compose, GitHub Actions, Azure |

## Architecture

```
┌──────────────┐   REST (HTTPS)   ┌──────────────┐       ┌──────────┐
│  Next.js app │ ───────────────▶ │  Express API │ ────▶ │ MongoDB  │
│  (web/)      │ ◀──── Socket.io ─│  (server/)   │       └──────────┘
└──────────────┘                  └──────────────┘
```

## Project structure

```
supportdesk-chat/
├── web/      # Next.js frontend
└── server/   # Express + Socket.io backend
```

## Getting started

_Setup instructions will be added as the project grows._

## License

MIT
