import {Component} from 'react'

import './index.css'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'Java Script',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Java',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Bootstrap',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource: 'B.Tech(Computer Science)',
  },
  {
    id: 1,
    qualification: 'Intermediate',
    qualificationSource: 'St.Ann’s Jr College',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'Kimberley EM School',
  },
]

class AboutSection extends Component {
  skillsDetailsList = () => (
    <ul className="skills-list">
      {skillsData.map(skill => (
        <li className="skill-item" key={skill.id}>
          <p className="skill">{skill.name}</p>
        </li>
      ))}
    </ul>
  )

  educationDetailsList = () =>
    educationData.map(education => (
      <li key={education.id}>
        <div>
          <p className="qualification">{education.qualification}</p>
          <p className="education-source">{education.qualificationSource}</p>
        </div>
      </li>
    ))

  render() {
    return (
      <div>
        <h1 className="about-heading">About</h1>
        <p className="about-description">
          I started my journey in the world of computers from a young age, now
          I’m 21 years old, Pursuing my Computer Science majors at Santa Clara
          University, USA. Web development is my center of interest.
        </p>
        <div className="education-and-skills-container">
          <div className="education-list-container">
            <h1 className="education-skill-heading">Education</h1>
            <ul className="education-list-items-card">
              {this.educationDetailsList()}
            </ul>
          </div>
          <div className="skills-list-container">
            <h1 className="education-skill-heading">Skills</h1>
            {this.skillsDetailsList()}
          </div>
        </div>
      </div>
    )
  }
}

export default AboutSection
