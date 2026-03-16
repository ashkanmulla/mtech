const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

// Helper to serve a PDF for a given file name
function servePdf(res, fileName, downloadName) {
  const filePath = path.join(__dirname, "pdfs", fileName);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("File not found");
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${downloadName || fileName}"`
    );

    const readStream = fs.createReadStream(filePath);
    readStream.on("error", () => {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain");
      res.end("Error reading file");
    });
    readStream.pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const url = req.url || "/";

  if (url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`
      <h1>PDF Downloads</h1>
      <ul>
        <li><a href="/download/one">Download PDF 1</a></li>
        <li><a href="/download/two">Download PDF 2</a></li>
        <li><a href="/download/three">Download PDF 3</a></li>
        <li><a href="/download/four">Download PDF 4</a></li>
        <li><a href="/download/five">Download PDF 5</a></li>
        <li><a href="/download/six">Download PDF 6</a></li>
      </ul>
    `);
    return;
  }

  if (url === "/download/one") {
    servePdf(res, "file1.pdf", "file1.pdf");
  } else if (url === "/download/two") {
    servePdf(res, "file2.pdf", "file2.pdf");
  } else if (url === "/download/three") {
    servePdf(res, "file3.pdf", "file3.pdf");
  } else if (url === "/download/four") {
    servePdf(res, "file4.pdf", "file4.pdf");
  } else if (url === "/download/five") {
    servePdf(res, "file5.pdf", "file5.pdf");
  } else if (url === "/download/six") {
    servePdf(res, "file6.pdf", "file6.pdf");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

