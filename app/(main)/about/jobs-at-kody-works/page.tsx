import "../../page-shared.css";
import "./jobs.css";
import JobApplicationForm from "./JobApplicationForm";

const jobOpenings = [
  {
    id: 1,
    title: "Mid-Senior Python Developer",
    department: "Engineering",
    location: "Onsite/Hybrid - Betul, MP",
    type: "Full-time",
    experience: "4-6 years",
    description:
      "We are looking for a skilled Mid-Senior Python Developer to design, develop, and maintain scalable backend systems and APIs.",
    responsibilities: [
      "Design and develop high-quality Python applications",
      "Build and maintain RESTful APIs",
      "Work with databases (PostgreSQL, MySQL)",
      "Collaborate with cross-functional teams",
      "Write clean, efficient, and well-documented code",
    ],
    requirements: [
      "4-6 years of experience in Python development",
      "Strong knowledge of Django/Flask/FastAPI",
      "Experience with databases and ORM",
      "Good understanding of OOP and design patterns",
      "Familiarity with Git and CI/CD pipelines",
    ],
  },
  {
    id: 2,
    title: "Mid-Senior Java Developer",
    department: "Engineering",
    location: "Onsite/Hybrid - Betul, MP",
    type: "Full-time",
    experience: "4-6 years",
    description:
      "We are seeking a Mid-Senior Java Developer to build robust, scalable enterprise applications using Java technologies.",
    responsibilities: [
      "Develop and maintain Java-based applications",
      "Design scalable microservices architecture",
      "Implement RESTful and SOAP web services",
      "Ensure application performance and security",
      "Mentor junior developers",
    ],
    requirements: [
      "4-6 years of experience in Java development",
      "Strong knowledge of Core Java, Spring Boot, Spring Framework",
      "Experience with Hibernate/JPA",
      "Knowledge of microservices architecture",
      "Familiarity with Maven/Gradle and testing frameworks",
    ],
  },
];

export default function JobsAtAmericanChasePage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Jobs At KODY Works</h1>
        <p>Explore opportunities that inspire, challenge, and unlock your potential.</p>
      </div>

      <div className="page-content">
        <div className="jobs-intro">
          <p>
            We&apos;re always looking for talented individuals to join our team. Explore open positions
            and find your next career opportunity with KODY Works. We offer competitive benefits,
            growth paths, and a collaborative work culture.
          </p>
        </div>

        <h2 className="section-title">Open Positions</h2>
        <div className="jobs-list">
          {jobOpenings.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <h3>{job.title}</h3>
                <span className="job-type">{job.type}</span>
              </div>
              <div className="job-meta">
                <span>📍 {job.location}</span>
                <span>💼 {job.department}</span>
                <span>⏱️ {job.experience} Experience</span>
              </div>
              <p className="job-description">{job.description}</p>

              <div className="job-details">
                <div>
                  <h4>Key Responsibilities</h4>
                  <ul>
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Requirements</h4>
                  <ul>
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title" id="apply">Apply Now</h2>
        <p className="form-intro">
          Interested in joining our team? Fill out the application form below and we&apos;ll get back to
          you soon.
        </p>
        <JobApplicationForm />
      </div>
    </div>
  );
}
