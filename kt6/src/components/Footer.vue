<script>

</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-sections">
        <div class="footer-section">
          <h3 class="section-title">Support</h3>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">Help Centre</a></li>
            <li><a href="#" class="footer-link">AirCover</a></li>
            <li><a href="#" class="footer-link">Combating discrimination</a></li>
            <li><a href="#" class="footer-link">Supporting people with disabilities</a></li>
            <li><a href="#" class="footer-link">Cancellation options</a></li>
          </ul>
        </div>


        <div class="footer-section">
          <h3 class="section-title">Hosting</h3>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">Local home</a></li>
            <li><a href="#" class="footer-link">Cover for hosts</a></li>
            <li><a href="#" class="footer-link">Hosting resources</a></li>
            <li><a href="#" class="footer-link">Community forum</a></li>
            <li><a href="#" class="footer-link">Hosting responsibly</a></li>
          </ul>
        </div>


        <div class="footer-section">
          <h3 class="section-title">Localhost</h3>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">Newsroom</a></li>
            <li><a href="#" class="footer-link">New Features</a></li>
            <li><a href="#" class="footer-link">Careers</a></li>
            <li><a href="#" class="footer-link">Investres</a></li>
            <li><a href="#" class="footer-link">Gift cards</a></li>
          </ul>
        </div>
      </div>


      <div class="footer-bottom">
        <div class="copyright">
          © 2023 Localhost, Inc. All Rights Reserved
        </div>
        <div class="footer-legal">
          <a href="#" class="legal-link">Privacy Policy</a>
          <span class="separator">|</span>
          <a href="#" class="legal-link">Terms & Conditions</a>
          <span class="separator">|</span>
          <a href="#" class="legal-link">Contact us</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  background-color: #f7f7f7;
  padding: 48px 0 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  margin-top: 40px;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 80px;
}

.footer-sections {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 48px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.section-title {
  margin-bottom: 20px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-link {
  color: #000000;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #222222;
  text-decoration: underline;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 24px;
  font-size: 14px;
  background-color: white;
}

.copyright {
  color: #717171;
}

.footer-legal {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

.legal-link {
  color: #717171;
  text-decoration: none;
  transition: color 0.2s ease;
}

.legal-link:hover {
  color: #222222;
  text-decoration: underline;
}
</style>
