import React from 'react';
import withPermission from './permissionRequired';

const Demo1 = () => <p>I am powerful component for everyone</p>;

export default withPermission('everyone')(Demo1);
