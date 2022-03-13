# @halo-dev/md-server

> Experimental Project

## Usage

```bash
pnpm install
```

```bash
node server.js
```

```bash
curl -X POST http://localhost:8000/render -H "Content-Type: application/json" -d '{"text": "# Halo"}'
```

output:

```html
<h1><a id="Halo_0"></a>Halo</h1>
```

## Docker

```bash
docker build . -t md-server 
```

```bash
docker run -p 8000:8000 -d md-server
```
