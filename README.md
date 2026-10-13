const timelineGrid = document.getElementById('timelineGrid');

function getToneClass(styleName = '') {
  const value = styleName.toLowerCase();
  if (value.includes('cyan')) return 'card-cyan';
  if (value.includes('amber') || value.includes('warm')) return 'card-amber';
  if (value.includes('gold') || value.includes('finale')) return 'card-gold';
  return 'card-cyan';
}

async function initTimeline() {
  try {
    const response = await fetch('timeline.json');
    const data = await response.json();

    if (!data || !Array.isArray(data.clips)) {
      throw new Error('Invalid timeline data');
    }

    renderTimeline(data.clips);
  } catch (error) {
    console.error('Failed to load timeline data:', error);
    renderFallback();
  }
}

function renderTimeline(clips) {
  timelineGrid.innerHTML = clips
    .map((clip) => {
      const tone = getToneClass(clip.style || '');
      const time = `${clip.start_time || '00:00'} — ${clip.end_time || '00:00'}`;
      const tag = clip.loop_count && clip.loop_count > 1 ? `Loop x${clip.loop_count}` : 'Single';

      return `
        <article class="timeline-card ${tone}">
          <div class="card-header">
            <h4>${clip.id}. ${clip.title}</h4>
            <span class="card-chip">${tag}</span>
          </div>
          <div class="card-meta">${time}</div>
          <div class="card-style">${clip.style || 'Cinematic'}</div>
          <p class="card-notes">${clip.notes || 'Production note pending.'}</p>
        </article>
      `;
    })
    .join('');
}

function renderFallback() {
  timelineGrid.innerHTML = `
    <article class="timeline-card card-gold">
      <div class="card-header">
        <h4>1. HUM</h4>
        <span class="card-chip">Loop x9</span>
      </div>
      <div class="card-meta">00:00 — 01:30</div>
      <div class="card-style">Sprawl_Cyan_Cool</div>
      <p class="card-notes">A cyan megalopolis and the first view of ELARA in reflection.</p>
    </article>
  `;
}

initTimeline();
