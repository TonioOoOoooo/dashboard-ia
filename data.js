// ================================================================
// PASSWORD GATE
// ================================================================
var PWD = 'VINCI-IA-2026'; // Modifier ici pour changer le mot de passe

// ================================================================
// STATIC DATA
// ================================================================
var CONTRACT = {total:18, monthly:3, period:'Avr → Sept 2026', people:6};

var AI_TIPS = [
  {n:1,title:'Personalize Copilot',date:'Sem. 31 mars 2026',cat:'Setup'},
  {n:2,title:'Clone Your Writing Style',date:'Sem. 31 mars 2026',cat:'Email'},
  {n:3,title:'Morning Email Triage',date:'Sem. 31 mars 2026',cat:'Email'},
  {n:4,title:'Schedule Your Daily Briefing',date:'Sem. 31 mars 2026',cat:'Email'},
  {n:5,title:'Email → Meeting in 3 Clicks',date:'Sem. 31 mars 2026',cat:'Réunions'},
  {n:6,title:'Catch Up on a Channel in 8 Lines',date:'Sem. 7 avr. 2026',cat:'Teams'},
  {n:7,title:'Prepare Your Meeting in 60 Seconds',date:'Sem. 7 avr. 2026',cat:'Réunions'},
  {n:8,title:'Turn Your Meeting Into Decisions',date:'Sem. 7 avr. 2026',cat:'Réunions'},
  {n:9,title:'Follow-Up Email in 1 Click',date:'Sem. 7 avr. 2026',cat:'Email'},
];

var PILOT_TEAM = [
  {name:'Alice Folscheid',role:'Pilote FR',s:2,max:3,sat:true,notes:'Répondante form S1+S2 · Absente S3'},
  {name:'Stéphanie Heissat',role:'Pilote FR',s:3,max:3,sat:false,notes:'Présente S3 FR'},
  {name:'Rafaella Hallack',role:'Pilote EN',s:3,max:3,sat:true,notes:'Répondante form S1+S3'},
  {name:'Florent Jannier',role:'Pilote FR/EN',s:2,max:3,sat:false,notes:'Présent S3 EN'},
  {name:'DE OLIVEIRA-CEZAR Paula',role:'Pilote EN',s:1,max:3,sat:false,notes:'Avancée Copilot · levier M&A · Absente S3'},
];

var PHASES = [
  {id:1,label:'Phase 1 — Dompter son quotidien',color:'#185FA5',sessions:[1,2,3,4]},
  {id:2,label:'Phase 2 — Assistant de production',color:'#3B6D11',sessions:[5,6,7,8]},
  {id:3,label:'Phase 3 — Automatisation & Agents',color:'#854F0B',sessions:[9,10,11,12]}
];

var VERBATIMS = [
  {session:'S1',from:'You Wu',tag:'Tip à tester',text:'Clone my writing style'},
  {session:'S1',from:'Rafaella Hallack',tag:'Sujet demandé',text:'Analyse de contrats avec l\'IA'},
  {session:'S1',from:'Alice Folscheid',tag:'Tip à tester',text:'Framework R-T-F-C-E'},
  {session:'S2',from:'Alice Folscheid',tag:'Sujet demandé',text:'Contract analysis with AI · Workflow Email→Meeting→Action'},
  {session:'S3',from:'Teresa Oliveira',tag:'Sujet demandé',text:'PowerPoint avec Copilot'},
  {session:'S3',from:'Rafaella Hallack',tag:'Sujet demandé',text:'Analyse de documents avec Copilot'},
];

// ================================================================
// ATTENDANCE DATA (nominatif — protégé par mot de passe)
// ================================================================
var ATTENDANCE = {
  S1_EN: {
    date:'13 mars 2026',session:'S1 EN',duration:'1h08',avg_time:'46m50s',
    participants:[
      {name:'WU You',email:'you.wu@vinci-energies.com',time:'1h 1m',short:false},
      {name:'PEREIRA Lola',email:'lola.pereira@vinci-energies.com',time:'1h 0m',short:false},
      {name:'RUBIO Angela',email:'Angela.RUBIO@axians.es',time:'1h 0m',short:false},
      {name:'HALLACK Rafaella',email:'rafaella.hallack@omexom.com',time:'1h 0m',short:false},
      {name:'GOMES Oswaldo',email:'oswaldo.gomes@actemium.com',time:'1h 0m',short:false},
      {name:'PEZETTA Maria',email:'maria.pezetta@axians.com',time:'59m',short:false},
      {name:'LOPEZ Marta',email:'marta.lopez@vinci-energies.com',time:'59m',short:false},
      {name:'DE OLIVEIRA-CEZAR Paula',email:'paula.deoliveira-cezar@vinci-energies.com',time:'58m',short:false},
      {name:'FREMONT Sophie',email:'sophie.fremont@vinci-energies.com',time:'57m',short:false},
      {name:'PIRES Sofia',email:'sofia.pires@axians.com',time:'57m',short:false},
      {name:'SEGUY Olivia',email:'olivia.seguy@vinci-energies.com',time:'57m',short:false},
      {name:'BURKE David',email:'david.burke@vinci-energies.com',time:'55m',short:false},
      {name:'SUNDARAJ Kausalya',email:'kausalya.sundaraj@vinci-energies.com',time:'51m',short:false},
      {name:'PEREZ Rebeca',email:'rebeca.perez@axians.com',time:'1h 2m',short:false},
      {name:'ABREU-LOPES Alexandra',email:'alexandra.abreu-lopes@axians.com',time:'23m',short:false},
      {name:'MOUSINHO Alexandra',email:'alexandra.mousinho@axians.com',time:'37m',short:false},
      {name:'DA SILVA Mariana',email:'mariana.dasilva@actemium.com',time:'26m',short:false},
      {name:'COURA Gabriela',email:'gabriela.coura@actemium.com',time:'16m',short:false},
      {name:'VIEIRA Carla',email:'carla.vieira@actemium.com',time:'14m',short:false},
      {name:'LEONARDO DIAS Gustavo',email:'gustavo.farias@vinci-energies.com',time:'5m',short:true},
      {name:'COELHO Susana',email:'susana.coelho@vinci-energies.com',time:'2m',short:true},
    ]
  },
  S1_FR: {
    date:'13 mars 2026',session:'S1 FR',duration:'1h16',avg_time:'49m50s',
    participants:[
      {name:'PEREIRA Lola',email:'lola.pereira@vinci-energies.com',time:'1h 5m',short:false},
      {name:'GRINA Meryem',email:'meryem.grina@cegelec.com',time:'1h 2m',short:false},
      {name:'DEBBARH Lamiaa',email:'Lamiaa.DEBBARH@cegelec.com',time:'1h 1m',short:false},
      {name:'DE ROUGEMONT Olivier',email:'Olivier.DE-ROUGEMONT@vinci-energies.com',time:'1h 1m',short:false},
      {name:'GUERMONPREZ Marie',email:'marie.guermonprez@vinci-energies.com',time:'59m',short:false},
      {name:'THIAM Thierno-Mohamedou',email:'thierno.thiam@vinci-energies.com',time:'59m',short:false},
      {name:'FOFANA Charlene',email:'charlene.fofana@vinci-energies.com',time:'58m',short:false},
      {name:'FOLSCHEID Alice',email:'alice.folscheid@vinci-energies.com',time:'57m',short:false},
      {name:'HEISSAT Stephanie',email:'stephanie.heissat@vinci-energies.com',time:'42m',short:false},
      {name:'LENORMAND Cecile',email:'Cecile.LENORMAND@vinci-energies.com',time:'36m',short:false},
      {name:'JAMET Veronique',email:'veronique.jamet@vinci-energies.com',time:'<1m',short:true},
      {name:'LOPES Cintia',email:'cintia.lopes@sisnergy.com.br',time:'<1m',short:true},
    ]
  },
  S2_EN: {
    date:'27 mars 2026',session:'S2 EN',duration:'1h06',avg_time:'46m17s',
    participants:[
      {name:'COELHO Susana',email:'susana.coelho@vinci-energies.com',time:'1h 5m',short:false},
      {name:'PEREIRA Lola',email:'lola.pereira@vinci-energies.com',time:'1h 0m',short:false},
      {name:'ORAA Gabriel',email:'Gabriel.ORAA@vinci-energies.com',time:'1h 0m',short:false},
      {name:'WU You',email:'you.wu@vinci-energies.com',time:'59m',short:false},
      {name:'RODRIGUES Silmara',email:'silmara.rodrigues@omexom.com',time:'58m',short:false},
      {name:'BRANDAO Andressa',email:'andressa.brandao@vinci-energies.com',time:'57m',short:false},
      {name:'HALLACK Rafaella',email:'rafaella.hallack@omexom.com',time:'55m',short:false},
      {name:'PEZETTA Maria',email:'maria.pezetta@axians.com',time:'55m',short:false},
      {name:'PEREZ Rebeca',email:'rebeca.perez@axians.com',time:'52m',short:false},
      {name:'LOPEZ Marta',email:'marta.lopez@vinci-energies.com',time:'39m',short:false},
      {name:'GOMES Oswaldo',email:'oswaldo.gomes@actemium.com',time:'30m',short:false},
      {name:'LOBO Mariana',email:'mariana.lobo@omexom.com',time:'27m',short:false},
      {name:'OLIVEIRA Teresa',email:'teresa.oliveira@vinci-energies.com',time:'20m',short:false},
      {name:'SEGUY Olivia',email:'olivia.seguy@vinci-energies.com',time:'18m',short:false},
      {name:'VIEIRA Carla',email:'carla.vieira@actemium.com',time:'1m',short:true},
    ]
  },
  S2_FR: {
    date:'27 mars 2026',session:'S2 FR',duration:'1h06',avg_time:'~60m',
    participants:[
      {name:'PEREIRA Lola',email:'lola.pereira@vinci-energies.com',time:'1h 8m',short:false},
      {name:'RAKIB Amine',email:'amine.rakib@vinci-energies.com',time:'~1h',short:false},
      {name:'GRINA Meryem',email:'meryem.grina@cegelec.com',time:'~1h',short:false},
      {name:'DEBBARH Lamiaa',email:'Lamiaa.DEBBARH@cegelec.com',time:'55m',short:false},
      {name:'PIGANIOL Ella',email:'ella.piganiol@vinci-energies.com',time:'55m',short:false},
      {name:'FOLSCHEID Alice',email:'alice.folscheid@vinci-energies.com',time:'54m',short:false},
      {name:'HEISSAT Stephanie',email:'stephanie.heissat@vinci-energies.com',time:'54m',short:false},
      {name:'JANNIER Florent',email:'florent.jannier@vinci-energies.com',time:'54m',short:false},
      {name:'BOUILLON Elodie',email:'Elodie.BOUILLON@vinci-energies.com',time:'52m',short:false},
      {name:'HADOU Maouiya',email:'maouiya.hadou@cegelec.com',time:'22m',short:false},
      {name:'RODRIGUES Silmara',email:'silmara.rodrigues@omexom.com',time:'7m',short:false},
      {name:'BRANDAO Andressa',email:'andressa.brandao@vinci-energies.com',time:'<1m',short:true},
    ]
  },
  S3_EN: {
    date:'10 avr. 2026',session:'S3 EN',duration:'55m12s',avg_time:'43m15s',
    participants:[
      {name:'RODRIGUES Silmara',email:'silmara.rodrigues@omexom.com',time:'44m',short:false},
      {name:'PEREIRA Lola',email:'lola.pereira@vinci-energies.com',time:'54m',short:false},
      {name:'BRANDAO Andressa',email:'andressa.brandao@vinci-energies.com',time:'43m',short:false},
      {name:'GRINA Meryem',email:'meryem.grina@cegelec.com',time:'45m',short:false},
      {name:'SEGUY Olivia',email:'olivia.seguy@vinci-energies.com',time:'43m',short:false},
      {name:'SUNDARAJ Kausalya',email:'kausalya.sundaraj@vinci-energies.com',time:'53m',short:false},
      {name:'PEREZ Rebeca',email:'rebeca.perez@axians.com',time:'53m',short:false},
      {name:'CARDOSO ANDRADE Maria',email:'maria.cardoso-andrade@vinci-energies.com',time:'25m',short:false},
      {name:'LOPEZ Marta',email:'marta.lopez@vinci-energies.com',time:'38m',short:false},
      {name:'JANNIER Florent',email:'florent.jannier@vinci-energies.com',time:'40m',short:false},
      {name:'GOMES Oswaldo',email:'oswaldo.gomes@actemium.com',time:'41m',short:false},
      {name:'LOBO Mariana',email:'mariana.lobo@omexom.com',time:'40m',short:false},
      {name:'PAIVA Felix',email:'felix.paiva@omexom.com',time:'39m',short:false},
      {name:'HALLACK Rafaella',email:'rafaella.hallack@omexom.com',time:'50m',short:false},
      {name:'VILLEFORT Rayane',email:'rayane.villefort@vinci-energies.com',time:'32m',short:false},
      {name:'OLIVEIRA Teresa',email:'teresa.oliveira@vinci-energies.com',time:'46m',short:false},
      {name:'WU You',email:'you.wu@vinci-energies.com',time:'32m',short:false},
    ]
  },
  S3_FR: {
    date:'10 avr. 2026',session:'S3 FR',duration:'1h04m35s',avg_time:'40m54s',
    participants:[
      {name:'PEREIRA Lola',email:'lola.pereira@vinci-energies.com',time:'1h 3m',short:false},
      {name:'GUERMONPREZ Marie',email:'marie.guermonprez@vinci-energies.com',time:'6s',short:true},
      {name:'HADOU Maouiya',email:'maouiya.hadou@cegelec.com',time:'12m',short:false},
      {name:'RAKIB Amine',email:'amine.rakib@vinci-energies.com',time:'12m',short:false},
      {name:'BOUILLON Elodie',email:'Elodie.BOUILLON@vinci-energies.com',time:'56m',short:false},
      {name:'HEISSAT Stephanie',email:'stephanie.heissat@vinci-energies.com',time:'56m',short:false},
      {name:'GRINA Meryem',email:'meryem.grina@cegelec.com',time:'47m',short:false},
    ]
  }
};

// ================================================================
// ENTITY MAPPING (domaine email → entité)
// ================================================================
var ENTITY_MAP = {
  'vinci-energies.com': 'VINCI Energies',
  'cegelec.com':        'Cegelec',
  'axians.com':         'Axians',
  'axians.es':          'Axians',
  'omexom.com':         'Omexom',
  'actemium.com':       'Actemium',
  'sisnergy.com.br':    'Sisnergy',
};
var ENTITY_COLORS = {
  'VINCI Energies': '#185FA5',
  'Cegelec':        '#3B6D11',
  'Axians':         '#854F0B',
  'Omexom':         '#6B3F99',
  'Actemium':       '#C0562A',
  'Sisnergy':       '#1A7A6E',
  'Other':          '#9ca3af',
};

// ================================================================
// MUTABLE DATA
// ================================================================
var DEFAULT = {
  sessions:[
    {id:1,date:'13 mars 2026',theme:'Outlook + Copilot — Fondamentaux',phase:1,status:'done',fr:12,en:21,satisfaction:5.0,repondants:3,notes:'Sophie Frémont présente EN (57m). 2 départs <1min en FR : probable confusion FR→EN, session EN 1h après.',sat_detail:[{lbl:'Pertinence',v:5},{lbl:'Clarté',v:5},{lbl:'Exemples pratiques',v:5},{lbl:'Profondeur',v:5},{lbl:'Rythme',v:5},{lbl:'Confiance Copilot',v:4.3}]},
    {id:2,date:'27 mars 2026',theme:'Outlook + Copilot — Avancé',phase:1,status:'done',fr:12,en:15,satisfaction:5.0,repondants:1,notes:'2 départs <2min : probable confusion FR→EN. 1 répondant satisfaction.',sat_detail:[{lbl:'Pertinence',v:5},{lbl:'Clarté',v:5},{lbl:'Exemples pratiques',v:5},{lbl:'Profondeur',v:5},{lbl:'Rythme',v:5},{lbl:'Confiance Copilot',v:5}]},
    {id:3,date:'10 avr. 2026',theme:'Teams Conversations + Copilot',phase:1,status:'done',fr:6,en:17,satisfaction:5.0,repondants:2,notes:'',sat_detail:[{lbl:'Pertinence',v:5},{lbl:'Clarté',v:5},{lbl:'Exemples pratiques',v:5},{lbl:'Profondeur',v:5},{lbl:'Rythme',v:5},{lbl:'Confiance Copilot',v:3.5}]},
    {id:4,date:'~28 avr. 2026',theme:'Teams Réunions + Copilot',phase:1,status:'planned',fr:null,en:null,satisfaction:null,repondants:0,notes:'Date à confirmer avec Lola — report du 24 au 28 avr.',sat_detail:[]},
    {id:5,date:'7 mai 2026',theme:'PowerPoint + Copilot',phase:2,status:'planned',fr:null,en:null,satisfaction:null,repondants:0,notes:'',sat_detail:[]},
    {id:6,date:'21 mai 2026',theme:'Cas métiers juridiques — TBD',phase:2,status:'planned',fr:null,en:null,satisfaction:null,repondants:0,notes:'',sat_detail:[]},
    {id:7,date:'5 juin 2026',theme:'Cas métiers juridiques — TBD',phase:2,status:'planned',fr:null,en:null,satisfaction:null,repondants:0,notes:'',sat_detail:[]},
    {id:8,date:'17 juin 2026',theme:'Cas métiers juridiques — TBD',phase:2,status:'planned',fr:null,en:null,satisfaction:null,repondants:0,notes:'',sat_detail:[]},
    {id:9,date:'10 juil. 2026',theme:'Automatisation & Agents — TBD',phase:3,status:'planned',fr:null,en:null,satisfaction:null,repondants:0,notes:'',sat_detail:[]},
    {id:10,date:'24 juil. 2026',theme:'Automatisation & Agents — TBD',phase:3,status:'planned',fr:null,en:null,satisfaction:null,repondants:0,notes:'',sat_detail:[]},
    {id:11,date:'4 sept. 2026',theme:'Automatisation & Agents — TBD',phase:3,status:'planned',fr:null,en:null,satisfaction:null,repondants:0,notes:'',sat_detail:[]},
    {id:12,date:'18 sept. 2026',theme:'Automatisation & Agents — TBD',phase:3,status:'planned',fr:null,en:null,satisfaction:null,repondants:0,notes:'',sat_detail:[]},
  ],
  coaching:[
    {id:1,name:'Lola Pereira',tag:'Ambassadrice pilote',h:0.5,n:1,last:'7 avr. 2026',next:'À confirmer',content:'Agent triage email · Workflow CAR',urgent:false},
    {id:2,name:'Charlène Fofana',tag:'',h:0.5,n:1,last:'7 avr. 2026',next:'À confirmer',content:'Classement emails Outlook',urgent:false},
    {id:3,name:'DE OLIVEIRA-CEZAR Paula',tag:'',h:0.5,n:1,last:'7 avr. 2026',next:'À confirmer',content:'PPT · Suivi dossiers · Garanties hors bilan · M&A 14 slides',urgent:false},
    {id:4,name:'Florent Jannier',tag:'',h:0.5,n:1,last:'7 avr. 2026',next:'À confirmer',content:'Veille IA multi-pays · Vérification dates',urgent:false},
    {id:5,name:'Sophie Frémont',tag:'Sponsor',h:0.5,n:1,last:'7 avr. 2026',next:'À confirmer',content:'Agent triage email matinal · GPT-4 Think Deeper (7h)',urgent:false},
    {id:6,name:'Burke David',tag:'',h:0,n:0,last:'—',next:'Réunion prévue le 9 avr. 2026',content:'—',urgent:false},
  ],
  resources:[
    {sid:1,pdf:true,rec_fr:true,rec_en:true,ppt:true,trackable:false,clicks:null},
    {sid:2,pdf:true,rec_fr:true,rec_en:true,ppt:true,trackable:false,clicks:null},
    {sid:3,pdf:true,rec_fr:false,rec_en:false,ppt:true,trackable:true,clicks:6,clicks_pres:3,clicks_guide:3,clicks_rec_fr:0,clicks_rec_en:0},
    {sid:4,pdf:false,rec_fr:false,rec_en:false,ppt:false,trackable:true,clicks:null},
    {sid:5,pdf:false,rec_fr:false,rec_en:false,ppt:false,trackable:true,clicks:null},
    {sid:6,pdf:false,rec_fr:false,rec_en:false,ppt:false,trackable:true,clicks:null},
    {sid:7,pdf:false,rec_fr:false,rec_en:false,ppt:false,trackable:true,clicks:null},
    {sid:8,pdf:false,rec_fr:false,rec_en:false,ppt:false,trackable:true,clicks:null},
    {sid:9,pdf:false,rec_fr:false,rec_en:false,ppt:false,trackable:true,clicks:null},
    {sid:10,pdf:false,rec_fr:false,rec_en:false,ppt:false,trackable:true,clicks:null},
    {sid:11,pdf:false,rec_fr:false,rec_en:false,ppt:false,trackable:true,clicks:null},
    {sid:12,pdf:false,rec_fr:false,rec_en:false,ppt:false,trackable:true,clicks:null},
  ]
};
