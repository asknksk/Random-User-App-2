import React from "react";
import Footer from "./components/footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react/";
import Users from "./components/users/Users";

function App() {
  const url = "https://randomuser.me/api/";
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const users = async () => {
    const { data } = await axios.get(url);
    setUser(data.results[0]);
    setLoading(true);
  };
  useEffect(() => {
    users();
  }, []);

  if (!loading) {
    return <h1>Loading</h1>;
  }

  return (
    <main>
      <Users user={user} users={users} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
