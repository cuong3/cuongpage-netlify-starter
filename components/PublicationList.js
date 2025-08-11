import styled from 'styled-components';
import PublicationItem from './PublicationItem';

const Publications = styled.section`
  padding: 2rem 0; // Reduced top padding for closer proximity to Intro
  margin-top: 2rem; // Less vertical spacing between Intro and Publications
`;

const PublicationYear = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;



function PublicationList() {
  return (
    <Publications>
      <h2 id="navigation-publications">Tech Transfer</h2>
      <div>Some of my research has contributed to the following product features. I enjoy working closely with product teams to address unique customer problems, explore untapped data opportunities, and drive AI/HCI technology transfer. I find it deeply rewarding to see research translated into real-world products that impact millions of users.
      </div><br></br>
      <div>2024. Animate All: Auto animate design documents. (Adobe Express, <a href='https://research.adobe.com/news/ai-and-human-touch-in-adobe-express-animate-all/' target='_blank'>article</a>, <a href='https://helpx.adobe.com/express/add-effects-to-your-designs/add-animations/animate-design.html' target='_blank'>feature</a>).
      </div>

      <div>2023. Face-aware video captioning. (Adobe Express, <a href='https://research.adobe.com/news/content-aware-video-captioning-in-adobe-express/' target='_blank'>article</a>, <a href='https://www.adobe.com/express/feature/video/add-caption' target='_blank'>feature</a>).</div>

      <div>2018. 360 video editing in VR. (Adobe Premiere and After Effects, <a href='https://helpx.adobe.com/premiere-pro/using/immersive-video.html' target='_blank'>feature</a>).</div>



      <h2 id="navigation-publications">Publications</h2>
      <PublicationYear>2024</PublicationYear>
      <PublicationItem
        imageUrl="/papers/memovis.jpeg"
        title="MemoVis: A GenAI-Powered Tool for Creating Companion Reference Images for 3D Design Feedback"
        authors="Chen Chen, Cuong Nguyen, Thibault Groueix, Vladimir G. Kim, Nadir Weibel"
        conference="ACM TOCHI. Presented at UIST 2024."
        link="https://doi.org/10.1145/3694681"
      />

      <PublicationYear>2023</PublicationYear>
      <PublicationItem
        imageUrl="/papers/papertoplace.jpeg"
        title="PaperToPlace: Transforming Instruction Documents into Spatialized and Context-Aware Mixed
        Reality Experiences"
        authors="Chen Chen, Cuong Nguyen, Jane Hoffswell, Jennifer Healey, Trung Bui, Nadir Weibel"
        conference="In Proceedings of UIST 2023"
        link="https://arxiv.org/abs/2308.13924v1"
      />
      <PublicationItem
        imageUrl="/papers/gesturecanvas.jpeg"
        title="GestureCanvas: Prototyping Compound Freehand Interaction in VR through Programming by
        Demonstration"
        authors="Anika Sayara, Emily Lynn Chen, Cuong Nguyen, Robert Xiao, Dongwook Yoon"
        conference="In Proceedings of UIST 2023"
        link=""
      />
      <PublicationItem
        imageUrl="/papers/posevec.jpeg"
        title="PoseVEC: Authoring Adaptive Pose-aware Effects Using Visual Programming and Demonstrations"
        authors="Yongqi Zhang, Cuong Nguyen, Rubaiat Habib Kazi, Lap-Fai Yu"
        conference="In Proceedings of UIST 2023"
        link="https://yqz530.github.io/arlens.html"
      />
      <PublicationItem
        imageUrl="/papers/videodoodle.jpeg"
        title="VideoDoodles: Hand-Drawn Animations on Videos with Scene-Aware Canvases"
        authors="Emilie Yu, Kevin Blackburn-Matzen, Cuong Nguyen, Oliver Wang, Rubaiat Habib Kazi, Adrien Bousseau"
        conference="In Proceedings of ACM Transactions on Graphics (SIGGRAPH) 2023"
        link="https://em-yu.github.io/research/videodoodles/"
      />
      <PublicationItem
        imageUrl="/papers/pointshopar.jpeg"
        title="PointShopAR: Supporting Environmental Design Prototyping Using Point Cloud in Augmented
        Reality"
        authors="Zeyu Wang, Cuong Nguyen, Paul Asente, Julie Dorsey"
        conference="In Proceedings of CHI 2023"
        link="https://dl.acm.org/doi/abs/10.1145/3544548.3580776"
      />
      <PublicationItem
        imageUrl="/papers/PLACEHOLDER.jpeg"
        title="Using Online Videos as the Basis for Developing Design Guidelines: A Case Study of AR-based Assembly Instructions"
        authors="Niu Chen, Frances Sin, Laura Herman, Ivan Song, Dongwook Yoon"
        conference="In Proceedings of ISS 2023"
        link=""
      />
      <PublicationItem
        imageUrl="/papers/warpy.jpeg"
        title="Warpy: Contextual and Multi-view Indirect 3D Curve Sketching in Augmented Reality"
        authors="Rawan Alghofaili, Cuong Nguyen, Vojtch Krs, Nathan Carr, Radomir Mech, Lap-Fai Yu"
        conference="In Proceedings of IEEE VR 2023"
        link="https://ieeexplore.ieee.org/abstract/document/10108496"
      />

      <PublicationYear>2021</PublicationYear>
      <PublicationItem
        imageUrl="/papers/rapido.jpeg"
        title="Rapido: Prototyping Interactive AR Experiences through Programming by Demonstration"
        authors="German Leiva, Jens Emil Sloth Grnbk, Clemens Nylandsted Klokmose, Cuong Nguyen,
        Paul Asente, Rubaiat Habib Kazi"
        conference="In Proceedings of UIST 2021"
        link="https://dl.acm.org/doi/10.1145/3472749.3474774"
      />
      <PublicationItem
        imageUrl="/papers/distanciar.jpg"
        title="DistanciAR: Authoring Site-Specific Augmented Reality Experiences for Remote Environments"
        authors="Zeyu Wang, Cuong Nguyen, Paul Asente, Julie Dorsey"
        conference="In ACM CHI, 2021"
        link="https://graphics.cs.yale.edu/sites/default/files/distanciar.pdf"
      />
      <PublicationYear>2020</PublicationYear>
      <PublicationItem
        imageUrl="/papers/TransceiVR.png"
        title="TransceiVR: Bridging Asymmetrical Communication Between External and VR Users"
        authors="Balasaravanan Thoravi Kumaravel, Cuong Nguyen, Stephen DiVerdi, Bjoern Hartmann"
        conference="In ACM UIST, 2020"
        link="https://www.tkbala.com/transceivr"
      />
      <PublicationItem
        imageUrl="/papers/ViewDependent360.png"
        title="View-Dependent Effects For 360 Virtual Reality Video"
        authors="Jeremy Hartmann, Stephen DiVerdi, Cuong Nguyen, Daniel Vogel"
        conference="In ACM UIST, 2020"
        link="https://jjhartmann.github.io/ViewDependentEffects/"
      />
      <PublicationItem
        imageUrl="/papers/pronto.png"
        title="Pronto: Rapid Augmented Reality Video Prototyping Using Sketches and Enaction"
        authors="German Leiva, Cuong Nguyen, Rubaiat Habib Kazi, Paul Asente"
        conference="In ACM CHI, 2020"
        link="https://dl.acm.org/doi/abs/10.1145/3313831.3376160"
      />
      <PublicationItem
        imageUrl="/papers/vrselection.png"
        title="Slicing Volume: Hybrid 3D/2D Multi target Selection Technique for Dense Virtual Environments"
        authors="Roberto A. Montano-Murillo, Cuong Nguyen, Rubaiat Habib Kazi, Sriram Subramanian, Stephen DiVerdi, Diego Martinez-Plasencia"
        conference="In IEEE VR, 2020 (Conference Paper)"
        link="https://ieeexplore.ieee.org/abstract/document/9089663"
      />
      <PublicationYear>2019</PublicationYear>
      <PublicationItem
        imageUrl="/papers/AsyncVR_small.png"
        title="Challenges and Design Considerations for Multimodal Asynchronous Collaboration in VR"
        authors="Kevin Chow, Caitlin Coyiuto, Cuong Nguyen, Dongwook Yoon"
        conference="In ACM CSCW, 2019"
        link="https://dl.acm.org/citation.cfm?id=3359142"
      />
      <PublicationItem
        imageUrl="/papers/tutorivr.jpg"
        title="TutoriVR: A Video-Based Tutorial System for Design Applications in Virtual Reality"
        authors="Balasaravanan Thoravi Kumaravel, Cuong Nguyen, Stephen DiVerdi, Bjoern Hartmann"
        conference="In ACM CHI, 2019"
        link="https://www.tkbala.com/tutorivr"
      />

      <PublicationYear>2012 - 2018</PublicationYear>
      <PublicationItem
        imageUrl="/papers/depthconflict.png"
        title="Depth Conflict Reduction for Stereo VR Video Interfaces"
        authors="Cuong Nguyen, Stephen DiVerdi, Aaron Hertzmann, Feng Liu"
        conference="In ACM CHI, 2018"
        link="https://dl.acm.org/doi/10.1145/3173574.3173638"
      />
      <PublicationItem
        imageUrl="/papers/collavr.jpg"
        title="CollaVR: Collaborative In-Headset Review for VR Video"
        authors="Cuong Nguyen, Stephen DiVerdi, Aaron Hertzmann, Feng Liu"
        conference="In ACM UIST, 2017"
        link="http://web.cecs.pdx.edu/~fliu/project/collavr/"
      />
      <PublicationItem
        imageUrl="/papers/vremiere.png"
        title="Vremiere: In-headset Virtual Reality Video Editing"
        authors="Cuong Nguyen, Stephen DiVerdi, Aaron Hertzmann, Feng Liu"
        conference="In ACM CHI, 2017 🏆 (best paper honorable mention award)"
        link="http://web.cecs.pdx.edu/~fliu/project/vremiere/"
      />
      <PublicationItem
        imageUrl="/papers/GazeNoter_small.png"
        title="Gaze-based Notetaking for Learning from Lecture Videos"
        authors="Cuong Nguyen, Feng Liu"
        conference="In ACM CHI, 2016"
        link="http://web.cecs.pdx.edu/~fliu/project/gazenote/"
      />
      <PublicationItem
        imageUrl="/papers/tutordmvnicon_small.png"
        title="Making Software Tutorial Video Responsive"
        authors="Cuong Nguyen, Feng Liu"
        conference="In ACM CHI, 2015 🏆 (best paper honorable mention award)"
        link="http://web.cecs.pdx.edu/~fliu/project/tutorDMVN/"
      />
     <PublicationItem
        imageUrl="/papers/hotspot.jpg"
        title="Hotspot: Making Computer Vision More Effective for Human Video Surveillance"
        authors="Cuong Nguyen, Wu-chi Feng, Feng Liu"
        conference="Information Visualization"
        link="http://web.cecs.pdx.edu/~fliu/project/hotspot/"
      />
      <PublicationItem
        imageUrl="/papers/dmvntouch.png"
        title="Direct Manipulation Video Navigation on Touch Screens"
        authors="Cuong Nguyen, Yuzhen Niu, Feng Liu"
        conference="In ACM MobileHCI, 2014"
        link="http://web.cecs.pdx.edu/~fliu/project/TouchDMVN"
      />
      <PublicationItem
        imageUrl="/papers/dmvn3d.jpg"
        title="Direct Manipulation Video Navigation in 3D"
        authors="Cuong Nguyen, Yuzhen Niu, Feng Liu"
        conference="In ACM CHI, 2013 🏆 (best paper honorable mention award)"
        link="http://web.cecs.pdx.edu/~fliu/project/3DDMVN"
      />
      <PublicationItem
        imageUrl="/papers/summagator.jpg"
        title="Video Summagator: An Interface for Video Summarization and Navigation"
        authors="Cuong Nguyen, Yuzhen Niu, Feng Liu"
        conference="In ACM CHI, 2012"
        link="http://web.cecs.pdx.edu/~fliu/project/summagator"
      />
    </Publications>
  );
}

export default PublicationList;