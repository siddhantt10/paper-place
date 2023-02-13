import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { useParams } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [{ user }] = useStateValue();
  const prodRef = collection(db, "posts");
  const { id } = useParams();
  const reqRef = collection(db, "requests");
  const navigate = useNavigate();
  const [ownerId, setOwnerId] = useState("");

  useEffect(() => {
    const getOwnerId = async () => {
      const product = await getDocs(prodRef);
      const productData = product.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      productData.map((post) => {
        if (post.id === id) {
          setOwnerId(post.userId);
          return null;
        } else {
          return null;
        }
      });
    };
    getOwnerId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required"),
    phone: yup.number(10).required("Phone Number is required"),
    address: yup.string().required("Address is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const nevi = () => {
    const err=errors.message == null ? "success" : "error"
    navigate(`/outcomes/${err}`);
  };

  const onCreateReq = async (data) => {
    await addDoc(reqRef, {
      userId: user?.uid,
      bookId: id,
      ownerId: ownerId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      status: "false",
      
    });

    await nevi();
  };

  return (
    <div className="reqForm">
      <div className="reqForm-head">
        <h1 className="reqForm-head-h1">Request a Book</h1>
        <p className="reqForm-head-p">
          Fill this form to Request a book from the Owner. Once you click
          "submit" The data will be sent to the owner, They will contact you
          when the book is available.
        </p>
      </div>
      <form onSubmit={handleSubmit(onCreateReq)}>
        <div className="reqForm-section">
          <h1 className="reqForm-section-h1">About You</h1>
          <p className="reqForm-section-p">
            This form takes information about you.
          </p>

          <h3 className="reqForm-section-h3">First Name</h3>
          <input placeholder="First Name..." {...register("firstName")} />
          <p className="error-msg">{errors.firstName?.message}</p>

          <h3 className="reqForm-section-h3">Last Name</h3>
          <input placeholder="Last Name..." {...register("lastName")} />
          <p className="error-msg">{errors.lastName?.message}</p>

          <h3 className="reqForm-section-h3">Email</h3>
          <input placeholder="Email..." {...register("email")} />
          <p className="error-msg">{errors.email?.message}</p>

          <h3 className="reqForm-section-h3">Phone Number</h3>
          <input placeholder="Phone Number..." {...register("phone")} />
          <p className="error-msg">{errors.phone?.message}</p>

          <h3 className="reqForm-section-h3">Address</h3>
          <input placeholder="Address..." {...register("address")} />
          <p className="error-msg">{errors.address?.message}</p>
        </div>

        <div className="reqForm-btn">
          <input type="submit" />
          <p>By clicking "submit" you agree to our terms and conditions.</p>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
