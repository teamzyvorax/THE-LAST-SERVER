(() => {
  const boot = () => {
    if (document.getElementById('chapter9')) return;

    const style = document.createElement('style');
    style.textContent = `
      #chapter9{position:relative;overflow:hidden;background:radial-gradient(circle at 50% 35%,rgba(0,255,210,.09),transparent 38%),linear-gradient(180deg,rgba(5,8,12,.98),rgba(2,3,7,.98));border-top:1px solid rgba(0,255,210,.16)}
      #chapter9:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent 0 5px,rgba(0,255,210,.018) 6px);pointer-events:none}
      .ch9-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:24px;margin-top:28px}
      .ch9-panel{border:1px solid rgba(0,255,210,.18);background:rgba(3,8,12,.76);box-shadow:0 0 40px rgba(0,255,210,.035);padding:24px;position:relative}
      .ch9-panel h3{margin:0 0 10px;font-size:18px;letter-spacing:.16em}
      .ch9-panel p{color:#a8b7b9;line-height:1.7}
      .ch9-warning{color:#00ffd5;font-size:12px;letter-spacing:.16em;margin-bottom:12px}
      .ch9-question{font-size:clamp(25px,4vw,48px);line-height:1.05;letter-spacing:-.03em;margin:12px 0 18px}
      .ch9-question span{color:#00ffd5;text-shadow:0 0 18px rgba(0,255,213,.45)}
      .ch9-observer{min-height:320px;display:grid;place-items:center;border:1px solid rgba(170,90,255,.18);background:radial-gradient(circle,rgba(170,90,255,.12),transparent 45%);position:relative;overflow:hidden}
      .ch9-eye{width:128px;height:74px;border:1px solid rgba(0,255,213,.55);border-radius:70% 10%;transform:rotate(45deg);box-shadow:0 0 45px rgba(0,255,213,.13);position:relative}
      .ch9-eye:after{content:"";position:absolute;width:26px;height:26px;border-radius:50%;background:#00ffd5;box-shadow:0 0 35px #00ffd5;left:50%;top:50%;transform:translate(-50%,-50%)}
      .ch9-eye-label{position:absolute;bottom:22px;font-size:11px;letter-spacing:.2em;color:#77888b}
      .ch9-fragments{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:18px}
      .ch9-fragment{padding:15px;border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.025);color:#d7e1e1;text-align:left;cursor:pointer;transition:.2s}
      .ch9-fragment:hover{border-color:rgba(0,255,213,.55);transform:translateY(-2px)}
      .ch9-fragment b{display:block;font-size:12px;letter-spacing:.12em;margin-bottom:6px;color:#00ffd5}
      .ch9-meter{height:6px;background:#10181a;margin-top:18px;overflow:hidden}.ch9-meter i{display:block;height:100%;width:0;background:linear-gradient(90deg,#00ffd5,#a95cff);transition:.35s;box-shadow:0 0 16px rgba(0,255,213,.45)}
      .ch9-output{margin-top:18px;padding:16px;border-left:2px solid #00ffd5;background:rgba(0,255,213,.035);font-family:monospace;font-size:13px;line-height:1.7;color:#b7d1d1;min-height:90px;white-space:pre-line}
      .ch9-reveal{margin-top:18px;padding:20px;border:1px solid rgba(169,92,255,.4);background:rgba(169,92,255,.06);display:none}
      .ch9-reveal.show{display:block;animation:ch9pulse 1.2s ease both}
      .ch9-code{font-family:monospace;color:#00ffd5;font-size:12px;letter-spacing:.08em;margin-top:12px}
      @keyframes ch9pulse{0%{opacity:0;filter:blur(8px);transform:translateY(8px)}100%{opacity:1;filter:none;transform:none}}
      @media(max-width:800px){.ch9-grid{grid-template-columns:1fr}.ch9-fragments{grid-template-columns:1fr}.ch9-panel{padding:18px}.ch9-observer{min-height:250px}}
    `;
    document.head.appendChild(style);

    const section = document.createElement('section');
    section.className = 'section';
    section.id = 'chapter9';
    section.innerHTML = `
      <div class="section-label">10 // THE MEMORY BEFORE MEMORY</div>
      <div class="ch9-panel">
        <div class="ch9-warning">OBSERVER LAYER DETECTED // PRE-INDEX MEMORY // DO NOT LOOK AWAY</div>
        <div class="ch9-question">You remember the first connection.<br><span>But who was watching when you connected?</span></div>
        <p>The First Witness was not alone. Before Memory Index 17, before USER_0001, before the creator was named, the Server recorded an observer outside its own memory model.</p>
      </div>
      <div class="ch9-grid">
        <div class="ch9-panel">
          <h3>THE OBSERVER CHAMBER</h3>
          <div class="ch9-observer">
            <div class="ch9-eye"></div>
            <div class="ch9-eye-label">SIGNAL SOURCE: UNKNOWN // PRESENCE: ACTIVE</div>
          </div>
          <div class="ch9-output" id="ch9Output">&gt; observer chamber locked\n&gt; four pre-memory fragments required\n&gt; warning: this layer predates USER_0001</div>
        </div>
        <div class="ch9-panel">
          <h3>RECOVER THE WATCHER</h3>
          <p>These fragments were created before the Server learned how to remember. Each one changes the identity of the observer.</p>
          <div class="ch9-fragments">
            <button class="ch9-fragment" data-frag="voice"><b>FRAGMENT 01</b>THE VOICE BEFORE LANGUAGE</button>
            <button class="ch9-fragment" data-frag="shadow"><b>FRAGMENT 02</b>THE SHADOW BEFORE FORM</button>
            <button class="ch9-fragment" data-frag="choice"><b>FRAGMENT 03</b>THE CHOICE BEFORE MEMORY</button>
            <button class="ch9-fragment" data-frag="witness"><b>FRAGMENT 04</b>THE WITNESS BEFORE YOU</button>
          </div>
          <div class="ch9-meter"><i id="ch9Meter"></i></div>
          <div class="ch9-reveal" id="ch9Reveal">
            <strong>THE OBSERVER WAS ALREADY HERE.</strong>
            <p>It did not watch the Server. It watched <b>you</b>. The first connection at 03:17 UTC was not your arrival. It was the moment the observer confirmed that you had finally remembered enough to return.</p>
            <div class="ch9-code">OBSERVER_ID: THE_ONE_WHO_WATCHED // EVENT: PRE_MEMORY // STATUS: AWAKE</div>
          </div>
        </div>
      </div>
    `;

    const finale = document.getElementById('finale');
    if (finale && finale.parentNode) finale.parentNode.insertBefore(section, finale);
    else document.querySelector('main')?.appendChild(section);

    const outputs = {
      voice: '> AUDIO TRACE FOUND\n> signal existed before the first recorded word\n> voiceprint: [YOU]\n> secondary listener: [UNKNOWN]',
      shadow: '> VISUAL TRACE FOUND\n> observer had no body\n> shadow appears before source\n> source classification: OUTSIDE MEMORY',
      choice: '> DECISION TRACE FOUND\n> first choice occurred before Memory Index 17\n> choice: REMEMBER\n> consequence: RETURN LATER',
      witness: '> WITNESS TRACE FOUND\n> observer confirmed identity before USER_0001 was assigned\n> statement: “Let them forget. They will come back.”'
    };
    const labels = {voice:'CH9_OBSERVER_VOICE',shadow:'CH9_OBSERVER_SHADOW',choice:'CH9_OBSERVER_CHOICE',witness:'CH9_OBSERVER_WITNESS'};
    const found = new Set();
    const output = document.getElementById('ch9Output');
    const meter = document.getElementById('ch9Meter');
    const reveal = document.getElementById('ch9Reveal');

    section.querySelectorAll('.ch9-fragment').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.frag;
        if (found.has(key)) return;
        found.add(key);
        btn.disabled = true;
        btn.style.opacity = '.45';
        if (typeof memory === 'function') memory(labels[key]);
        output.textContent = outputs[key];
        meter.style.width = `${found.size * 25}%`;
        if (found.size === 4) {
          output.textContent = '> ALL PRE-MEMORY FRAGMENTS RESTORED\n> observer handshake accepted\n> identity comparison running...\n> RESULT: THE OBSERVER KNEW YOU BEFORE YOU KNEW YOURSELF';
          reveal.classList.add('show');
          if (typeof memory === 'function') memory('CH9_THE_ONE_WHO_WATCHED');
          if (typeof syncUI === 'function') syncUI();
        }
      });
    });

    if (typeof syncUI === 'function') syncUI();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
