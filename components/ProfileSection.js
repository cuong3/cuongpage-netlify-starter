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
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const BioText = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
`;

function ProfileSection() {
  return (
    <Intro>
    <ProfileImage src="/avatar.jpg" alt="Your Name" />
    <Bio>
      <Heading>Hello! I'm [Your Name]</Heading>
      <Subheading>I'm a [Your Profession]</Subheading>
      <BioText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra, eros non euismod varius, metus ligula
        condimentum nisl, a eleifend nibh mauris ac leo. Duis vel eros sit amet velit blandit efficitur a sit amet
        enim. Vestibulum venenatis, nisi non tincidunt rutrum, dolor ligula facilisis ex, eu tincidunt elit nunc ut elit.
      </BioText>
    </Bio>
  </Intro>
  );
}

export default ProfileSection;