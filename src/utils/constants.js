export const DISTRICTS = [
  { id: 1, name: "Thiruvananthapuram" },
  { id: 2, name: "Kollam" },
  { id: 3, name: "Pathanamthitta" },
  { id: 4, name: "Alappuzha" },
  { id: 5, name: "Kottayam" },
  { id: 6, name: "Idukki" },
  { id: 7, name: "Ernakulam" },
  { id: 8, name: "Thrissur" },
  { id: 9, name: "Palakkad" },
  { id: 10, name: "Malappuram" },
  { id: 11, name: "Kozhikode" },
  { id: 12, name: "Wayanad" },
  { id: 13, name: "Kannur" },
  { id: 14, name: "Kasaragod" },
];

export const AVAILABILITY_TYPES_ORDERED = [
  20,
  10,
  150,
  1,
  100,
  110,
  120,
  30,
  70,
  50,
  60,
  40,
];

export const AVAILABILITY_TYPES = {
  20: "Ventilator",
  10: "ICU",
  150: "Oxygen Beds",
  1: "Ordinary Bed",
  70: "KASP Ventilator",
  50: "KASP ICU",
  60: "KASP Oxygen Beds",
  40: "KASP Ordinary Bed",
  100: "Covid ICU w/ Ventilator",
  110: "Covid ICU",
  120: "Covid Oxygen Beds",
  30: "Covid Ordinary Bed",
};

export const AVAILABILITY_TYPES_PROXY = {
  20: "Total",
  10: "Total",
  150: "Total",
  1: "Total",
  70: "KASP",
  50: "KASP",
  60: "KASP",
  40: "KASP",
  100: "Covid",
  110: "Covid",
  120: "Covid",
  30: "Covid",
};

export const PATIENT_TYPES = {
  icu: "ICU",
  oxygen_bed: "Oxygen Bed",
  home_isolation: "Home Isolation",
  home_quarantine: "Home Quarantine",
  not_admitted: "Consultations",
  isolation_room: "Isolation Room",
  icu_with_invasive_ventilator: "ICU w/ IV",
  icu_with_non_invasive_ventilator: "ICU w/ Non-IV",
  paediatric_ward: "Paediatric Ward",
  gynaecology_ward: "Gynaecology Ward",
};

export const TESTS_TYPES = {
  result_awaited: "Result awaited",
  test_discarded: "Tests discarded",
  total_patients: "Total patients",
  result_negative: "Negative results",
  result_positive: "Positive results",
};

export const TRIAGE_TYPES = {
  avg_patients_visited: "Average patients visited",
  avg_patients_referred: "Average patients referred",
  avg_patients_isolation: "Average patients isolation",
  avg_patients_home_quarantine: "Average patients home quarantine",
  total_patients_visited: "Total patients visited",
  total_patients_referred: "Total patients referred",
  total_patients_isolation: "Total patients isolation",
  total_patients_home_quarantine: "Total patients home quarantine",
};

export const GOVT_FACILITY_TYPES = [
  "Govt Hospital",
  "Primary Health Centres",
  "24x7 Public Health Centres",
  "Family Health Centres",
  "Community Health Centres",
  "Urban Primary Health Center",
  "Taluk Hospitals",
  "Taluk Headquarters Hospitals",
  "Women and Child Health Centres",
  "General hospitals",
  "District Hospitals",
  "Govt Medical College Hospitals",
];

export const FACILITY_TYPES = [
  ...GOVT_FACILITY_TYPES,
  "Private Hospital",
  "First Line Treatment Centre",
  "Second Line Treatment Center",
  "COVID-19 Domiciliary Care Center",
  "Corona Care Centre",
  "Covid Management Center",
  "Shifting Centre",
  "TeleMedicine",
];

export const OXYGEN_TYPES = [
  "Tank Capacity",
  "Oxygen Tank",
  "Cylinder D",
  "Cylinder C",
  "Cylinder B",
];

export const CONTENT = {
  CAPACITY: 1,
  PATIENT: 2,
  TESTS: 3,
  TRIAGE: 4,
  COVID: 5,
  LSG: 6,
  OXYGEN: 7,
};

export const CARE_LSG_TRANSILATION = {
  364: "G071005",
  398: "C070100",
  366: "M070800",
  438: "G071001",
  446: "M070900",
  375: "G070602",
  391: "G070306",
  427: "G071101",
  389: "M070100",
  374: "G071302",
  377: "G070504",
  368: "M070300",
  372: "G070801",
  443: "G071306",
  367: "G070905",
  388: "G070307",
  407: "G071305",
  412: "G071407",
  376: "G070105",
  380: "G070505",
  439: "G071108",
  453: "G071106",
  371: "G070305",
  448: "G070302",
  441: "G071207",
  370: "G071401",
  384: "M071000",
  457: "G070403",
  418: "G070402",
  424: "G071102",
  363: "G071406",
  369: "G070401",
  373: "G070101",
  402: "G071104",
  386: "G070601",
  430: "G071109",
  428: "G071404",
  456: "G070501",
  397: "G070503",
  395: "G071107",
  378: "G070903",
  447: "M070400",
  435: "M070700",
  365: "G070203",
  434: "M070600",
  421: "M070500",
  390: "G071405",
  362: "G071402",
  406: "G071006",
  408: "G071110",
  400: "G070405",
  394: "G071105",
  379: "G070904",
  385: "G070103",
  450: "G070104",
  396: "G070506",
  393: "G070201",
  410: "G070308",
  452: "G071403",
  414: "M071100",
  383: "G070604",
  429: "G071205",
  404: "G070803",
  442: "G070404",
  417: "G070301",
  409: "G070705",
  381: "G070703",
  405: "G070802",
  413: "G070303",
  419: "G070902",
  440: "G071301",
  444: "G071204",
  401: "M070200",
  454: "G070202",
  422: "G070702",
  455: "G070502",
  420: "G070603",
  445: "G071002",
  431: "G070704",
  392: "G070304",
  449: "G070901",
  415: "G071408",
  432: "G071206",
  416: "G071004",
  436: "G071103",
  382: "G071201",
  387: "G070204",
  403: "G070102",
  426: "G070406",
  425: "G070701",
  451: "G071003",
  411: "G070906",
  423: "G071303",
  433: "G071304",
  399: "M071300",
  437: "M071200",
};
