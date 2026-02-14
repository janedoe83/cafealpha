<script src="https://unpkg.com/lite-youtube-embed@0.3.0/src/lite-yt-embed.js"></script>
<link rel="stylesheet" href="https://unpkg.com/lite-youtube-embed@0.3.0/src/lite-yt-embed.css" />

<script>
const switchEl = document.getElementById('toggleMood');
switchEl.addEventListener('change', () => {
  document.querySelectorAll('.toggle-mood').forEach(el => {
    el.style.display = switchEl.checked ? 'block' : 'none';
  });
});

const switchTag = document.getElementById('toggleTags');
switchTag.addEventListener('change', () => {
  document.querySelectorAll('.toggle-tags').forEach(el => {
    el.style.display = switchTag.checked ? 'block' : 'none';
  });
});

// Optional: hide on load
// document.querySelectorAll('.toggle-mood').forEach(el => el.style.display = 'none');
</script>