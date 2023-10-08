import styled from 'styled-components';
import PublicationItem from './PublicationItem';

const Publications = styled.section`
  padding: 2rem 0; // Reduced top padding for closer proximity to Intro
  margin-top: 2rem; // Less vertical spacing between Intro and Publications
`;


function PublicationList() {
  return (
    <Publications>
      <h2>Publications</h2>
      <PublicationItem
        imageUrl="/papers/vremiere.png"
        title="Publication 1 Title Publication 1 Title Publication 1 Title Publication 1 Title"
        authors="John Doe, Jane Smith, [Your Name]"
        conference="Proceedings of the XYZ Conference 2023"
        link="https://dl.acm.org/doi/sample1"
      />
      <PublicationItem
        imageUrl="/path-to-thumbnail2.jpg"
        title="Publication 2 Title"
        authors="Michael Jackson, [Your Name]"
        conference="Proceedings of the ABC Symposium 2022"
        link="https://dl.acm.org/doi/sample2"
      />
    </Publications>
  );
}

export default PublicationList;