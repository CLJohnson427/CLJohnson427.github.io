<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Employment from './components/Employment.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  

  <header>
    <Navbar />
  </header>

  <main>
    <h2 class="section-title">Experience</h2>
    <!-- ERC Incorporated -->
    <Employment employerName="ERC Incorporated" employerWebsite="https://erc.us/" logoImagePath="/src/assets/Logos/ERC.png">
      <template v-slot:jobTitle>Software Engineer</template>
      <template v-slot:employmentLocation>Eglin Air Force Base, FL</template>
      <template v-slot:employmentDates>September 2019 - Present</template>
      <template v-slot:employmentDescription>
        <ul>
          <li>
            Provided support to the Air Force SEEK EAGLE Office (AFSEO) by participating as part of a disciplined
            software development team to generate software tools, user interfaces, utilities, and applications.
          </li>
          <li>
            Worked as a software developer on the AFSEO Compatibility Enterprise System (ACES) team to support
            the organization’s goal of providing evaluation of compatibility between aircraft and stores as well
            as technical advisory to other organizations.
          </li>
          <ul>
            <li>
              Acted as the SEEK EAGLE Request (SER) and Mass and Physical Properties (MaPP) project lead to work directly with stakeholders to gather
              requirements and utilize agile principles to quickly meet the needs of the customer.
            </li>
            <li>
              Worked as the lead developer to design, architect, and implement the Mass and Physical Properties (MaPP) module in ACES.
            </li>
            <li>
              Charged with leading tasking meetings to ensure that all team members had planned out their user stories for the new sprint or iteration.
            </li>
            <li>
              Navigated around challenges presented by the COVID-19 pandemic to ensure that MaPP was released to production on time.
            </li>
            <li>
              Awarded the <span class="italic">ERC Superior Performance Award</span> in August 2020 for my work on the
              Mass and Physical Properties (MaPP) module in ACES.
            </li>
            <li>
              Collaborated with other developers to analyze, estimate, design and implement features and user stories.
            </li>
            <li>
              Communicated with end users, customers, and other team members to implement, modify, or correct code.
            </li>
            <li>
              Developed code to meet established requirements as an individual and as part of a team.
            </li>
            <li>
              Peer reviewed fellow developer’s code and documentation to ensure it met the team’s quality standards and best practices.
            </li>
            <li>
              Participated in iteration planning meetings, daily stand ups, and technical coordination meetings for reporting issues,
              planning, designing, and providing status.
            </li>
            <li>
              Utilized tools to stay organized with team members such as Azure DevOps, MatterMost, and Microsoft Teams. 
            </li>
            <li>
              <span class="underline">Leveraged Knowledge</span> in ASP.NET (MVC, Web API), Entity Framework, C#, JavaScript, Vue.js, AJAX,
              HTML, CSS, SQL, MSTest, Azure DevOps, and debugging using Visual Studio and browser Developer Tools.
            </li>
          </ul>
          <li>
            Obtained a Department of Defense SECRET Security Clearance.
          </li>
        </ul>
      </template>
    </Employment>
    <!-- ACT Innovations -->
    <Employment employerName="ACT Innovations" employerWebsite="https://www.actinnovations.com/" logoImagePath="/src/assets/Logos/ACTInnovations.png">
      <template v-slot:jobTitle>Software Developer</template>
      <template v-slot:employmentLocation>Gulf Breeze, FL</template>
      <template v-slot:employmentDates>May 2016 - September 2019</template>
      <template v-slot:employmentDescription>
         <ul>
            <li>
              Spearheaded the development, testing, documentation, and code implementation of new and existing web applications.
            </li>
            <li>
              Worked as the Lead Developer for the company’s Drug Court Case Management (DCCM) web application, used by Drug Courts
              across the United States to track client progress through drug court.
            </li>
            <ul>
              <li>
                Communicated with clients to define business requirements for enhancement requests and reported issues.
              </li>
              <li>
                Created a REST API and Integration module to securely import data to and from 3rd party systems.
              </li>
              <li>
                Optimized the development and deployment process by unifying the DCCM codebase across all states.
              </li>
              <li>
                Redesigned the web application for functionality across all modern browsers, instead of only Internet Explorer.
              </li>
              <li>
                Utilized tools to stay organized with team members such as GitHub, Raygun, Zendesk, and Slack.
              </li>
              <li>
                <span class="underline">Leveraged Knowledge</span> in ASP.NET (WebForms, MVC, Web API, Core), C#, JavaScript, HTML, CSS, SQL, GitHub,
                and debugging using Visual Studio and browser Developer Tools.
              </li>
            </ul>
            <li>
              Collaborated in the development and maintenance of the company’s Drug Court Analysis System (DCAS),
              Best Practices Self-Assessment Tool (BEST), and Families In Need Of Services (FINS) applications.
            </li>
            <li>
              Created the company’s new corporate website using ASP.NET Core.
            </li>
            <li>
              Assisted in creating an improved Standard Operating Procedure for the company’s Ticket Management System as
              well as enhanced documentation procedures for our software.
            </li>
            <li>
              Complied with the Criminal Justice Information Services (CJIS) and Health Insurance Portability and Accountability Act (HIPAA)
              guidelines to secure and protect Personally Identifiable Information (PII) and Protected Health Information (PHI).
            </li>
        </ul>
      </template>
    </Employment>
  </main>
    
  <main>
    
    <!-- ACT Innovations -->
    <section id="act-section" class="card-container">
        <div class="card-image">
            <a href="https://www.actinnovations.com/" target="_blank">
                <img src="./assets/Logos/ACTInnovations.png" alt="ACT Innovations Logo" class="responsive-image">
            </a>
        </div>
        <div class="card-item card-header">
            <h3 class="card-title">ACT Innovations</h3>
            <hr>
            <div class="sub-header">
                <div class="bold">
                    Software Developer
                </div>
                <div class="bold">
                    Gulf Breeze, FL
                </div>
                <div class="bold">
                    May 2016 - September 2019
                </div>
            </div>
        </div>
        <div class="card-item card-main">
            <ul>
                <li>
                    Spearheaded the development, testing, documentation, and code implementation of new and existing web applications.
                </li>
                <li>
                    Worked as the Lead Developer for the company’s Drug Court Case Management (DCCM) web application, used by Drug Courts
                    across the United States to track client progress through drug court.
                </li>
                <ul>
                    <li>
                        Communicated with clients to define business requirements for enhancement requests and reported issues.
                    </li>
                    <li>
                        Created a REST API and Integration module to securely import data to and from 3rd party systems.
                    </li>
                    <li>
                        Optimized the development and deployment process by unifying the DCCM codebase across all states.
                    </li>
                    <li>
                        Redesigned the web application for functionality across all modern browsers, instead of only Internet Explorer.
                    </li>
                    <li>
                        Utilized tools to stay organized with team members such as GitHub, Raygun, Zendesk, and Slack.
                    </li>
                    <li>
                        <span class="underline">Leveraged Knowledge</span> in ASP.NET (WebForms, MVC, Web API, Core), C#, JavaScript, HTML, CSS, SQL, GitHub,
                        and debugging using Visual Studio and browser Developer Tools.
                    </li>
                </ul>
                <li>
                    Collaborated in the development and maintenance of the company’s Drug Court Analysis System (DCAS),
                    Best Practices Self-Assessment Tool (BEST), and Families In Need Of Services (FINS) applications.
                </li>
                <li>
                    Created the company’s new corporate website using ASP.NET Core.
                </li>
                <li>
                    Assisted in creating an improved Standard Operating Procedure for the company’s Ticket Management System as
                    well as enhanced documentation procedures for our software.
                </li>
                <li>
                    Complied with the Criminal Justice Information Services (CJIS) and Health Insurance Portability and Accountability Act (HIPAA)
                    guidelines to secure and protect Personally Identifiable Information (PII) and Protected Health Information (PHI).
                </li>
            </ul>
        </div>
    </section>
    <!-- Pearl River Technologies, LLC -->
    <section id="pearl-river-section" class="card-container">
        <div class="card-image">
            <a href="https://www.pearlrivertech.com/" target="_blank">
                <img src="./assets/Logos/PearlRiverTechnologies.jpg" alt="Pearl River Technologies Logo" class="responsive-image">
            </a>
        </div>
        <div class="card-item card-header">
            <h3 class="card-title">Pearl River Technologies, LLC</h3>
            <hr>
            <div class="sub-header">
                <div class="bold">
                    IT Support - Developer
                </div>
                <div class="bold">
                    Stennis Space Center, MS
                </div>
                <div class="bold">
                    June 2015 - August 2015
                </div>
            </div>
        </div>
        <div class="card-item card-main">
            <ul>
                <li>
                    Performed maintenance on various NASA Shared Services Center (NSSC) applications by working
                    NASA Service Requests (NSRs) and Incident Tickets.
                </li>
                <li>
                    Collaborated closely with team members and customers to develop solutions that satisfied
                    customer needs and NASA standards.
                </li>
                <li>
                    Created and modified application documentation such as System Overviews, Change Request Forms,
                    and Security Test and Evaluation (STE) forms.
                </li>
            </ul>
        </div>
    </section>
    <!-- Fort Sill Apache Industries, LLC -->
    <section id="fort-sill-apache-section" class="card-container">
        <div class="card-image">
            <a href="https://fortsillapache.com/" target="_blank">
                <img src="./assets/Logos/FortSillApacheIndustries.jpg" alt="Fort Sill Apache Industries Logo" class="responsive-image">
            </a>
        </div>
        <div class="card-item card-header">
            <h3 class="card-title">Fort Sill Apache Industries, LLC</h3>
            <hr>
            <div class="sub-header">
                <div class="bold">
                    IT Support - Quality Assurance
                </div>
                <div class="bold">
                    Stennis Space Center, MS
                </div>
                <div class="bold">
                    October 2013 - May 2015
                </div>
            </div>
        </div>
        <div class="card-item card-main">
            <ul>
                <li>
                    Tested new software releases for various NASA Shared Services Center (NSSC) applications.
                </li>
                <li>
                    Designed Test Cases and executed Test Runs to verify that new software performed accurately and reliably according
                    to documented requirements as well as established standards under both normal and abnormal conditions.
                </li>
                <li>
                    Created clear and concise bug reports.
                </li>
                <li>
                    Coordinated with the Development & Engineering Team by reporting bug incidents and verifying bug fixes.
                </li>
                <li>
                    Worked independently and in a group setting.
                </li>
                <li>
                    Administrator for the TestTrack Testing Suite.
                </li>
            </ul>
        </div>
    </section>
    <!-- Education -->
    <h2 class="section-title">Education</h2>
    <!-- University of Southern Mississippi -->
    <section id="usm-section" class="card-container">
        <div class="card-image">
            <a href="https://www.usm.edu/" target="_blank">
                <img src="./assets/Logos/USM.png" alt="University of Southern Mississippi Logo" class="responsive-image">
            </a>
        </div>
        <div class="card-item card-header">
            <h3 class="card-title">University of Southern Mississippi</h3>
            <hr>
            <div class="sub-header">
                <div class="bold">
                    Bachelor of Science in Computer Science
                </div>
                <div class="bold">
                    Grade Point Average: 3.8
                </div>
                <div class="bold">
                    Graduated in May 2015
                </div>
            </div>
        </div>
        <div class="card-item card-main">
            <p>
                <span class="bold">Relevant Coursework:</span> Software Engineering I/II, Relational Database Management Systems, Data Structures and Algorithm Analysis,
                Operating Systems and Computer Architecture, Object Oriented Programming, Organization of Programming Languages
            </p>
        </div>
    </section>
  </main>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

/******************************************************************************
    Style Reset, Themes, Variables, and Font Styles.
/*****************************************************************************/
body, p, a, ul, li {
    margin: 0;
    padding: 0;
    text-decoration: none;
}
*, *::before, *::after {
    box-sizing: border-box;
}
body {
    max-width: 1200px;
    margin: 0px auto;
    padding: 0rem 1rem;
    background-color: var(--primary-background);
    color: var(--primary-font-color);
}

/**********************************************************
    Themes & Variables
/*********************************************************/
:root {
    --primary-background: #fff;
    --secondary-background: #fff;
    --primary-icon-color: #212121;
    --image-background: #fff;
    --primary-font-color: #212121;
    --secondary-font-color: #717171;
    --active-font-color: #3f3f3f;
    --accent-color: #e6e9ed;
}
:root.dark-theme {
    --primary-background: #18202f;
    --secondary-background: #283245;
    --primary-icon-color: #fbfbfb;
    --image-background: #fff;
    --primary-font-color: #fbfbfb;
    --secondary-font-color: #c8c8c8;
    --active-font-color: #e3e3e3;
    --accent-color: #00b3f4;
}

/**********************************************************
    Font Styles
/*********************************************************/
html {
    line-height: 1.5;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-weight: normal;
    font-size: 15px;
}
.bold {
    font-weight: bold;
}
.italic {
    font-style: italic;
}
.underline {
    text-decoration: underline;
}

/******************************************************************************
    Animation
/*****************************************************************************/
* {
    /* Transition when switching betweem Light/Dark Themes. */
    transition: background-color 0.5s ease, color 0.5s ease;
}

.section-visible div {
    animation: fadeIn ease 1s;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

/******************************************************************************
    Mobile Styles
/*****************************************************************************/
/**********************************************************
    Navbar
/*********************************************************/
.navbar {
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem
}
.navbar .nav-title {
    display: flex;
    justify-content: center;
    width: 100%;
}
.navbar .nav-icons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--primary-icon-color);
    padding: 0.5rem;
    width: 100%;
}
.navbar .nav-icons a {
    text-decoration: none;
    text-align: center;
    color: var(--primary-icon-color);
    display: flex;
}
.navbar .nav-icon {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0rem 0.5rem;
}
.navbar .nav-icon:hover {
    cursor: pointer;
}
.navbar .nav-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style: none;
    width: 100%
}
.navbar .nav-links a {
    text-decoration: none;
    text-align: center;
    color: var(--secondary-font-color);
    display: flex;
    padding: 0.5rem;
}
.navbar .nav-links a:hover {
    color: var(--active-font-color);
}

/**********************************************************
    Section Title
/*********************************************************/
.section-title {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    border-bottom: 0.1rem solid var(--secondary-font-color);
}

/**********************************************************
    Card Containers
/*********************************************************/
.card-container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(4, minmax(1rem, auto));
    margin: 3rem 0rem;
    padding: 2.5rem 2rem;
    background-color: var(--secondary-background);
    box-shadow: 0px 3px 10px 0 rgba(0, 0, 0, 0.4);
    border-radius: 0.5rem;
}
.card-item {
    padding: 0.75rem;
}
.card-image {
    grid-column: 1 / 13;
    grid-row: 1 / 2;
    align-self: center;
    justify-self: center;
    background-color: var(--image-background);
    padding: 0.5rem;
}
.card-header {
    grid-column: 1 / 13;
    grid-row: 2 / 3;
    text-align: center;
    background-color: var(--secondary-background);
}
/* .card-title {
    padding-bottom: 0.5rem;
    border-bottom: solid 2px var(--accent-color);
} */
.sub-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0.5rem;
}
.sub-header div {
    padding: 0.25rem;
}
.card-main {
    grid-column: 1 / 13;
    grid-row: 3 / 5;
    background-color: var(--secondary-background);
}
.card-main ul {
    padding-left: 1.25rem;
    list-style-position: inside;
    border-left: solid 2px var(--accent-color);
}

/**********************************************************
    Images
/*********************************************************/
.responsive-image {
    max-width: 100%;
    height: auto;
}

/******************************************************************************
    Large Tablets, Laptops, and Desktop Styles
/*****************************************************************************/
@media screen and (min-width: 960px) {
    /**********************************************************
        Navbar
    /*********************************************************/
    .navbar .nav-title {
        width: 90%;
    }
    .navbar .nav-icons {
        width: 10%;
    }
    /**********************************************************
        Section Title
    /*********************************************************/
    .section-title {
        justify-content: flex-start;
    }

    /**********************************************************
        Card Containers
    /*********************************************************/
    .card-image {
        grid-column: 1 / 3;
        grid-row: 1 / 5;
    }
    .card-header {
        grid-column: 3 / 13;
        grid-row: 1 / 2;
    }
    .card-main {
        grid-column: 3 / 13;
        grid-row: 2 / 5;
    }
}
</style>
