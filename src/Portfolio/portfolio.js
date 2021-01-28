import emoji from 'react-easy-emoji'
import 'font-awesome/css/font-awesome.min.css';
import { Description } from '@material-ui/icons';
const greeting = {
    username : 'Bhubesh',
    title : emoji("👋 Hey Folks! , I'm Bhubesh "),
    subTitle : emoji('An OverWhelming FrontEnd Developer 🚀 Python Developer 😍 and Data Science Experience with Javascript / ReactJs / NodeJs / Firebase / Python / Data Science and with Some Cool Stuffs!  '),
    resumeLink : 'https://drive.google.com/file/d/1SOQgeetumqhV-dAX_Doe8xK1-NQgFQUJ/view?usp=sharing'
}


// const socialMediaLinks = {
//     github = 'https://github.com/bhubesh757',
//     linkedin: 'https://www.linkedin.com/in/saadpasta/',
//     gmail: 'saadpasta70@gmail.com',
//      gitlab: 'https://gitlab.com/saadpasta',
//     facebook: 'https://www.facebook.com/saad.pasta7',
//     instagram : 'https://www.instagram.com/dev_sr_/?hl=en',
//     twitter : 'https://twitter.com/explore/tabs/trending',
//     display: true, // Set true to display this section, defaults to false

// }

const skillPage = {
    display: true, 
    title : 'What Skills I Have ?',
    subTitle : emoji('MAD ON CODING STUFFS! TO EXPLORE COOL AND JUICY CODING SKILLS{TECH LOVE :`💛`}'),
    skills: [
        emoji(
          '🚀 Develop highly interactive Front end / User Interfaces for your web and mobile applications using React js and React Native'
        ),
        emoji('🚀 Develop Backend Using Python and Firebase!!'),
      ],

      softwareSkills: [
        {
          skillName: 'html-5',
          src :"https://img.icons8.com/dusk/64/000000/html-5.png"
        },
        {
          skillName: 'css3',
          src:"https://img.icons8.com/dusk/64/000000/css3.png"
        },
       
        {
          skillName: 'JavaScript',
          src:"https://img.icons8.com/color/48/000000/javascript.png"
        },
        {
          skillName: 'reactjs',
          src:"https://img.icons8.com/dusk/64/000000/react.png"
        },
        {
          skillName: 'react-Native',
          src:"https://img.icons8.com/cute-clipart/64/000000/react-native.png"
        },
        {
          skillName: 'nodejs',
          src:"https://img.icons8.com/windows/32/000000/node-js.png"
        },
        
        {
          skillName: 'npm',
          src:"https://img.icons8.com/color/48/000000/npm.png"
        },
        {
          skillName: 'Linux',
           src:"https://img.icons8.com/dusk/64/000000/linux.png"
        },
        {
          skillName: 'Material-ui',
          src : "https://img.icons8.com/color/48/000000/material-ui.png",
        },
        {
          skillName: 'firebase',
          src:"https://img.icons8.com/color/48/000000/firebase.png"
        },
        {
          skillName: 'python',
          src : 'https://img.icons8.com/nolan/64/python.png'
        },
        {
          skillName: 'c',
          src:"https://img.icons8.com/color/48/000000/c-programming.png"
        },
        {
          skillName: 'Java',
          src:"https://img.icons8.com/dusk/64/000000/java-coffee-cup-logo.png"
        },
      ],
}


// icons



const illustration = {
    animated : true,
}




// certification

const achievementSection = {
  title: emoji('Certifications 🏆  And Swags 🔥 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Cloud Program',
      image : "Google_Cloud.gif",
      subtitle:
        'I got a Chance to learn cloud in Google , Got a cloud Experience completed 12 Quests ' ,
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/1CvOwMJgaiHaCo3qlbKB8T5bocDUX42hC/view?usp=sharing',
        },
        {
          name: 'QwikLabs Profile',
          url:
            'https://www.qwiklabs.com/public_profiles/580f7ac0-c65c-4b90-92f6-c013a1ff5d37',
        },
      ],

      // pictureLink : [
      //   {
      //     className : 'google',
      //     url : 'https://i.pinimg.com/originals/b7/41/21/b741215d216b11b8ff17f27f4bff2a9d.gif'
      //   },
      //   {
      //     className : 'google',
      //     url : 'https://i.pinimg.com/originals/b7/41/21/b741215d216b11b8ff17f27f4bff2a9d.gif'
      //   }
      // ]
    },
    {
      title: 'Artificial Intelligence and Machine Learning',
      subtitle:
        ' Exploratory Data Analytics | Supervised  Algorithm | Ensemble Techniques | Deep Learning ',
      image:'',
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/1v8fBgr10RWZgyNzBd6-jCsuOER8MkjaX/view?usp=sharing',
        },
        
        {
          name: 'LetsUpgrade',
          url:
            'https://letsupgrade.in/',
        },
      ],
    },
    {
      title: 'ICSI | CNSS Certified Network Security Specialist',
      subtitle:
        'Network Security ',
      image: '',
      footerLink: [
        {
          name: 'ICSI | Certification',
          url:
            'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/19094355',
        },
      ],
    },

    {
      title: 'CODE ARENA : Coding Ninjas',
      subtitle: 'Data Structures Coding Competition',
      image: '',
      footerLink: [
        { name: 'Certification', url: 'https://ninjasfiles.s3.amazonaws.com/certificate_of_event_code_arena_jecrc_vs_skit_-4397540602566899213_1264385.pdf?utm_source=sendinblue&utm_campaign=Coding_Event_certificate_template_5&utm_medium=email' },
      ],
    },
    {
      title: 'Data visualization using python',
      subtitle: 'Bar Chart Data Visualization | Time Series | Box Plot | Map Data | Race Chart',
      image: '',
      footerLink: [
        { name: 'Certification', url: 'https://olympus1.greatlearning.in/course_certificate/KQSYPKKT' },
      ],
    },
    {
      title: 'Data structures and Algorithms',
      subtitle: 'Algorithms',
      image: '',
      footerLink: [
        { name: 'Certification', url: 'https://bi-uploads.s3.ap-south-1.amazonaws.com/user/certificates/BI-2007136572463/certificate.pdf' },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};


// contact

const contactInfo = {
  title : emoji('Contact Me ☎ '),
  subtitle : 'To Collborate or To Say just Hi!! I can Do a Favour! Mine inbox is Open ',
  number : '+91 8072782437',
  emailAddress : 'bhuebesh2k19@gmail.com'
}


//Experience

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Data Analyst',
      company: 'Widhya',
      companylogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5CoAJEjl9Ydh8Jffhc9p2pFdtFNmmdTMOw&usqp=CAU',
      date: ' 2019 Oct -  Nov ',
      desc:
        'Data Analytics Internship',
      descBullets: [
        'Wonderful Experirnce To Work with the Team Members',
        'Learnt Many New Stuffs from Data Science Topics ,It Gives me the Confidence To move Further',
      ],
    },
    {
      role: 'Machine Learning',
      company: 'Sparks Foundation',
      companylogo: 'data:image/png;base64,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',
      date: 'Aug 2019 – Oct 2019',
      desc:
        'Machine Learning Intern , It was a Awesome Experience with Sparks Foundation ; I Learnt Machine Learning Algorithms with Hands on Practice',
    },
    {
      role: 'Business Analyst ',
      company: 'Internshala',
      companylogo: 'https://images.yourstory.com/cs/images/companies/925769318s-1585754058054.png?fm=png&auto=formatar=1:1&mode=fill&fill=solid',
      date: 'Sep 2019 – Oct 2019',
      desc:
        'Helps me to Develop the Speaking Skills and also it makes me to connect with others , creates a Self Confidence Towards Others',
    },
  ],
};

// projects

const projectsHeader = {
  display: true, 
  title : 'projects',
  description : "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
}
export {
  greeting,
  illustration,
  skillPage,
  achievementSection,
  contactInfo,
  workExperiences,
  projectsHeader
}