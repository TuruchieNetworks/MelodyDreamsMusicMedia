import React from 'react';
import { 
  Profilepage 
} from '../../ui-components';
import { 
  ProfileCollection 
} from '../../ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useBreakpointValue } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Storage } from "@aws-amplify/storage"

// await Storage.put("test.txt", "Hello");

// await Storage.put('test.txt', 'Protected Content', {
//     level: 'protected',
//     contentType: 'text/plain'
// });


const Profiles = () => {
  const variant = useBreakpointValue({
    small: 'small',
    medium: 'default',
  });
const ProfileCollectionOverriders = {
  button: {
  onClick: () => {
    <Profilepage />
  }
  }
}
  return (
    <section className='profilecontainer'>
      <div className='innerprofilecontainer'>
        <ProfileCollection 
        variation={variant}
        // overridesItems={({ item, index }) => ({
        //     overrides: {
        //       type: list
        //     }
        // })}
        />
    
      </div>
    </section>
  )
}

export default (Profiles);