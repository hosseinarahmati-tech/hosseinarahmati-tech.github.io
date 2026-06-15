// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle (simple show/hide of nav links)
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? '' : 'flex';
    if (!open) {
      links.style.position = 'absolute';
      links.style.flexDirection = 'column';
      links.style.top = '60px';
      links.style.right = '24px';
      links.style.background = 'var(--card)';
      links.style.padding = '18px 24px';
      links.style.borderRadius = '12px';
      links.style.border = '1px solid var(--line)';
    }
    toggle.setAttribute('aria-expanded', String(!open));
  });
  // Close on link click
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      if (window.innerWidth <= 860) links.style.display = '';
    })
  );
}
