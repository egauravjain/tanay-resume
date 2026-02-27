# Overview

This is a modern full-stack web application built as a personal portfolio/resume website for Tanay Jain, an AI Engineering student at Purdue University. The application showcases personal information, education, work experience, projects, and technical skills through an interactive and responsive web interface.

The project follows a monorepo structure with a React TypeScript frontend, Express.js backend, and PostgreSQL database integration using Drizzle ORM. The application is designed to display resume data dynamically and features a modern UI built with shadcn/ui components and Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript in strict mode
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Design System**: Consistent design tokens with neutral base colors and primary blue accent

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with JSON responses
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot module replacement and automatic restart with tsx

## Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Design**: Single table approach with JSONB columns for flexible data storage
- **Data Structure**: Structured resume data including personal info, education, experience, projects, and skills
- **Validation**: Zod schemas for runtime type checking and data validation

## Development Experience
- **Monorepo Structure**: Shared TypeScript types between frontend and backend
- **Path Aliases**: Configured for clean imports (@/ for client, @shared/ for shared code)
- **Hot Reload**: Vite HMR for frontend, tsx for backend development
- **Type Safety**: Full TypeScript coverage with strict compiler options

## Deployment Architecture
- **Build Process**: Vite builds frontend to dist/public, esbuild bundles backend to dist/
- **Static Assets**: Frontend served as static files in production
- **Environment**: NODE_ENV-based configuration for development vs production

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity for serverless environments
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migration and schema management tools
- **express**: Web application framework for Node.js
- **wouter**: Lightweight client-side routing for React

## UI and Styling
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe utility for managing CSS class variants
- **lucide-react**: Icon library with React components

## Data Management
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form handling with validation
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Runtime type validation and schema parsing

## Development Tools
- **vite**: Frontend build tool and development server
- **tsx**: TypeScript execution environment for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tools

## Date and Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx**: Utility for constructing className strings conditionally
- **nanoid**: URL-safe unique string ID generator