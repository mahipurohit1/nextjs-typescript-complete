import { ChangePasswordParams } from "@/types";
import axios from "axios";
import { ProfileForm } from "./ProfileForm";
import styles from "./UserProfile.module.css";

export function UserProfile() {
  function changePassword({ oldPassword, newPassword }: ChangePasswordParams) {
    axios
      .patch("/api/user/change-password", { oldPassword, newPassword })
      .then((res) => console.log(res.data))
      .catch((err) =>
        console.error(
          err.response.data.message || err.message || "Something went wrong"
        )
      );
  }

  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm changePassword={changePassword} />
    </section>
  );
}
