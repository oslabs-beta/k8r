import { useEffect, useState } from 'react'
import '../stylesheets/contactModal.css'

function ContactModal({ setShowContactModal }) {
  const [contactElements, setContactElements] = useState<React.ReactElement[]>([]);

  function modalClick(e) {
    if (e.target.id === 'modalBackground') {
      setShowContactModal(false)
    }
  }

  useEffect(() => {
    const developers = {
      josh: { name: 'Josh Howard', github: 'https://github.com/JoshHowardDev', linkedIn: 'https://linkedin.com/in/JoshHowardDev' },
      brian: { name: 'Brian Jaber', github: 'https://github.com/Brian-Jaber', linkedIn: 'https://www.linkedin.com/in/brianjaber/' },
      anthony: { name: 'Anthony Cho', github: 'https://github.com/ayhcho', linkedIn: 'https://www.linkedin.com/in/anthony-cho-09a38a261/' },
      chris: { name: 'Chris Oakes', github: 'https://github.com/ckoakes', linkedIn: 'https://www.linkedin.com/in/christopher-k-oakes/' },
    };
    const newContactElements: React.ReactElement[] = [];
    // For each developer, create a row in the Contact table
    Object.keys(developers).forEach((key) => {
      const { name, github, linkedIn } = developers[key];

      newContactElements.push(
        <tr>
          <td className="developerNameTD">{name}</td>
          <td>
            <a href={github} target="_blank">
              <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="Github" />
            </a>
          </td>
          <td>
            <a href={linkedIn} target="_blank">
              <img src="	https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
            </a>
          </td>
        </tr>
      )
      setContactElements(newContactElements);
    })

  }, [])

  return (
    <div id="modalBackground" onClick={modalClick}>
      <div className="contactModal">
        <h1 className="modalTitle">Developer Contact Info</h1>
        <div className="contactInfoContainer">
          <table className="developersTable">
            {contactElements}
          </table>
        </div>
        <div className="buttonsContainer">
          <div className="cancelButton button-17" onClick={() => { setShowContactModal(false) }}>Close</div>
        </div>
      </div>
    </div>
  )
}

export default ContactModal;