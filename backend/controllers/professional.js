const data = {
    professionalName: 'Nathan Birch',
    nameLink: {
      firstName: 'Nathan',
      url: 'https://nathanbirch.netlify.app/',
    },
    base64Image: '',
    firstName: 'Nathan',
    primaryDescription: 'is a professor at BYU-Idaho',
    workDescription1: 'He is a full-stack web developer and mobile application developer.',
    workDescription2: 'He teaches lots of programming and web development classes.',
    linkTitleText: 'Check out his work below',
    linkedInLink: {
      link: 'https://www.linkedin.com/in/nathantbirch/',
      text: 'LinkedIn'
    },
    githubLink: {
      link: 'https://github.com/nathanbirch',
      text: 'GitHub'
    },
    contactText: 'Feel free to contact him at birchn@byui.edu if youd like for him to work for you!'
}


exports.getData = (req, res, next) =>{
    res.status(200).json(data);
};