import React, { useEffect, useState } from "react";
import ReferModal from "./ReferModal";

export default function App() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // localStorage se user get karo
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    } else {
      // Fallback user agar undefined hai
      const fallbackUser = {
        isLoggedIn: false,
        referralWallet: 0,
        referrals: 0,
      };
      setUser(fallbackUser);
      localStorage.setItem("user", JSON.stringify(fallbackUser));
    }

    setOpen(true); // Page load pe auto open
  }, []);

  return (
    <>{open && <ReferModal user={user} onClose={() => setOpen(false)} />}</>
  );
}
