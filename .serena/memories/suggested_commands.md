# ORPulse Development Commands

## Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production (runs vue-tsc for type checking + vite build)
- `npm run preview` - Preview production build locally

## Docker Deployment
- `docker build -t orpulse-landing-v2 .` - Build Docker image
- `docker run -p 80:80 orpulse-landing-v2` - Run container

## System Commands (Linux)
- `git status` - Check git status
- `git diff` - View changes
- `git log` - View commit history
- `ls` - List files
- `cat` - View file contents
- `grep` - Search in files
- `find` - Find files

## TypeScript
- `vue-tsc -b` - Type check (automatically run before build)