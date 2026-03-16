# PDF direct download repo

## Structure

- `pdfs/`  
  Is folder ke andar aap apni 6 PDFs rakhenge.

Example (aap apne actual names use kar sakte hain):

- `pdfs/file1.pdf`
- `pdfs/file2.pdf`
- `pdfs/file3.pdf`
- `pdfs/file4.pdf`
- `pdfs/file5.pdf`
- `pdfs/file6.pdf`

## Kaise use karna hai

1. Is folder ko git repo banaen:

   ```bash
   cd pdf-links
   git init
   git add .
   git commit -m "initial pdf links setup"
   git remote add origin <aapka-remote-url>
   git push -u origin main
   ```

2. Jab aap is repo ko kisi static hosting (jaise Netlify, GitHub Pages, ya kisi bhi static file server) par deploy karoge, to har PDF ka direct download URL aise banega:

   - `https://aapka-domain.com/pdfs/file1.pdf`
   - `https://aapka-domain.com/pdfs/file2.pdf`
   - `https://aapka-domain.com/pdfs/file3.pdf`
   - `https://aapka-domain.com/pdfs/file4.pdf`
   - `https://aapka-domain.com/pdfs/file5.pdf`
   - `https://aapka-domain.com/pdfs/file6.pdf`

3. Aapko **koi website/HTML page banane ki zaroorat nahi hai**. Sirf `pdfs/` folder serve hona chahiye. Log directly in URLs par click karenge, browser automatic PDF download/open karega (browser setting ke hisaab se).

