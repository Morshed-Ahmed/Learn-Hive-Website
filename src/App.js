import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { getAuth } from "firebase/auth";
import app from "./firebase/firebase.config";
import AuthProvider from "./Contexts/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

function App() {
  const auth = getAuth(app);
  // console.log(auth);

  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster />
    </div>
  );
}

export default App;
