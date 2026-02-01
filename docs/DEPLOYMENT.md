# Deployment Guide

Guide to using deployment scripts in the JGFall Dev Toolkit.

## Available Deployment Scripts

### 1. Netlify Deployment

**Location:** `scripts/deployment/deploy-netlify.sh`

**Usage:**
```bash
bash jgfall-dev-toolkit/scripts/deployment/deploy-netlify.sh
```

**Features:**
- Automatic Netlify CLI check
- Interactive configuration
- Build command execution
- Production/preview deployment options
- Success/error feedback

**Requirements:**
- Netlify CLI: `npm install -g netlify-cli`
- Netlify account

**Interactive Prompts:**
1. Build directory (default: `dist`)
2. Build command (default: `npm run build`)
3. Production deployment confirmation

---

### 2. Vercel Deployment

**Location:** `scripts/deployment/deploy-vercel.sh`

**Usage:**
```bash
bash jgfall-dev-toolkit/scripts/deployment/deploy-vercel.sh
```

**Features:**
- Automatic Vercel CLI check
- Smart build detection
- Production/preview deployment
- Zero-config for most projects

**Requirements:**
- Vercel CLI: `npm install -g vercel`
- Vercel account

---

### 3. GitHub Pages Deployment

**Location:** `scripts/deployment/deploy-gh-pages.sh`

**Usage:**
```bash
bash jgfall-dev-toolkit/scripts/deployment/deploy-gh-pages.sh
```

**Features:**
- Automatic build directory detection
- gh-pages package integration
- Git worktree fallback
- Custom branch naming
- Site URL display

**Requirements:**
- GitHub repository
- gh-pages package (optional): `npm install -D gh-pages`

---

## NPM Scripts Integration

Add to your `package.json`:

```json
{
  "scripts": {
    "deploy:netlify": "bash toolkit/scripts/deployment/deploy-netlify.sh",
    "deploy:vercel": "bash toolkit/scripts/deployment/deploy-vercel.sh",
    "deploy:gh-pages": "bash toolkit/scripts/deployment/deploy-gh-pages.sh"
  }
}
```

Then deploy with:

```bash
npm run deploy:netlify
```

## Continuous Deployment

### GitHub Actions - Netlify

```yaml
# .github/workflows/deploy.yml
name: Deploy to Netlify

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### GitHub Actions - Vercel

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Docker Deployment

Coming soon:
- Docker build scripts
- Multi-stage Dockerfile templates
- Docker Compose configurations
- Container registry push scripts

## Best Practices

### Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Build successful locally
- [ ] Environment variables configured
- [ ] Database migrations run (if applicable)
- [ ] Version bumped in package.json
- [ ] CHANGELOG.md updated
- [ ] Documentation updated

### Environment Variables

1. Never commit `.env` files
2. Always provide `.env.example`
3. Document all required variables
4. Use platform-specific env var managers:
   - Netlify: Site settings > Environment variables
   - Vercel: Project settings > Environment Variables
   - GitHub Pages: Secrets in repository settings

### Rollback Strategy

If deployment fails:

**Netlify:**
```bash
netlify rollback
```

**Vercel:**
```bash
vercel rollback
```

**GitHub Pages:**
```bash
git revert HEAD
git push origin gh-pages
```

## Troubleshooting

### Common Issues

**Build fails:**
- Check build command is correct
- Verify dependencies are installed
- Check for TypeScript errors
- Review build logs

**Environment variables missing:**
- Set in platform dashboard
- Check variable names (case-sensitive)
- Redeploy after adding variables

**404 errors:**
- Check build directory path
- Verify routing configuration
- Check base URL in config

## Platform-Specific Notes

### Netlify
- Supports `netlify.toml` for configuration
- Automatic HTTPS with custom domains
- Serverless functions support
- Form handling built-in

### Vercel
- Supports `vercel.json` for configuration
- Automatic HTTPS
- Edge Functions support
- API routes for serverless

### GitHub Pages
- Only static sites (HTML/CSS/JS)
- HTTPS with custom domains
- Deploy from branch or workflow
- No server-side code

## Questions?

Open an issue or check the main README.md.
