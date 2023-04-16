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
            period:"Oct 2016 - Present",
            skills: "Azure DevOps · Microsoft Power BI · Azure Kusto · Microsoft Power Platform · Communication · Microsoft Azure · SQL · Agile Project Management · User-centered Design · Business Intelligence (BI) · Change Management · Project Management · Performance Management · Data Analysis",
            description:"I have been instrumental in bringing the power of modern Business Intelligence solutions to LCC though modernising BI and survey software reducing report processing and access to information from days/weeks to an almost instantly available resource. My work empowers effective data-driven business decisions by providing self-serve dashboard applications using technical solutions such as Power BI, SQL, Azure services, and SharePoint successfully driving performance improvements across LCC services. I develop intuitive user-centred Business Intelligence solutions through an agile process of collaboration with muti-functional teams including Business Analysis (requirements elicitation, user research, process modelling, data modelling), Solution Architecture (architecture selection, system design), Interface/Interaction Design (prototyping, wireframing, accessibility), and Development (software engineering, database management). This includes interactive dashboards with actionable metrics to highlight performance and inform business decisions. For example, I developed continual improvement for contact centre agents using peer comparison, ranking, and quartile performance metrics which sit at the core of agent performance reviews driving contact centre performance; in some cases this has helped customer satisfaction increase by over 30%."
        },
        {
            employer:"Leeds City Council & Leeds Community Healthcare",
            role:"Team Leader & Operations Manager",
            period:"March 2014 - Oct 2016",
            skills: "Partnership Development · Communication · Service Design · Training · Coaching · Team Motivation · Leadership · Change Management · Project Management · Coaching & Mentoring · Performance Management",
            description:"In partnership with various organisations (LCC Social Care, LCC Safeguarding, Leeds Community Health, Leeds Hospitals, District Nurses, GPs, Police, and the Prisons Service) I helped developed a strategy and roadmap for the creation and operation of new services in SPUR and Police Custody using strong negotiation and collaboration at a high level with all stakeholders. I was involved in building these services from the ground up including research and planning, service design, and operational delivery of the service itself. I successfully built the single service with a team of 10 agents working 9-5 weekdays to multiple services with over 30 agents scheduled over 24hrs a day, 365 days a year while geographically expanding from Leeds to cover all of Yorkshire. With limited budget and resources and complex often competing demands, myself and a colleague worked in partnership to build everything from risk planning and business continuity, process design, systems development, service level agreements, staffing, job descriptions and recruitment, induction training and coaching, monitoring and performance metrics, improvement frameworks, objective setting and appraisal development. This was not sustainable for long and I created business cases for new team leaders taking us from one to three managers. I am proud to say that, to this day, the service still runs to improve health outcomes for users across Yorkshire."
        },
        {
            employer:"Leeds City Council",
            role:"Team Leader",
            period:"Oct 2012 - March 2014",
            skills: "Building & Motivating Teams · Inclusive Leadership · Coaching · Training · Mentoring · Change Management · Project Management · Performance Management",
            description:"Consistently building and sustaining high performing teams with continual performance improvements year on year, I was recognised for my ability to quickly make a significant impact. Initially working with a project team on planning and delivering a new council tax support service I led teams in Housing, Council Tax, and then Social Care where, on average, I improved team Quality Coaching (QC) scores by 10%, and customer survey scores by around 10%. In my final year as lead on Adult Social Care I reduced absence by 63%, improved call handling speeds by 25% and improved QC scores by 15%, leading my team from being the lowest performers (when I arrived) to consistent QC champions month on month. I did all this thanks to my front-line experience and ability to inspire, having an inclusive and supportive leadership style, providing consistent coaching and mentoring tailored to individuals, and ensuring my team had the tools and support they needed to do great work."
        }
]


export const educationData=[
        {
            trainer:"Leeds Beckett University",
            course:"Digital Technology Solutions BSc",
            period:"2018-2022",
            description:"First Class with Honours. This was a hands-on Computer Science degree developing practical IT solutions covering Business Analysis, Interaction Design, Information Systems, Networking, Cyber Security, Software Engineering, and Database Administration, using Project Management and Software Development Lifecycles (inc. Waterfall, Agile SCRUM, DevOps, Rapid Application Development, Double Diamon, and CI/CD). As my final project I successfully developed a serverless cross-platform mobile application using React Native (front) and Google Firebase (back); meeting Government Design System, W3C accessibility, and OWASP security principles. This allowed contact centre agents to view their work schedules using their own mobile devices."
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

