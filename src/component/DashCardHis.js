import React, { useEffect } from "react";
import "./DashCardHis.css";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";


function DashCardHis({
  id,
  firstName,
  lastName,
  email,
  phone,
  bookId,
  status,
  userId,
  ownerId,
  address,
}) {

  const postsref = collection(db, "posts");
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getDocs(postsref);
      const reqBook = posts.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPost(reqBook.find((post) => post.id === bookId));
    };
    getPosts();  
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dashcardhis">
      <div className="dashcardhis-rgt">
        <h1 className="his-h1">User info</h1>
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
      </div>
      <div className="dashcardhis-info">
        <h1 className="his-h1">Requested Book</h1>
        <h3>{post.bookTitle}</h3>
        <p>{post.bookAuthor}</p>
        {post.rent ? (
          <p>Rent Price: ₹{post.rentPrice}</p>
        ) : (
          <p>Not available for renting.</p>
        )}
        {post.sell ? (
          <p>Sell Price: ₹{post.sellPrice}</p>
        ) : (
          <p>Not available for selling.</p>
        )}
        <p>Status: {status? "fullfiled" : "pending"}</p>
      </div>
      <div className="dashcardhis-lft">
        <button>Change Status</button>
      </div>
    </div>
  );
}

export default DashCardHis;
