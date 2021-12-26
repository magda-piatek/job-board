import { Formik } from "formik";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";

import { patchUser } from "../../api/user-requests";
import Button from "../../components/button/button";
import userSchema from "../../../../validation/user";
import { TUserReq } from "../../../../types/auth";
import { selectUser } from "../../redux/user/user-selector";
import { getUser } from "../../redux/user/user-slice";
import { fetchAvatar } from "../../api/avatar-requests";
import { useFetchHook } from "../../hooks/useFetch";
import { checkIsLoading } from "../../utils/check-is-loading";

import "./profile.scss";

const ProfileForm = () => {
  const [avatar, setAvatar] = useState<string | Blob | undefined>();
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>();

  const { status, handleRequested, handleSuccess, handleFail } = useFetchHook();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const { firstName, lastName, avatar: userAvatar, _id: userId } = user;

  const handleSubmit = async (values: TUserReq) => {
    handleRequested();
    const formData = new FormData();

    for (const key in values) {
      formData.append(key, (values as any)[key]);
    }

    if (avatar) formData.append("avatar", avatar);
    try {
      await patchUser(formData, userId);
      dispatch(getUser());
      handleSuccess();
    } catch (err) {
      handleFail(err);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchAvatar((userAvatar as any).key);
        setAvatarUrl(`data:image/jpeg;base64,${response.data}`);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [userAvatar]);

  return (
    <div className="profile-form">
      <Formik
        validationSchema={userSchema}
        onSubmit={handleSubmit}
        initialValues={{ firstName, lastName }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lastName"
                type="text"
                value={values.lastName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Avatar</Form.Label>
              <div>
                {avatarUrl && <img src={avatarUrl} alt="avatar" />}
                <Form.Control
                  type="file"
                  name="avatar"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setAvatar(event.target.files[0]);
                  }}
                />
              </div>
            </Form.Group>
            <Button
              type="submit"
              title="submit"
              disabled={checkIsLoading(status)}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileForm;
