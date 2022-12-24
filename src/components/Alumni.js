import React from 'react'
import Icon from './Icon'
import "../style/alumni.css";

function Alumni() {
  return (
      <div className="alumni"> 
          <h3 className = "alumni-header"> 
            Theta Tau Alumni 
          </h3>
          <div className="alumni-container">
             <div className = "alumni-item">
                <Icon
                    image = "/alumni/Hari.JPG"
                    name = "Hariharan Chidambaram"
                    role = "Software Engineering Intern"
                    pc = "Psi Beta"
                    company = "InfinStor"
                    companyLink = "https://www.infinstor.com/"
                    link = "https://www.linkedin.com/in/hariharan-chidambaram/"
                />
             </div>
             <div className = "alumni-item">
              <Icon
                  image = "/alumni/Hari.JPG"
                  name = "Hariharan Chidambaram"
                  role = "Software Engineering Intern"
                  pc = "Psi Beta"
                  company = "InfinStor"
                  companyLink = "https://www.infinstor.com/"
                  link = "https://www.linkedin.com/in/hariharan-chidambaram/"
                />
            </div>
            <div className = "alumni-item">
              <Icon
                  image = "/alumni/Hari.JPG"
                  name = "Hariharan Chidambaram"
                  role = "Software Engineering Intern"
                  pc = "Psi Beta"
                  company = "InfinStor"
                  companyLink = "https://www.infinstor.com/"
                  link = "https://www.linkedin.com/in/hariharan-chidambaram/"
                />
            </div>
            </div>
      </div>
  );
}

export default Alumni;
