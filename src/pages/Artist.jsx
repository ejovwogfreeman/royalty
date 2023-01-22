import React, { useState, useEffect } from "react";
import "../css/General.css";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastifyContext } from "../context/ToastifyContext";
// import Multiselect from "multiselect-react-dropdown";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { AiFillMinusSquare } from "react-icons/ai";
import BSON from "bson";

const Artist = ({ open }) => {
  const [artist, setArtist] = useState([]);
  const [options, setOptions] = useState([]);

  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState({});

  const [SplitList, setSplitList] = useState([]);

  const handleSplitChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...SplitList];
    list[index][name] = value;
    setSplitList(list);
    console.log(SplitList);
    let split = {};
    let newObject;
    for (let i = 0; i < SplitList.length; i++) {
      const newSplit = Object.assign(split, {
        [SplitList[i].user]: SplitList[i].split,
      });
      setForm({ ...form, split: newSplit });
    }
    // console.log(newObject);
    // const bsonData = BSON.serialize(list);
    // const bsonDocument = new BSON.deserialize(bsonData);
    // setForm({ ...form, split: bsonDocument });
  };

  const handleSplitRemove = (index) => {
    const list = [...SplitList];
    list.splice(index, 1);
    setSplitList(list);
  };

  const handleSplitAdd = () => {
    setSplitList([...SplitList, { user: "", split: "" }]);
  };

  const [form, setForm] = useState({
    artistName: "",
    users: [],
    signDate: "",
    split: [],
  });

  const { artistName, signDate } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post(`https://api.royalti.io/artist/`, form, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer 7bd60554-4f63-4c62-a5f6-c29c3f67cb2a",
        },
      })
      .then((res) => {
        console.log(res);
        setToastifyState({
          ...ToastifyState,
          message: "User Created Successfully",
          variant: "success",
          open: true,
        });
        navigate("/");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: "Something went wrong",
          variant: "error",
          open: true,
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get(`https://api.royalti.io/artist/`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
          Authorization: "Bearer 7bd60554-4f63-4c62-a5f6-c29c3f67cb2a",
        },
      })
      .then((res) => {
        setArtist(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.royalti.io/user/`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
          Authorization: "Bearer 7bd60554-4f63-4c62-a5f6-c29c3f67cb2a",
        },
      })
      .then((res) => {
        setOptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    const user = artist.filter((x) => x.id === id);
    setDeleteId(user[0].id);
  };

  const deleteBtn = () => {
    console.log(deleteId);
    setLoading(true);
    axios.delete(`https://api.royalti.io/artist/${deleteId}`, {
      headers: {
        Authorization: "Bearer 7bd60554-4f63-4c62-a5f6-c29c3f67cb2a",
      },
    });
    setToastifyState({
      ...ToastifyState,
      message: "Artist Deleted successfully",
      variant: "success",
      open: true,
    });
    setLoading(false);
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className={open ? "cont" : "cont end"}>
      <div
        className="p-4 rounded"
        style={{ border: "1px solid rgba(0,0,0,0.2)" }}
      >
        <div className="d-flex align-items-center">
          <span className="h4">Artists</span>
          <button
            type="button"
            className="btn p-1 ms-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ backgroundColor: "rgb(211, 231, 211)" }}
          >
            Add Artist
          </button>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-3">
          <ul className="top-texts text-muted m-0">
            <li>
              <span>show 10 rows</span> <IoMdArrowDropdown />
            </li>
            <li>
              <span>CSV</span> <IoMdArrowDropdown />
            </li>
            <li>
              <span>column visibility</span> <IoMdArrowDropdown />
            </li>
          </ul>
          <form action="">
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" className="ms-2" />
          </form>
        </div>
        <div className="table-responsive mt-3">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Artist Name</th>
                <th>Users</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {artist.map((x, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{x.artistName}</td>
                    {/* <td>{x.Users.length > 0 ? x.Users[0].fullName : null}</td> */}
                    <td>
                      {x.Users.length > 0
                        ? x.Users.map((x, index) => (
                            <span key={index}>
                              <span>{x.fullName}</span>,&nbsp;
                            </span>
                          ))
                        : null}
                    </td>
                    <td>
                      <Link
                        to={`/edit-artist/${x.id}`}
                        className="ms-1"
                        style={{ cursor: "pointer" }}
                      >
                        <BsPencilSquare />
                      </Link>
                      <span className="ms-2" style={{ cursor: "pointer" }}>
                        <BsTrash
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal3"
                          onClick={() => handleDelete(x.id)}
                        />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="d-flex align-items-center justify-content-between mt-3">
            <span>Showing 1 to 10 of 17 entries</span>
            <ul className="bottom-texts text-muted m-0">
              <li>First</li>
              <li>Previous</li>
              <li>1</li>
              <li>2</li>
              <li>Next</li>
              <li>Last</li>
            </ul>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add Artist
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form className="p-3" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="artist-name" className="form-label">
                      Artist Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="artist-name"
                      aria-describedby="emailHelp"
                      placeholder="Enter Artist Name"
                      name="artistName"
                      value={artistName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 custom-input">
                    <label htmlFor="user" className="form-label">
                      User
                    </label>
                    <select
                      name=""
                      id=""
                      onChange={(e) =>
                        setForm({
                          ...form,
                          users: [...e.target.selectedOptions].map(
                            (opt) => opt.value
                          ),
                        })
                      }
                      style={{ width: "100%" }}
                      multiple
                    >
                      {options.map((x, index) => (
                        <option key={index} value={x.id}>
                          {x.fullName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="apartment" className="form-label">
                      Sign Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="apartment"
                      name="signDate"
                      value={signDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="artist-split" className="form-label">
                      <span>Artist Split</span>
                      <span
                        className="ms-3"
                        style={{
                          color: "rgb(0, 102, 102)",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                      >
                        <BsFillPlusSquareFill onClick={handleSplitAdd} />
                      </span>
                    </label>
                    {SplitList.map((singleSplit, index) => (
                      <div className="input-group mb-3 d-flex" key={index}>
                        <span style={{ flex: "2" }} className="style">
                          <input
                            name="user"
                            type="text"
                            list="data"
                            onChange={(e) => handleSplitChange(e, index)}
                          />
                          <datalist id="data">
                            {options.map((x, key) => (
                              <option key={key} value={x.id} />
                            ))}
                          </datalist>
                        </span>
                        <span className="d-flex" style={{ flex: "1" }}>
                          <input
                            name="split"
                            type="number"
                            className="form-control"
                            onChange={(e) => handleSplitChange(e, index)}
                          />
                          <span className="input-group-text" id="basic-addon2">
                            %
                          </span>
                          <span
                            className="ms-3"
                            style={{
                              color: "rgb(0, 102, 102)",
                              fontSize: "20px",
                              cursor: "pointer",
                            }}
                          >
                            {SplitList.length > 0 && (
                              <AiFillMinusSquare
                                onClick={() => handleSplitRemove(index)}
                              />
                            )}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      background: "rgb(0, 102, 102)",
                      color: "white",
                    }}
                    disabled={loading}
                  >
                    {loading ? "LOADING..." : "CREATE ARTIST"}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="exampleModal3"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Delete Artist
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => deleteBtn()}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
