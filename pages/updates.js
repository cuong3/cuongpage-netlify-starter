import Layout from '../components/Layout';
import styled from 'styled-components';

const UpdateSection = styled.section`
  display: block;
  justify-content: space-between;
  align-items: left;
  padding: 4rem 0;
`;
const UpdateTexts = styled.p`
  padding: 1rem 0;
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: left;
`;


function Updates() {
  return (
    <Layout>
      <h1>Updates</h1>
      <UpdateSection>

      <UpdateTexts>
      <b>2024</b><br/>
      - Serving as AC for ACM UIST 2024.<br/>
      - Attending CHI 2024 (Honolulu) and UIST 2024 (Pittsburgh). Feel free to say hi! 👋<br/>
      </UpdateTexts>

      <UpdateTexts>
      <b>2023</b><br/>
      - Published 7 new papers. Started exploring new research related to content-aware motion graphics authoring and using LLM to empower VR/AR authoring.<br/>
      - Shipped face-aware video captioning to Adobe Express <a href='https://www.adobe.com/express/feature/video/add-caption' target='_blank'>https://www.adobe.com/express/feature/video/add-caption</a>.
      </UpdateTexts>

      <UpdateTexts>
      <b>2021</b><br/>
      Invited to speak at various graduate level HCI & computational video classes at University of British Columbia (from Prof. Dongwook Yoon), Yale University (from Prof. Julie Dorsey), and Portland State Universit (from my former PhD advisor Prof. Feng Liu). Talk titled "On-device creative authoring for virtual and augmented reality".<br/>
      </UpdateTexts>

      <UpdateTexts>
      <b>2018 - 2020</b><br/>
      - Served as AC for the CHI 2020 Engineering Interactive Systems and Technologies subcommittee.<br/>
      - Demoed our latest AR research <a href='https://www.youtube.com/watch?v=5QsvjrbKeI4' target='_blank'>#ProjectPronto</a> at Adobe Max 2019.<br/>
      - Shipped VR/360 video editing features to Adobe Premiere and After Effects (<a href='https://vrscout.com/news/adobe-launches-immersive-360-editing-improves-plane-to-sphere/' target='_blank'>vrscout news</a>).<br/>
      - Invited to speak at UC Berkeley and Stanford University (November 2018). Talk titled "Designing In-Headset Authoring Tools for Virtual Reality Video". <br/>

      </UpdateTexts>

      </UpdateSection>

    </Layout>
  );
}

export default Updates;
