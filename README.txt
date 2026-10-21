SHRIVISHNU RAO PORTFOLIO — UPDATED FILES

UPLOAD
1. Extract this ZIP.
2. Upload index.html, style.css and script.js to the root of your GitHub Pages repository, replacing the existing files.
3. Upload the folders project-covers/ and certificates/ too. Keep their folder names exactly as shown.
4. Commit all changes. Wait for GitHub Pages to deploy, then hard-refresh the website.

SECTION ORDER
Home → About Me → Education → My Certifications → M&A Projects → Asset Management → Equity Research → My Experience → Skills → Contact Me.

EDIT YOUR WRITING
Open index.html on GitHub and click the pencil icon to edit text:
- Hero headline/intro: search for “Finance postgraduate”.
- About Me: search for <section id="about"> and edit its paragraphs.
- Education: search for <section id="education">.
- Experience: search for <section id="experience">.
- Skills: search for <section id="skills">.
- Contact: search for <section id="contact">.
Save with Commit changes.
The equity research names, prices/targets and certificate names are currently in script.js. Search for “var R=” to edit research cards and “var C=” to edit certificate titles.

CERTIFICATE PHOTOS
Place your certificate image files in certificates/ and name them to match:
BMC.jpg, ESG.jpg, XL.jpg, FF.jpg, IB.jpg, MK.jpg, HPC.jpg, IBO.jpg, TB.jpg, FB.jpg.
NOTE: Two certificates currently use XL.jpg; if you want separate images for both spreadsheet certificates, rename one in script.js (for example XL-business-analytics.jpg) and use that filename for the second one.

PROJECT COVER IMAGES
The website now expects these images in project-covers/:
tyson-lamb-weston.jpg, cnh-agco.jpg, cross-border-ma.jpg, ark-data-centres.jpg, london-property.jpg, value-fund-portfolio.jpg
Equity research covers use these filenames:
Diamondback_Energy.jpg, Energy_Transfer.jpg, United_Health_Group.jpg, Pfizer.jpg, FedEx_Equity_Research_Report.jpg, UPS.jpg, AT_T.jpg, Ford_Equity_Research_Report.jpg, General_Mills.jpg, Target.jpg

Replace the placeholder/empty image slots by uploading JPG or PNG images of the first page/cover of each PDF, using the exact names above. If you have not added an image yet, that image will show as broken until you upload it.
PDF report links remain under reports/ and should use the corresponding PDF filenames referenced in script.js.

ANIMATED BACKGROUND
The particle canvas is now fixed to the viewport so the moving particles continue throughout the site, rather than only appearing on the home section.


CERTIFICATE PDF DISPLAY
The certificate cards now preview the first page of each linked PDF and open the full PDF when clicked. Upload the certificate PDFs to the repository root (same folder as index.html) with filenames matching the links in script.js. Finance Fundamentals and Spreadsheet Analysis are excluded.
