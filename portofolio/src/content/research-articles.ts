export type ResearchArticle = {
  slug: string;
  acronym: string;
  title: string;
  authors: string;
  year: string;
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
  thesisRelevance: string;
  paperUrl: string;
  paperLabel: string;
};

export const researchArticles: ResearchArticle[] = [
  {
    slug: "lap",
    acronym: "LAP",
    title: "Lightweight Anonymity and Privacy",
    authors: "Hsu-Chun Hsiao et al.",
    year: "2012",
    summary:
      "LAP is an early network-layer design for low-latency communication that hides endpoint location by encrypting the forwarding information carried in packets.",
    sections: [
      {
        heading: "Packet-carried forwarding state",
        paragraphs: [
          "LAP moves forwarding information into the packet header. During path setup, each Autonomous Domain (AD) contributes an encrypted segment describing the local forwarding decision. A router uses its own secret key to process its segment; it does not need a shared key for encrypting the entire packet or a separate per-flow record at every hop.",
          "The result is a packet-carried path that can be used with routing architectures built around packet-carried forwarding state. This is the core efficiency idea: routers perform local work on the forwarding header while avoiding per-connection routing state.",
        ],
      },
      {
        heading: "Receiver anonymity and rendezvous",
        paragraphs: [
          "LAP also describes receiver anonymity. A receiver can publish an encrypted path under a pseudonym. A sender looks up that path through a path server and uses a rendezvous domain to reach the receiver. The indirection keeps the receiver's network location out of the path lookup, while the path is still used to deliver packets.",
          "This protects network-layer location information. It does not hide identifying information that an application may reveal through cookies, account logins, browser settings, or the content of a message. Those require protections at other layers, such as application-layer encryption and privacy controls.",
        ],
      },
      {
        heading: "Threat model and trade-offs",
        paragraphs: [
          "LAP aims for topological anonymity with low path and processing overhead. Its security model trusts the sender's first-hop AD; other ADs or a destination server may be adversarial. The paper does not aim to prevent timing-correlation attacks or protect application data, which still needs end-to-end encryption.",
          "This trust assumption matters: LAP does not protect a sender whose own first-hop provider is malicious. My original note described LAP as not trusting the ISP, but the paper's model makes a more specific assumption about the first-hop AD. That distinction is important when comparing LAP with Dovetail and PHI.",
        ],
      },
    ],
    thesisRelevance:
      "LAP is a baseline for packet-carried forwarding state, receiver rendezvous, and the low-overhead design goal. Its trusted first-hop assumption also gives the thesis a concrete point of comparison when studying PHI's helper-driven back-off procedure.",
    paperUrl: "https://doi.org/10.1109/SP.2012.37",
    paperLabel: "IEEE Symposium on Security and Privacy paper",
  },
  {
    slug: "dovetail",
    acronym: "DOVETAIL",
    title: "Stronger Anonymity in Next-Generation Internet Routing",
    authors: "Jody Sankey and Matthew Wright",
    year: "2014",
    summary:
      "Dovetail builds anonymity into network-layer routing and targets an active observer at a single point in the network, including the source's ISP.",
    sections: [
      {
        heading: "Three header segments",
        paragraphs: [
          "Dovetail constructs a route from two path segments that meet at a dovetail point. The packet uses three header segments during construction: `U`, an unencrypted sequence of forwarding identifiers (FIDs); `T`, encrypted transit information; and `J`, encrypted join metadata. Each FID indexes a forwarding-table entry that tells a virtual node how to continue through its local network.",
          "A transit entry is encrypted with the key of the Autonomous System (AS) it describes. It carries that AS's identifier and pathlet sequences for forwarding in both directions. The join segment records encrypted information that lets an AS recognize an earlier occurrence of itself and locate its transit entry. It avoids publishing a plaintext list of repeated AS identifiers.",
          "The `J` segment is construction metadata, not a second forwarding path. Once the route is established, it is removed; data packets use the transit information in `T`.",
        ],
      },
      {
        heading: "Constructing the route",
        paragraphs: [
          "The source starts a path-construction packet with a head path toward a matchmaker. As the packet crosses each AS, that AS appends its encrypted transit entry and join entry. The source encrypts the destination information for the matchmaker, which helps form a tail path toward the destination and offers route choices.",
          "When the tail reaches an AS that can validate an earlier join entry for itself, that AS identifies the overlap between the two segments. The dovetail node truncates the transit and join information to remove the loop through the matchmaker. The destination then returns a construction reply along the reverse direction recorded in the transit entries, completing the bidirectional path.",
          "After setup, packets travel over the joined route and routers process the relevant encrypted transit entry using local keys. The matchmaker participates in construction but is not a relay on the resulting data path, and routers do not keep per-connection routing records for the established flow.",
        ],
      },
      {
        heading: "Threat model and limitations",
        paragraphs: [
          "Dovetail targets an active attacker at a single observation point, including the source's ISP. The adversary has local traffic knowledge and global knowledge of the network topology and routing data. The paper does not claim protection when observers at multiple points combine what they know.",
          "Allowing source-selected paths that are not always shortest can make path length less revealing, but it adds routing cost. The paper's evaluation reports paths around 2.5 times the shortest-path route in its high-anonymity configuration. Routing policies and path costs can still narrow the set of plausible endpoints for an observer with topology knowledge.",
          "The matchmaker's deployment also matters. If one organization can observe the source-side ISP and obtain matchmaker-side information, it may combine the two roles' views. That is a multi-vantage-point scenario outside the single-point guarantee, so organizational separation cannot be treated as a cryptographic property of the protocol.",
        ],
      },
    ],
    thesisRelevance:
      "Dovetail is a useful comparison for path construction, encrypted packet state, and single-point threat models. Its matchmaker and overlap-detection design differs from PHI's back-off search, so the procedures and their trust assumptions should not be treated as equivalent.",
    paperUrl: "https://arxiv.org/abs/1405.0351",
    paperLabel: "PETS 2014 paper",
  },
  {
    slug: "phi",
    acronym: "PHI",
    title: "Path-Hidden Lightweight Anonymity Protocol at Network Layer",
    authors: "Chen Chen and Adrian Perrig",
    year: "2017",
    summary:
      "PHI hides the positions of forwarding state in packet headers and uses a helper-assisted back-off procedure to build a path without requiring the source to control Internet routing.",
    sections: [
      {
        heading: "Path hiding through randomized header slots",
        paragraphs: [
          "Each on-path network domain encrypts its local forwarding state and places it in a header slot selected using a pseudorandom function keyed with local secret material and the session identifier. The slots are designed to look alike, so an observer cannot simply read their order to learn where a domain sits on the path. The header carries the path state, while each domain can identify the position relevant to its own key and session.",
          "The number of available positions and the number of domains affect setup reliability. If `r` domains independently choose positions from `m` slots and all must occupy distinct slots, the collision-free probability is the product `(1 - i/m)` for `i = 0` through `r - 1`. More slots improve the chance of a collision-free assignment, but increase header size.",
          "PHI can retry with independently randomized setup requests. If one request succeeds with probability `p`, then `N` independent attempts succeed at least once with probability `1 - (1 - p)^N`. This is a reliability calculation, not an anonymity guarantee: a successfully established path may still expose endpoint information under the observer model.",
        ],
      },
      {
        heading: "The helper and back-off procedure",
        paragraphs: [
          "The source first establishes a path to a helper `M` and encrypts the destination address for that helper. The helper sends a midway request backward over the established path. As the request travels toward the source, each domain checks whether its local routing policy permits forwarding toward the destination. The first eligible domain becomes the midway node `W` and extends the route to the destination.",
          "The intended data route is source → midway node → destination. The helper assists with setup; it is not required as a relay for data. This is how PHI lets network routing policies help select a feasible path without requiring the source to dictate every hop. PHI also binds setup to the established path to address session-hijacking attacks.",
          "PHI defines path requests for establishing the source-to-helper and midway-to-destination portions, midway requests for the back-off search, path replies for completing setup, and forward/backward data packets for communication after setup. These message roles make the distinction between route construction and data forwarding explicit.",
        ],
      },
      {
        heading: "Where relationship anonymity is weakest",
        paragraphs: [
          "PHI evaluates what each possible observer can infer about the source–destination relationship. A node before `W` may have information about the source, but it does not receive the destination-bearing midway request. At `W`, the observer learns the destination, so the remaining uncertainty about the source determines how many source–destination pairs remain possible.",
          "Under the paper's model, observers after `W` that learn the destination have source anonymity sets no smaller than the set at `W`. The midway node is therefore treated as the bottleneck for relationship anonymity. This is conditional on the paper's observer and topology model; it is not a universal guarantee for every real route or colluding observer.",
        ],
      },
      {
        heading: "Helper choice, assumptions, and reported results",
        paragraphs: [
          "The source can estimate which midway node a candidate helper would produce using public AS topology and relationship data, then prefer a helper whose predicted `W` leaves a larger source candidate set. The paper describes this strategy at a high level; it does not provide a complete implementation-ready helper-selection algorithm. Stale topology data or inaccurate routing-policy assumptions can predict the wrong `W`, so a larger estimated set need not mean greater anonymity in practice.",
          "The paper's threat model allows a single compromised AS or destination host, including passive inspection and active packet manipulation, but excludes passive and active traffic analysis. The anonymity-set calculation also treats IP addresses as equally likely candidates. These assumptions limit how directly the reported set sizes translate to real users or to traffic-correlation attacks.",
          "The authors report anonymity sets more than 30 times larger than LAP and Dovetail in their evaluation, and a prototype forwarding rate of 120 Gbit/s on a commodity software router. These are results from the paper's experiments, not results from my thesis work.",
        ],
      },
    ],
    thesisRelevance:
      "PHI's back-off procedure is the main focus of my thesis. My question is what information that procedure exposes at different source-side positions in a controlled LAN; whether any exposure exists remains to be established experimentally. The thesis will keep setup reliability, relationship anonymity, and observed information exposure as separate measurements.",
    paperUrl: "https://petsymposium.org/popets/2017/popets-2017-0007.php",
    paperLabel: "Proceedings on Privacy Enhancing Technologies paper",
  },
  {
    slug: "dphi",
    acronym: "dPHI",
    title: "An Improved High-Speed Network-Layer Anonymity Protocol",
    authors: "Alexander Bajic and Georg T. Becker",
    year: "2020",
    summary:
      "dPHI revisits PHI after identifying attacks that can reduce sender and receiver anonymity during setup, then adds checks intended to detect path manipulation.",
    sections: [
      {
        heading: "Why it extends PHI",
        paragraphs: [
          "The dPHI paper describes de-anonymization attacks in which a malicious node observes or manipulates setup headers. The authors propose dPHI as a response, with a changed backtracking phase and stronger integrity checks around the route being established.",
        ],
      },
      {
        heading: "Backtracking and verification",
        paragraphs: [
          "In PHI, the helper's backtracking process identifies a midway node. In dPHI, the selected midway node sends a reply that travels back to the source. The reply is derived from the destination, a nonce, and the first path segment; the source checks it to verify that the expected destination and path were used during setup.",
          "The added verification changes the setup work and state carried across the protocol. dPHI therefore represents a security-and-overhead trade-off, rather than a claim that every possible observer or traffic-analysis attack is eliminated.",
        ],
      },
    ],
    thesisRelevance:
      "dPHI is important related work because it changes the backtracking phase that motivates my thesis. Any analysis of PHI should state clearly which version of the setup procedure it studies.",
    paperUrl: "https://petsymposium.org/popets/2020/popets-2020-0054.php",
    paperLabel: "Proceedings on Privacy Enhancing Technologies paper",
  },
  {
    slug: "gphi",
    acronym: "gPHI",
    title: "Lightweight Anonymity at Host and AS Levels",
    authors: "Yutaro Yoshinaka, Junji Takemasa, Yuki Koizumi, and Toru Hasegawa",
    year: "2022",
    summary:
      "gPHI extends PHI and dPHI with a guard role and a two-midway design to address additional topology-based attacks and compromise scenarios.",
    sections: [
      {
        heading: "Adding a guard",
        paragraphs: [
          "gPHI divides path setup into multiple subpaths involving a guard and a helper, and uses two midway routers. The guard changes which parts of the path share information, with the goal of making it harder for a midway router to infer an endpoint from topology or timing measurements.",
          "The paper defines relationship anonymity at both host and Autonomous System levels. Its threat model considers a bounded number of malicious network domains and explicitly studies cases involving compromised path-setup roles.",
        ],
      },
      {
        heading: "Evaluation and trade-offs",
        paragraphs: [
          "The authors simulate path setup over an AS-level topology and evaluate topology-based attacks, including round-trip-time measurements. The extra guard and path segments make setup and role selection more involved; the paper's results should be read under its stated topology and compromise assumptions.",
        ],
      },
    ],
    thesisRelevance:
      "gPHI broadens the comparison beyond PHI's original helper/back-off design. It is useful when considering whether information exposure depends on helper placement, midway-node choice, or additional observers.",
    paperUrl:
      "https://dl.ifip.org/index.html/db/conf/networking/networking2022/1570792271.pdf",
    paperLabel: "IFIP Networking 2022 paper",
  },
  {
    slug: "hornet",
    acronym: "HORNET",
    title: "High-Speed Onion Routing at the Network Layer",
    authors: "Chen Chen et al.",
    year: "2015",
    summary:
      "HORNET is a network-layer onion-routing design. It provides a useful contrast to lightweight protocols that use a more restricted adversary model to reduce forwarding cost.",
    sections: [
      {
        heading: "Onion routing in network infrastructure",
        paragraphs: [
          "The source selects a path and establishes cryptographic state with the routers on it. As packets move, routers use symmetric cryptography to process their part of the onion-routing header. The design aims to avoid per-flow state at intermediate routers while supporting anonymous channels at high forwarding rates.",
          "Unlike PHI's randomized path-state slots and helper-driven back-off, HORNET uses layered path information. This is a different design point: it puts more of the protection into per-hop onion processing rather than relying on the lightweight protocol family's narrower network-observer assumptions.",
        ],
      },
      {
        heading: "How it compares",
        paragraphs: [
          "HORNET is not a later version of PHI. It is a separate network-layer approach that helps frame the trade-off between richer per-hop protection and the reduced forwarding overhead targeted by LAP and PHI. Comparisons depend on the threat model and implementation being evaluated.",
        ],
      },
    ],
    thesisRelevance:
      "HORNET appears in the protocol comparison in my research notes. It provides a contrasting architecture when describing what the lightweight designs gain and what protections their threat models leave out.",
    paperUrl: "https://doi.org/10.1145/2810103.2813628",
    paperLabel: "ACM CCS 2015 paper",
  },
  {
    slug: "p5hi",
    acronym: "P⁵HI / P4-PHI",
    title: "A Lightweight Anonymity Protocol on Programmable Switches",
    authors: "Yutaro Yoshinaka, Mio Kochiyama, Yuki Koizumi, Junji Takemasa, and Toru Hasegawa",
    year: "2024",
    summary:
      "P⁵HI is a hardware-oriented instantiation of PHI for P4 programmable switches, redesigning packet state and router operations for switch pipelines.",
    sections: [
      {
        heading: "Adapting PHI to P4 hardware",
        paragraphs: [
          "Programmable switches have constrained parsing, memory, and pipeline resources. P⁵HI adapts PHI's forwarding-state list, cryptographic construction, and router procedures so they fit those constraints. The paper treats the path-setup sequence as part of that hardware-aware design.",
          "P⁵HI is best understood as a PHI-based implementation and protocol instantiation, not as an unrelated anonymity design. Its performance results concern the authors' programmable-switch prototype.",
        ],
      },
      {
        heading: "Performance and scope",
        paragraphs: [
          "The authors report forwarding above 3 Tbit/s on programmable-switch hardware. That result shows what the implementation can achieve on its test platform; it does not by itself establish deployment-wide anonymity or remove assumptions inherited from lightweight network-layer protocols.",
        ],
      },
    ],
    thesisRelevance:
      "P⁵HI is relevant as an implementation branch of PHI. It helps separate questions about the back-off protocol's privacy properties from questions about how efficiently the protocol can run on a particular router platform.",
    paperUrl: "https://doi.org/10.1016/j.comnet.2024.110721",
    paperLabel: "Computer Networks 2024 paper",
  },
];
