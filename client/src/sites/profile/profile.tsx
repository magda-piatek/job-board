import { Formik } from "formik";
import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";

import { patchUser } from "../../api/user-requests";
import Button from "../../components/button/button";
import userSchema from "../../../../validation/user";
import { TUserReq } from "../../../../types/auth";
import { selectUserId } from "../../redux/user/user-selector";

const Profile = () => {
  const [avatar, setAvatar] = useState<string | Blob | undefined>();

  const userId = useSelector(selectUserId);

  const handleSubmit = async (values: TUserReq) => {
    console.log(values);
    const formData = new FormData();
    if (avatar) formData.append("avatar", avatar as any);

    await patchUser(formData, userId);
  };

  return (
    <Formik
      validationSchema={userSchema}
      onSubmit={handleSubmit}
      initialValues={{}}
    >
      {({ handleSubmit }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Avatar</Form.Label>

            <Form.Control
              type="file"
              name="avatar"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setAvatar(event.target.files[0]);
              }}
            />
          </Form.Group>
          <Button type="submit" title="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default Profile;
