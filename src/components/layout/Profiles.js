import React from 'react';
import { 
  ProfileCollection 
} from '../../ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';


const Profiles = ( user, signIn) => {
  return (
    <section className='profilecontainer'>
      <div className='innerprofilecontainer'>
        <ProfileCollection />
        {/* <Footer width = {"100%"} /> */}
      </div>
    </section>
  )
}

export default withAuthenticator (Profiles);