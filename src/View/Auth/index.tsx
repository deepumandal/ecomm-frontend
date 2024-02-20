import Stack from "@mui/material/Stack";
import React, { memo, useState } from "react";

const SignInPage = React.lazy(() => import("../../components/SignInPage"));
const SignUpPage = React.lazy(() => import("../../components/SignUpPage"));

const Authentication: React.FC = () => {
  const [IsalreadyUser, setIsalreadyUser] = useState<boolean>(true);
  const toggle = () => setIsalreadyUser((prev) => !prev);
  return (
    <Stack flexDirection={"column"}>
      {IsalreadyUser ? (
        <SignInPage toggle={toggle} />
      ) : (
        <SignUpPage toggle={toggle} />
      )}
    </Stack>
  );
};

export default memo(Authentication);
