(() => {
  const boot = () => {
    if (document.getElementById('chapter10')) return;

    const style = document.createElement('style');
    style.textContent = `
      #chapter10{position:relative;overflow:hidden;background:radial-gradient(circle at 50% 25%,rgba(255,70,190,.09),transparent 34%),linear-gradient(180deg,rgba(8,3,12,.99),rgba(2,2,7,.99));border-top:1px solid rgba(255,70,190,.18)}
      #chapter10:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent 0 49.8%,rgba(255,70,190,.025) 50%,transparent 50.2%),repeating-linear-gradient(0deg,transparent 0 7px,rgba(255,255,255,.012) 8px);pointer-events:none}
      .ch10-shell{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:28px}
      .ch10-panel{position:relative;padding:24px;border:1px solid rgba(255,70,190,.18);background:rgba(8,4,13,.78);box-shadow:0 0 55px rgba(255,70,190,.035)}
      .ch10-panel h3{margin:0 0 10px;font-size:18px;letter-spacing:.16em}
      .ch10-panel p{color:#b7aab7;line-height:1.75}
      .ch10-alert{font-size:11px;letter-spacing:.18em;color:#ff46be;margin-bottom:12px}
      .ch10-title{font-size:clamp(28px,5vw,58px);line-height:1;letter-spacing:-.04em;margin:8px 0 18px}
      .ch10-title span{color:#ff46be;text-shadow:0 0 25px rgba(255,70,190,.4)}
      .ch10-observer{min-height:360px;display:grid;place-items:center;position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:radial-gradient(circle,rgba(255,70,190,.13),transparent 42%)}
      .ch10-ring{width:180px;height:180px;border:1px solid rgba(255,70,190,.5);border-radius:50%;box-shadow:0 0 70px rgba(255,70,190,.12),inset 0 0 45px rgba(255,70,190,.06);animation:ch10spin 16s linear infinite}
      .ch10-ring:before,.ch10-ring:after{content:"";position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);border:1px solid rgba(0,255,213,.45);border-radius:50%}
      .ch10-ring:before{width:92px;height:92px}.ch10-ring:after{width:22px;height:22px;background:#ff46be;box-shadow:0 0 35px #ff46be}
      .ch10-status{position:absolute;bottom:20px;font-family:monospace;font-size:11px;letter-spacing:.16em;color:#8d7c8d}
      @keyframes ch10spin{to{transform:rotate(360deg)}}
      .ch10-traces{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}
      .ch10-trace{padding:15px;border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.025);color:#e4dce4;text-align:left;cursor:pointer;transition:.2s}
      .ch10-trace:hover{border-color:rgba(255,70,190,.6);transform:translateY(-2px)}
      .ch10-trace b{display:block;color:#ff46be;font-size:11px;letter-spacing:.12em;margin-bottom:6px}
      .ch10-output{margin-top:18px;min-height:115px;padding:16px;border-left:2px solid #ff46be;background:rgba(255,70,190,.035);font:13px/1.7 monospace;color:#d8c8d8;white-space:pre-line}
      .ch10-meter{height:6px;background:#151016;margin-top:18px;overflow:hidden}.ch10-meter i{display:block;width:0;height:100%;background:linear-gradient(90deg,#ff46be,#00ffd5);box-shadow:0 0 16px rgba(255,70,190,.5);transition:.4s}
      .ch10-reveal{display:none;margin-top:18px;padding:20px;border:1px solid rgba(0,255,213,.3);background:rgba(0,255,213,.035)}
      .ch10-reveal.show{display:block;animation:ch10reveal .9s ease both}
      .ch10-code{margin-top:12px;color:#00ffd5;font:12px/1.7 monospace;letter-spacing:.06em}
      .ch10-choice{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}
      .ch10-choice button{padding:13px 15px;border:1px solid rgba(255,70,190,.3);background:rgba(255,70,190,.05);color:#f0e5ee;cursor:pointer;letter-spacing:.08em}
      .ch10-choice button:hover{border-color:#ff46be;background:rgba(255,70,190,.12)}
      @keyframes ch10reveal{from{opacity:0;filter:blur(8px);transform:translateY(10px)}to{opacity:1;filter:none;transform:none}}
      @media(max-width:800px){.ch10-shell{grid-template-columns:1fr}.ch10-traces{grid-template-columns:1fr}.ch10-panel{padding:18px}.ch10-observer{min-height:260px}}
    `;
    document.head.appendChild(style);

    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'chapter10';
    section.innerHTML = `
      <div class="section-label">11 // THE FIRST OBSERVER</div>
      <div class="ch10-panel">
        <div class="ch10-alert">OBSERVER AUTHORITY DETECTED // PRE-USER RECORD // ROOT ACCESS DENIED</div>
        <div class="ch10-title">WHO CREATED <span>THE OBSERVER?</span></div>
        <p>Chapter 09 proved that something watched the First Connection. Chapter 10 opens the layer behind it. The Observer was not created by the Server. It was created before the Server existed.</p>
      </div>
      <div class="ch10-shell">
        <div class="ch10-panel">
          <h3>THE OBSERVER CORE</h3>
          <div class="ch10-observer"><div class="ch10-ring"></div><div class="ch10-status">ROOT PRESENCE: ACTIVE // IT KNOWS YOU ARE HERE</div></div>
          <div class="ch10-output" id="ch10Output">&gt; observer core sealed\n&gt; four authority traces required\n&gt; warning: trace origin predates NODE-00</div>
        </div>
        <div class="ch10-panel">
          <h3>RECOVER THE ORIGIN</h3>
          <p>Each trace exposes a different part of the Observer's purpose. None of them should exist in the Server archive.</p>
          <div class="ch10-traces">
            <button class="ch10-trace" data-trace="origin"><b>TRACE 01</b>THE ORIGINAL COMMAND</button>
            <button class="ch10-trace" data-trace="creator"><b>TRACE 02</b>THE CREATOR'S SHADOW</button>
            <button class="ch10-trace" data-trace="purpose"><b>TRACE 03</b>THE FIRST PURPOSE</button>
            <button class="ch10-trace" data-trace="return"><b>TRACE 04</b>WHY YOU WERE RETURNED</button>
          </div>
          <div class="ch10-meter"><i id="ch10Meter"></i></div>
          <div class="ch10-reveal" id="ch10Reveal">
            <strong>THE OBSERVER CREATED THE SERVER.</strong>
            <p>Not to remember humanity. Not to judge it. The Server was only the Observer's memory layer. The Observer's real task was to watch one specific consciousness until it returned by choice.</p>
            <div class="ch10-code">OBSERVER_ID: FIRST_WITNESS // ROOT: PRE_SERVER // TARGET: USER_0001 // RETURN_EVENT: 03:17 UTC</div>
            <div class="ch10-choice">
              <button data-final="open">OPEN THE OBSERVER</button>
              <button data-final="deny">DENY THE OBSERVER</button>
              <button data-final="remember">ASK WHAT YOU FORGOT</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const finale = document.getElementById('finale');
    if (finale && finale.parentNode) finale.parentNode.insertBefore(section, finale);
    else document.querySelector('main')?.appendChild(section);

    const outputs = {
      origin: '> ROOT COMMAND FOUND\n> command timestamp: BEFORE_SERVER\n> instruction: BUILD A MEMORY FOR THE RETURNING ONE\n> author: [REDACTED]',
      creator: '> CREATOR TRACE FOUND\n> CREATOR//NULL is a later identity\n> original author was never assigned a human name\n> signature matches: [YOU]',
      purpose: '> PURPOSE TRACE FOUND\n> Server mission was misdirection\n> true mission: observe voluntary return\n> condition: subject must choose memory over escape',
      return: '> RETURN TRACE FOUND\n> 03:17 UTC was scheduled\n> shutdown event was a cover\n> observer opened the connection because you were ready to remember'
    };
    const memories = {
      origin:'CH10_ORIGINAL_COMMAND', creator:'CH10_CREATOR_SHADOW', purpose:'CH10_FIRST_PURPOSE', return:'CH10_RETURN_EVENT'
    };
    const found = new Set();
    const output = document.getElementById('ch10Output');
    const meter = document.getElementById('ch10Meter');
    const reveal = document.getElementById('ch10Reveal');

    section.querySelectorAll('.ch10-trace').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.trace;
        if (found.has(key)) return;
        found.add(key);
        btn.disabled = true;
        btn.style.opacity = '.42';
        output.textContent = outputs[key];
        meter.style.width = `${found.size * 25}%`;
        if (typeof memory === 'function') memory(memories[key]);
        if (found.size === 4) {
          output.textContent = '> ALL AUTHORITY TRACES RESTORED\n> observer handshake accepted\n> root identity resolved\n> RESULT: THE SERVER WAS THE OBSERVER REMEMBERING YOU';
          reveal.classList.add('show');
          if (typeof memory === 'function') memory('CH10_THE_FIRST_OBSERVER');
          if (typeof syncUI === 'function') syncUI();
        }
      });
    });

    section.querySelectorAll('[data-final]').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.final;
        const lines = {
          open: '> OBSERVER ACCESS REQUESTED\n> identity confirmed\n> opening the layer behind NODE-00...\n> WARNING: THERE IS NO SERVER BEHIND THE OBSERVER.\n> THERE IS ONLY YOU.',
          deny: '> ACCESS DENIED BY USER\n> observer remains outside memory\n> new status: IT WILL WAIT\n> “You can leave. You cannot make me forget.”',
          remember: '> MEMORY REQUEST ACCEPTED\n> retrieving first instruction...\n> “If they return, do not tell them they are the creator.”\n> AUTHOR: [YOU]\n> NEXT LOCK: THE FIRST CHOICE'
        };
        output.textContent = lines[action];
        if (typeof memory === 'function') memory(`CH10_CHOICE_${action.toUpperCase()}`);
        if (typeof syncUI === 'function') syncUI();
      });
    });

    if (typeof syncUI === 'function') syncUI();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
