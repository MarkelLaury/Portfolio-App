# React Portfolio Template

This is a ready-to-use React portfolio template that you can customize with your own content.

## Quick Start Guide

1. Clone the repository
2. Create your `content.json` file in `public/assets/`
3. Update `DictionaryContext.tsx` to point to your file
4. Run `npm install` then `npm start`

## Detailed Instructions

### 1. Setting Up Your Content

Create a file at `public/assets/content.json` with this structure (replace the example data with your own):

```json
{
  "firstName": "Malik",
  "lastName": "Jordan",
  "profilePic": "your-image-url.jpg",
  "title": "Your Professional Title",
  "tagLine": "Your catchy tagline",
  "description": "About you and your skills...",
  "projects": {
    "1": {
      "title": "Project Name",
      "description": {
        "short": "Brief description",
        "detailed": "Full details about the project",
        "media": ["/assets/images/project1.jpg"]
      },
      "link": "/projects/1",
      "demoURL": "https://yourdemo.com",
      "repoURL": "https://github.com/yourrepo",
      "mediaURLs": ["https://external-image.com/image.jpg"]
    }
  },
  "socials": [
    {
      "name": "LinkedIn",
      "url": "https://linkedin.com/yourprofile"
    }
  ]
}
```

### 2. Configuring the Dictionary Provider

In `src/context/DictionaryContext.tsx`, change this line:

```typescript
fetch("/assets/content2.json"); // ← Change this
```

To point to your file:

```typescript
fetch("/assets/content.json"); // ← Your file
```

### 3. Running the Application

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Create production build (optional):

```bash
npm run build
```

## Customization Tips

Colors: Modify `src/styles/variables.less`

Layout: Edit components in `src/UI/` or `src/routes/`

Images: Add to either `public/assets/images/` or other cloud platform (AWS-S3) and reference in your JSON

## Troubleshooting

### ❌ Dictionary not loading?

- Verify file exists at public/assets/content.json
- Check for JSON syntax errors
- Ensure correct path in DictionaryContext.tsx

### ❌ App won't start?

- Delete node_modules and run npm install
- Check console for specific error messages
