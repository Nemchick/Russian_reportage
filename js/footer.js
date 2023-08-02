fetch("footer.html")
        .then((response) => response.text())
        .then((footerHtml) => {
          document.getElementById("footer-placeholder").innerHTML = footerHtml;
        });