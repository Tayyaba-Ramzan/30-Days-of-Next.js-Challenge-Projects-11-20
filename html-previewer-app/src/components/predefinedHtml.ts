export const predefinedHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Previewer Demo</title>
  <style>
    /* General Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Roboto', Arial, sans-serif;
      background: linear-gradient(135deg, #1e40af, #2563eb, #3b82f6);
      background-size: 300% 300%;
      animation: gradientBG 6s ease infinite;
      color: #f3f4f6;
      padding: 20px;
    }
    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 40px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px);
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    h1, h2, h3, h4, h5 {
      margin-bottom: 15px;
      font-weight: bold;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    }
    h1 {
      color: #ffffff;
      font-size: 28px;
      text-align: center;
    }
    h2 {
      color: #60a5fa;
      font-size: 2rem;
      margin-top: 20px;
    }
    h3, h4, h5 {
      color: #3b82f6;
    }
    p {
      margin-bottom: 20px;
      line-height: 1.7;
      color: #e5e7eb;
    }
    ul, ol {
      margin-left: 20px;
      margin-bottom: 20px;
    }
    ul li, ol li {
      margin-bottom: 10px;
      list-style-position: inside;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      background: rgba(255, 255, 255, 0.1);
      color: #f8fafc;
      border-radius: 8px;
      overflow: hidden;
    }
    th, td {
      padding: 15px;
      text-align: center;
    }
    th {
      background: #2563eb;
      color: #ffffff;
      font-weight: bold;
    }
    td {
      background: rgba(255, 255, 255, 0.15);
    }
    img {
      width: 100%;
      max-width: 400px;
      display: block;
      margin: 20px auto;
      border-radius: 10px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    }
    a.link {
      color: #60a5fa;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease, text-decoration 0.3s ease;
    }
    a.link:hover {
      color: #3b82f6;
      text-decoration: underline;
    }
    /* Additional Animations */
    h1, h2, p, table, img, ul, ol, a {
      animation: fadeInUp 1s ease both;
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to the Enhanced HTML Previewer</h1>
    <p>This improved HTML document highlights the styling and design elements of the previewer application. Enjoy exploring the structured layout below:</p>
    
    <h2>Headings</h2>
    <h3>Sub-heading Example</h3>
    <h4>Secondary Sub-heading</h4>
    <h5>Small Heading Example</h5>
    
    <h2>Formatted Text</h2>
    <p>This paragraph demonstrates <strong>bold</strong>, <em>italic</em>, and <u>underlined</u> text styles.</p>
    
    <h2>Lists</h2>
    <h3>Unordered</h3>
    <ul>
      <li>First Item</li>
      <li>Second Item</li>
      <li>Third Item</li>
    </ul>
    <h3>Ordered</h3>
    <ol>
      <li>Start Here</li>
      <li>Continue Forward</li>
      <li>End Point</li>
    </ol>
    
    <h2>Table</h2>
    <table>
      <thead>
        <tr>
          <th>Column A</th>
          <th>Column B</th>
          <th>Column C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Value 1</td>
          <td>Value 2</td>
          <td>Value 3</td>
        </tr>
        <tr>
          <td>Value 4</td>
          <td>Value 5</td>
          <td>Value 6</td>
        </tr>
        <tr>
          <td>Value 7</td>
          <td>Value 8</td>
          <td>Value 9</td>
        </tr>
      </tbody>
    </table>
    
    <h2>Image</h2>
    <img src="/img.webp" alt="Example Image" />
    
    <h2>Hyperlink</h2>
    <a href="https://www.example.com" class="link" target="_blank">Explore Example.com</a>
  </div>
</body>
</html>
`;
