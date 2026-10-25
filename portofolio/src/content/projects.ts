export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    id: "anonymous-communication",
    category: "RESEARCH · IN PROGRESS",
    title: "Light-weight Anonymous Communication Protocol in LANs",
    description:
      "Bachelor thesis investigating information exposure during PHI back-off path establishment in a controlled local-area network.",
    tags: ["Bachelor Thesis", "Network Security", "Privacy"],
    href: "/research",
  },
  {
    id: "systems-security",
    category: "SECURITY · LAB REPORTS",
    title: "Ethical Hacking & Exploit Development",
    description:
      "Nine coursework and lab reports covering reconnaissance, exploitation, vulnerable-machine walkthroughs, privilege escalation, and buffer overflows.",
    tags: ["Penetration Testing", "Exploit Development", "Lab Notes"],
    href: "/security",
  },
  {
    id: "technical-writing",
    category: "CERTIFICATION STUDY",
    title: "OSCP Course Notes",
    description:
      "Study notes on network scanning, SMB and SNMP, Active Directory labs, web vulnerabilities, and Linux security.",
    tags: ["OSCP", "Networking", "Web Security"],
    href: "/security#oscp-course",
  },
];
