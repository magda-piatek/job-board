import { Formik } from "formik";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";

import { patchUser } from "../../api/user-requests";
import Button from "../../components/button/button";
import userSchema from "../../../../validation/user";
import { TUserReq } from "../../../../types/auth";
import { selectUserAvatar, selectUserId } from "../../redux/user/user-selector";
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
  const userId = useSelector(selectUserId);
  const userAvatar = useSelector(selectUserAvatar);

  const handleSubmit = async (values: TUserReq) => {
    handleRequested();
    const formData = new FormData();
    if (avatar) formData.append("avatar", avatar as any);
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
        initialValues={{}}
      >
        {({ handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              {avatarUrl && <img src={avatarUrl} alt="avatar" />}
              <Form.Label>Avatar</Form.Label>

              <Form.Control
                type="file"
                name="avatar"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setAvatar(event.target.files[0]);
                }}
              />
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
