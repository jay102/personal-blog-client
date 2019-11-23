import React from 'react';

// import views
import AddUser from './AddUser/AddUserContainer';

const UserView = () => {
  return (
    <>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <AddUser />
      </main>

    </>
  );
}

export default UserView;