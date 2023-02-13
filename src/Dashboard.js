import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import DashCardAdmin from "./component/DashCardAdmin";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import DashCardHis from "./component/DashCardHis";

function Dashboard() {
  const [{ user }] = useStateValue();
  const [h1, setH1] = useState("Your Posts");
  const [p, setP] = useState("All your posts are listed here.");
  const [card, setCard] = useState("Click above to desplay your posts.");
  const postRef = collection(db, "posts");
  const [yoPosts, setYoPosts] = useState([]);
  const reqRef = collection(db, "requests");
  const [yoReq, setYoReq] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postSnapshot = await getDocs(postRef);
      const postList = postSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setYoPosts(postList);
    };
    const getReq = async () => {
      const reqSnapshot = await getDocs(reqRef);
      const reqList = reqSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setYoReq(reqList);
    };
    getReq();
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listYoPosts = yoPosts.map((post) => {
    if (post.userId === user?.uid) {
      return (
        <div className="dash-body-card">
          <DashCardAdmin
            id={post.id}
            title={post.bookTitle}
            author={post.bookAuthor}
            description={post.bookDescription}
            rentPrice={post.rentPrice}
            sellPrice={post.sellPrice}
            rent={post.rent}
            sell={post.sell}
            image={post.images}
            userId={post.userId}
          />
        </div>
      );
    } else {
      return null;
    }
  });
  const listYoHis = yoReq.map((req) => {
    if (req.userId === user?.uid || req.ownerId === user?.uid) {
      return (
        <div className="dash-body-card">
          <DashCardHis
            id={req.id}
            firstName={req.firstName}
            lastName={req.lastName}
            email={req.email}
            phone={req.phone}
            bookId={req.bookId}
            status={req.status}
            userId={req.userId}
            ownerId={req.ownerId}
            address={req.address}
          />
        </div>
      );
    } else {
      return null;
    }
  });
  const listYoReq = yoReq.map((req) => {
    if (req.userId === user?.uid || req.ownerId === user?.uid) {
      if (req.status === "false") {
        return (
          <div className="dash-body-card">
            <DashCardHis
              id={req.id}
              firstName={req.firstName}
              lastName={req.lastName}
              email={req.email}
              phone={req.phone}
              bookId={req.bookId}
              status={req.status}
              userId={req.userId}
              ownerId={req.ownerId}
              address={req.address}
            />
          </div>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  });


  const yourpost = () => {
    setH1("Your Posts");
    setP("All your posts are listed here.");
    setCard(listYoPosts);
  };

  const request = () => {
    setH1("Requests");
    setP("All your requests are listed here.");
    setCard(listYoReq);
  };

  const history = () => {
    setH1("History");
    setP("All your history are listed here.");
    setCard(listYoHis);
  };

  return (
    <div className="dash">
      <div className="dash-head">
        <h1 className="dash-head-h1">Dashboard</h1>
        <p className="dash-head-p">
          All books and posts that you posted are listed here. You can edit or
          delete them. You can manage your account here.
        </p>
      </div>
      <div className="dash-body">
        <buttom className="dash-btn" onClick={yourpost}>
          Your Posts
        </buttom>
        <buttom className="dash-btn" onClick={request}>
          Requests
        </buttom>
        <buttom className="dash-btn" onClick={history}>
          History
        </buttom>
      </div>
      <div className="dash-content">
        <div className="dash-content-head">
          <h1 className="dash-content-head-h1">{h1}</h1>
          <p className="dash-content-head-p">{p}</p>
        </div>
        <div className="dash-content-body">{card}</div>
      </div>
    </div>
  );
}

export default Dashboard;
