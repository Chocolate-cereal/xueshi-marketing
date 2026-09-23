// Owner-approved details only. Missing fields are omitted from the public site.
export const profile: {
  name: string;
  email: string | null;
  linkedIn: string | null;
  cv: string | null;
  portrait: string | null;
  location: string | null;
  background: string[];
} = {
  name: "Xue",
  email: null,
  linkedIn: null,
  cv: null,
  portrait: null,
  location: null,
  background: [],
};
export const hasContact = Boolean(profile.email || profile.linkedIn);
export const capabilities = [
  {
    title: "SEO & content",
    description:
      "Review search visibility, technical issues and content gaps to identify what needs attention.",
    detail: "Technical signals, search intent and content priorities.",
  },
  {
    title: "Landing pages",
    description:
      "Examine messaging, page structure and the steps visitors take before making an enquiry.",
    detail: "Message clarity, conversion paths and page experience.",
  },
  {
    title: "Competitor research",
    description:
      "Compare positioning, search presence and website experience to find useful opportunities.",
    detail: "Competitor comparisons, content coverage and recommendations.",
  },
];
