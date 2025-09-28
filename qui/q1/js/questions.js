let questions = [
  {
    numb: 1,
    question: "ISDN is an example of",
    answer: "Circuit switching",
    options: [
      "Circuit switching",
      "Packet switching",
      "Fiber Internet",
      "DSL"
    ]
  },
  {
    numb: 2,
    question: "Frame relay is an example of",
    answer: "Packet switching",
    options: [
      "Circuit switching",
      "Packet switching",
      "PSTN",
      "Ethernet line"
    ]
  },
  {
    numb: 3,
    question: "Devices you connect using a straight-through cable",
    answer: "PC-Switch",
    options: [
      "PC-Switch",
      "Router-PC",
      "Mobile",
      "Bridge"
    ]
  },
  {
    numb: 4,
    question: "Devices you connect using a crossover cable",
    answer: "Router-PC",
    options: [
      "PC-Switch",
      "Router-PC",
      "Switch",
      "NIC"
    ]
  },
  {
    numb: 5,
    question: "Common application of wireless data communication is for",
    answer: "Mobile",
    options: [
      "Mobile",
      "Server",
      "Switch",
      "Token ring"
    ]
  },
  {
    numb: 6,
    question: "If the destination address is unknown to the bridge, the bridge forwards the frame to all segments except the one on which it was received",
    answer: "Flooding",
    options: [
      "Flooding",
      "Switching",
      "Routing",
      "Repeating"
    ]
  },
  {
    numb: 7,
    question: "Type of communication channel that allows data to be transmitted sequentially, one bit at a time",
    answer: "Serial line",
    options: [
      "Serial line",
      "DSL",
      "Ethernet line",
      "Token ring"
    ]
  },
  {
    numb: 8,
    question: "What cable can be used for Point to Point Protocol (PPP)?",
    answer: "Serial line",
    options: [
      "Serial line",
      "Fiber",
      "RJ45",
      "Coaxial"
    ]
  },
  {
    numb: 9,
    question: "AUI stands for",
    answer: "Attachment Unit Interface",
    options: [
      "Attachment Unit Interface",
      "Analog Unit Input",
      "Auxiliary User Interface",
      "Adapter Utility Integration"
    ]
  },
  {
    numb: 10,
    question: "RJ in RJ45 means",
    answer: "Registered Jack",
    options: [
      "Registered Jack",
      "Remote Junction",
      "Rapid Joint",
      "Routing Jack"
    ]
  },
  {
    numb: 11,
    question: "Classified as Data Link Layer (Layer 2) because each one carries a unique MAC address",
    answer: "NIC",
    options: [
      "NIC",
      "Router",
      "Switch",
      "Hub"
    ]
  },
  {
    numb: 12,
    question: "Doesn't provide better security",
    answer: "Peer-to-peer",
    options: [
      "Peer-to-peer",
      "Client/server",
      "Router",
      "Switch"
    ]
  },
  {
    numb: 13,
    question: "Network services are located on a dedicated computer called a",
    answer: "Server",
    options: [
      "Server",
      "Client",
      "Switch",
      "Hub"
    ]
  },
  {
    numb: 14,
    question: "Expensive to implement",
    answer: "Client/server",
    options: [
      "Client/server",
      "Peer-to-peer",
      "Bridge",
      "NIC"
    ]
  },
  {
    numb: 15,
    question: "Handles many client requests at once",
    answer: "Server",
    options: [
      "Server",
      "Hub",
      "Switch",
      "Router"
    ]
  },
  {
    numb: 16,
    question: "Replace analog systems with faster, more reliable digital communication",
    answer: "ISDN",
    options: [
      "ISDN",
      "DSL",
      "Cable Modem",
      "Fiber Internet"
    ]
  },
  {
    numb: 17,
    question: "The two types of ISDN are BRI and PRI",
    answer: "True",
    options: [
      "True",
      "False",
      "Maybe",
      "Depends"
    ]
  },
  {
    numb: 18,
    question: "PPP stands for",
    answer: "Point to Point Protocol",
    options: [
      "Point to Point Protocol",
      "Packet Processing Protocol",
      "Peer Processing Path",
      "Public Protocol Platform"
    ]
  },
  {
    numb: 19,
    question: "In WAN connection methods, Dial-up is an example of",
    answer: "PPP",
    options: [
      "PPP",
      "DSL",
      "ISDN",
      "Cable Modem"
    ]
  },
  {
    numb: 20,
    question: "DSL stands for",
    answer: "Digital Subscriber Line",
    options: [
      "Digital Subscriber Line",
      "Data Service Line",
      "Direct Signal Line",
      "Dynamic Subscriber Link"
    ]
  },
  {
    numb: 21,
    question: "Uses existing telephone lines",
    answer: "DSL",
    options: [
      "DSL",
      "ISDN",
      "Fiber Internet",
      "Cable Modem"
    ]
  },
  {
    numb: 22,
    question: "Continuous signal where the time-varying feature represents some other quantity",
    answer: "Analog signal",
    options: [
      "Analog signal",
      "Digital signal",
      "Fiber signal",
      "Packet signal"
    ]
  },
  {
    numb: 23,
    question: "Uses discrete or discontinuous values to represent information",
    answer: "Digital signal",
    options: [
      "Digital signal",
      "Analog signal",
      "Frame relay",
      "ISDN"
    ]
  },
  {
    numb: 24,
    question: "Low cost and portable",
    answer: "Analog signal",
    options: [
      "Analog signal",
      "Digital signal",
      "Fiber Internet",
      "DSL"
    ]
  },
  {
    numb: 25,
    question: "Higher quality of signal",
    answer: "Digital signal",
    options: [
      "Digital signal",
      "Analog signal",
      "DSL",
      "Cable Modem"
    ]
  },
  {
    numb: 26,
    question: "Traditional circuit-switched telephone network that uses underground copper wire",
    answer: "PSTN",
    options: [
      "PSTN",
      "DSL",
      "Ethernet line",
      "ISDN"
    ]
  },
  {
    numb: 27,
    question: "An analog to digital converter which can packetize digital data",
    answer: "ATA",
    options: [
      "ATA",
      "NIC",
      "Switch",
      "Router"
    ]
  },
  {
    numb: 28,
    question: "Allows user to connect a standard phone to his/her internet connection",
    answer: "ATA",
    options: [
      "ATA",
      "DSL",
      "Cable Modem",
      "Fiber Internet"
    ]
  },
  {
    numb: 29,
    question: "Devices that have an RJ-45 Ethernet connector",
    answer: "IP phones",
    options: [
      "IP phones",
      "Mobile phones",
      "Analog phones",
      "ATA"
    ]
  },
  {
    numb: 30,
    question: "Family of wired networking technologies used in LANs and MANs",
    answer: "Ethernet line",
    options: [
      "Ethernet line",
      "Token ring",
      "FDDI",
      "DSL"
    ]
  },
  {
    numb: 31,
    question: "LAN where a node can transmit only when it has the token",
    answer: "Token ring",
    options: [
      "Token ring",
      "Ethernet line",
      "Fiber Internet",
      "PPP"
    ]
  },
  {
    numb: 32,
    question: "FDDI stands for",
    answer: "Fiber-distributed data interface",
    options: [
      "Fiber-distributed data interface",
      "Fast Data Device Integration",
      "Fiber Device Digital Interface",
      "Frame Data Distribution Interface"
    ]
  },
  {
    numb: 33,
    question: "This term comes from the early days of long-distance communication",
    answer: "Repeater",
    options: [
      "Repeater",
      "Switch",
      "Router",
      "Bridge"
    ]
  },
  {
    numb: 34,
    question: "States that no more than four repeaters can be used between hosts on a LAN",
    answer: "Four Repeater Rule",
    options: [
      "Four Repeater Rule",
      "Switching Rule",
      "Bridge Rule",
      "Router Rule"
    ]
  },
  {
    numb: 35,
    question: "Multipurpose repeaters that serve as central connection points for LAN",
    answer: "Hubs",
    options: [
      "Hubs",
      "Switches",
      "Routers",
      "Bridges"
    ]
  },
  {
    numb: 36,
    question: "Serve as physical connection point only",
    answer: "Passive hubs",
    options: [
      "Passive hubs",
      "Active hubs",
      "Intelligent hubs",
      "Bridges"
    ]
  },
  {
    numb: 37,
    question: "Must be plugged into an electrical outlet because it amplifies the signal",
    answer: "Active hubs",
    options: [
      "Active hubs",
      "Passive hubs",
      "Intelligent hubs",
      "Switch"
    ]
  },
  {
    numb: 38,
    question: "Function as active hubs but also include a microprocessor chip and diagnostics",
    answer: "Intelligent hubs",
    options: [
      "Intelligent hubs",
      "Passive hubs",
      "Active hubs",
      "Router"
    ]
  },
  {
    numb: 39,
    question: "More expensive than active hubs",
    answer: "Intelligent hubs",
    options: [
      "Intelligent hubs",
      "Passive hubs",
      "Switches",
      "Bridge"
    ]
  },
  {
    numb: 40,
    question: "Provides high-speed internet via the cable TV network using coaxial cables",
    answer: "Cable Modem",
    options: [
      "Cable Modem",
      "DSL",
      "Fiber Internet",
      "ISDN"
    ]
  },
  {
    numb: 41,
    question: "Uses fiber-optic cables, fastest and most reliable, supports high speeds and long distances",
    answer: "Fiber Internet",
    options: [
      "Fiber Internet",
      "Cable Modem",
      "DSL",
      "ISDN"
    ]
  }
];
