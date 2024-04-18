import styled from 'styled-components';

const Intro = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
`;

const ProfileImage = styled.img`
  max-width: 22%;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Bio = styled.div`
  width: 70%;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subheading = styled.h2`
  font-size: 2.0rem;
  margin-bottom: 1rem;
`;

const BioText = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
`;

function ProfileSection() {
  return (
    <Intro>
    <ProfileImage src="/avatar.jpg" alt="Your Name" />
    <Bio>
      <Heading>Hello! I'm Cuong 👋</Heading>
      <Subheading>
        <a href="/CV_9_2023.pdf" target="_blank"><img src="/iconcv.png" alt="CV" height="32" /> </a>
        <a href="https://twitter.com/gnouc_" target="_blank"><img src="/icontwitter.png" alt="Twitter" height="32" /> </a>
        <a href="https://www.linkedin.com/in/cuongnguyenduy/" target="_blank"><img src="/iconlinkedin.png" alt="LinkedIn" height="32" /> </a>
        <a href="n.cuongg@gmail.com" target="_blank"><img src="/iconemail.png" alt="Email" height="32" /> </a>
      </Subheading>
      <BioText>
        I’m a senior research scientist at <a href='https://research.adobe.com/person/cuong-nguyen/' target="_blank">Adobe Research</a>, San Francisco, California.  My research lies at the intersection of Human-Computer Interaction (HCI) and various creative domains such as virtual and augmented reality (VR/AR), video editing, and 3D design.
      </BioText>
      <BioText>
        The core theme in my work is to understand how we can leverage the power of immersive and AI technologies to help people create and collaborate more effectively. I enjoy building delightful authoring experiences driven by machine learning and computer vision, and studying how these technologies can be used to augment human creativity.
      </BioText>
      <BioText>
        I received my PhD in Computer Science in 2017. I was advised by Professor <a href='http://web.cecs.pdx.edu/~fliu/' target='_blank'>Feng Liu</a> in the Computer Graphics & Vision Lab at Portland State University. My research has received Best Paper Honorable Mention awards at ACM CHI 2013, 2015, and 2017. Some of these work were shown at Adobe MAX Sneaks <a href='https://www.youtube.com/watch?v=tFkJXwH1VTE' target="_blank">2017</a> and <a href='https://www.youtube.com/watch?v=5QsvjrbKeI4' target='_blank'>2019</a>. My PhD’s dissertation explores 360 degree video authoring tools in VR. I helped ship some parts of this work into <a href='https://helpx.adobe.com/premiere-pro/using/immersive-video.html' target='_blank'>Adobe Premiere and After Effects</a>.
      </BioText>
    </Bio>
  </Intro>
  );
}

export default ProfileSection;