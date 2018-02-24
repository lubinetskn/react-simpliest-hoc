import React from 'react';
import withPermission from './permissionRequired';

const Demo2 = ({ message, user }) => (
  <p>
    I am powerful {message} for {user.name} only
  </p>
);

export default withPermission('admin')(Demo2);
