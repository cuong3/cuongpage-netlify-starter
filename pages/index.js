import Layout from '../components/Layout';
import ProfileSection from '../components/ProfileSection'; // edit this for profile
import PublicationList from '../components/PublicationList'; // edit this for publications

export default function Home() {
  return (
    <Layout>
      <ProfileSection />
      <PublicationList />
    </Layout>
  );
}