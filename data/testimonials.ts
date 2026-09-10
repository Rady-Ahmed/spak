export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  serviceType: string;
  rating: number; // 1-5
  comment: string;
  date: string;
  avatarPlaceholder: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    author: "م. أحمد عبد الرحمن",
    location: "التجمع الخامس",
    serviceType: "كشف تسريب مياه مخفي",
    rating: 5,
    comment:
      "كانت هناك رطوبة تسقط دهان غرفة المعيشة، وكنت أخشى من تكسير السيراميك. جاء الفني ومعه جهاز فحص رقمي، وحدد الماسورة المثقوبة بالضبط خلف المحبس دون أي تكسير عشوائي. احترافية مبهرة والتزام بالمواعيد.",
    date: "منذ أسبوع",
    avatarPlaceholder: "أ.ع",
  },
  {
    id: "test-2",
    author: "د. منى إبراهيم",
    location: "مدينة نصر",
    serviceType: "تسليك انسداد صرف المطبخ",
    rating: 5,
    comment:
      "المطبخ كان في حالة طوارئ ليلة الجمعة، تواصلت معهم عبر واتساب وردوا في أقل من دقيقة. الفني وصل خلال نصف ساعة ومعه سوستة كهربائية أنهت المشكلة وعقّم المكان قبل المغادرة. خدمة تستحق كل تقدير.",
    date: "منذ أسبوعين",
    avatarPlaceholder: "م.إ",
  },
  {
    id: "test-3",
    author: "أ. طارق الشناوي",
    location: "الشيخ زايد",
    serviceType: "تركيب أطقم صحية وصندوق دفن",
    rating: 5,
    comment:
      "قمت بتجديد الحمام بالكامل وتركيب كرسي معلق وشاسيه مدفون جروهي. الفنيين عندهم فهم هندسي عالي وميزان ليزر لضبط المناسيب على السيراميك بالمليمتر. النتيجة مثل الفنادق تماماً.",
    date: "منذ شهر",
    avatarPlaceholder: "ط.ش",
  },
  {
    id: "test-4",
    author: "الحاج كامل الدسوقي",
    location: "المعادي",
    serviceType: "صيانة سخان غاز ومحابس",
    rating: 5,
    comment:
      "أهم ميزة الأمانة والوضوح، قالوا التكلفة المحددة مسبقاً وفحصوا تسريب الغاز وضغط المياه بعناية فائقة. ناس محترمين جداً وشهادة ضمان واضحة.",
    date: "منذ شهر",
    avatarPlaceholder: "ك.د",
  },
];
