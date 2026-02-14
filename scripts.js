<script src="https://unpkg.com/lite-youtube-embed@0.3.0/src/lite-yt-embed.js"></script>
<link rel="stylesheet" href="https://unpkg.com/lite-youtube-embed@0.3.0/src/lite-yt-embed.css" />

<script>
const switchEl = document.getElementById('toggleSwitch');
switchEl.addEventListener('change', () => {
  document.querySelectorAll('.toggle-me').forEach(el => {
    el.style.display = switchEl.checked ? 'block' : 'none';
  });
});

// Optional: hide on load
// document.querySelectorAll('.toggle-me').forEach(el => el.style.display = 'none');
</script>