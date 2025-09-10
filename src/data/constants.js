import candianCO2 from "../images/candianCO2.jpg";
import fabricLogo from "../images/fabric_48_color.svg";
import canvaLogo from "../images/canva-icon.svg";
import langaraLogo from "../images/LOGO_langara.png";
import cntlogo from "../images/LOGO_cnt.png";
import arcotellogo from "../images/LOGO_arcotel.jpg";
import melbournelogo from "../images/LOGO_melbourne.png";
import espelogo from "../images/LOGO_espe.jpg";
import cybersecurity from "../images/PROJECT_cybersecurity.webp";
import dryeye from "../images/PROJECT_dryeye.jpg";
import granify from "../images/PROJECT_granify.webp";
import apple1 from "../images/PICTURES_apple1.jpeg";
import apple2 from "../images/PICTURES_apple2.jpeg";
import dean1 from "../images/PICTURES_dean1.png";
import dean2 from "../images/PICTURES_dean2.png";
import isdbt from "../images/PICTURES_isdbt.jpeg";
import cayambe1 from "../images/PICTURES_cayambe1.jpeg";
import cayambe2 from "../images/PICTURES_cayambe2.jpeg";
import cayambe3 from "../images/PICTURES_cayambe3.jpeg";
import cayambe4 from "../images/PICTURES_cayambe4.jpeg";
import master1 from "../images/PICTURES_masters1.jpg";
import master2 from "../images/PICTURES_masters2.jpg";
import park from "../images/PROJECT_park.png";
import gene from "../images/PROJECT_gene.webp";
import submarine from "../images/PROJECT_submarine.png";
import capacity from "../images/PROJECT_t3.png";
import cross from "../images/LOGO_cross.png";
import dive1 from "../images/PICTURES_diving1.jpeg";
import dive2 from "../images/PICTURES_diving2.jpeg";
import streamlit from "../images/LOGO_streamlit.png";
import langara from "../images/PROJECT_langara.jpg";

export const Bio = {
  name: "Javier Merino",
  roles: ["Data Analyst", "Problem Solver", "Explorer"],
  description:
    "Welcome to my e-portfolio! In this space, I share my data analyst career journey - showcasing the technical skills I’ve developed, the projects I’ve completed, and the experiences that have shaped my approach to problem-solving. Over the past 12 years, I have held diverse roles accross companies, government, and research institutions, successfully leading and contributing to challenging projects. On a personal level, I consider myself an explorer - always seeking new experiences and challenges. I enjoy traveling, gaming, and engaging in both individual and team sports. I invite you to explore my work, connect with me, and consider how we might collaborate in the future. Thank you for visiting, and I hope you find something here that inspires you.",
  github: "https://github.com/javiermerinom",
  resume:
    "https://drive.google.com/file/d/1Ngghk_37AzYCy_2qwN_5Zxo3KztSovda/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/jmerinom/",
  twitter: "https://x.com/javxmm",
  facebook: "https://www.facebook.com/javier.merino.7967",
  instagram: "https://www.instagram.com/javxmm/",
};

export const skills = [
  {
    title: "Analysis and Visualization",
    skills: [
      {
        name: "Python",
        image: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
      },
      {
        name: "R",
        image: "https://www.vectorlogo.zone/logos/r-project/r-project-icon.svg",
      },
      {
        name: "Power BI",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
      },
      {
        name: "Tableau",
        image: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
      },
      {
        name: "Streamlit",
        image: streamlit,
      },
      {
        name: "Microsoft Excel",
        image: "https://cdn.worldvectorlogo.com/logos/excel-4.svg",
      },
    ],
  },
  {
    title: "Database and Cloud",
    skills: [
      {
        name: "SQL",
        image:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Sql_data_base_with_logo.svg",
      },
      {
        name: "PostgreSQL",
        image:"https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
      },
      {
        name: "Fabric",
        image: fabricLogo,
      },

    ],
  },
  {
    title: "Other Tools",
    skills: [
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Microsoft Office",
        image: "https://cdn.worldvectorlogo.com/logos/office-1.svg",
      },
      {
        name: "Canva",
        image: canvaLogo,
      },
      {
        name: "Sharepoint",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg",
      },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      {
        name: "Adaptability",
        image: "https://cdn-icons-png.flaticon.com/512/10108/10108220.png",
      },
      {
        name: "Communication",
        image:
          "https://img.icons8.com/?size=100&id=54385&format=png&color=FFFFFF",
      },
      {
        name: "Teamwork",
        image: "https://cdn-icons-png.flaticon.com/512/7086/7086327.png",
      },
      {
        name: "Analytical-Thinking",
        image:
          "https://cdn-icons-png.freepik.com/256/8553/8553558.png?semt=ais_hybrid",
      },
      {
        name: "Cross-Functional Collaboration",
        image: cross,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: langaraLogo,
    role: "Research Assistant, Data Warehouse Project",
    company: "Langara College Applied Research Centre - Vancouver, Canada",
    date: "January 2025 - August 2025",
    desc: "Developed and maintained Python-based ETL applications to automate data extraction and transformation in a Chemistry Lab, reducing processing time and ensuring accurate, reusable outputs aligned with evolving project needs through version control and updates.",
    skills: [
      "Python",
      "Github",
      "Excel",
      "Data Wrangling",
      "Data Warehousing",
      "Cross-functional collaboration",
    ],
  },
  {
    id: 1,
    img: cntlogo,
    role: "Business Analyst I, International Relations",
    company: "CNT, Telecommunications Service Provider - Quito, Ecuador",
    date: "February 2018 - February 2024",
    desc: "Managed international rate strategies and capacity portfolios through data analysis, achieving revenue targets and delivering Power BI dashboards that provided insights on cost efficiency, utilization, and supported contract acquisitions.",
    skills: [
      "Data Analysis",
      "Power BI",
      "Excel",
      "Communication",
      "Negotiation",
      "Project Management",
      "Cross functional management",
    ],
  },
  {
    id: 2,
    img: arcotellogo,
    role: "Business Analyst II, Statistic and Market Analysis",
    company: "ARCOTEL, Telecomunications Regulatory Authority - Quito, Ecuador",
    date: "October 2014 - February 2018",
    desc: "Defined KPIs and developed revenue forecasting models to support policy studies and evaluate market impacts. Designed and delivered interactive Power BI dashboards consolidating mobile network, and market data, enabling data-driven decisions for wholesale rate evaluations and strategic planning.",
    skills: ["Data Analysis", "R", "Excel", "Power Bi", "Forecasting", "Communication", "Leadership"],
  },
  {
    id: 3,
    img: arcotellogo,
    role: "Busines Analyst I",
    company: "ARCOTEL, Telecomunications Regulatory Authority - Quito, Ecuador",
    date: "April 2011 - July 2013",
    desc: "Represented Ecuador in international forums to support the harmonization of the ISDB-T digital TV standard and contributed to drafting technical specifications. Assisted in managing the technical group leading the transition from analog to digital TV, supporting deployment and license approvals.",
    skills: ["Project Management", "Communication", "Leadership"],
  },
];

export const education = [
  {
    id: 0,
    img: langaraLogo,
    school: "Langara College",
    date: "May 2024 - August 2025",
    grade: "3.92 GPA",
    desc: "Gained hands-on experience in statistics, machine learning (regression, classification, clustering), and data pipeline development. Delivered a capstone project on park occupancy analysis for the Vancouver City Park Board and earned Dean’s Honour Roll recognition twice for academic excellence.",
    degree: "Post Graduate Diploma in Data Analytics",
  },
    {
    id: 1,
    img: melbournelogo,
    school: "University of Melbourne",
    date: "July 2013 - August 2014",
    grade: "H2A Grade",
    desc: "Developed expertise in network design and optimization, optical and broadband networking, mobile and wireless systems, multimedia content delivery, and business aspects of telecommunications, gaining a strong foundation in managing technological enterprises and advanced telecommunications infrastructures.",
    degree: "Master of Telecommunications Engineering",
  },
    {
    id: 2,
    img: espelogo,
    school: "Army Polytechnic School",
    date: "October 2004 - March 2011",
    grade: "17/20 Grade",
    desc: "The program developed a strong foundation in mathematical modeling, digital signal processing, and telecommunications systems, combining theoretical rigor with practical applications.",
    degree: "Bachelor of Science, Major Electrical Engineering and Telecommunications",
  },
];

export const projects = [
  {
    id: 0,
    title: "Cyber-Attack Detection Analysis",
    date: "March 2025",
    description:
      "Built a machine learning model to detect cyber-attacks using the BCCC-CIC IDS 2017 dataset with millions of rows and 122 features. Through feature selection and Random Forest, reduced the model to 36 predictors while achieving 99.943% accuracy in classifying benign vs. malicious traffic. This research project was developed as part of the Post-Degree Diploma in Data Analytics at Langara College.",
    image: cybersecurity,
    tags: ["Python", "Random Forrest", "Feature Selection", "Cybersecurity"],
    category: "data science",
    github:
      "https://github.com/javiermerinom/cyber_attack-classification-analysis",
  },
  {
    id: 1,
    title: "CO₂ Car Emissions Prediction",
    date: "December 2024",
    description:
      "Built regression models in R to predict CO₂ emissions using Canada’s Fuel Consumption dataset. Conducted feature evaluation and model selection (engine size, cylinders, fuel type, transmission, gears) with stepwise, forward, backward, and subset methods. The final simplified model achieved high predictive accuracy (Adjusted R² ≈ 0.994), demonstrating that smaller models can still capture key drivers of vehicle emissions. This was a research project developed in the Post-Degree Diploma in Data Analytics at Langara College.",
    image: candianCO2,
    tags: ["R", "Linear Regression", "Stepwise Regression", "Interaction Effects"],
    category: "data science",
    github:
      "https://github.com/javiermerinom/car_emissions-linear-regression-analysis",
  },
  {
    id: 2,
    title: "Dry Eye Disease Clustering Analysis",
    date: "April 2025",
    description:
      "Explored clustering methods in R to identify potential subgroups within individuals diagnosed with or at risk of Dry Eye Disease (DED). Applied k-means, PAM, hierarchical, hybrid HKMeans, and DBSCAN, with validation using Silhouette, Gap Statistic, Rand Index, and VI. Analysis revealed low clustering tendency (Hopkins ≈ 0.49), and no algorithm significantly outperformed random assignment, though certain lifestyle and health factors (alcohol use, blue-light filter use, sleep disorders) were linked to higher DED risk. This was a research project developed as teamwork in the Post-Degree Diploma in Data Analytics at Langara College.",
    image: dryeye,
    tags: ["R", "Clustering", "K-means", "Statistical Analysis"],
    category: "data science",
    github: 
      "https://github.com/javiermerinom/dry_eye_disease-cluster-analysis",
  },
  {
    id: 3,
    title: "Market Strategy and Ad Response Prediction",
    date: "April 2025",
    description:
      "Analyzed session-level user data from an e-commerce platform to evaluate marketing strategies and build predictive models for ad response. Conducted EDA, visualizations, and classification modeling (Logistic Regression, Random Forest, XGBoost with SMOTE). Random Forest achieved the best balance of accuracy (94%) and AUC (0.86), while Logistic Regression provided the highest recall (75%). Insights showed peak response times (1–4 AM) and that specific ads outperformed others, guiding budget allocation and targeting. This was a research project developed as teamwork in the Post-Degree Diploma in Data Analytics at Langara College.",
    image: granify,
    tags: ["Python", "Random Forrest", "XGBoost", "Logistic Regression"],
    category: "data science",
    github: "https://github.com/javiermerinom/granify-classification-analysis",
  },
  {
    id: 4,
    title: "Park Occupancy Pipeline",
    date: "August 2025",
    description:
      "This capstone project, developed in collaboration with the City of Vancouver, earned our team a place on the Dean’s Honour List in Summer 2025 for Langara’s Data Analytics program. It delivers a Park Usage Analytics Dashboard that supports data-driven decision-making for the Vancouver Park Board. Built in Microsoft Fabric with a Power BI front end, the solution integrates diverse datasets—Google Popular Times, observational counts, weather, amenities, events, and holidays—into a unified system for analysis, forecasting, and strategic planning.",
    image: park,
    tags: ["Fabric", "Power BI", "Pyspark", "End to End Pipeline"],
    category: "end to end",
    github:
      "https://github.com/javiermerinom/park_occupancy-capstone_project",
  },
  {
    id: 5,
    title: "Gene Expression Analysis for Breast Cancer Classification",
    date: "April 2025",
    description:
      "This project earned our team a place on the Dean’s Honour List in Spring 2025 for Langara’s Data Analytics program. It focused on breast cancer classification and survival analysis using RNA-seq data from The Cancer Genome Atlas (TCGA-BRCA), applying a workflow of differential expression analysis (DEA), dimensionality reduction, and machine learning models for tumor vs. normal classification, cancer stage prediction, and patient survival analysis.",
    image: gene,
    tags: ["Python", "gene expression", "grid-search", "xgboost-clasifier"],
    category: "data science",
    github:
      "https://github.com/javiermerinom/gene_expression_breast_cancer-classification-analysis",
  },
  {
    id: 6,
    title: "Submarine Cable Global Deployment",
    date: "April 2018",
    description:
      "Developed an interactive Power BI dashboard to analyze global submarine cable deployments from 1991 to 2021, using data from TeleGeography. The dashboard provides insights into trends in cable length, capacity, and technology over time, with filters for region, status, and technology type. Key findings include a significant increase in total cable length and capacity, driven by advancements in fiber-optic technology and the rise of cloud services. This project was completed as part of my role as a Business Analyst at CNT.",
    image: submarine,
    tags: ["PowerBI", "Submarine Cable", "Benchmarking", "KPI Analysis"],
    category: "data analysis",
    github: "https://github.com/javiermerinom/submarine_cable_global_deployment-analysis",
  },
  {
    id: 7,
    title: "International Network Capacity",
    date: "May 2018",
    description:
      "An interactive dashboard built during my time as a Business Analyst at CNT, Ecuador, designed to evaluate international connection saturation and support data-driven decisions on when to activate or acquire new capacity. It integrates multiple network data tables with custom KPIs—such as usage rate and saturation thresholds—to provide clear visibility into capacity utilization and load balancing opportunities. All data has been anonymized and altered to ensure no sensitive information is disclosed.",
    image: capacity,
    tags: ["PowerBI", "Data Visualization", "KPI Analysis"],
    category: "data analysis",
    github: "https://github.com/javiermerinom/international_network_capacity_usage-analysis",
  },
  {
    id: 8,
    title:
      "Automate data extraction at LANGARA ARC",
    date: "March 2025",
    description:
      "Developed a Python application that consolidates data templates from proprietary software into a single refined format, streamlining analysis and significantly reducing processing time. The application is currently in use at Langara; specific code details are confidential. See video for demo.",
    image: langara,
    tags: ["Python", "Data Wrangling", "Pandas", "Application Development"],
    category: "data engineering",
    video: "https://drive.google.com/file/d/1hPU6Cb31aKoFvkkFKNTy9XEvczThhSLt/view?usp=sharing",
  },
  // {
  //   id: 8,
  //   title: "Finanseer",
  //   // date: "September 2023 - November 2023",
  //   description:
  //     "A cutting-edge MERN stack financial dashboard with machine learning predictions. Powered by Vite, Redux Toolkit, and Material UI for the frontend, and Node.js, Express.js, and MongoDB for the backend, Finanseer offers dynamic financial charts and real-time data updates. It currently uses dummy data to demonstrate its potential for handling real financial data. As both a software developer and data analyst, I'm excited to bridge the gap between these roles. Whether you're an experienced investor or new to finance, our user-friendly Material UI design ensures a seamless experience. ",
  //   image: finanseerMERN,
  //   tags: ["MERN", "Machine Learning", "CI/CD"],
  //   category: "web app",
  //   github: "https://github.com/therealmanraj/finanseer",
  //   webapp: "https://neon-biscotti-086dd3.netlify.app/",
  // },
  // {
  //   id: 9,
  //   title: "CryptoWhiz",
  //   // date: "September 2023 - October 2023",
  //   description:
  //     "Introducing CryptWhiz! I'm thrilled to share my React app, CryptWhiz. While it may not be flawless, it's a testament to my skills in data visualization, APIs, and web development. CryptWhiz empowers users to track and visualize real-time cryptocurrency data. With API integration and interactive charts, it offers a user-friendly experience. ",
  //   image: cryptoWhiz,
  //   tags: ["React", "Rapid API"],
  //   category: "web app",
  //   github: "https://github.com/therealmanraj/cryptwhiz",
  //   webapp: "https://lucent-sorbet-9e60d1.netlify.app/",
  // },
  // {
  //   id: 10,
  //   title: "COVID Application",
  //   // date: "August 2021 - September 2021",
  //   description:
  //     "The COVID-19 App, developed with Android Studio, is a versatile application that serves as a one-stop resource for COVID-19 information. It provides real-time data tracking, including cases and trends globally and locally. Users can access comprehensive vaccination information, including eligibility and appointment scheduling. The app offers essential COVID-19 guidelines and official resources for safety and testing. To facilitate navigation, it integrates Google Maps, helping users find testing centers and vaccination sites. With its user-friendly interface, the app ensures that users have quick and easy access to accurate and critical information, making it an invaluable tool in navigating the pandemic.",
  //   image: covidApp,
  //   tags: ["Java", "XML", "Android Studio", "Google API"],
  //   category: "web app",
  //   github: "https://github.com/therealmanraj/COVID",
  // },
];

export const pictures = [
  {
    id: 0,
    title: "Presentation to Apple",
    type: "image",
    images: [apple1, apple2],
    description:
      "Our team was one of two selected to present the work of Langara’s Data Analytics Capstone cohort to Apple executives. I presented our project on machine learning and visualization for park management with the Vancouver Park Board. This enriching experience allowed me to represent the program, exchange ideas with industry experts, and further strengthen my skills in applied data analytics.",
  },
  {
    id: 1,
    title: "Langara Dean's Honour Roll",
    type: "image",
    images: [dean1, dean2],
    description:
      "It was an honour to be recognized twice on the Dean’s Honour Roll at Langara College for academic achievement, based on team contributions to projects on gene analysis for cancer detection (Spring 2025) and park occupancy analysis for the Vancouver Park Board (Capstone project, Summer 2025).",
  },
  {
    id: 2,
    title: "Master's Graduation",
    type: "image",
    images: [master1, master2],
    description:
       "Supported by a scholarship from the Ecuadorian government, in 2014 I graduated with a Master’s degree in Telecommunications Engineering from the University of Melbourne, Australia, one of the best universities in the world. This achievement marked the culmination of years of dedication and hard work, and it opened doors to new opportunities in my professional journey.",
  },
  {
    id: 4,
    title: "Represented Ecuador at International Forums",
    type: "image",
    image: isdbt,
    description:
      "I had the honour of being part of the group that represented Ecuador twice at the ISDB-T International Forum (Ecuador 2012, Uruguay 2013), the body responsible for standardizing the digital TV system in the region and making key decisions on both hardware and software. During my participation, I contributed to the final approval of the hardware standard and to the initial drafting of the software harmonization document and the Emergency Warning Broadcasting System, helping shape the region’s digital TV framework.",
  },
  {
    id: 5,
    title: "Cayambe Volcano Expedition",
    type: "image",
    //type: "video",
    images: [cayambe1, cayambe2, cayambe3, cayambe4],
    //video: guitarJam1,
    description:
      "In December 2023, I summited Cayambe Mountain, the third-highest peak in Ecuador at 5,790 meters. The climb demanded endurance and resilience, strengthening my grit, teamwork, and adaptability in extreme conditions. It remains a defining moment of personal growth and determination, reinforcing that the hardest paths often lead to the most rewarding outcomes.",
  },
 {
    id: 6,
    title: "Punta Cana Diving Expedition",
    type: "image",
    images: [dive1,dive2],
    description:
      "In 2010, I dove in the Caribbean at Punta Cana—a test of focus and stamina that proved there are no limits when I set my mind to something.",
  },
];
