// 加载公共组件
document.addEventListener('DOMContentLoaded', function() {
    // 加载页头
    fetch('/includes/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
        setActiveNavLink();
      });
  
    // 加载页脚
    fetch('/includes/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      });
  
    // 设置当前页面导航高亮
    function setActiveNavLink() {
      const currentPath = window.location.pathname.split('/').pop();
      document.querySelectorAll('#nav-links a').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath === linkPath) {
          link.classList.add('underline', 'font-semibold');
        }
      });
    }
  });