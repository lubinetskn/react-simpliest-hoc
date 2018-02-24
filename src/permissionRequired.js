import React from 'react';

const requirePermission = requiredLevel => Component => {
  const user = JSON.parse(localStorage.user);

  // return class extends React.Component {
  //   render() {
  //     // this.props
  //     if (user.level !== 'admin' && requiredLevel === 'admin') {
  //       return null;
  //     } else {
  //       return <Component user={user} {...this.props} />;
  //     }
  //   }
  // };

  return props =>
    user.level !== 'admin' && requiredLevel === 'admin' ? null : (
      <Component user={user} {...props} />
    );
};

export default requirePermission;
