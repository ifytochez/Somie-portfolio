import React from 'react'
import './CashietCaseStudy.css'
import MacBook from "./MacBook.png"
import Rectangle from "./Rectangle.png"
import Desktop1 from "./Desktop1.png"
import Desktop2 from "./Desktop2.png"
import Desktop3 from "./Desktop3.png"
import Desktop4 from "./Desktop4.png"
import Desktop5 from "./Desktop5.png"
import Group107 from "./Group107.png"
import Group679 from "./Group679.png"
import Edit1 from "./Edit1.png"
import Vector from "./Vector.png"
function CashietCaseStudy() {
  return (
    <div className='cashietcasestudy'>
      <div className='casestudyhero'>
          <img src={MacBook} alt="macbook"/>
      </div>

      <div className='casestudycontainer'>
            <div className='borderless'>
              <h2>Borderless: </h2>
              <p>Reinventing job search experinces and encouraging Easy and Seamless job application.</p>


              <div className='borderless1'>

                  <div>
                    <h3 className='borderless1h3'>Role</h3>
                    <p>User Experience (UX) Designer</p>
                    <p>User Interface (UI) Designer</p>
                    <p>Interaction Designer</p>
                  </div>


                  <div>
                    <h3 className='borderless1h3'>Duration</h3>
                    <p>6 Weeks</p>
                  </div>


                  <div>
                    <h3 className='borderless1h3'>Team</h3>
                    <p>I worked with another designer</p>
                  </div>
                  </div>
            </div>

           

            <div className='borderless'>
                  <h2>Setting the stage</h2>
                  <p>The pandemic has undoubtedly accelerated the tech talent demand, as just about every industry
                     had to pivot to remote and virtual ways of doing business quickly. Technology recruitment raises 
                     challenges for employers, unlike most industries. Borderless is trying to bridge that gap by 
                     creating a talent network connecting innovative companies with skilled engineers.
                  </p>
            </div>

            <div className='borderless'>
                  <h2>The problem</h2>
                  <p>According to the stakeholders, the initial problem was to solve the problem of incomplete 
                    profiles. More than 50% of the tech talents that signed up on the platform had incomplete
                     profiles, making it difficult for talents to get matched to businesses, defeating the company's 
                    primary purpose.Even after follow-up emails, the percentage of incomplete profiles did not 
                    improve. This led to an important question:
                  </p>
            </div>

            <div className='borderless2'>
                <img src={Vector} alt="macbook"/>
                <div className='centered'> <p>How might we  enhance the profile-creating <br></br> process for candidates?</p></div>
                
            </div>

            <div className='borderless'>
                <h2>Problem Diagnosis</h2>
                <p>My research first centered around understanding the experiences of the people currently 
                  using the web app, issues they are facing, and why they have not incomplete profiles. 
                  I formulated questions for an online survey that 28 people answered. Here are some of the responses;
                </p>

                <div className='borderless3'>
                     <button>An overwhelming long-form requesting for details contained in the resume</button>
                     <button>Uncertainty or lack of communication after applying for a job</button>
                     <button>Unaware of the hiring process.</button>
                </div>

                <div className='borderless4'>
                      <div className='vertical'></div>
                      <p>One of the statements that stood out was: “ Uploading my resume and having to 
                        fill out details already contained in it is a redundant profile creating process.”
                      </p>
                </div>

                <p>The second phase of the research was aimed at identifying information that would be helpful 
                  to businesses in determining the right candidate. I conducted one-on-one interviews with 12
                   business executives in charge of recruitment. I asked how they currently recruit candidates
                    and the information necessary for moving a candidate to the subsequent recruitment stage.
                </p>
            </div>

            <div className='borderless'>
                    <h2>Results of Problem Diagnosis</h2>
                    <p>Based on the responses received, we segmented our users into two groups: tech talents 
                      looking for jobs and businesses looking to hire tech talents. We also broke down the 
                      users by their attributes, pain points, motivations, goals, and responsibilities.
                    </p>

                    <div className='rectangles'>
                        <img src={Rectangle} alt="rectangle"/>
                        <img src={Rectangle} className='rec' alt="rectangle"/>
                    </div>

                    <p>This helps us gauge user needs, and pain points felt by tech talents and understand the needs 
                      of businesses. These insights included: simplifying the profile creation process, introducing 
                      a feedback channel, and getting more details not contained in talent's resume. 
                    </p>
            </div>

            <div className='borderless'>
                <h2>Design Solution</h2>
                <p>After analyzing and synthesizing the data from the research, understanding users’ pain 
                  points, creating user persona, journey map, and brainstorming on the best solutions, 
                  I strategically started to solve identified problems.
                </p>
                <h5>-Seamless proflie creation.</h5>
                <p>Candidate resumes did not contain relevant details needed to match them to businesses; 
                  hence long forms were used. To achieve a seamless profile creation experience, I needed 
                  to come up with a flow that is easy and collects the user's required data. I streamlined
                    the entire flow into successive steps as the user progressed through the application:

                    <ul className='unodered-list'>
                      <li>Sign in/up through Linkedin or Google</li>
                      <li>Upload your resume/Linkedin profile</li>
                      <li>Details gotten from resume/Linkedin is prefilled</li>
                      <li>Fill in the missing details</li>
                    </ul>
                </p>
     
            </div>

            <div className='borderless5'>
                  <div className='borderless5a'>
                          <img src={Desktop1} alt="Desktop"/>
                          <img src={Desktop2} className='pic' alt="Desktop"/>
                  </div>
           </div>

           <div className='borderless5'>
              <div className='borderless5a'>
                      <img src={Desktop3} alt="Desktop"/>
                      <img src={Desktop4} className='pic' alt="Desktop"/>
              </div>
           </div>

           <div className='borderless6'>
             <div className='borderless6a'>
               <h5>Recuitment Process Visibilty</h5>
               <p>The visibility of system status remains among the most important and universally applicable 
                 principles in user-interface design. The goal is to provide the user with feedback about what 
                 is happening with the system or interface within a reasonable amount of time and bridge the 
                 gulf of evaluation between the user and the system. 
              </p>
             </div>

             <div className='borderless6b'>
                <img src={Desktop5} alt="Desktop"/>
             </div>
           </div>

           <div className='borderless7'>
             <div className='borderless7a'>
               <h1>End to end design</h1>
             </div>
            

             <div className='borderless7b'>
                 <img src={Group107} alt="group"/>
             </div>

             <div className='borderless7c'>
                 <img src={Group679} alt="group"/>
             </div>
           </div>

           <div className='borderless borderless8'>
                <h2>Validating Design Solution with User Testing</h2>
                <p>I led a few moderated usability tests with tech talents. We tried to find out;</p>

                <ol type="a">
                  <li> How easy and long it took to create a profile.</li>
                  <li> Iff the syncing of data from their resume or LinkedIn before filling out 
                    missing necessary information solved the problem overwhelming profile creation.
                </li>
                  <li>If the easy apply feature eased the process of reapplying for jobs</li>
                  <li> If the recuitment process feature instilled more trust and served as feedback channel.</li>
              </ol>
           </div>
      </div>

      <div className='casestudycontainer2'>
          <div className='literation'>
              <h2>Design Iteration</h2>
              <p>After the user testing we got helpful feedbacks on how we can improve the user experience.
              </p>

              <div className='literation1'>
                 <div className='literation-writeup'>
                     <h5>Before user testing</h5>
                     <p>You would have to get to the last section before submitting to ensure no field is left empty.
                    </p>
                 </div>
                 <div className='literation-picture'>
                      <img src={Edit1} alt="macbook"/>
                 </div>
              </div>

              <div className='literation1'>
                <div className='literation-picture'>
                      <img src={Edit1} alt="macbook"/>
                 </div>

                 <div className='literation-writeup'>
                     <h5>After user testing</h5>
                     <p>A finish button was introduced so users and summit from any page but maybe inactive to ensure no field is left empty.
                    </p>
                 </div>
                 
              </div>


              <div className='literation1'>
                <div className='literation-picture'>
                      <img src={Edit1} alt="macbook"/>
                 </div>

                 <div className='literation-writeup'>
                     <h5>Before user testing</h5>
                     <p>Recruitment stage looked clickable but is supposed to be an indicator
                    </p>
                 </div>
                 
              </div>

              <div className='literation1'>
                <div className='literation-picture'>
                      <img src={Edit1} alt="macbook"/>
                 </div>

                 <div className='literation-writeup'>
                     <h5>After user testing</h5>
                     <p>Recruitment stage looked clickable but is supposed to be an indicator
                    </p>
                 </div>
                 
              </div>
          </div>
      </div>

      <div className='casestudycontainer3'>

        <div className='literation'>
            <h2 className='key'>Key learning</h2>

              <ol type="a">
                      <li> In making forms more user-friendly and less overwhelming, 
                        I grouped the questions into sections, made location visible and introduced a progress indicator.
                      </li>
                      <li>  Testing my desiging soluions as a way to not only validate decisions but also to get constant feedback 
                        and also to confirm that my soluions are actually solving the problem.
                    </li>
                      <li>Design soluions should not </li>
                      <li>If the shop profile instilled more trust and loyalty to the products sold by the sellers</li>
              </ol>

              <h5>View prototype <span> here </span></h5>
              <p><span>Admin dashboard:</span> I also worked on the admin dashboard but unfortunately my non-disclosure clause prevents me from sharing it.</p>
        </div>
          
      </div>
    </div>
  )
}

export default CashietCaseStudy

