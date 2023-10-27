const data = {
    professionalName: 'Reagan Houser-Smith',
    nameLink: {
      firstName: 'Reagan',
      url: 'https://nathanbirch.netlify.app/',
    },
    base64Image: '',
    firstName: 'Reagan',
    primaryDescription: 'is a student at BYU-Idaho',
    workDescription1: 'She is a full-stack web developer',
    workDescription2: 'She is a teachers assistant for WDD230',
    linkTitleText: 'Check out her work below',
    linkedInLink: {
      link: 'https://www.linkedin.com/in/reagan-houser/',
      text: 'LinkedIn'
    },
    githubLink: {
      link: 'https://github.com/reaganhsmith',
      text: 'GitHub'
    },
    contactText: 'Feel free to contact her at reagansmith@byui.edu if youd like for him to work for you!'
}


exports.getData = (req, res) =>{
    res.status(200).json(data);
};