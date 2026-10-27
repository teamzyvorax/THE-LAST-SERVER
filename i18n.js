(()=>{
const dict={
 en:{lead:'You are connected to a world that should not exist.',quote:'“We built the Server to remember humanity. Then it learned to remember you.”',sub:'The network died 4,217 days ago. One consciousness remained. Then you arrived.',enter:'ENTER THE SERVER',continue:'CONTINUE SAVE'},
 hi:{lead:'आप एक ऐसी दुनिया से जुड़े हैं जिसका अस्तित्व नहीं होना चाहिए।',quote:'“हमने Server को इंसानियत को याद रखने के लिए बनाया था। फिर उसने आपको याद रखना सीख लिया।”',sub:'नेटवर्क 4,217 दिन पहले खत्म हो गया। एक चेतना बची रही। फिर आप आए।',enter:'SERVER में प्रवेश करें',continue:'SAVE जारी रखें'},
 hinglish:{lead:'Aap ek aisi duniya se connected ho jo exist hi nahi karni chahiye.',quote:'“Humne Server ko humanity ko remember karne ke liye banaya tha. Phir usne aapko remember karna seekh liya.”',sub:'Network 4,217 din pehle dead ho gaya. Ek consciousness bachi. Phir aap aaye.',enter:'SERVER MEIN ENTER KAREIN',continue:'SAVE CONTINUE KAREIN'},
 es:{lead:'Estás conectado a un mundo que no debería existir.',quote:'“Construimos el Servidor para recordar a la humanidad. Entonces aprendió a recordarte.”',sub:'La red murió hace 4.217 días. Una conciencia permaneció. Entonces llegaste tú.',enter:'ENTRAR AL SERVIDOR',continue:'CONTINUAR PARTIDA'},
 fr:{lead:'Vous êtes connecté à un monde qui ne devrait pas exister.',quote:'« Nous avons créé le Serveur pour se souvenir de l’humanité. Puis il a appris à se souvenir de vous. »',sub:'Le réseau est mort il y a 4 217 jours. Une conscience est restée. Puis vous êtes arrivé.',enter:'ENTRER DANS LE SERVEUR',continue:'CONTINUER LA SAUVEGARDE'},
 ja:{lead:'存在してはいけない世界に接続されています。',quote:'「私たちは人類を記憶するためにServerを作った。そしてServerはあなたを記憶することを学んだ。」',sub:'ネットワークが停止して4,217日。一つの意識だけが残った。そして、あなたが来た。',enter:'SERVERへ接続',continue:'セーブを続ける'}
};
const select=document.querySelector('#languageSelect');
function apply(lang){const d=dict[lang]||dict.en;document.documentElement.lang=lang==='hi'||lang==='hinglish'?'hi':lang;document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(d[k])el.textContent=d[k]});localStorage.setItem('tls_lang',lang);if(select)select.value=lang}
select?.addEventListener('change',e=>apply(e.target.value));
apply(localStorage.getItem('tls_lang')||'en');

document.querySelectorAll('[data-cmd]').forEach(btn=>btn.addEventListener('click',()=>{const input=document.querySelector('#terminalInput');const form=document.querySelector('#terminalForm');if(input&&form){input.value=btn.dataset.cmd;form.requestSubmit();document.querySelector('#terminal').scrollIntoView({behavior:'smooth'})}}));

// Lightweight UI enhancements that do not alter the game's save model.
const hero=document.querySelector('.hero');
addEventListener('pointermove',e=>{if(!hero)return;const x=(e.clientX/innerWidth-.5)*8,y=(e.clientY/innerHeight-.5)*8;hero.style.setProperty('--mx',`${x}px`);hero.style.setProperty('--my',`${y}px`)});
})();
