/**
 * ============================================================
 *  WEDDING INVITATION — CONFIGURATION
 * ============================================================
 *  Every piece of content on the site is read from this file.
 *  Replace the placeholder values below with the real details.
 *  Every text field has an "en" and "ar" version.
 * ============================================================
 */

// Things to change for new weddings
// - WEDDING_DATE
// - WEEDING_END_DATE
// - WEDDING_CONFIG.couple
// - schedule
// - location
// - rsvp.scriptURL
// - wax seal image
// <meta property="og:url" content="https://ahmed-safaa-wedding.vercel.app/" />
// <meta property="og:title" content="Ahmed & Safaa — Wedding Invitation" />
// <meta
//   property="og:image"
//   content="https://ahmed-safaa-wedding.vercel.app/assets/preview-envelope.webp"
// />
// - preview-envelope.webp

function formatDateDisplay(inputDate) {
  const date = new Date(inputDate);

  // --- English formatting ---
  const enWeekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  const enRest = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
  const enFormatted = `${enWeekday} - ${enRest}`;

  // --- Arabic formatting (using ar-EG with Eastern Arabic numerals) ---
  const arWeekday = new Intl.DateTimeFormat("ar-EG-u-nu-arab", { weekday: "long" }).format(date);
  const arDay = new Intl.DateTimeFormat("ar-EG-u-nu-arab", { day: "numeric" }).format(date);
  const arMonth = new Intl.DateTimeFormat("ar-EG-u-nu-arab", { month: "long" }).format(date);
  const arYear = new Intl.DateTimeFormat("ar-EG-u-nu-arab", { year: "numeric" }).format(date);
  const arFormatted = `${arWeekday} - ${arDay} ${arMonth} ${arYear}`;

  return {
    en: enFormatted,
    ar: arFormatted,
  };
}

function formatTimeRange(startDate, endDate) {
  const formatTime = (date, lang) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const isPM = hours >= 12;

    hours = hours % 12 || 12; // Convert 24h to 12h format

    if (lang === "ar") {
      const period = isPM ? "م" : "ص";
      return `${hours}:${minutes} ${period}`;
    } else {
      const period = isPM ? "PM" : "AM";
      return `${hours}:${minutes} ${period}`;
    }
  };

  return {
    en: `${formatTime(startDate, "en")} - ${formatTime(endDate, "en")}`,
    ar: `${formatTime(startDate, "ar")} - ${formatTime(endDate, "ar")}`,
  };
}

const WEDDING_DATE = new Date("2026-10-16T21:00:00"); // ISO date used by the countdown — EDIT THIS to the real date/time.
const WEEDING_END_DATE = new Date("2026-10-16T22:30:00");

const WEDDING_CONFIG = {
  // ---------- Couple ----------
  couple: {
    bride: { en: "Ruqaya", ar: "رقية" },
    groom: { en: "Mustafa", ar: "مصطفى" },
    order: { en: ["groom", "bride"], ar: ["groom", "bride"] },
  },

  // ---------- Date & time ----------
  // ISO date used by the countdown — EDIT THIS to the real date/time.
  weddingDateISO: WEDDING_DATE.toISOString(),
  // date: { en: "03.10.2026 - 8:30 pm", ar: "03.10.2026 - 8:30 م" },
  // date: {
  //   en: WEDDING_DATE.toLocaleDateString("en-UK").replaceAll("/", "."),
  //   ar: WEDDING_DATE.toLocaleDateString("en-UK").replaceAll("/", "."),
  // },
  // time: { en: "8:30 PM - 10:00 PM", ar: "8:30 م - 10:00 م" },
  time: formatTimeRange(WEDDING_DATE, WEEDING_END_DATE),

  // dateDisplay: {
  //   en: "Saturday - October 3, 2026",
  //   ar: "السبت - ٣ أكتوبر ٢٠٢٦",
  // },
  dateDisplay: formatDateDisplay(WEDDING_DATE),

  // ---------- Hero section ----------
  hero: {
    title: { en: "Wedding Day", ar: "يوم الزفاف" },
  },

  // ---------- Guest message ----------
  guestMessage: {
    title: { en: "You're Invited", ar: "أنتم مدعوون" },
    body: {
      en: "As we take this next big step, we can’t imagine doing it without the people who mean the most to us. Come celebrate this blessed day with us and share in a day full of love, joy, and new memories.",
      ar: "ونحن نخطو هذه الخطوة الكبيرة في حياتنا، لا يمكننا تخيل هذا اليوم دون وجود الأشخاص الأقرب إلى قلوبنا. شاركونا هذا اليوم المبارك، ولنتقاسم معاً يوماً يفيض بالحب والبهجة والذكريات السعيدة.",
    },
  },

  // ---------- Countdown ----------
  countdown: {
    title: { en: "Counting Down", ar: "العد التنازلي" },
    labels: {
      days: { en: "Days", ar: "يوم" },
      hours: { en: "Hours", ar: "ساعة" },
      minutes: { en: "Minutes", ar: "دقيقة" },
      seconds: { en: "Seconds", ar: "ثانية" },
    },
  },

  // ---------- Schedule of events ----------
  schedule: {
    title: { en: "Schedule of Events", ar: "برنامج الحفل" },
    items: [
      { time: "9:00 PM", en: "Guest Arrival", ar: "استقبال الضيوف" },
      { time: "9:15 PM", en: "Nikkah Ceremony", ar: "كتب الكتاب" },
      { time: "10:00 PM", en: "Welcome Drinks", ar: "تقديم واجب الضيافة" },
      { time: "10:15 PM", en: "Photography", ar: " الصور التذكارية" },
      { time: "10:30 PM", en: "Farewell", ar: "المغادرة" },
    ],
  },

  // ---------- Location ----------
  location: {
    title: { en: "Venue", ar: "المكان" },
    venueName: {
      en: "Al-Farouk Mosque Halls (Al Malakia)",
      ar: "قاعات مسجد الفاروق ( القاعة الملكية )",
    },
    address: {
      en: "Al-Farouk Mosque Halls | Sheraton | Heliopolis",
      ar: "قاعات الفاروق | شيراتون | مصر الجديدة",
    },
    // Used to build the embedded map + "open in maps" link.
    // Replace with the real address or "lat,lng".
    // mapQuery: "El-Mosheer Tantawy Mosque",
    mapQuery: "قاعات الفاروق",
    image: "assets/mosque-image.webp",
  },

  // ---------- Dress code ----------
  dressCode: {
    title: { en: "Clarification", ar: "توضيح" },
    body: {
      en: "The hall is divided into two sections with a partition, one for men and one for women",
      ar: "القاعة مقسمة قسمين بينهما فاصل قسم للرجال وقسم للنساء",
    },
  },

  // ---------- RSVP ----------
  rsvp: {
    // title: { en: "RSVP", ar: "تأكيد الحضور" },
    title: { en: "Confirm Your Attendance", ar: "تأكيد الحضور" },
    subtitle: {
      en: "Kindly let us know if you'll be joining us.",
      ar: "يرجى تأكيد حضوركم لنا.",
    },
    // buttonLabel: { en: "RSVP Now", ar: "أكد حضورك" },
    buttonLabel: { en: "Confirm Attendance", ar: "أكد حضورك" },
    // ⚠️ REQUIRED: paste your deployed Google Apps Script Web App URL here.
    // See README.md for the exact Apps Script code this form expects.
    scriptURL:
      "https://script.google.com/macros/s/AKfycbzu0HPqtFvUBPxtn12GjrcDuNxzL9_HrLJ0Zm1tpCnitO6gCxjUYQjcVKspd0IYyfb1Sw/exec",
    form: {
      name: { en: "Full Name", ar: "الاسم الكامل" },
      guests: { en: "Number of Guests", ar: "عدد الضيوف" },
      attending: { en: "Will you attend?", ar: "هل ستحضر؟" },
      attendingYes: { en: "Joyfully Attending", ar: "بكل سرور سأحضر" },
      attendingNo: { en: "Regretfully Declining", ar: "أعتذر عن الحضور" },
      message: { en: "Message (optional)", ar: "رسالة (اختياري)" },
      submit: { en: "Send RSVP", ar: "إرسال" },
      sending: { en: "Sending…", ar: "جاري الإرسال…" },
      success: { en: "Thank you! Your RSVP has been received.", ar: "شكرًا لكم! تم استلام تأكيد حضوركم." },
      error: { en: "Something went wrong. Please try again.", ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى." },
    },
  },

  // ---------- Closing ----------
  closing: {
    line: { en: "Hope to see you there", ar: "بانتظار حضوركم" },
  },

  // ---------- Background music ----------
  music: {
    // Add your own royalty-free mp3 at this path.
    src: "assets/background-sound.mp3",
  },

  // ---------- Floating bottom navigation ----------
  nav: [
    { id: "hero", en: "Home", ar: "الرئيسية", icon: "home" },
    { id: "countdown", en: "Countdown", ar: "العد", icon: "clock" },
    { id: "schedule", en: "Schedule", ar: "البرنامج", icon: "list" },
    { id: "location", en: "Location", ar: "المكان", icon: "pin" },
    // { id: "rsvp", en: "RSVP", ar: "تأكيد", icon: "mail" },
    { id: "closing", en: "RSVP", ar: "تأكيد", icon: "mail" },
  ],
};
