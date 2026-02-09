/* ---------------------------
   PhysicsTreker — прототип (9 класс)
   Комментарии на русском
---------------------------- */

// ====== ТЕСТ-БАНК: 3 ТЕМЫ, 10 ВОПРОСОВ КАЖДАЯ ======
const TEST_BANK = {
  electric: {
    title: "Электр өрісі (E, U, A, q)",
    questions: [
      { id:"e1",  text:"Электр өрісінің кернеулігі формуласы?", options:["E=A/q","E=F/q","E=q/r","E=U·I"], correct:1,
        explanation:"Дұрыс: E = F/q. (Күш/заряд).", whyWrong:"A/q — бұл U (кернеу), кернеулік емес." },
      { id:"e2",  text:"Кернеу формуласы?", options:["U=A/q","U=F/q","U=qE","U=I/R"], correct:0,
        explanation:"U = A/q (жұмыс/заряд).", whyWrong:"F/q — ол E (кернеулік)." },
      { id:"e3",  text:"E өлшем бірлігі:", options:["В","Н/Кл","Ом","Кл"], correct:1,
        explanation:"E: Н/Кл (немесе В/м).", whyWrong:"В — кернеудің бірлігі." },
      { id:"e4",  text:"F=2 Н, q=0.5 Кл болса E=?", options:["1","2","4","0.25"], correct:2,
        explanation:"E=F/q=2/0.5=4 Н/Кл.", whyWrong:"Бөлу керек (F/q), көбейту емес." },
      { id:"e5",  text:"A=6 Дж, q=2 Кл болса U=?", options:["12","3","4","8"], correct:1,
        explanation:"U=A/q=6/2=3 В.", whyWrong:"A*q емес, A/q." },
      { id:"e6",  text:"F=Eq формуласы бойынша F:", options:["F=E/q","F=Eq","F=q/E","F=E+q"], correct:1,
        explanation:"F = E·q.", whyWrong:"E/q — қате, зарядқа көбейтеміз." },
      { id:"e7",  text:"U=12 В, q=3 Кл болса A=?", options:["4 Дж","9 Дж","36 Дж","15 Дж"], correct:2,
        explanation:"A=Uq=12·3=36 Дж.", whyWrong:"U=A/q → A=Uq." },
      { id:"e8",  text:"E=10 Н/Кл, q=0.2 Кл болса F=?", options:["2 Н","5 Н","10 Н","50 Н"], correct:0,
        explanation:"F=Eq=10·0.2=2 Н.", whyWrong:"10/0.2 деп қате бөледі." },
      { id:"e9",  text:"Кернеу өлшем бірлігі:", options:["Н/Кл","В","Па","Н"], correct:1,
        explanation:"Кернеу: В.", whyWrong:"Н/Кл — E." },
      { id:"e10", text:"A=Uq. U артса, q тұрақты болса A:", options:["кемиді","өзгермейді","артады","нөл болады"], correct:2,
        explanation:"U артса → A артады.", whyWrong:"A U-ға тура пропорционал." },
    ]
  },

  mech: {
    title: "Механика (Ньютон, жұмыс, қуат)",
    questions: [
      { id:"m1",  text:"Ньютонның 2-заңы:", options:["F=ma","F=mg","A=Fs","p=F/S"], correct:0,
        explanation:"F=ma.", whyWrong:"F=mg — тек ауырлық күші." },
      { id:"m2",  text:"m=2 кг, a=3 м/с² болса F=?", options:["5 Н","6 Н","9 Н","1.5 Н"], correct:1,
        explanation:"F=ma=2·3=6 Н.", whyWrong:"Көбейту керек." },
      { id:"m3",  text:"Жұмыс (күш орын ауыстыру бойымен):", options:["A=Fs","A=F/s","A=ms","A=Pt"], correct:0,
        explanation:"A=F·s.", whyWrong:"F/s — жұмыс емес." },
      { id:"m4",  text:"Қуат формуласы:", options:["P=A/t","P=F/s","P=mg","P=ρgh"], correct:0,
        explanation:"P=A/t.", whyWrong:"Уақыт t міндетті." },
      { id:"m5",  text:"A=100 Дж, t=5 c болса P=?", options:["20 Вт","50 Вт","500 Вт","0.05 Вт"], correct:0,
        explanation:"P=100/5=20 Вт.", whyWrong:"Бөлу керек." },
      { id:"m6",  text:"Тыныштықта тұрған дененің қорытқы күші:", options:["0 Н","mg","ma","1 Н"], correct:0,
        explanation:"a=0 → Fқор=0.", whyWrong:"Тепе-теңдік." },
      { id:"m7",  text:"Үйкеліс күші артса үдеу:", options:["артады","кемиді","өзгермейді","шексіз"], correct:1,
        explanation:"Қарсы күш өссе → қорытқы күш азаяды → үдеу кемиді.", whyWrong:"Үйкеліс үдеуге қарсы." },
      { id:"m8",  text:"Импульс формуласы:", options:["p=mv","p=F/S","p=ρgh","p=Uq"], correct:0,
        explanation:"p=m·v.", whyWrong:"F/S — қысым." },
      { id:"m9",  text:"m=3 кг, v=10 м/с болса p=?", options:["30","13","7","0.3"], correct:0,
        explanation:"p=3·10=30.", whyWrong:"Көбейту керек." },
      { id:"m10", text:"Ауырлық күші:", options:["F=ma","F=mg","F=kx","F=qE"], correct:1,
        explanation:"F=mg.", whyWrong:"mg — ауырлыққа тән формула." },
    ]
  },

  optic: {
    title: "Оптика (сыну, Снелл, толық ішкі шағылу)",
    questions: [
      { id:"o1",  text:"Жарықтың сынуы:", options:["жұтылу","орта ауысқанда бағыт өзгерту","шашырау","полярлану"], correct:1,
        explanation:"Сыну — орта ауысқанда бағыт өзгереді.", whyWrong:"Бұл басқа құбылыстар." },
      { id:"o2",  text:"Снелл заңы:", options:["n1sinα=n2sinβ","F=ma","E=F/q","A=Fs"], correct:0,
        explanation:"n1·sinα = n2·sinβ.", whyWrong:"Қалғаны басқа бөлім." },
      { id:"o3",  text:"Тығыз ортаға өткенде сәуле:", options:["нормальдан алыстайды","нормальға жақындайды","өзгермейді","жоғалады"], correct:1,
        explanation:"n өссе → нормальға жақындайды.", whyWrong:"Алыстау — сирек ортаға шыққанда." },
      { id:"o4",  text:"Сыну көрсеткіші:", options:["n=c/v","n=v/c","n=F/S","n=A/q"], correct:0,
        explanation:"n=c/v.", whyWrong:"v/c — кері." },
      { id:"o5",  text:"Сыну кезінде жиілік:", options:["өзгереді","өзгермейді","нөл","2 есе"], correct:1,
        explanation:"Жиілік өзгермейді.", whyWrong:"Тек v және λ өзгереді." },
      { id:"o6",  text:"Сыну кезінде λ:", options:["өзгермейді","өзгереді","әрқашан артады","әрқашан кемиді"], correct:1,
        explanation:"λ=v/f, f тұрақты → v өзгерсе λ өзгереді.", whyWrong:"λ тұрақты емес." },
      { id:"o7",  text:"Толық ішкі шағылу шарты:", options:["n1<n2","n1>n2 және α>αкр","әрқашан","айнада"], correct:1,
        explanation:"n1>n2 және α>αкр.", whyWrong:"n1<n2 болса болмайды." },
      { id:"o8",  text:"Критикалық бұрыш:", options:["sinαкр=n2/n1","sinαкр=n1/n2","αкр=n1+n2","αкр=n1·n2"], correct:0,
        explanation:"sinαкр=n2/n1 (n1>n2).", whyWrong:"sin 1-ден үлкен болмайды." },
      { id:"o9",  text:"Ауа→су өткенде сыну бұрышы:", options:["үлкейеді","кішірейеді","өзгермейді","180"], correct:1,
        explanation:"Тығыз ортаға өтсе — кішірейеді.", whyWrong:"Үлкею су→ауа болғанда." },
      { id:"o10", text:"n артса v:", options:["артады","кемиді","өзгермейді","нөл"], correct:1,
        explanation:"n=c/v → n артса v кемиді.", whyWrong:"Кері пропорция." },
    ]
  }
};

// ====== STORAGE ======
const K_USERS="pt_users", K_RESULTS="pt_results", K_SESSION="pt_session";
const $ = (id)=>document.getElementById(id);

function load(k,f){ try{return JSON.parse(localStorage.getItem(k)) ?? f}catch(e){return f} }
function save(k,v){ localStorage.setItem(k, JSON.stringify(v)); }
function uid(){ return Math.random().toString(16).slice(2)+Date.now().toString(16); }
function nowISO(){ return new Date().toISOString(); }

function ensureStorage(){
  if(!localStorage.getItem(K_USERS)) save(K_USERS, []);
  if(!localStorage.getItem(K_RESULTS)) save(K_RESULTS, []);
}

function seedDemoUsers(){
  const users = load(K_USERS, []);
  const exists = (login)=>users.some(u=>u.login===login);

  const toAdd = [
    { id:uid(), role:"student", className:"9A", login:"aida9a",  password:"1111", name:"Айда",  mistakes:{}, lastAttempt:null },
    { id:uid(), role:"student", className:"9A", login:"dias9a",  password:"2222", name:"Диас",  mistakes:{}, lastAttempt:null },
    { id:uid(), role:"student", className:"9Ә", login:"diana9a", password:"1141", name:"Диана", mistakes:{}, lastAttempt:null },
    { id:uid(), role:"teacher", className:"",  login:"teacher", password:"admin", name:"Мұғалім" }
  ];

  toAdd.forEach(u=>{ if(!exists(u.login)) users.push(u); });
  save(K_USERS, users);
  alert("Демо қолданушылар қосылды ✅");
}

function showScreen(name){
  $("screenLogin").classList.add("hidden");
  $("screenStudent").classList.add("hidden");
  $("screenTeacher").classList.add("hidden");
  $(name).classList.remove("hidden");
}

function getCurrentUser(){
  const sess = load(K_SESSION, null);
  if(!sess) return null;
  const users = load(K_USERS, []);
  return users.find(u=>u.id===sess.userId) ?? null;
}

function login(){
  const role = $("role").value;
  const className = $("className").value.trim().toUpperCase();
  const loginVal = $("login").value.trim();
  const pass = $("password").value;

  const users = load(K_USERS, []);
  const user = users.find(u=>u.login===loginVal && u.password===pass && u.role===role);

  if(!user){
    alert("Логин/пароль немесе рөл қате ❌");
    return;
  }

  if(role==="student"){
    if(!className){ alert("Сыныпты жазыңыз (мысалы 9A) ❗"); return; }
    user.className = className;
    save(K_USERS, users);
  }

  save(K_SESSION, { userId:user.id });
  renderApp();
}

function logout(){
  localStorage.removeItem(K_SESSION);
  renderApp();
}

// ====== TOPICS ======
function fillTopicSelect(){
  const sel = $("topicSelect");
  if(!sel) return;
  sel.innerHTML = "";
  const entries = [
    ["electric", TEST_BANK.electric.title],
    ["mech", TEST_BANK.mech.title],
    ["optic", TEST_BANK.optic.title],
  ];
  entries.forEach(([id,title])=>{
    const opt=document.createElement("option");
    opt.value=id;
    opt.textContent=title;
    sel.appendChild(opt);
  });
}

function getSelectedTest(){
  const id = $("topicSelect")?.value || "electric";
  return TEST_BANK[id];
}

// ====== STATE ======
function getStudentState(student){
  const mistakes = student.mistakes || {};
  const wrongIds = Object.keys(mistakes).filter(qid=>mistakes[qid]?.wrong);
  const allCorrected = wrongIds.length===0 ? true : wrongIds.every(qid=>mistakes[qid].corrected===true);
  return { wrongCount:wrongIds.length, allCorrected, canSend:allCorrected };
}

// ====== STUDENT UI ======
function renderStudent(student){
  showScreen("screenStudent");
  $("btnLogout").classList.remove("hidden");

  fillTopicSelect();
  $("studentMeta").textContent = `Оқушы: ${student.name||student.login} | Сынып: ${student.className||"—"}`;

  const st = getStudentState(student);
  if(st.wrongCount===0) $("statusPill").textContent = "Статус: Қате жоқ (немесе әлі тест тапсырмадың)";
  else if(!st.allCorrected) $("statusPill").textContent = `Статус: ${st.wrongCount} қате — Қатемен жұмыс міндетті`;
  else $("statusPill").textContent = "Статус: Қателер түзетілді ✅";

  $("btnSendToTeacher").disabled = !st.canSend;

  $("studentArea").innerHTML = `
    <div class="qcard">
      <div class="badge">Нұсқаулық</div>
      <p style="margin:10px 0 0 0">
        1) Тақырып таңда → 2) Тест тапсыру → 3) Қате болса қатемен жұмыс → 4) Түзеткен соң ғана мұғалімге жіберу.
      </p>
    </div>
  `;
}

function startTest(student){
  const T = getSelectedTest();

  const st = getStudentState(student);
  if(st.wrongCount>0 && !st.allCorrected){
    alert("Алдымен қатемен жұмысты орында ❗");
    return;
  }

  let html = `<div class="qcard"><div class="badge">Тест</div><h3 style="margin:10px 0 0 0">${T.title}</h3></div>`;
  T.questions.forEach((q,i)=>{
    html += `
      <div class="qcard">
        <div class="badge">Сұрақ ${i+1}</div>
        <p style="margin:10px 0"><b>${q.text}</b></p>
        ${q.options.map((opt,idx)=>`
          <label style="display:block; margin:8px 0; cursor:pointer">
            <input type="radio" name="${q.id}" value="${idx}"> ${opt}
          </label>
        `).join("")}
      </div>
    `;
  });
  html += `<button id="btnSubmitTest" class="btn primary">Жауаптарды жіберу</button>`;
  $("studentArea").innerHTML = html;

  $("btnSubmitTest").onclick = ()=> submitTest(student);
}

function submitTest(student){
  const T = getSelectedTest();
  const users = load(K_USERS, []);
  const me = users.find(u=>u.id===student.id);
  if(!me) return;

  me.mistakes = {};
  let correctCount = 0;

  T.questions.forEach(q=>{
    const chosen = document.querySelector(`input[name="${q.id}"]:checked`);
    const chosenIndex = chosen ? Number(chosen.value) : null;

    if(chosenIndex === q.correct){
      correctCount++;
    } else {
      me.mistakes[q.id] = { wrong:true, corrected:false, chosenIndex, topicKey: $("topicSelect").value };
    }
  });

  const score = Math.round((correctCount / T.questions.length) * 100);
  me.lastAttempt = { date: nowISO(), topicTitle: T.title, score, correctCount, total:T.questions.length, topicKey:$("topicSelect").value };

  save(K_USERS, users);

  const wrong = T.questions.length - correctCount;
  $("studentArea").innerHTML = `
    <div class="qcard">
      <div class="badge">Нәтиже</div>
      <h3 style="margin:10px 0 0 0">Ұпай: ${score}/100 | Қате: ${wrong}</h3>
      <p class="muted">Қате болса — “Қатемен жұмыс” міндетті. Түзетпейінше жіберу болмайды.</p>
    </div>
  `;

  renderStudent(getCurrentUser());
}

function renderCorrections(student){
  const users = load(K_USERS, []);
  const me = users.find(u=>u.id===student.id);
  if(!me) return;

  const mistakes = me.mistakes || {};
  const wrongIds = Object.keys(mistakes).filter(qid=>mistakes[qid]?.wrong);

  if(wrongIds.length===0){
    $("studentArea").innerHTML = `
      <div class="qcard"><div class="badge">Қатемен жұмыс</div>
      <h3 style="margin:10px 0 0 0">Қате жоқ ✅</h3></div>`;
    renderStudent(getCurrentUser());
    return;
  }

  let html = `<div class="qcard"><div class="badge">Қatemен жұмыс (міндетті)</div>
  <p class="muted">Әр қатеңді түзет: дұрыс жауапты таңда + түсіндірмені оқы.</p></div>`;

  wrongIds.forEach((qid, i)=>{
    const meta = mistakes[qid];
    const topicKey = meta.topicKey || "electric";
    const T = TEST_BANK[topicKey];
    const q = T.questions.find(x=>x.id===qid);

    const chosenText = (meta.chosenIndex===null || meta.chosenIndex===undefined)
      ? "Сен жауап таңдамадың"
      : q.options[meta.chosenIndex];

    const correctText = q.options[q.correct];

    html += `
      <div class="qcard">
        <div class="row between">
          <div class="badge">Қате ${i+1}</div>
          <div class="badge">${meta.corrected ? "ТҮЗЕТІЛДІ ✅" : "ТҮЗЕТІЛМЕДІ ❌"}</div>
        </div>

        <p style="margin:10px 0"><b>${q.text}</b></p>

        <div class="qcard" style="background:rgba(255,255,255,.02)">
          <div class="badge">Сенің жауабың</div>
          <p style="margin:10px 0 0 0">${chosenText}</p>
        </div>

        <提醒 class="qcard" style="background:rgba(255,255,255,.02)">
          <div class="badge">Дұрыс жауап</div>
          <p style="margin:10px 0 0 0"><b>${correctText}</b></p>
        </div>

        <div class="qcard" style="background:rgba(255,255,255,.02)">
          <div class="badge">Неге қате?</div>
          <p style="margin:10px 0 0 0">${q.whyWrong || "Бұл жауап формула/анықтамаға сәйкес келмейді."}</p>
        </div>

        <div class="qcard" style="background:rgba(255,255,255,.02)">
          <div class="badge">Түсіндірме (формула)</div>
          <p style="margin:10px 0 0 0">${q.explanation}</p>
        </div>

        <div style="margin-top:10px">
          ${q.options.map((opt, idx)=>`
            <label style="display:block; margin:8px 0; cursor:pointer">
              <input type="radio" name="corr_${qid}" value="${idx}"> ${opt}
            </label>
          `).join("")}
        </div>

        <button class="btn success" data-fix="${qid}">Тексеру</button>
      </div>
    `;
  });

  html += `<button id="btnFinishCorrections" class="btn primary">Қатемен жұмысты аяқтау</button>`;
  $("studentArea").innerHTML = html;

  document.querySelectorAll("[data-fix]").forEach(btn=>{
    btn.onclick = ()=>{
      const qid = btn.getAttribute("data-fix");
      const meta = me.mistakes[qid];
      const topicKey = meta.topicKey || "electric";
      const T = TEST_BANK[topicKey];
      const q = T.questions.find(x=>x.id===qid);

      const chosen = document.querySelector(`input[name="corr_${qid}"]:checked`);
      const chosenIndex = chosen ? Number(chosen.value) : null;

      if(chosenIndex === q.correct){
        me.mistakes[qid].corrected = true;
        save(K_USERS, users);
        alert("Дұрыс ✅ Қате түзетілді.");
        renderCorrections(getCurrentUser());
      }else{
        alert("Әлі қате ❌ Түсіндірмені қайта оқы.");
      }
    };
  });

  $("btnFinishCorrections").onclick = ()=>{
    const st = getStudentState(me);
    if(!st.allCorrected){
      alert("Әлі түзетілмеген қателер бар ❗");
      return;
    }
    alert("Қатемен жұмыс өтті ✅ Енді мұғалімге жіберуге болады.");
    renderStudent(getCurrentUser());
  };
}

// ====== SEND TO TEACHER + TEACHER ANALYTICS ======
function sendToTeacher(student){
  const users = load(K_USERS, []);
  const me = users.find(u=>u.id===student.id);
  if(!me) return;

  const st = getStudentState(me);
  if(!st.allCorrected){ alert("Алдымен қатемен жұмысты толық өт ❗"); return; }
  if(!me.lastAttempt){ alert("Алдымен тест тапсырып ал ❗"); return; }

  const results = load(K_RESULTS, []);
  const wrongIds = Object.keys(me.mistakes||{}).filter(qid=>me.mistakes[qid]?.wrong);

  results.push({
    id: uid(),
    date: nowISO(),
    className: me.className||"—",
    studentName: me.name||me.login,
    studentLogin: me.login,
    topicTitle: me.lastAttempt.topicTitle,
    score: me.lastAttempt.score,
    wrongQuestionIds: wrongIds
  });

  save(K_RESULTS, results);
  alert("Нәтиже мұғалімге жіберілді ✅");
}

function renderTeacher(){
  showScreen("screenTeacher");
  $("btnLogout").classList.remove("hidden");
  renderResults();
}

function renderResults(){
  const results = load(K_RESULTS, []);
  if(results.length===0){
    $("teacherArea").innerHTML = `<div class="qcard"><div class="badge">Нәтижелер</div>
    <h3 style="margin:10px 0 0 0">Әзірге нәтиже жоқ</h3></div>`;
    return;
  }

  const rows = [...results].sort((a,b)=>b.date.localeCompare(a.date)).map(r=>`
    <div class="qcard">
      <div class="row between">
        <div>
          <div class="badge">${new Date(r.date).toLocaleString()}</div>
          <h3 style="margin:10px 0 0 0">${r.studentName} (${r.className}) — <span class="badge">${r.score}/100</span></h3>
          <p class="muted" style="margin:8px 0 0 0">Тақырып: ${r.topicTitle}</p>
        </div>
        <div class="badge">Қате саны: ${r.wrongQuestionIds.length}</div>
      </div>
    </div>
  `).join("");

  $("teacherArea").innerHTML = `<div class="qcard"><div class="badge">Нәтижелер тізімі</div></div>${rows}`;
}

function renderTopMistakes(){
  const results = load(K_RESULTS, []);
  if(results.length===0){ alert("Нәтиже жоқ."); return; }

  const counts = {};
  results.forEach(r=>r.wrongQuestionIds.forEach(qid=>counts[qid]=(counts[qid]||0)+1));

  const arr = Object.entries(counts).map(([qid,cnt])=>({qid,cnt})).sort((a,b)=>b.cnt-a.cnt);

  const list = arr.map((x,i)=>`
    <div class="qcard">
      <div class="row between">
        <div class="badge">TOP ${i+1}</div>
        <div class="badge">Қате: ${x.cnt}</div>
      </div>
      <p style="margin:10px 0 0 0"><b>Сұрақ ID:</b> ${x.qid}</p>
    </div>
  `).join("");

  $("teacherArea").innerHTML = `<div class="qcard"><div class="badge">Аналитика</div>
  <h3 style="margin:10px 0 0 0">Қай сұрақтан көп қате</h3></div>${list}`;
}

function clearAll(){
  if(!confirm("Барлық деректі тазалаймыз ба?")) return;
  localStorage.removeItem(K_USERS);
  localStorage.removeItem(K_RESULTS);
  localStorage.removeItem(K_SESSION);
  ensureStorage();
  alert("Тазаланды ✅");
  renderApp();
}

// ====== APP ======
function renderApp(){
  ensureStorage();
  const user = getCurrentUser();
  $("btnLogout").onclick = logout;

  if(!user){
    showScreen("screenLogin");
    $("btnLogout").classList.add("hidden");
    return;
  }

  if(user.role==="student") renderStudent(user);
  else renderTeacher();
}

window.addEventListener("load", ()=>{
  ensureStorage();

  $("btnLogin").onclick = login;
  $("btnSeed").onclick = seedDemoUsers;

  $("btnStartTest").onclick = ()=> startTest(getCurrentUser());
  $("btnGoCorrections").onclick = ()=> renderCorrections(getCurrentUser());
  $("btnSendToTeacher").onclick = ()=> sendToTeacher(getCurrentUser());

  $("btnShowResults").onclick = ()=> renderResults();
  $("btnTopMistakes").onclick = ()=> renderTopMistakes();
  $("btnClearAll").onclick = ()=> clearAll();

  renderApp();
});