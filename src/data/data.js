export const bannertext = '< Agile‑Developer • Full‑Stack • Serverless • Cross‑Platform • Business‑Analysis • User‑Design • Interaction‑Design />'

export const profileData = [
        {
        bio:"My day job involes working in business intellegence/anlytics while I enjoy coding and developing applications in my spare time; currently experimenting with full-stack, cross-platform, and serverless applications. In summer 2022 I graduated from Leeds Beckett University with a First Class Honours in Digital Technology Solutions, a Computer Science degree which combined practical learning in Business Analysis, Information Systems & Interaction Design, Network Design & Cyber Security, Software Development & Engineering",
        keyskills:"Business Analysis · Agile Project Management · HTML · CSS · JavaScript · React · React Native · NetMaui · AWS Amplify · Google Firebase · Azure · Git · SQL · Power Apps · Power BI · Figma · Photoshop"   
        }
]

export const  employerData=[
        {
            employer:"Leeds City Council",
            role:"Performance Manager",
            period:"May 2016 - Present",
            skills: "Azure DevOps · Microsoft Power BI · Azure Kusto · Microsoft Power Platform · Communication · Microsoft Azure · SQL · Agile Project Management · User-centered Design · Business Intelligence (BI) · Change Management · Project Management · Performance Management · Data Analysis",
            description:"I have been involved in bringing the power of Business Intelligence solutions to LCC through modernising BI and survey software; reducing information processing from days/weeks to a near instantly available resource. I empower effective data-driven business decisions to successfully drive performance improvement across LCC services by identifying and engineering actionable metrics and creating intuitive, user-centred solutions using technology such as Power BI, SQL, Azure services, and SharePoint. For example, I created a continual improvement metric for contact centre agents using peer, ranking, and quartile measures to highlight development areas which has helped improve customer satisfaction by over 30% in some cases. I do this using an agile process of collaboration with muti-functional teams though Business Analysis (inc. requirements elicitation, user research, process modelling, data modelling), Solution Architecture (inc. architecture selection, system design), Interface/Interaction Design (inc. prototyping, wireframing, accessibility), and Development (inc. software engineering, database management)."
        },
        {
            employer:"Leeds City Council & Leeds Community Healthcare",
            role:"Team Leader & Operations Manager",
            period:"March 2014 - May 2016",
            skills: "Partnership Development · Communication · Service Design · Training · Coaching · Team Motivation · Leadership · Change Management · Project Management · Coaching & Mentoring · Performance Management",
            description:"A dynamic role where I developed a strategic roadmap and created supporting business cases to successfully build two new services in SPUR and Police Custody before taking over their operational management; all aimed at improving outcomes for users. With limited resources, and complex competing demands, this involved strong negotiation at a high level with stakeholders/partners (including LCC Social Care, LCC Safeguarding, Leeds Community Healthcare (LCH), Leeds Hospitals, District Nurses, GPs, Police, and the Prisons Service). I supported service design both horizontally and vertically such as processes and system development, creation of performance metrics and SLAs, objective development, managing recruitment, inductions, training, coaching, and personal development plans. I helped the service grow from 10 agents working 9-5 weekdays serving Leeds, to over 30 agents scheduled over 24hrs a day all year round serving all Yorkshire. For two years I led a dynamic high performing team of LCC and LCH staff before training a further two team leaders to take on the role. To this day these services work to help the people of Yorkshire."
        },
        {
            employer:"Leeds City Council",
            role:"Team Leader",
            period:"October 2012 - March 2014",
            skills: "Building & Motivating Teams · Inclusive Leadership · Coaching · Training · Mentoring · Change Management · Project Management · Performance Management",
            description:"Consistently building and sustaining high performing teams with performance improvements year on year, I was recognised for my ability to quickly make a significant impact. Initially working with a project team on planning and delivering a new council tax support service I led teams in Housing, Council Tax, and then Social Care where, on average, I improved team Quality Coaching (QC) scores by 10%, and customer survey scores by around 10%. In my final year as lead on Adult Social Care I reduced absence by 63%, improved call handling speeds by 25% and improved QC scores by 15%, leading my team from being the lowest performers (when I arrived) to consistent QC champions month on month. I did all this thanks to my front-line experience and ability to inspire, having an inclusive and supportive leadership style, providing consistent coaching and mentoring tailored to individuals, and ensuring my team had the tools and support they needed to do great work."
        },
        {
            employer:"Various",
            role:"Customer Service and Support Officer ",
            period:"March 2023 - October 2012",
            skills: "Customer Services · Coaching · Training · Mentoring",
            description:"Working in the front-line of services including banking (Halifax), sales (General Electric), the gambling industry (William Hill), debt management (HBOS), and social housing (Leeds City Council) I helped customers with various diverse and sensitive needs. This has set me up well in my later career being able to understand the customer perspective and visualise customer journeys and identify opportunities for improvement or risks/threats. My work on Six-Sigma during my time with General Electric was a foundation that has seen me identify inefficiencies and develop solutions through all my roles over the years. As a CSO I developed guide materials, forms, user dashboards (excel), data solutions and coached/mentored my peers. I was often one of the highest performers in my department and saw the value in shared learning and development, while being the technical support for my peers. I worked as systems trainer (for Siebel) for two years in this time."
        }
]


export const educationData=[
        {
            trainer:"Leeds Beckett University",
            course:"Digital Technology Solutions BSc",
            period:"2018-2022",
            description:"First Class with Honours. This was a hands-on Computer Science degree developing practical IT solutions covering best practice in Business Analysis, Interaction Design, Information Systems, Networking, Cyber Security, Software Engineering, and Database Administration. I used various Project Management tools and Software Development Lifecycles (inc. Waterfall, Agile SCRUM, DevOps, Rapid Application Development, Double Diamond) which included project planning, user research, requirements elicitation, user interaction and design, logical and physical modelling, solution architecture selection, and rapid software delivery. For my final project I successfully developed a serverless cross-platform mobile application allowing contact centre agents to view work schedules on their mobile devices using React Native (front) and Google Firebase (back); while adhering to the latest principles in the Government Design System, W3C accessibility, and OWASP security."
        },
        {
            trainer:"Leeds Metropolitan University",
            course:"Housing Studies",
            period:"2008-2010",
            description:"Completed as the top performing student (Deans award), this degree covered politics and policy, law, project management, housing, health, social development, mobility, urban design and regeneration, and sustainability."
        },
        {
            trainer:"Chartered Institute of Housing",
            course:"Chartered institute of Housing Award",
            period:"2008-2010",
            description:"Highest performing student in graduation contingent"
        },
        {
            trainer:"Leeds Beckett University",
            course:"Certificate of Personal and Professional Skills",
            period:"2002-2003",
            description:"Pratical course in leadership, team building, and business administration" 
        }
]

export function getEmployment(){
    return employerData.map(({employer,role,period,skills,description})=> ({employer,role,period,skills,description}));
}

//getone educstion item based on course name
export function getEduItem(id){
    return educationData.find(({course})=> course === id);
}

export function getEducation(){
    return educationData.map(({trainer,course,period,description})=> ({trainer,course,period,description}));
}

