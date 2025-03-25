import { AppShell, Tabs } from "@mantine/core";
import { Profile as ProfileType } from "@shared/types/Profile";
import ProfileSidebar from "../../components/ProfileSidebar/ProfileSidebar";
import { ProfileDesigns } from "./ProfilePage";
import ProfileModels from "../../components/ProfileModels/ProfileModels";

const PersonalProfilePage = ({profile, ownProfile, setProfile, onSwitch}: {profile: ProfileType, ownProfile: boolean, setProfile: (profile: ProfileType) => void, onSwitch: () => void}) => {
  return (
    <AppShell navbar={{ width: 240, breakpoint: 'sm' }}>
      <AppShell.Navbar>
        <ProfileSidebar profile={profile} ownProfile={ownProfile}/>
      </AppShell.Navbar>
      <AppShell.Main p={0} className="overflow-x-hidden"> 
        <Tabs defaultValue="designs">
          <Tabs.List>
            <Tabs.Tab value="designs">{profile?.user_type === 'manufacturer' ? "Prefabs" : "Designs"}</Tabs.Tab>
            <Tabs.Tab value="uploads">Uploads</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="designs">
            <ProfileDesigns id={profile?.id} />
          </Tabs.Panel>
          <Tabs.Panel value="uploads">
            <ProfileModels profileId={profile?.id} />
          </Tabs.Panel>
        </Tabs>
      </AppShell.Main>
    </AppShell>
  );
};

export default PersonalProfilePage;