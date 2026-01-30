# Manifesto

Minimal React app inspired by "Simple is better than complex" (Zen of Python). Light/dark theme and PWA support.

## Technologies

- React 18.3.1
- TypeScript 5.4.5
- Vite 5.2.0
- Tailwind CSS 3.4.4
- DaisyUI 4.12.10

## Installation

```bash
npm install
```

## Development

### Local (without Docker)

```bash
npm run dev
```

### With Docker

```bash
# Start the container
docker compose up -d

# Run the development server
docker compose exec web sh -c "npm run dev"
```

## Build

```bash
npm run build
```

With Docker:

```bash
docker compose exec web sh -c "npm run build"
```

## Preview

```bash
npm run preview
```

## Tests

```bash
npm run test:ci
```

With Docker:

```bash
docker compose exec web sh -c "npm run test:ci"
```

## Lint

```bash
npm run lint
```

With Docker:

```bash
docker compose exec web sh -c "npm run lint"
```
