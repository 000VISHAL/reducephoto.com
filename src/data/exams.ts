export interface ExamDetails {
  width: number;
  height: number;
  minKB: number;
  maxKB: number;
  format: "jpg" | "png";
  notes?: string;
}

export interface Exam {
  id: string;
  name: string;
  category: "central" | "state" | "banking" | "police" | "judiciary";
  state?: string;
  photo: ExamDetails;
  signature: ExamDetails;
  officialWebsite?: string;
  lastVerified?: string;
}

export const exams: Exam[] = [
  // CENTRAL EXAMS
  {
    id: "upsc",
    name: "UPSC Civil Services",
    category: "central",
    photo: { width: 400, height: 400, minKB: 20, maxKB: 300, format: "jpg", notes: "White background, must mention candidate's name and photo capture date at the bottom." },
    signature: { width: 400, height: 400, minKB: 20, maxKB: 100, format: "jpg", notes: "Black ink on white paper." },
    officialWebsite: "https://upsc.gov.in",
    lastVerified: "June 2026"
  },
  {
    id: "ssc-cgl",
    name: "SSC CGL",
    category: "central",
    photo: { width: 275, height: 354, minKB: 20, maxKB: 50, format: "jpg", notes: "Taken without spectacles or cap, front view, light background." },
    signature: { width: 236, height: 79, minKB: 10, maxKB: 20, format: "jpg", notes: "Horizontal signature on white paper using black ink." },
    officialWebsite: "https://ssc.gov.in",
    lastVerified: "June 2026"
  },
  {
    id: "ssc-chsl",
    name: "SSC CHSL",
    category: "central",
    photo: { width: 200, height: 240, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 200, height: 80, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://ssc.gov.in",
    lastVerified: "June 2026"
  },
  {
    id: "ssc-gd",
    name: "SSC GD Constable",
    category: "central",
    photo: { width: 200, height: 240, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 240, height: 80, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://ssc.gov.in"
  },
  {
    id: "ssc-mts",
    name: "SSC MTS",
    category: "central",
    photo: { width: 200, height: 240, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 240, height: 80, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://ssc.gov.in"
  },
  {
    id: "jee-main",
    name: "JEE Main",
    category: "central",
    photo: { width: 275, height: 354, minKB: 10, maxKB: 300, format: "jpg", notes: "Spectacles allowed only if regularly worn. No caps." },
    signature: { width: 275, height: 118, minKB: 10, maxKB: 50, format: "jpg" },
    officialWebsite: "https://jeemain.nta.ac.in"
  },
  {
    id: "neet-ug",
    name: "NEET UG",
    category: "central",
    photo: { width: 275, height: 354, minKB: 10, maxKB: 200, format: "jpg", notes: "White background, candidate name and date of taking photo must be printed." },
    signature: { width: 275, height: 118, minKB: 4, maxKB: 30, format: "jpg" },
    officialWebsite: "https://neet.nta.nic.in"
  },
  {
    id: "gate",
    name: "GATE",
    category: "central",
    photo: { width: 350, height: 450, minKB: 5, maxKB: 1000, format: "jpg", notes: "White background, high quality resolution." },
    signature: { width: 400, height: 120, minKB: 3, maxKB: 1000, format: "jpg" },
    officialWebsite: "https://gate.iisc.ac.in"
  },
  {
    id: "india-post-gds",
    name: "India Post GDS",
    category: "central",
    photo: { width: 320, height: 400, minKB: 30, maxKB: 100, format: "jpg" },
    signature: { width: 300, height: 120, minKB: 20, maxKB: 100, format: "jpg" },
    officialWebsite: "https://indiapostgdsonline.gov.in"
  },
  {
    id: "rrb-ntpc",
    name: "RRB NTPC",
    category: "central",
    photo: { width: 320, height: 240, minKB: 30, maxKB: 70, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 30, maxKB: 70, format: "jpg" },
    officialWebsite: "https://rrcb.gov.in"
  },
  {
    id: "rrb-group-d",
    name: "RRB Group D",
    category: "central",
    photo: { width: 320, height: 240, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 40, format: "jpg" },
    officialWebsite: "https://rrcb.gov.in"
  },
  {
    id: "rrb-alp",
    name: "RRB ALP",
    category: "central",
    photo: { width: 275, height: 354, minKB: 50, maxKB: 150, format: "jpg" },
    signature: { width: 275, height: 157, minKB: 30, maxKB: 49, format: "jpg" },
    officialWebsite: "https://rrcb.gov.in"
  },
  {
    id: "cat",
    name: "CAT (Common Admission Test)",
    category: "central",
    photo: { width: 200, height: 240, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 200, height: 80, minKB: 5, maxKB: 20, format: "jpg" },
    officialWebsite: "https://iimcat.ac.in"
  },
  {
    id: "xat",
    name: "XAT (Xavier Aptitude Test)",
    category: "central",
    photo: { width: 200, height: 230, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "clat",
    name: "CLAT (Common Law Admission Test)",
    category: "central",
    photo: { width: 200, height: 240, minKB: 10, maxKB: 100, format: "jpg" },
    signature: { width: 200, height: 80, minKB: 10, maxKB: 50, format: "jpg" }
  },
  {
    id: "nda",
    name: "UPSC NDA & NA",
    category: "central",
    photo: { width: 200, height: 240, minKB: 10, maxKB: 40, format: "jpg" },
    signature: { width: 200, height: 80, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "cds",
    name: "UPSC CDS",
    category: "central",
    photo: { width: 200, height: 240, minKB: 10, maxKB: 40, format: "jpg" },
    signature: { width: 200, height: 80, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "afcat",
    name: "AFCAT (Air Force Common Admission Test)",
    category: "central",
    photo: { width: 200, height: 240, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 200, height: 80, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "cuet-ug",
    name: "CUET UG",
    category: "central",
    photo: { width: 200, height: 230, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 200, height: 80, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "passport-application",
    name: "Indian Passport Application",
    category: "central",
    photo: { width: 350, height: 350, minKB: 20, maxKB: 50, format: "jpg", notes: "Plain white background, no borders." },
    signature: { width: 350, height: 120, minKB: 10, maxKB: 30, format: "jpg" }
  },
  {
    id: "voter-id",
    name: "Voter ID Registration",
    category: "central",
    photo: { width: 200, height: 200, minKB: 10, maxKB: 30, format: "jpg" },
    signature: { width: 200, height: 100, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "driving-license",
    name: "Driving License (Sarathi)",
    category: "central",
    photo: { width: 200, height: 230, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 50, format: "jpg" }
  },
  {
    id: "aadhaar-update",
    name: "Aadhaar Card Update",
    category: "central",
    photo: { width: 200, height: 230, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 50, format: "jpg" }
  },
  {
    id: "pan-card",
    name: "PAN Card Application",
    category: "central",
    photo: { width: 200, height: 230, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 50, format: "jpg" }
  },

  // BANKING EXAMS
  {
    id: "sbi-po",
    name: "SBI PO",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg", notes: "Should not be signed in CAPITAL letters." },
    officialWebsite: "https://sbi.co.in"
  },
  {
    id: "sbi-clerk",
    name: "SBI Clerk",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "ibps-po",
    name: "IBPS PO",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://ibps.in"
  },
  {
    id: "ibps-clerk",
    name: "IBPS Clerk",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "ibps-so",
    name: "IBPS Specialist Officer (SO)",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "ibps-rrb-po",
    name: "IBPS RRB Officer Scale I (PO)",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "ibps-rrb-clerk",
    name: "IBPS RRB Office Assistant (Clerk)",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "rbi-grade-b",
    name: "RBI Grade B Officer",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "rbi-assistant",
    name: "RBI Assistant",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "lic-aao",
    name: "LIC AAO",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "lic-ado",
    name: "LIC ADO",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "nabard-grade-a",
    name: "NABARD Grade A Officer",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "idbi-executive",
    name: "IDBI Bank Executive",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "idbi-am",
    name: "IDBI Assistant Manager",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "sidbi-am",
    name: "SIDBI Assistant Manager",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "canara-so",
    name: "Canara Bank SO",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "bob-so",
    name: "Bank of Baroda SO",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "pnb-so",
    name: "Punjab National Bank SO",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "union-so",
    name: "Union Bank of India SO",
    category: "banking",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },

  // STATE PSCs
  {
    id: "uppsc",
    name: "UPPSC (Uttar Pradesh)",
    category: "state",
    state: "Uttar Pradesh",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg", notes: "Signed inside a box of 3.5cm x 1.5cm." },
    officialWebsite: "https://uppsc.up.nic.in"
  },
  {
    id: "bpsc",
    name: "BPSC (Bihar)",
    category: "state",
    state: "Bihar",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://bpsc.bih.nic.in"
  },
  {
    id: "mpsc",
    name: "MPSC (Maharashtra)",
    category: "state",
    state: "Maharashtra",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://mpsc.gov.in"
  },
  {
    id: "wbpsc",
    name: "WBPSC (West Bengal)",
    category: "state",
    state: "West Bengal",
    photo: { width: 160, height: 200, minKB: 10, maxKB: 20, format: "jpg" },
    signature: { width: 160, height: 60, minKB: 5, maxKB: 10, format: "jpg" },
    officialWebsite: "https://psc.wb.gov.in"
  },
  {
    id: "gpsc",
    name: "GPSC (Gujarat)",
    category: "state",
    state: "Gujarat",
    photo: { width: 200, height: 230, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 5, maxKB: 20, format: "jpg" },
    officialWebsite: "https://gpsc.gujarat.gov.in"
  },
  {
    id: "opsc",
    name: "OPSC (Odisha)",
    category: "state",
    state: "Odisha",
    photo: { width: 300, height: 400, minKB: 20, maxKB: 100, format: "jpg" },
    signature: { width: 300, height: 150, minKB: 10, maxKB: 50, format: "jpg" },
    officialWebsite: "https://opsc.gov.in"
  },
  {
    id: "tnpsc",
    name: "TNPSC (Tamil Nadu)",
    category: "state",
    state: "Tamil Nadu",
    photo: { width: 125, height: 150, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 125, height: 50, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://tnpsc.gov.in"
  },
  {
    id: "appsc",
    name: "APPSC (Andhra Pradesh)",
    category: "state",
    state: "Andhra Pradesh",
    photo: { width: 150, height: 200, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 150, height: 50, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://psc.ap.gov.in"
  },
  {
    id: "kpsc",
    name: "KPSC (Karnataka)",
    category: "state",
    state: "Karnataka",
    photo: { width: 150, height: 200, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 150, height: 50, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://kpsc.kar.nic.in"
  },
  {
    id: "rpsc",
    name: "RPSC (Rajasthan)",
    category: "state",
    state: "Rajasthan",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://rpsc.rajasthan.gov.in"
  },
  {
    id: "mppsc",
    name: "MPPSC (Madhya Pradesh)",
    category: "state",
    state: "Madhya Pradesh",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://mppsc.mp.gov.in"
  },
  {
    id: "hpsc",
    name: "HPSC (Haryana)",
    category: "state",
    state: "Haryana",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://hpsc.gov.in"
  },
  {
    id: "ppsc",
    name: "PPSC (Punjab)",
    category: "state",
    state: "Punjab",
    photo: { width: 150, height: 200, minKB: 10, maxKB: 40, format: "jpg" },
    signature: { width: 150, height: 50, minKB: 10, maxKB: 40, format: "jpg" },
    officialWebsite: "https://ppsc.gov.in"
  },
  {
    id: "ukpsc",
    name: "UKPSC (Uttarakhand)",
    category: "state",
    state: "Uttarakhand",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://psc.uk.gov.in"
  },
  {
    id: "jpsc",
    name: "JPSC (Jharkhand)",
    category: "state",
    state: "Jharkhand",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://jpsc.gov.in"
  },
  {
    id: "jkpsc",
    name: "JKPSC (Jammu & Kashmir)",
    category: "state",
    state: "Jammu & Kashmir",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://jkpsc.nic.in"
  },
  {
    id: "hppsc",
    name: "HPPSC (Himachal Pradesh)",
    category: "state",
    state: "Himachal Pradesh",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://hppsc.hp.gov.in"
  },
  {
    id: "cgpsc",
    name: "CGPSC (Chhattisgarh)",
    category: "state",
    state: "Chhattisgarh",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://psc.cg.gov.in"
  },
  {
    id: "tspsc",
    name: "TSPSC (Telangana)",
    category: "state",
    state: "Telangana",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://tspsc.gov.in"
  },
  {
    id: "apsc-state",
    name: "APSC (Assam)",
    category: "state",
    state: "Assam",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://apsc.nic.in"
  },
  {
    id: "kerala-psc",
    name: "Kerala PSC",
    category: "state",
    state: "Kerala",
    photo: { width: 150, height: 200, minKB: 20, maxKB: 30, format: "jpg", notes: "Must have name of candidate and date of photo printed at the bottom." },
    signature: { width: 150, height: 100, minKB: 10, maxKB: 20, format: "jpg" },
    officialWebsite: "https://keralapsc.gov.in"
  },
  {
    id: "goa-psc",
    name: "GPSC (Goa)",
    category: "state",
    state: "Goa",
    photo: { width: 200, height: 230, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "tripura-psc",
    name: "TPSC (Tripura)",
    category: "state",
    state: "Tripura",
    photo: { width: 200, height: 230, minKB: 15, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "sikkim-psc",
    name: "SPSC (Sikkim)",
    category: "state",
    state: "Sikkim",
    photo: { width: 200, height: 230, minKB: 15, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "manipur-psc",
    name: "MPSC (Manipur)",
    category: "state",
    state: "Manipur",
    photo: { width: 200, height: 230, minKB: 15, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "meghalaya-psc",
    name: "MPSC (Meghalaya)",
    category: "state",
    state: "Meghalaya",
    photo: { width: 200, height: 230, minKB: 15, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "mizoram-psc",
    name: "MPSC (Mizoram)",
    category: "state",
    state: "Mizoram",
    photo: { width: 200, height: 230, minKB: 15, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "nagaland-psc",
    name: "NPSC (Nagaland)",
    category: "state",
    state: "Nagaland",
    photo: { width: 200, height: 230, minKB: 15, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "upsssc",
    name: "UPSSSC (Uttar Pradesh Subordinate)",
    category: "state",
    state: "Uttar Pradesh",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "bssc",
    name: "BSSC (Bihar Staff Selection)",
    category: "state",
    state: "Bihar",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "msssb",
    name: "MSSSB (Maharashtra Subordinate)",
    category: "state",
    state: "Maharashtra",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "wbprb-sub",
    name: "WBPRB (West Bengal Recruitments)",
    category: "state",
    state: "West Bengal",
    photo: { width: 138, height: 177, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 138, height: 45, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "rsmssb",
    name: "RSMSSB (Rajasthan Board)",
    category: "state",
    state: "Rajasthan",
    photo: { width: 350, height: 450, minKB: 50, maxKB: 100, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 20, maxKB: 50, format: "jpg" }
  },

  // POLICE EXAMS
  {
    id: "up-police-constable",
    name: "UP Police Constable",
    category: "police",
    state: "Uttar Pradesh",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "up-police-si",
    name: "UP Police Sub Inspector (SI)",
    category: "police",
    state: "Uttar Pradesh",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "delhi-police-constable",
    name: "Delhi Police Constable",
    category: "police",
    state: "Delhi",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "delhi-police-si",
    name: "Delhi Police SI (SSC CPO)",
    category: "police",
    state: "Delhi",
    photo: { width: 275, height: 354, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 236, height: 79, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "bihar-police-constable",
    name: "Bihar Police Constable (CSBC)",
    category: "police",
    state: "Bihar",
    photo: { width: 350, height: 450, minKB: 15, maxKB: 25, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 15, maxKB: 25, format: "jpg" }
  },
  {
    id: "bihar-police-si",
    name: "Bihar Police SI (BPSSC)",
    category: "police",
    state: "Bihar",
    photo: { width: 350, height: 450, minKB: 15, maxKB: 25, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 15, maxKB: 25, format: "jpg" }
  },
  {
    id: "maharashtra-police-constable",
    name: "Maharashtra Police Constable",
    category: "police",
    state: "Maharashtra",
    photo: { width: 160, height: 200, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 160, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "maharashtra-police-si",
    name: "Maharashtra Police SI",
    category: "police",
    state: "Maharashtra",
    photo: { width: 160, height: 200, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 160, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "rajasthan-police-constable",
    name: "Rajasthan Police Constable",
    category: "police",
    state: "Rajasthan",
    photo: { width: 350, height: 450, minKB: 50, maxKB: 100, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 20, maxKB: 50, format: "jpg" }
  },
  {
    id: "rajasthan-police-si",
    name: "Rajasthan Police SI",
    category: "police",
    state: "Rajasthan",
    photo: { width: 350, height: 450, minKB: 50, maxKB: 100, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 20, maxKB: 50, format: "jpg" }
  },
  {
    id: "wb-police-constable",
    name: "West Bengal Police Constable",
    category: "police",
    state: "West Bengal",
    photo: { width: 138, height: 177, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 138, height: 45, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "wb-police-si",
    name: "West Bengal Police SI",
    category: "police",
    state: "West Bengal",
    photo: { width: 138, height: 177, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 138, height: 45, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "haryana-police",
    name: "Haryana Police Constable/SI",
    category: "police",
    state: "Haryana",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "punjab-police",
    name: "Punjab Police Constable/SI",
    category: "police",
    state: "Punjab",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "mp-police",
    name: "MP Police Constable",
    category: "police",
    state: "Madhya Pradesh",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "gujarat-police",
    name: "Gujarat Police Constable",
    category: "police",
    state: "Gujarat",
    photo: { width: 350, height: 450, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "karnataka-police",
    name: "Karnataka Police Constable",
    category: "police",
    state: "Karnataka",
    photo: { width: 350, height: 450, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "andhra-police",
    name: "Andhra Pradesh Police Constable",
    category: "police",
    state: "Andhra Pradesh",
    photo: { width: 350, height: 450, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "telangana-police",
    name: "Telangana Police Constable",
    category: "police",
    state: "Telangana",
    photo: { width: 350, height: 450, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 5, maxKB: 20, format: "jpg" }
  },
  {
    id: "kerala-police",
    name: "Kerala Police Constable",
    category: "police",
    state: "Kerala",
    photo: { width: 150, height: 200, minKB: 20, maxKB: 30, format: "jpg" },
    signature: { width: 150, height: 100, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "tn-police",
    name: "Tamil Nadu Police Constable (USRB)",
    category: "police",
    state: "Tamil Nadu",
    photo: { width: 125, height: 150, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 125, height: 50, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "odisha-police",
    name: "Odisha Police Constable",
    category: "police",
    state: "Odisha",
    photo: { width: 300, height: 400, minKB: 20, maxKB: 100, format: "jpg" },
    signature: { width: 300, height: 150, minKB: 10, maxKB: 50, format: "jpg" }
  },
  {
    id: "jharkhand-police",
    name: "Jharkhand Police Constable",
    category: "police",
    state: "Jharkhand",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "chhattisgarh-police",
    name: "Chhattisgarh Police Constable",
    category: "police",
    state: "Chhattisgarh",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "uttarakhand-police",
    name: "Uttarakhand Police Constable",
    category: "police",
    state: "Uttarakhand",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "hp-police",
    name: "HP Police Constable",
    category: "police",
    state: "Himachal Pradesh",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },

  // JUDICIARY EXAMS
  {
    id: "delhi-judicial",
    name: "Delhi Judicial Service (DJS)",
    category: "judiciary",
    state: "Delhi",
    photo: { width: 200, height: 230, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "up-judicial",
    name: "UP Judicial Service (PCS J)",
    category: "judiciary",
    state: "Uttar Pradesh",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "bihar-judicial",
    name: "Bihar Judicial Service (BJS)",
    category: "judiciary",
    state: "Bihar",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "maharashtra-judicial",
    name: "Maharashtra Judicial Service",
    category: "judiciary",
    state: "Maharashtra",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "rajasthan-judicial",
    name: "Rajasthan Judicial Service (RJS)",
    category: "judiciary",
    state: "Rajasthan",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "mp-judicial",
    name: "MP Judicial Service",
    category: "judiciary",
    state: "Madhya Pradesh",
    photo: { width: 350, height: 450, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 350, height: 150, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "gujarat-judicial",
    name: "Gujarat Judicial Service",
    category: "judiciary",
    state: "Gujarat",
    photo: { width: 200, height: 230, minKB: 10, maxKB: 50, format: "jpg" },
    signature: { width: 140, height: 60, minKB: 10, maxKB: 20, format: "jpg" }
  },
  {
    id: "wb-judicial",
    name: "West Bengal Judicial Service",
    category: "judiciary",
    state: "West Bengal",
    photo: { width: 160, height: 200, minKB: 10, maxKB: 20, format: "jpg" },
    signature: { width: 160, height: 60, minKB: 5, maxKB: 10, format: "jpg" }
  },
  {
    id: "odisha-judicial",
    name: "Odisha Judicial Service",
    category: "judiciary",
    state: "Odisha",
    photo: { width: 300, height: 400, minKB: 20, maxKB: 100, format: "jpg" },
    signature: { width: 300, height: 150, minKB: 10, maxKB: 50, format: "jpg" }
  },
  {
    id: "karnataka-judicial",
    name: "Karnataka Judicial Service",
    category: "judiciary",
    state: "Karnataka",
    photo: { width: 150, height: 200, minKB: 20, maxKB: 50, format: "jpg" },
    signature: { width: 150, height: 50, minKB: 10, maxKB: 20, format: "jpg" }
  }
];
