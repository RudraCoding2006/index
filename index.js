// =======================
// Scholarship Form Helper
// Aa script page par inputs / selects / textarea par focus thay tyare
// right side ma ek help box ma guidance & example batave che.
// Koi student nu data save / auto-fill NATHI thatu.
// =======================

// Form field-wise rules: kaya field ma su batavvanu
const helpRules = [
  {
    keywords: ["student name", "full name", "name"],
    title: "Student Name",
    message: "Enter your full name same as your marksheet. Use same format everywhere.",
    example: "Example:\nRajesh Rameshbhai Patel\nOR\nRajesh_Rameshbhai_Patel"
  },
  {
    keywords: ["father", "father's name"],
    title: "Father's Name",
    message: "Enter your father's full name as per official documents.",
    example: "Example:\nRameshbhai Patel"
  },
  {
    keywords: ["mother", "mother's name"],
    title: "Mother's Name",
    message: "Enter your mother's full name.",
    example: "Example:\nMeenaben Patel"
  },
  {
    keywords: ["date of birth", "dob", "birth"],
    title: "Date of Birth",
    message: "Enter your date of birth in correct date format.",
    example: "Example:\n05/11/2006 (dd/mm/yyyy)"
  },
  {
    keywords: ["category", "caste"],
    title: "Category / Caste",
    message: "Choose your correct category as per your caste certificate.",
    example: "Example:\nGeneral / OBC / SC / ST"
  },
  {
    keywords: ["aadhaar", "aadhar"],
    title: "Aadhaar Number",
    message: "Enter your 12 digit Aadhaar number without space or dash.",
    example: "Example:\n123412341234"
  },
  {
    keywords: ["address", "residential address"],
    title: "Address",
    message: "Write your full communication address including village, taluka, district and pincode.",
    example: "Example:\nKantharavi, Unjha, Mehsana, 384170"
  },
  {
    keywords: ["college name"],
    title: "College Name",
    message: "Enter your college name as per official records / ID card.",
    example: "Example:\nABC Science College, Unjha"
  },
  {
    keywords: ["course", "programme"],
    title: "Course / Programme",
    message: "Write your current course or programme name.",
    example: "Example:\nBSc IT / BCom / BA"
  },
  {
    keywords: ["current semester", "semester"],
    title: "Current Semester",
    message: "Select your current semester in which you are studying.",
    example: "Example:\nSemester 3"
  },
  {
    keywords: ["last exam percentage", "percentage"],
    title: "Last Exam Percentage",
    message: "Enter your last exam overall percentage with 2 decimal places if needed.",
    example: "Example:\n78.45"
  },
  {
    keywords: ["mobile", "phone", "contact"],
    title: "Mobile Number",
    message: "Enter an active mobile number where you can receive OTP and calls.",
    example: "Example:\n9876543210"
  },
  {
    keywords: ["email", "e-mail"],
    title: "Email ID",
    message: "Enter a valid email address which you check regularly.",
    example: "Example:\nyourname123@gmail.com"
  },
  {
    keywords: ["bank account", "account number", "a/c"],
    title: "Bank Account Number",
    message: "Enter your bank account number exactly as printed in your passbook.",
    example: "Example:\n01234567890123"
  },
  {
    keywords: ["ifsc"],
    title: "IFSC Code",
    message: "Enter the IFSC code of your bank branch in capital letters.",
    example: "Example:\nSBIN0001234"
  },
  {
    keywords: ["bank name", "branch"],
    title: "Bank Name & Branch",
    message: "Write your bank name and branch clearly.",
    example: "Example:\nState Bank of India, Unjha Branch"
  },
  {
    keywords: ["declaration"],
    title: "Declaration",
    message: "Tick the declaration only if all the details you entered are true.",
    example: "Example:\n✔ I confirm that the information given above is correct."
  }
];

// =======================
// Side help box UI create
// =======================

let helpBox = null;

function createHelpBox() {
  if (helpBox) return helpBox;

  helpBox = document.createElement("div");
  helpBox.id = "scholarship-help-box";

  // Position & layout
  helpBox.style.position = "fixed";
  helpBox.style.top = "20%";
  helpBox.style.right = "10px";
  helpBox.style.width = "280px";
  helpBox.style.maxHeight = "60%";
  helpBox.style.overflowY = "auto";
  helpBox.style.background = "#ffffff";
  helpBox.style.borderRadius = "10px";
  helpBox.style.border = "1px solid #e5e7eb";
  helpBox.style.padding = "10px 12px";
  helpBox.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
  helpBox.style.fontSize = "12px";
  helpBox.style.boxShadow = "0 10px 25px rgba(15,23,42,0.25)";
  helpBox.style.zIndex = "2147483647";
  helpBox.style.display = "none";

  // Header: title + close button
  const header = document.createElement("div");
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";
  header.style.marginBottom = "8px";

  const titleEl = document.createElement("div");
  titleEl.textContent = "Form Help";
  titleEl.style.fontWeight = "700";
  titleEl.style.fontSize = "13px";
  titleEl.style.color = "#111827";

  const closeBtn = document.createElement("span");
  closeBtn.textContent = "✕";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.fontSize = "12px";
  closeBtn.style.color = "#6b7280";
  closeBtn.onclick = () => {
    helpBox.style.display = "none";
  };

  header.appendChild(titleEl);
  header.appendChild(closeBtn);

  const content = document.createElement("div");
  content.id = "scholarship-help-content";

  // Footer note
  const note = document.createElement("div");
  note.style.marginTop = "8px";
  note.style.fontSize = "10px";
  note.style.color = "#9ca3af";
  note.textContent = "Note: This is only a guide. Your data is not stored or auto-filled.";

  helpBox.appendChild(header);
  helpBox.appendChild(content);
  helpBox.appendChild(note);

  document.body.appendChild(helpBox);

  return helpBox;
}

// Help box content update
function updateHelpBox(title, message, example) {
  const box = createHelpBox();
  const content = box.querySelector("#scholarship-help-content");

  content.innerHTML = "";

  const t = document.createElement("div");
  t.style.fontWeight = "600";
  t.style.marginBottom = "4px";
  t.style.color = "#111827";
  t.textContent = title;

  const m = document.createElement("div");
  m.style.marginBottom = "6px";
  m.style.color = "#374151";
  m.textContent = message;

  const e = document.createElement("pre");
  e.style.whiteSpace = "pre-wrap";
  e.style.fontFamily = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
  e.style.fontSize = "11px";
  e.style.background = "#f3f4f6";
  e.style.padding = "6px 8px";
  e.style.borderRadius = "6px";
  e.style.border = "1px solid #e5e7eb";
  e.textContent = example;

  content.appendChild(t);
  content.appendChild(m);
  content.appendChild(e);

  box.style.display = "block";
}

// =======================
// Field → Rule match logic
// =======================

function getRuleForInput(input) {
  const placeholder = (input.placeholder || "").toLowerCase();
  const name = (input.name || "").toLowerCase();
  let labelText = "";

  if (input.id) {
    const label = document.querySelector(`label[for="${input.id}"]`);
    if (label) {
      labelText = (label.innerText || "").toLowerCase();
    }
  }

  const combinedText = (placeholder + " " + name + " " + labelText).trim();
  if (!combinedText) return null;

  for (const rule of helpRules) {
    for (const key of rule.keywords) {
      if (combinedText.includes(key)) {
        return rule;
      }
    }
  }

  return null;
}

// =======================
// Attach listeners on form fields
// =======================

function attachFormHelpers() {
  const fields = document.querySelectorAll("input, select, textarea");

  if (!fields.length) return;

  fields.forEach((field) => {
    field.addEventListener("focus", () => {
      const rule = getRuleForInput(field);

      if (rule) {
        updateHelpBox(rule.title, rule.message, rule.example);
      } else {
        // Generic help jya keyword match na thay tyare
        updateHelpBox(
          "Field Help",
          "Read the label / placeholder carefully and enter correct information as per your documents.",
          "Tips:\n• Check spelling properly.\n• Use same format everywhere.\n• Verify from marksheet, Aadhaar, bank passbook, etc."
        );
      }
    });
  });
}

// =======================
// DOM ready pachi run
// =======================

if (document.readyState === "complete" || document.readyState === "interactive") {
  attachFormHelpers();
} else {
  document.addEventListener("DOMContentLoaded", attachFormHelpers);
}
