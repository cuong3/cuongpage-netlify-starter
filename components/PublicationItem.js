import styled from 'styled-components';

const Publication = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const PublicationInfo = styled.div`
  flex: 1;
`;

const PublicationTitle = styled.a`
  font-size: 1.4rem;
  color: #0070f3;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #0050a3;
  }
`;

const Authors = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0;
`;

const Conference = styled.p`
  font-size: 1.0rem;
  font-style: italic;
  color: #444;
`;

const Thumbnail = styled.img`
  width: 200px;
  height: 100%;
  margin-right: 1.5rem;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


function PublicationItem({ imageUrl, title, authors, conference, link }) {
  return (
    <Publication>
      <Thumbnail src={imageUrl} alt={title} />
      <PublicationInfo>
        <PublicationTitle href={link} target="_blank">{title}</PublicationTitle>
        <Authors>{authors}</Authors>
        <Conference>{conference}</Conference>
      </PublicationInfo>
    </Publication>
  );
}

export default PublicationItem;