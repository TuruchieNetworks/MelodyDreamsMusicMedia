import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { SignIn } from '@aws-amplify/ui-react/dist/types/components/Authenticator/SignIn';
import { SignUp } from '@aws-amplify/ui-react/dist/types/components/Authenticator/SignUp';
import { 
  ProfileCollection 
} from '../../ui-components';

const CognitoUsers = ({signOut, user}) => {
  return (
    <section className='profilecontainer'>
      <div className='innerprofilecontainer'>
        <ProfileCollection />
        {/* <Footer width = {"100%"} /> */}
      </div>
    </section>
  )
}

export default withAuthenticator (CognitoUsers);