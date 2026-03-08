const isValidLocale = (locale) => locale === "ar" || locale === "en";

const STORAGE = {
  locale: "catCafeDiary.locale",
  users: "catCafeDiary.users.v1",
  currentUser: "catCafeDiary.currentUser.v1",
};

const MOODS = [
  { key: "calm", emoji: "☕", ar: "هادئ", en: "calm" },
  { key: "soft", emoji: "🍰", ar: "لطيف", en: "soft" },
  { key: "focused", emoji: "📚", ar: "مركّز", en: "focused" },
  { key: "happy", emoji: "🍓", ar: "فرحان", en: "happy" },
  { key: "tired", emoji: "🌙", ar: "تعبان", en: "tired" },
];

const PRESET_AVATARS = [
  { id: "avatar", src: "assets/cat-avatar.svg", alt: "Avatar" },
  { id: "mochi", src: "assets/cat-mochi.svg", alt: "Mochi" },
  { id: "latte", src: "assets/cat-latte.svg", alt: "Latte" },
  { id: "shadow", src: "assets/cat-shadow.svg", alt: "Shadow" },
  { id: "berry", src: "assets/cat-berry.svg", alt: "Berry" },
  { id: "cloud", src: "assets/cat-cloud.svg", alt: "Cloud" },
];

const I18N = {
  ar: {
    appTitle: "مفكرة مقهى القطط",
    appSubtitle: "دفتر لطيف للذكريات والمزاج… بهدوء وكيوت.",

    navHome: "الرئيسية",
    navDiary: "المفكرة",
    navCats: "قططي",
    navContact: "تواصل",

    homeTitle: "مرحبًا 👋",
    homeDesc: "هذي صفحتي الصغيرة… مفكرة كافيه للذكريات، الاقتباسات، والأهداف.",

    weeklyHint: "(يتغير تلقائيًا كل أسبوع)",

    metaMoodToday: "مزاج اليوم",
    metaLastUpdate: "آخر تحديث",

    homeCardTitle: "قائمة اليوم ☕",

    menuStrawberryName: "Strawberry Milk",
    menuStrawberryDesc: "مزاج خفيف + ابتسامة",
    menuLatteName: "Latte Focus",
    menuLatteDesc: "هدوء + تركيز",
    menuMoonName: "Moon Cocoa",
    menuMoonDesc: "ليلة لطيفة وكتابة",

    diaryTitle: "المفكرة",
    diaryDesc: "مربعات صغيرة… عشان اليوم ما يحتاج يطول.",

    noteTodayTitle: "ملاحظة اليوم",
    noteTodayDate: "08 مارس 2026",
    noteTodayText: "اليوم كان هادي… وأنا أرتّب أفكاري خطوة خطوة.",

    noteMoodTitle: "مزاجي",
    noteMoodText: "هدوء + شيء لطيف + رغبة بسيطة بالتعلّم.",

    noteQuoteTitle: "اقتباس",
    noteQuoteText: "Small steps still count.",

    noteGoalTitle: "هدف الأسبوع",
    noteGoalText: "أخلص جزء صغير من مشروعي + أتعلم شي واحد جديد.",

    noteWinTitle: "إنجاز صغير",
    noteWinText: "رتّبت الصفحة وصارت كيوت ومنظمة.",

    noteJarTitle: "برطمان الذكريات",
    noteJarText: "اكتبي ذكرى واحدة اليوم… حتى لو سطر واحد.",

    catsTitle: "قططي",
    catsDesc: "شخصيات قطط تمثل مشاعري… كأنهم عالمي الداخلي.",

    mochiMeta: "يمثل: الراحة | Comfort",
    mochiDesc: "لما أكون Mochi: أحب الهدوء، أرتّب، وأخذ نفس.",

    latteMeta: "يمثل: النشاط | Energy",
    latteDesc: "لما أكون Latte: أبدأ أشتغل، أتعلّم، وأسوي إنجاز واضح.",

    shadowMeta: "يمثل: الغموض/التركيز | Deep focus",
    shadowDesc: "لما أكون Shadow: أفضل الصمت، وأفكر بعمق قبل القرار.",

    berryMeta: "يمثل: الفرح | Joy",
    berryDesc: "لما أكون Berry: أبغى أشارك، أجرب، وأسوي شيء كيوت لنفسي.",

    cloudMeta: "يمثل: التشتت اللطيف | Soft chaos",
    cloudDesc: "لما أكون Cloud: أحتاج قائمة بسيطة… ومو لازم كل شيء كامل.",

    addCatTitle: "أضيف قطة جديدة؟",
    addCatDesc: "بدّلي هذا الكرت بشخصية جديدة تمثلك.",

    contactTitle: "تواصل",
    contactDesc: "اتركي/اترك رسالة لطيفة… على شكل بصمة 🐾",

    contactCardTitle: "اترك رسالة لطيفة 🐾",
    contactCardText: "هذا زر جاهز—غيّري الإيميل باسمك.",
    contactEmailBtn: "راسلني",

    linksTitle: "روابط",
    linksHint: "(حطي روابطك بدل #)",

    footerMade: "مصنوع بـ ☕ + ذكريات لطيفة",

    open: "🟢 مفتوح",
    closed: "🔴 مغلق",

    moodTodayPrefix: "",

    // Account
    accountTitle: "الحساب",
    accountDesc: "سجّلي/سجّل عشان تختار/ين الأفاتار والمزاج وتضيف/ين ذكرياتك.",
    usernameLabel: "اسم المستخدم",
    passcodeLabel: "رمز الدخول",
    moodLabel: "اختيار المزاج",
    moodHint: "مهم: مزاج الحساب يختاره صاحب الحساب.",
    avatarLabel: "اختيار الأفاتار",
    changeAvatarLabel: "تغيير الأفاتار",
    avatarHint: "(تقدري/تقدر تغيّره بأي وقت)",
    uploadAvatar: "أو ارفع صورة من جهازك",
    registerBtn: "إنشاء حساب",
    loginBtn: "تسجيل دخول",
    logoutBtn: "تسجيل خروج",
    localOnlyHint: "(ملاحظة: الحساب محفوظ على نفس الجهاز فقط)",

    // Memories
    memoriesTitle: "ذكرياتي",
    memoriesHint: "سجّل/ي دخول عشان تضيف/ين ذكرياتك.",
    addMemoryTitle: "إضافة ذكرى",
    addMemoryTiny: "قصيرة ولطيفة",
    memoryTitleLabel: "العنوان",
    memoryTextLabel: "الذكرى",
    memoryMoodLabel: "المزاج",
    memoryTitlePh: "مثلاً: لحظة جميلة اليوم",
    memoryTextPh: "اكتب/ي سطرين… وش صار؟ وش حسّيتي/حسّيت؟",
    addMemoryBtn: "إضافة",
    deleteMemoryBtn: "حذف",

    // Messages
    msgNeedUsername: "اكتب/ي اسم مستخدم.",
    msgNeedPasscode: "اكتب/ي رمز الدخول.",
    msgUserExists: "اسم المستخدم مستخدم بالفعل.",
    msgUserCreated: "تم إنشاء الحساب! الآن مسجّل/ة دخول.",
    msgLoginOk: "تم تسجيل الدخول.",
    msgLoginFail: "بيانات الدخول غير صحيحة.",
    msgLoggedOut: "تم تسجيل الخروج.",
    msgNeedLogin: "لازم تسجّل/ي دخول أول.",
    msgMemoryAdded: "تمت إضافة الذكرى.",
    msgMemoryDeleted: "تم حذف الذكرى.",
    msgMemoryEmpty: "اكتب/ي عنوان أو نص للذكرى.",
    msgAvatarTooBig: "الملف كبير—جرّب/ي صورة أصغر.",
  },

  en: {
    appTitle: "Cat Café Diary",
    appSubtitle: "A cozy little diary for moods, notes, and soft wins.",

    navHome: "Home",
    navDiary: "Diary",
    navCats: "My Cats",
    navContact: "Contact",

    homeTitle: "Hello 👋",
    homeDesc: "This is my tiny café diary for memories, quotes, and goals.",

    weeklyHint: "(auto-changes every week)",

    metaMoodToday: "Mood today",
    metaLastUpdate: "Last update",

    homeCardTitle: "Today’s Menu ☕",

    menuStrawberryName: "Strawberry Milk",
    menuStrawberryDesc: "light mood + small smile",
    menuLatteName: "Latte Focus",
    menuLatteDesc: "calm + focus",
    menuMoonName: "Moon Cocoa",
    menuMoonDesc: "soft night writing",

    diaryTitle: "Diary",
    diaryDesc: "Tiny cards… because today doesn’t need to be long.",

    noteTodayTitle: "Today’s note",
    noteTodayDate: "8 Mar 2026",
    noteTodayText: "A calm day… I’m organizing my thoughts step by step.",

    noteMoodTitle: "Mood",
    noteMoodText: "calm + something sweet + a tiny wish to learn.",

    noteQuoteTitle: "Quote",
    noteQuoteText: "Small steps still count.",

    noteGoalTitle: "Weekly goal",
    noteGoalText: "Finish a small part of my project + learn one new thing.",

    noteWinTitle: "Tiny win",
    noteWinText: "I organized the page and made it cute.",

    noteJarTitle: "Memory jar",
    noteJarText: "Write one memory today… even one line.",

    catsTitle: "My Cats",
    catsDesc: "Cat personas that represent my inner moods.",

    mochiMeta: "Represents: comfort",
    mochiDesc: "When I’m Mochi: I want calm, order, and a deep breath.",

    latteMeta: "Represents: energy",
    latteDesc: "When I’m Latte: I start working, learning, and shipping.",

    shadowMeta: "Represents: deep focus",
    shadowDesc: "When I’m Shadow: I prefer silence and thinking first.",

    berryMeta: "Represents: joy",
    berryDesc: "When I’m Berry: I want to share, try, and be playful.",

    cloudMeta: "Represents: soft chaos",
    cloudDesc: "When I’m Cloud: I need a simple list — not perfection.",

    addCatTitle: "Add a new cat?",
    addCatDesc: "Replace this card with a new persona.",

    contactTitle: "Contact",
    contactDesc: "Leave a soft message — a little paw print 🐾",

    contactCardTitle: "Leave a paw message 🐾",
    contactCardText: "This button is ready — replace the email with yours.",
    contactEmailBtn: "Email me",

    linksTitle: "Links",
    linksHint: "(replace # with your links)",

    footerMade: "Made with ☕ + soft memories",

    open: "🟢 OPEN",
    closed: "🔴 CLOSED",

    moodTodayPrefix: "",

    // Account
    accountTitle: "Account",
    accountDesc: "Create an account to choose an avatar/mood and save memories.",
    usernameLabel: "Username",
    passcodeLabel: "Passcode",
    moodLabel: "Choose mood",
    moodHint: "Important: the account owner chooses the mood.",
    avatarLabel: "Choose avatar",
    changeAvatarLabel: "Change avatar",
    avatarHint: "(you can change it anytime)",
    uploadAvatar: "Or upload from your device",
    registerBtn: "Create account",
    loginBtn: "Log in",
    logoutBtn: "Log out",
    localOnlyHint: "(Saved on this device only)",

    // Memories
    memoriesTitle: "My memories",
    memoriesHint: "Log in to add your memories.",
    addMemoryTitle: "Add a memory",
    addMemoryTiny: "short & sweet",
    memoryTitleLabel: "Title",
    memoryTextLabel: "Memory",
    memoryMoodLabel: "Mood",
    memoryTitlePh: "e.g. a sweet moment today",
    memoryTextPh: "Write 1–2 lines… what happened? how did you feel?",
    addMemoryBtn: "Add",
    deleteMemoryBtn: "Delete",

    // Messages
    msgNeedUsername: "Enter a username.",
    msgNeedPasscode: "Enter a passcode.",
    msgUserExists: "That username already exists.",
    msgUserCreated: "Account created! You’re now logged in.",
    msgLoginOk: "Logged in.",
    msgLoginFail: "Incorrect login details.",
    msgLoggedOut: "Logged out.",
    msgNeedLogin: "Please log in first.",
    msgMemoryAdded: "Memory added.",
    msgMemoryDeleted: "Memory deleted.",
    msgMemoryEmpty: "Write a title or some text.",
    msgAvatarTooBig: "File is too large — try a smaller image.",
  },
};

function getLocale() {
  return document.documentElement.lang === "ar" ? "ar" : "en";
}

function safeJsonParse(text, fallback) {
  try {
    return JSON.parse(text);
  } catch {
    return fallback;
  }
}

function loadUsers() {
  const raw = localStorage.getItem(STORAGE.users);
  return raw ? safeJsonParse(raw, {}) : {};
}

function saveUsers(users) {
  localStorage.setItem(STORAGE.users, JSON.stringify(users));
}

function normalizeUsername(username) {
  return String(username || "").trim().toLowerCase();
}

function getCurrentUsername() {
  const stored = localStorage.getItem(STORAGE.currentUser);
  return stored ? String(stored) : null;
}

function setCurrentUsername(usernameOrNull) {
  if (!usernameOrNull) localStorage.removeItem(STORAGE.currentUser);
  else localStorage.setItem(STORAGE.currentUser, usernameOrNull);
}

function getCurrentUser() {
  const username = getCurrentUsername();
  if (!username) return null;
  const users = loadUsers();
  return users[username] || null;
}

function updateOpenClosed(locale) {
  const hour = new Date().getHours();
  const open = hour >= 8 && hour <= 22;
  const chip = document.getElementById("openChip");
  if (!chip) return;
  chip.textContent = open ? I18N[locale].open : I18N[locale].closed;
}

function getWeekSeed(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return `${d.getUTCFullYear()}-${weekNo}`;
}

function pickWeeklyStatus(locale) {
  const seed = getWeekSeed();
  const statuses =
    locale === "ar"
      ? [
          "🐾 أتعلم بهدوء…",
          "🍓 حليب فراولة… وابتسامة",
          "📚 أبني عالمي خطوة خطوة",
          "☕ أسبوع دافئ",
          "🌙 هدوء + تركيز",
        ]
      : [
          "🐾 studying…",
          "🍓 drinking strawberry milk",
          "📚 building my world",
          "☕ cozy week",
          "🌙 quiet but focused",
        ];

  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return statuses[hash % statuses.length];
}

function getMoodLabel(locale, moodKey) {
  const mood = MOODS.find((m) => m.key === moodKey) || MOODS[0];
  return `${mood.emoji} ${locale === "ar" ? mood.ar : mood.en}`;
}

function pickMoodTodayFallback(locale) {
  const d = new Date();
  const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  let hash = 0;
  for (let i = 0; i < key.length; i += 1) hash = (hash * 33 + key.charCodeAt(i)) >>> 0;
  const mood = MOODS[hash % MOODS.length];
  return `${mood.emoji} ${locale === "ar" ? mood.ar : mood.en}`;
}

function updateMeta(locale) {
  const lastUpdate = document.getElementById("lastUpdate");
  if (lastUpdate) {
    lastUpdate.textContent = new Date().toLocaleString(locale === "ar" ? "ar" : "en");
  }

  const moodToday = document.getElementById("moodToday");
  if (moodToday) {
    const user = getCurrentUser();
    moodToday.textContent = user?.moodKey ? getMoodLabel(locale, user.moodKey) : pickMoodTodayFallback(locale);
  }

  const weeklyStatusText = document.getElementById("weeklyStatusText");
  if (weeklyStatusText) {
    weeklyStatusText.textContent = pickWeeklyStatus(locale);
  }
}

function populateMoodSelect(selectEl, locale, selectedKey) {
  if (!selectEl) return;
  const currentValue = selectedKey || selectEl.value || MOODS[0].key;
  selectEl.innerHTML = "";
  MOODS.forEach((mood) => {
    const opt = document.createElement("option");
    opt.value = mood.key;
    opt.textContent = `${mood.emoji} ${locale === "ar" ? mood.ar : mood.en}`;
    selectEl.appendChild(opt);
  });
  selectEl.value = MOODS.some((m) => m.key === currentValue) ? currentValue : MOODS[0].key;
}

function populateAvatarSelect(selectEl, locale, currentAvatarValue) {
  if (!selectEl) return;
  const current = String(currentAvatarValue || PRESET_AVATARS[0].src);
  selectEl.innerHTML = "";
  PRESET_AVATARS.forEach((a) => {
    const opt = document.createElement("option");
    opt.value = a.src;
    opt.textContent = a.alt;
    selectEl.appendChild(opt);
  });
  const all = PRESET_AVATARS.map((a) => a.src);
  selectEl.value = all.includes(current) ? current : PRESET_AVATARS[0].src;
}

function setMessage(el, text) {
  if (!el) return;
  el.textContent = text || "";
}

function buildAvatarPicker(locale) {
  const picker = document.getElementById("avatarPicker");
  if (!picker) return;

  picker.innerHTML = "";

  const makeOption = ({ id, src, alt }) => {
    const label = document.createElement("label");
    label.className = "avatar";
    label.setAttribute("aria-label", alt);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "avatarChoice";
    input.value = id;

    const img = document.createElement("img");
    img.className = "avatar__img";
    img.src = src;
    img.alt = alt;

    label.appendChild(input);
    label.appendChild(img);

    input.addEventListener("change", () => {
      picker.querySelectorAll(".avatar").forEach((n) => n.classList.remove("avatar--selected"));
      label.classList.add("avatar--selected");
    });

    return { label, input };
  };

  const options = PRESET_AVATARS.map((a) => makeOption(a));
  options.forEach((o) => picker.appendChild(o.label));

  // default select first
  const first = options[0];
  if (first) {
    first.input.checked = true;
    first.label.classList.add("avatar--selected");
  }
}

function getSelectedAvatar(users, usernameKey) {
  const user = users[usernameKey];
  if (!user?.avatar) return { type: "preset", value: PRESET_AVATARS[0].src };
  return user.avatar;
}

function getAvatarFromAuthUI() {
  const picker = document.getElementById("avatarPicker");
  const upload = document.getElementById("avatarUpload");

  const uploaded = upload?.dataset?.avatarDataUrl;
  if (uploaded) return { type: "custom", value: uploaded };

  const checked = picker?.querySelector('input[name="avatarChoice"]:checked');
  const id = checked ? String(checked.value) : PRESET_AVATARS[0].id;
  const preset = PRESET_AVATARS.find((a) => a.id === id) || PRESET_AVATARS[0];
  return { type: "preset", value: preset.src };
}

function applyAuthStateToUI(locale) {
  const authPanel = document.getElementById("authPanel");
  const profilePanel = document.getElementById("profilePanel");
  const memoryComposer = document.getElementById("memoryComposer");
  const memoriesHint = document.getElementById("memoriesHint");

  const user = getCurrentUser();
  const loggedIn = Boolean(user);

  if (authPanel) authPanel.hidden = loggedIn;
  if (profilePanel) profilePanel.hidden = !loggedIn;
  if (memoryComposer) memoryComposer.hidden = !loggedIn;
  if (memoriesHint) memoriesHint.hidden = loggedIn;

  if (!loggedIn) {
    renderMemories(locale, null);
    return;
  }

  const profileName = document.getElementById("profileName");
  if (profileName) profileName.textContent = user.displayName || user.username;

  const profileAvatar = document.getElementById("profileAvatar");
  if (profileAvatar) profileAvatar.src = user.avatar?.value || PRESET_AVATARS[0].src;

  populateMoodSelect(document.getElementById("profileMood"), locale, user.moodKey);
  populateMoodSelect(document.getElementById("memoryMood"), locale, user.moodKey);

  populateAvatarSelect(document.getElementById("profileAvatarSelect"), locale, user.avatar?.value);

  renderMemories(locale, user);
}

function updateUserAvatar(avatar) {
  const locale = getLocale();
  const username = getCurrentUsername();
  if (!username) return;

  const users = loadUsers();
  if (!users[username]) return;

  users[username].avatar = avatar;
  saveUsers(users);

  const profileAvatar = document.getElementById("profileAvatar");
  if (profileAvatar) profileAvatar.src = avatar.value;

  // keep select in sync when switching to preset
  if (avatar.type === "preset") {
    populateAvatarSelect(document.getElementById("profileAvatarSelect"), locale, avatar.value);
  }
}

function registerOrLogin(mode) {
  const locale = getLocale();
  const msg = document.getElementById("authMsg");

  const usernameRaw = document.getElementById("authUsername")?.value;
  const passcode = document.getElementById("authPasscode")?.value;
  const moodKey = document.getElementById("authMood")?.value || MOODS[0].key;

  const usernameKey = normalizeUsername(usernameRaw);
  const displayName = String(usernameRaw || "").trim();

  if (!usernameKey) return setMessage(msg, I18N[locale].msgNeedUsername);
  if (!passcode) return setMessage(msg, I18N[locale].msgNeedPasscode);

  const users = loadUsers();

  if (mode === "register") {
    if (users[usernameKey]) return setMessage(msg, I18N[locale].msgUserExists);

    users[usernameKey] = {
      username: usernameKey,
      displayName,
      passcode: String(passcode),
      moodKey,
      avatar: getAvatarFromAuthUI(),
      createdAt: new Date().toISOString(),
      memories: [],
    };

    saveUsers(users);
    setCurrentUsername(usernameKey);
    setMessage(msg, I18N[locale].msgUserCreated);
    applyAuthStateToUI(locale);
    updateMeta(locale);
    return;
  }

  // login
  const user = users[usernameKey];
  if (!user || String(user.passcode) !== String(passcode)) {
    return setMessage(msg, I18N[locale].msgLoginFail);
  }

  setCurrentUsername(usernameKey);
  setMessage(msg, I18N[locale].msgLoginOk);
  applyAuthStateToUI(locale);
  updateMeta(locale);
}

function logout() {
  const locale = getLocale();
  setCurrentUsername(null);
  setMessage(document.getElementById("authMsg"), I18N[locale].msgLoggedOut);

  // clear upload buffer
  const upload = document.getElementById("avatarUpload");
  if (upload) {
    upload.value = "";
    delete upload.dataset.avatarDataUrl;
  }

  applyAuthStateToUI(locale);
  updateMeta(locale);
}

function onProfileMoodChange() {
  const locale = getLocale();
  const user = getCurrentUser();
  if (!user) return;

  const users = loadUsers();
  const username = getCurrentUsername();
  if (!username || !users[username]) return;

  const selected = document.getElementById("profileMood")?.value;
  if (!selected) return;

  users[username].moodKey = selected;
  saveUsers(users);

  populateMoodSelect(document.getElementById("memoryMood"), locale, selected);
  updateMeta(locale);
}

function createMemoryId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function addMemory() {
  const locale = getLocale();
  const msg = document.getElementById("memoryMsg");

  const username = getCurrentUsername();
  if (!username) return setMessage(msg, I18N[locale].msgNeedLogin);

  const title = String(document.getElementById("memoryTitle")?.value || "").trim();
  const text = String(document.getElementById("memoryText")?.value || "").trim();
  const moodKey = String(document.getElementById("memoryMood")?.value || MOODS[0].key);

  if (!title && !text) return setMessage(msg, I18N[locale].msgMemoryEmpty);

  const users = loadUsers();
  const user = users[username];
  if (!user) return setMessage(msg, I18N[locale].msgNeedLogin);

  user.memories = Array.isArray(user.memories) ? user.memories : [];
  user.memories.unshift({
    id: createMemoryId(),
    title,
    text,
    moodKey,
    createdAt: new Date().toISOString(),
  });

  users[username] = user;
  saveUsers(users);

  const titleEl = document.getElementById("memoryTitle");
  const textEl = document.getElementById("memoryText");
  if (titleEl) titleEl.value = "";
  if (textEl) textEl.value = "";

  setMessage(msg, I18N[locale].msgMemoryAdded);
  applyAuthStateToUI(locale);
}

function deleteMemory(memoryId) {
  const locale = getLocale();
  const msg = document.getElementById("memoryMsg");

  const username = getCurrentUsername();
  if (!username) return setMessage(msg, I18N[locale].msgNeedLogin);

  const users = loadUsers();
  const user = users[username];
  if (!user) return setMessage(msg, I18N[locale].msgNeedLogin);

  user.memories = (Array.isArray(user.memories) ? user.memories : []).filter((m) => m.id !== memoryId);
  users[username] = user;
  saveUsers(users);

  setMessage(msg, I18N[locale].msgMemoryDeleted);
  applyAuthStateToUI(locale);
}

function formatDate(locale, iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString(locale === "ar" ? "ar" : "en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function renderMemories(locale, userOrNull) {
  const list = document.getElementById("memoriesList");
  if (!list) return;

  list.innerHTML = "";

  const memories = userOrNull?.memories;
  if (!Array.isArray(memories) || memories.length === 0) return;

  memories.forEach((m) => {
    const card = document.createElement("article");
    card.className = "memory";

    const top = document.createElement("div");
    top.className = "memory__top";

    const title = document.createElement("h4");
    title.className = "memory__title";
    title.textContent = m.title || (locale === "ar" ? "ذكرى" : "Memory");

    const meta = document.createElement("div");
    meta.className = "memory__meta";
    meta.textContent = `${getMoodLabel(locale, m.moodKey)} · ${formatDate(locale, m.createdAt)}`;

    top.appendChild(title);
    top.appendChild(meta);

    const text = document.createElement("p");
    text.className = "memory__text";
    text.textContent = m.text || "";

    const actions = document.createElement("div");
    actions.className = "memory__actions";

    const del = document.createElement("button");
    del.type = "button";
    del.className = "btn btn--danger";
    del.textContent = I18N[locale].deleteMemoryBtn;
    del.addEventListener("click", () => deleteMemory(m.id));

    actions.appendChild(del);

    card.appendChild(top);
    if (m.text) card.appendChild(text);
    card.appendChild(actions);

    list.appendChild(card);
  });
}

function applyLocale(locale) {
  if (!isValidLocale(locale)) return;

  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const value = I18N[locale][key];
    if (typeof value === "string") el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    const value = I18N[locale][key];
    if (typeof value === "string") el.setAttribute("placeholder", value);
  });

  updateOpenClosed(locale);
  updateMeta(locale);

  // Refresh selects that are built dynamically
  populateMoodSelect(document.getElementById("authMood"), locale, document.getElementById("authMood")?.value);
  const user = getCurrentUser();
  populateMoodSelect(document.getElementById("profileMood"), locale, user?.moodKey);
  populateMoodSelect(document.getElementById("memoryMood"), locale, user?.moodKey);
  buildAvatarPicker(locale);
  applyAuthStateToUI(locale);

  localStorage.setItem(STORAGE.locale, locale);
}

function initAuth() {
  const locale = getLocale();

  buildAvatarPicker(locale);
  populateMoodSelect(document.getElementById("authMood"), locale, MOODS[0].key);

  const registerBtn = document.getElementById("registerBtn");
  if (registerBtn) registerBtn.addEventListener("click", () => registerOrLogin("register"));

  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) loginBtn.addEventListener("click", () => registerOrLogin("login"));

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) logoutBtn.addEventListener("click", logout);

  const profileMood = document.getElementById("profileMood");
  if (profileMood) profileMood.addEventListener("change", onProfileMoodChange);

  const profileAvatarSelect = document.getElementById("profileAvatarSelect");
  if (profileAvatarSelect) {
    profileAvatarSelect.addEventListener("change", () => {
      const src = String(profileAvatarSelect.value || PRESET_AVATARS[0].src);
      updateUserAvatar({ type: "preset", value: src });
    });
  }

  const profileAvatarUpload = document.getElementById("profileAvatarUpload");
  if (profileAvatarUpload) {
    profileAvatarUpload.addEventListener("change", () => {
      const localeNow = getLocale();
      const msg = document.getElementById("memoryMsg");
      const file = profileAvatarUpload.files && profileAvatarUpload.files[0];
      if (!file) return;
      if (file.size > 700_000) {
        profileAvatarUpload.value = "";
        return setMessage(msg, I18N[localeNow].msgAvatarTooBig);
      }
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = String(reader.result || "");
        updateUserAvatar({ type: "custom", value: dataUrl });
        setMessage(msg, "");
      };
      reader.readAsDataURL(file);
    });
  }

  const upload = document.getElementById("avatarUpload");
  if (upload) {
    upload.addEventListener("change", () => {
      const localeNow = getLocale();
      const msg = document.getElementById("authMsg");
      const file = upload.files && upload.files[0];
      if (!file) return;
      if (file.size > 700_000) {
        upload.value = "";
        delete upload.dataset.avatarDataUrl;
        return setMessage(msg, I18N[localeNow].msgAvatarTooBig);
      }

      const reader = new FileReader();
      reader.onload = () => {
        upload.dataset.avatarDataUrl = String(reader.result || "");
        setMessage(msg, "");
      };
      reader.readAsDataURL(file);
    });
  }
}

function initMemories() {
  const addBtn = document.getElementById("addMemoryBtn");
  if (addBtn) addBtn.addEventListener("click", addMemory);
}

function init() {
  const stored = localStorage.getItem(STORAGE.locale);
  const initial = isValidLocale(stored) ? stored : "ar";
  applyLocale(initial);

  initAuth();
  initMemories();

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = getLocale();
      applyLocale(current === "ar" ? "en" : "ar");
    });
  }

  // ensure UI matches stored login state
  applyAuthStateToUI(getLocale());
}

init();
