## Documentation
https://drive.google.com/drive/folders/1KHir-RiLtWI9HmbFq3FmNGqRJPSzsRf8?usp=sharing

## Getting Started

### Local
First, run the development server:

```bash
yarn
yarn dev
```
Run JSON-Server  locally:
```bash
json-server --watch data/db.js --port 3001
```

### Docker
```bash
docker-compose -f docker-compose.dev.yml up
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
