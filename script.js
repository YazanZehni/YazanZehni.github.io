const translations = {
  de: {
    'nav.fit': 'Passung',
    'nav.experience': 'Erfahrung',
    'nav.projects': 'Projekte',
    'nav.education': 'Studium',
    'nav.prototype': 'Prototyp',
    'nav.contact': 'Kontakt',
    'common.cv': 'CV',

  
    'hero.title': 'Yazan Zehni',
    'hero.subtitle': 'M.Sc.-Student Informatik · Web, Prototyping & datengetriebene Systeme',
    'hero.copy': 'M.Sc.-Student der Informatik an der Ruhr-Universität Bochum mit fundierten methodischen und analytischen Fähigkeiten, Interesse an Softwareentwicklung, interaktiven Web-Erfahrungen und datengetriebenen Systemen.',
    'hero.pill1': 'M.Sc. Computer Science',
    'hero.pill2': 'Deutsch · Englisch · Arabisch',
    'hero.pill3': 'Web · AI · Prototyping',
    'hero.cta1': 'CV ansehen',
    'hero.cta2': 'Transcript ansehen',
    'hero.cardTitle': 'Kurzprofil',
    'hero.card1Label': 'Aktuell',
    'hero.card1Value': 'M.Sc. Informatik, RUB',
    'hero.card2Label': 'Master-Stand',
    'hero.card2Value': '37/120 ECTS · Schnitt 1,7',
    'hero.card3Label': 'Bachelor',
    'hero.card3Value': 'abgeschlossen · 181 ECTS · Schnitt 2,3',
    'hero.card4Label': 'Besonders relevant',
    'hero.card4Value': 'Web Engineering, Requirements Engineering, NLP, Responsible AI',

    'fit.kicker': 'Warum dieses Portfolio zur Stelle passt',
    'fit.title': 'Realistisch, gezielt und ehrlich auf die Ausschreibung zugeschnitten',
    'fit.intro': 'Diese Seite hebt nur das hervor, was durch CV und Transcript belegt ist. Wo keine professionelle Erfahrung dokumentiert ist, wird nichts hinzugefügt. Stattdessen zeigt das Portfolio unten einen kleinen anwendungsbezogenen Mini-Prototypen in HTML/CSS/JavaScript.',
    'fit.card1Title': 'Website-Grundlagen',
    'fit.card1Body': 'Relevante Studienbasis in Web Engineering, Requirements Engineering, Software Engineering, Database Systems und Computer Networks.',
    'fit.card2Title': 'Prototyping & Tooling',
    'fit.card2Body': 'Erfahrung als studentische Hilfskraft mit einem Tool zur grafischen Erstellung digitaler Schaltkreise und einem Projekt zur KI-gestützten Erweiterung von Architektur-Skizzen.',
    'fit.card3Title': 'Human Language Technologies',
    'fit.card3Body': 'Passende AI/NLP-Bausteine durch Engineering for Large Language Models, Responsible AI, Natural Language Processing with Deep Learning sowie Forschungsprojekte zu Fairness und LLMs.',

    'experience.kicker': 'Erfahrung',
    'experience.title': 'Dokumentierte praktische Arbeit',
    'experience.role1Date': '04/2024 – 07/2025',
    'experience.role1Place': 'Ruhr-Universität Bochum · Bochum',
    'experience.role1Title': 'Studentische Hilfskraft',
    'experience.role1Bullet1': 'Entwicklung eines Tools zur grafischen Erstellung und Umwandlung digitaler Schaltkreise in LaTeX-Format',
    'experience.role1Bullet2': 'Erstellung von Musterlösungen für Hausaufgaben',

    'projects.kicker': 'Ausgewählte Projekte',
    'projects.title': 'Relevante Arbeiten aus CV und Transcript',
    'projects.p1Date': '04/2025 – 09/2025',
    'projects.p1Title': 'Analyzing Routing Robustness and Load Distribution in Mixture-of-Experts Models',
    'projects.p1Bullet1': 'Untersuchung von MoE-Modellen (DeepSeekMoE 16B, Power MoE 3B) über verschiedene Domänen',
    'projects.p1Bullet2': 'Expert-Masking-Experimente und Entropie-Analysen zur Bewertung von Ausfallsicherheit und Balancierung',
    'projects.p2Date': '04/2025 – 09/2025',
    'projects.p2Title': 'Multilingual Evaluation of Fairness and Performance in Large Language Models',
    'projects.p2Bullet1': 'Analyse sprachabhängiger Fairness und Bias-Verschiebungen durch maschinelle Übersetzung',
    'projects.p3Date': '01/2025 – 05/2025',
    'projects.p3Title': 'Bachelorarbeit: Practical Evaluation of Federated Learning',
    'projects.p3Bullet1': 'Implementierung von FedDC in Flower (PyTorch) und Vergleich mit FedAvg auf CIFAR-10',
    'projects.p3Bullet2': 'Abschlussnote 1,0',
    'projects.p4Date': '04/2024 – 08/2024',
    'projects.p4Title': 'KI-gestützte Analyse von Softwarearchitektur-Skizzen',
    'projects.p4Bullet1': 'Entwicklung einer App zur Erweiterung von Architekturskizzen mit GPT-4',
    'projects.p4Bullet2': 'Generierung von PlantUML-Diagrammen und Architektur-Empfehlungen',
    'projects.p5Date': 'WiSe 2025/26 · Projektmodul',
    'projects.p5Title': 'Measuring Malicious Fake Accounts on Reddit',
    'projects.p5Bullet1': 'Großskalige Analyse von Reddit-Daten (2005–2025) mit über 12,8 Millionen Repost-Versuchen viral gewordener Inhalte',
    'projects.p5Bullet2': 'Untersuchung von Viralitätsmustern, Repost-Erfolgsraten und zeitlichen Strategien beim Recycling viraler Inhalte',

    'education.kicker': 'Studium & belegbare Stärken',
    'education.title': 'Akademische Basis für Website-Erstellung, Prototyping',
    'education.stat1Label': 'M.Sc. Informatik',
    'education.stat1Value': '37 / 120 ECTS',
    'education.stat1Body': 'laufend · Gesamtnote 1,7',
    'education.stat2Label': 'B.Sc. Informatik',
    'education.stat2Value': '181 / 180 ECTS',
    'education.stat2Body': 'abgeschlossen · Gesamtnote 2,3',
    'education.stat3Label': 'Sprachen',
    'education.stat3Value': 'DE · EN · AR',
    'education.stat3Body': 'Französisch: Grundkenntnisse',
    'education.tableTitle': 'Besonders relevante Module und Leistungen',
    'education.tableNote': 'Auswahl aus Transcript',
    'education.col1': 'Bereich',
    'education.col2': 'Modul / Nachweis',
    'education.col3': 'Leistung',
    'education.row1Area': 'Web / Engineering',
    'education.row1Title': 'Web Engineering',
    'education.row2Area': 'UX / Analyse',
    'education.row2Title': 'Requirements Engineering',
    'education.row3Area': 'Software',
    'education.row3Title': 'Software Engineering Lab',
    'education.row4Area': 'AI / NLP',
    'education.row4Title': 'Natural Language Processing with Deep Learning',
    'education.row5Area': 'LLMs',
    'education.row5Title': 'Engineering for Large Language Models',
    'education.row6Area': 'Responsible Tech',
    'education.row6Title': 'Responsible AI',
    'education.row7Area': 'Applications',
    'education.row7Title': 'Internship at ASTA Campus App',
    'education.row8Area': 'Networks / Systems',
    'education.row8Title': 'Computer Networks',

    'prototype.kicker': 'Interaktive Demo',
    'prototype.title': 'Kleine interaktive Demo',
    'prototype.intro': 'Diese Seite enthält einen bewusst einfachen Prototypen in reinem HTML/CSS/JavaScript. Er zeigt einen möglichen Aufbau für klare Interaktion, Hinweise und sichtbaren Fortschritt in einer kleinen Web-Anwendung.',
    'prototype.note1': 'Hint-System',
    'prototype.note2': 'Schrittweiser Flow',
    'prototype.note3': 'Progress-Anzeige',
    'prototype.note4': 'Tastaturfreundlich',
    'prototype.demoLabel': 'Concept Demo',
    'prototype.hintLabel': 'Hinweis:',
    'prototype.hintButton': 'Hinweis anzeigen',
    'prototype.nextButton': 'Nächster Schritt',

    'contact.kicker': 'Kontakt',
    'contact.title': 'Unterlagen und Kontakt',
    'contact.copy': 'CV und Transcript können direkt aus diesem Portfolio geöffnet werden.',
    'contact.cta1': 'CV öffnen',
    'contact.cta2': 'Transcript öffnen',

    'footer.copy': 'Erstellt als statisches Portfolio für GitHub Pages · ohne Build-Prozess · leicht anpassbar'
  },

  en: {
    'nav.fit': 'Fit',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.prototype': 'Prototype',
    'nav.contact': 'Contact',
    'common.cv': 'CV',

  
    'hero.title': 'Yazan Zehni',
    'hero.subtitle': 'M.Sc. Computer Science Student · Web, Prototyping & Data-Driven Systems',
    'hero.copy': 'M.Sc. Computer Science student at Ruhr University Bochum with strong analytical and methodical skills and an interest in software development, interactive web experiences, and data-driven systems.',
    'hero.pill1': 'M.Sc. Computer Science',
    'hero.pill2': 'German · English · Arabic',
    'hero.pill3': 'Web · AI · Prototyping',
    'hero.cta1': 'Open CV',
    'hero.cta2': 'Open transcript',
    'hero.cardTitle': 'Profile snapshot',
    'hero.card1Label': 'Current',
    'hero.card1Value': 'M.Sc. Computer Science, RUB',
    'hero.card2Label': 'Master status',
    'hero.card2Value': '37/120 ECTS · average 1.7',
    'hero.card3Label': 'Bachelor',
    'hero.card3Value': 'completed · 181 ECTS · average 2.3',
    'hero.card4Label': 'Especially relevant',
    'hero.card4Value': 'Web Engineering, Requirements Engineering, NLP, Responsible AI',

    'fit.kicker': 'Why this portfolio fits the role',
    'fit.title': 'Targeted, realistic, and intentionally honest',
    'fit.intro': 'This page only emphasizes information documented in the CV and transcript. Where there is no documented professional experience, nothing is added. Instead, the portfolio includes a small application-specific mini prototype in HTML/CSS/JavaScript below.',
    'fit.card1Title': 'Website fundamentals',
    'fit.card1Body': 'Relevant academic foundations in Web Engineering, Requirements Engineering, Software Engineering, Database Systems, and Computer Networks.',
    'fit.card2Title': 'Prototyping & tooling',
    'fit.card2Body': 'Hands-on experience as a student assistant through a tool for graphical digital circuit creation and a project on AI-assisted software architecture sketches.',
    'fit.card3Title': 'Human Language Technologies',
    'fit.card3Body': 'Relevant AI/NLP coursework through Engineering for Large Language Models, Responsible AI, Natural Language Processing with Deep Learning, and research projects on fairness and LLMs.',

    'experience.kicker': 'Experience',
    'experience.title': 'Documented practical work',
    'experience.role1Date': '04/2024 – 07/2025',
    'experience.role1Place': 'Ruhr University Bochum · Bochum',
    'experience.role1Title': 'Student Assistant',
    'experience.role1Bullet1': 'Developed a tool for graphical creation and conversion of digital circuits into LaTeX format',
    'experience.role1Bullet2': 'Prepared sample solutions for assignments',

    'projects.kicker': 'Selected projects',
    'projects.title': 'Relevant work taken from the CV and transcript',
    'projects.p1Date': '04/2025 – 09/2025',
    'projects.p1Title': 'Analyzing Routing Robustness and Load Distribution in Mixture-of-Experts Models',
    'projects.p1Bullet1': 'Studied MoE models (DeepSeekMoE 16B, Power MoE 3B) across multiple domains',
    'projects.p1Bullet2': 'Implemented expert-masking experiments and entropy analyses to evaluate resilience and balancing',
    'projects.p2Date': '04/2025 – 09/2025',
    'projects.p2Title': 'Multilingual Evaluation of Fairness and Performance in Large Language Models',
    'projects.p2Bullet1': 'Analyzed language-dependent fairness and bias shifts through machine translation',
    'projects.p3Date': '01/2025 – 05/2025',
    'projects.p3Title': 'Bachelor Thesis: Practical Evaluation of Federated Learning',
    'projects.p3Bullet1': 'Implemented FedDC in Flower (PyTorch) and compared it with FedAvg on CIFAR-10',
    'projects.p3Bullet2': 'Final grade: 1.0',
    'projects.p4Date': '04/2024 – 08/2024',
    'projects.p4Title': 'AI-assisted Analysis of Software Architecture Sketches',
    'projects.p4Bullet1': 'Developed an app to extend architecture sketches with GPT-4',
    'projects.p4Bullet2': 'Generated PlantUML diagrams and architecture recommendations',
    'projects.p5Date': 'Winter term 2025/26 · project module',
    'projects.p5Title': 'Measuring Malicious Fake Accounts on Reddit',
    'projects.p5Bullet1': 'Large-scale analysis of Reddit data (2005–2025) covering over 12.8 million repost attempts of previously viral content',
    'projects.p5Bullet2': 'Investigation of virality patterns, repost success rates, and timing strategies in recycled viral content',

    'education.kicker': 'Education & documented strengths',
    'education.title': 'Academic foundation for website creation, prototyping',
    'education.stat1Label': 'M.Sc. Computer Science',
    'education.stat1Value': '37 / 120 ECTS',
    'education.stat1Body': 'ongoing · average 1.7',
    'education.stat2Label': 'B.Sc. Computer Science',
    'education.stat2Value': '181 / 180 ECTS',
    'education.stat2Body': 'completed · average 2.3',
    'education.stat3Label': 'Languages',
    'education.stat3Value': 'DE · EN · AR',
    'education.stat3Body': 'French: basic knowledge',
    'education.tableTitle': 'Especially relevant courses and evidence',
    'education.tableNote': 'Selection from transcript',
    'education.col1': 'Area',
    'education.col2': 'Course / evidence',
    'education.col3': 'Result',
    'education.row1Area': 'Web / Engineering',
    'education.row1Title': 'Web Engineering',
    'education.row2Area': 'UX / Analysis',
    'education.row2Title': 'Requirements Engineering',
    'education.row3Area': 'Software',
    'education.row3Title': 'Software Engineering Lab',
    'education.row4Area': 'AI / NLP',
    'education.row4Title': 'Natural Language Processing with Deep Learning',
    'education.row5Area': 'LLMs',
    'education.row5Title': 'Engineering for Large Language Models',
    'education.row6Area': 'Responsible Tech',
    'education.row6Title': 'Responsible AI',
    'education.row7Area': 'Applications',
    'education.row7Title': 'Internship at ASTA Campus App',
    'education.row8Area': 'Networks / Systems',
    'education.row8Title': 'Computer Networks',

    'prototype.kicker': 'Interactive demo',
    'prototype.title': 'Small interactive demo',
    'prototype.intro': 'This page includes a deliberately simple prototype built in plain HTML/CSS/JavaScript. It demonstrates a possible structure for clear interaction, hints, and visible progress in a small web application.',
    'prototype.note1': 'Hint system',
    'prototype.note2': 'Step-by-step flow',
    'prototype.note3': 'Progress indicator',
    'prototype.note4': 'Keyboard friendly',
    'prototype.demoLabel': 'Concept Demo',
    'prototype.hintLabel': 'Hint:',
    'prototype.hintButton': 'Show hint',
    'prototype.nextButton': 'Next step',

    'contact.kicker': 'Contact',
    'contact.title': 'Documents and contact',
    'contact.copy': 'The CV and transcript can be opened directly from this portfolio.',
    'contact.cta1': 'Open CV',
    'contact.cta2': 'Open transcript',

    'footer.copy': 'Built as a static portfolio for GitHub Pages · no build step · easy to customize'
  }
};

const demoSteps = {
  de: [
    {
      title: 'Schritt 1 · Einstieg',
      text: 'Eine gute Web-Demo startet mit einer klaren Aufgabe, verständlichem Kontext und sichtbarem Fortschritt.',
      hint: 'Ein guter erster Bildschirm erklärt Ziel, Kontext und die erste Aktion in wenigen Zeilen.'
    },
    {
      title: 'Schritt 2 · Hilfe & Orientierung',
      text: 'Hinweise sollten optional bleiben, damit Nutzerinnen und Nutzer selbstständig vorankommen können, ohne festzustecken.',
      hint: 'Hinweise sind am besten knapp, stufenweise und jederzeit wieder ausblendbar.'
    },
    {
      title: 'Schritt 3 · Abschluss',
      text: 'Am Ende bestätigt eine kleine Rückmeldung den Fortschritt und schafft einen klaren nächsten Schritt.',
      hint: 'Ein gutes Ende ist sichtbar, freundlich und ohne unnötige Reibung erreichbar.'
    }
  ],
  en: [
    {
      title: 'Step 1 · Entry',
      text: 'A good web demo starts with a clear task, understandable context, and visible progress.',
      hint: 'A strong first screen explains goal, context, and the first action in just a few lines.'
    },
    {
      title: 'Step 2 · Help & guidance',
      text: 'Hints should remain optional so users can move forward independently without getting stuck.',
      hint: 'Hints work best when they are short, progressive, and easy to hide again.'
    },
    {
      title: 'Step 3 · Completion',
      text: 'At the end, a small success message confirms progress and creates a clear next step.',
      hint: 'A good ending is visible, friendly, and reachable without friction.'
    }
  ]
};

let currentLang = 'de';
let stepIndex = 0;

const titleEl = document.getElementById('demo-title');
const textEl = document.getElementById('demo-text');
const hintEl = document.getElementById('hint-text');
const hintBox = document.getElementById('hint-box');
const progressBar = document.getElementById('progress-bar');
const stepCount = document.getElementById('demo-step-count');
const hintBtn = document.getElementById('hint-btn');
const nextBtn = document.getElementById('next-btn');
const langButtons = document.querySelectorAll('.lang-btn');

function updateTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function renderDemo() {
  const steps = demoSteps[currentLang];
  const current = steps[stepIndex];
  titleEl.textContent = current.title;
  textEl.textContent = current.text;
  hintEl.textContent = current.hint;
  hintBox.hidden = true;

  const percent = ((stepIndex + 1) / steps.length) * 100;
  progressBar.style.width = `${percent}%`;
  stepCount.textContent = `${stepIndex + 1} / ${steps.length}`;

  nextBtn.textContent = stepIndex === steps.length - 1
    ? (currentLang === 'de' ? 'Neu starten' : 'Restart')
    : translations[currentLang]['prototype.nextButton'];

  hintBtn.textContent = translations[currentLang]['prototype.hintButton'];
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentLang = button.dataset.lang;
    langButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    updateTranslations(currentLang);
    renderDemo();
  });
});

hintBtn.addEventListener('click', () => {
  hintBox.hidden = !hintBox.hidden;
  hintBtn.textContent = hintBox.hidden
    ? translations[currentLang]['prototype.hintButton']
    : (currentLang === 'de' ? 'Hinweis ausblenden' : 'Hide hint');
});

nextBtn.addEventListener('click', () => {
  const steps = demoSteps[currentLang];
  stepIndex = stepIndex === steps.length - 1 ? 0 : stepIndex + 1;
  renderDemo();
});

updateTranslations(currentLang);
renderDemo();