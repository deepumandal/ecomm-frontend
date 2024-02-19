import { Stack } from "@mui/material";
import React, { useState } from "react";
import SignInPage from "../../components/SignInPage";
import SignUpPage from "../../components/SignUpPage";

export const Authentication: React.FC = () => {
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
