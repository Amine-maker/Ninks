import React from "react";

import BaseProfileLinks from "../grid-layout/BaseProfileLinks";

const Profile = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-10">
      <BaseProfileLinks />
    </section>
  );
};

export default Profile;
