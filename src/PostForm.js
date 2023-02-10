import React, { useEffect, useState } from "react";
import "./PostForm.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytes, listAll } from "firebase/storage";

function PostForm() {
  const [{ user }] = useStateValue();
  const [images, setImages] = useState([]);
  const postsRef = collection(db, "posts");
  const usersRef = collection(db, "users");
  const usersCollection = collection(db, "users");
  const [imgUrl, setImgUrl] = useState([]);
  const [title, setTitle] = useState("");
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFileInputChange = (event) => {
    setImages([...images, event.target.files[0]]);
  };

  useEffect(() => {
    const getUserId = async () => {
      const data = await getDocs(usersCollection);
      data.forEach((doc) => {
        if (doc.data().userId === user?.uid) {
          setUserExists(true);
        }
      });
    };
    getUserId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imgListRef = ref(storage, `${user?.uid}/${title}`);
  const postimages = async () => {
    console.log(images);
    images.forEach((image, index) => {
      const imagesRef = ref(storage, `${user?.uid}/${title}/${index + 1}`);
      uploadBytes(imagesRef, image);
    });
  };

  const schema = yup.object().shape(
    userExists
      ? {
          title: yup.string().required("Title is required"),
          author: yup.string().required("Author is required"),
          description: yup.string().required("Description is required"),
          genre: yup.string().required("Genre is required"),
          condition: yup.string().required("Condition is required"),
          rent: yup.boolean().required("Rent is required"),
          rentPrice: yup
            .number()
            .required(
              "Rent Price is required if you dont want to rent write 0"
            ),
          sell: yup.boolean().required("Sell is required"),
          sellPrice: yup
            .number()
            .required(
              "Sell Price is required if you dont want to sell write 0"
            ),
        }
      : {
          title: yup.string().required("Title is required"),
          author: yup.string().required("Author is required"),
          description: yup.string().required("Description is required"),
          genre: yup.string().required("Genre is required"),
          condition: yup.string().required("Condition is required"),
          rent: yup.boolean().required("Rent is required"),
          rentPrice: yup
            .number()
            .required(
              "Rent Price is required if you dont want to rent write 0"
            ),
          sell: yup.boolean().required("Sell is required"),
          sellPrice: yup
            .number()
            .required(
              "Sell Price is required if you dont want to sell write 0"
            ),
          firstName: yup.string().required("First Name is required"),
          lastName: yup.string().required("Last Name is required"),
          email: yup.string().required("Email is required"),
          phone: yup.number(10).required("Phone Number is required"),
          address: yup.string().required("Address is required"),
        }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onCreatePost = async (data) => {
    await postimages();

    await listAll(imgListRef).then((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          setImgUrl((prev) => [...prev, url]);
        });
      });
      console.log(imgUrl);
    });
    console.log(imgUrl);

    await addDoc(postsRef, {
      bookTitle: data.title,
      bookAuthor: data.author,
      bookDescription: data.description,
      bookgenre: data.genre,
      bookCondition: data.condition,
      rent: data.rent,
      rentPrice: data.rentPrice,
      sell: data.sell,
      sellPrice: data.sellPrice,
      userId: user?.uid,
      images: imgUrl,
    });

    await addDoc(usersRef, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      userId: user?.uid,
    });
    
    const err=errors.message == null ? "success" : "error"
    navigate(`/outcomes/${err}`);
  };

  return (
    <div className="postForm">
      <div className="postForm-head">
        <h1 className="postForm-head-h1">Post a Book</h1>
        <p className="postForm-head-p">
          Fill this form to list your book. Once you click "submit" The book
          will be visible across the website. You can alway change properties of
          the book after posting.
        </p>
      </div>

      <form onSubmit={handleSubmit(onCreatePost)}>
        <div className="postForm-section">
          <h1 className="postForm-section-h1">About You</h1>
          <p className="postForm-section-p">
            This form takes information about you. This Data is not accessible
            by anyone other then you and team Paper Place.
          </p>

          {userExists ? (
            <p> User already exists. no need to fill this section </p>
          ) : (
            <div>
              <h3 className="postForm-section-h3">First Name</h3>
              <input placeholder="First Name..." {...register("firstName")} />
              <p className="error-msg">{errors.firstName?.message}</p>

              <h3 className="postForm-section-h3">Last Name</h3>
              <input placeholder="Last Name..." {...register("lastName")} />
              <p className="error-msg">{errors.lastName?.message}</p>

              <h3 className="postForm-section-h3">Email</h3>
              <input placeholder="Email..." {...register("email")} />
              <p className="error-msg">{errors.email?.message}</p>

              <h3 className="postForm-section-h3">Phone Number</h3>
              <input placeholder="Phone Number..." {...register("phone")} />
              <p className="error-msg">{errors.phone?.message}</p>

              <h3 className="postForm-section-h3">Address</h3>
              <input placeholder="Address..." {...register("address")} />
              <p className="error-msg">{errors.address?.message}</p>
            </div>
          )}
        </div>

        <div className="postForm-section">
          <h1 className="postForm-section-h1">About Book</h1>
          <p className="postForm-section-p">
            This form takes information about the book. This Data will be
            displayed to all the users.
          </p>

          <h3 className="postForm-section-h3">Title</h3>
          <input
            placeholder="Title..."
            {...register("title")}
            onChange={handleTitleChange}
          />
          <p className="error-msg">{errors.title?.message}</p>

          <h3 className="postForm-section-h3">Author</h3>
          <input placeholder="Author..." {...register("author")} />
          <p className="error-msg">{errors.author?.message}</p>

          <h3 className="postForm-section-h3">Description</h3>
          <textarea
            placeholder="Write everything about the book..."
            {...register("description")}
          />
          <p className="error-msg">{errors.description?.message}</p>

          <h3 className="postForm-section-h3">Genre</h3>
          <input placeholder="Genre..." {...register("genre")} />
          <p className="error-msg">{errors.genre?.message}</p>

          <h3 className="postForm-section-h3">Condition</h3>
          <select placeholder="Condition..." {...register("condition")}>
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="old">Old</option>
            <p className="error-msg">{errors.condition?.message}</p>
          </select>

          <h3 className="postForm-section-h3">Rent</h3>
          <select placeholder="Rent..." {...register("rent")}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <p className="error-msg">{errors.rent?.message}</p>

          <h3 className="postForm-section-h3">Rent Price</h3>
          <input placeholder="Rent Price..." {...register("rentPrice")} />
          <p className="error-msg">{errors.rentPrice?.message}</p>

          <h3 className="postForm-section-h3">Sell</h3>
          <select placeholder="Sell..." {...register("sell")}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <p className="error-msg">{errors.sell?.message}</p>

          <h3 className="postForm-section-h3">Sell Price</h3>
          <input placeholder="Sell Price..." {...register("sellPrice")} />
          <p className="error-msg">{errors.sellPrice?.message}</p>

          <h3 className="postForm-section-h3">Upload Images</h3>

          <p>Cover photo</p>
          <input type="file" onChange={handleFileInputChange} />
          <p className="error-msg">{errors.image?.message}</p>
          <p>Back cover Photos</p>
          <input type="file" onChange={handleFileInputChange} />
          <p className="error-msg">{errors.image?.message}</p>
          <p>More Photos</p>
          <input type="file" onChange={handleFileInputChange} />
          <p className="error-msg">{errors.image?.message}</p>
          <input type="file" onChange={handleFileInputChange} />
          <p className="error-msg">{errors.image?.message}</p>
          <input type="file" onChange={handleFileInputChange} />
          <p className="error-msg">{errors.image?.message}</p>
        </div>

        <div className="postForm-btn">
          <input type="submit" />
          <p>By clicking "submit" you agree to our terms and conditions.</p>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
