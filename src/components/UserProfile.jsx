import UserFavoriteFoods from "./UserFavoriteFoods";

const UserProfile = () => {
  const emailStyle = {
    color: "salmon",
  };

  return (
    <section>
      <p>Username: AlirezaHTE</p>
      <p>
        Email: <span style={emailStyle}>Itsatami@gmail.com</span>
      </p>
      <UserFavoriteFoods />
    </section>
  );
};

export default UserProfile;
