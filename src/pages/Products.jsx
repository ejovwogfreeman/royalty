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

const Products = ({ open }) => {
  const [products, setProducts] = useState([]);
  const [options, setOptions] = useState([]);
  const [asset, setAsset] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);

  const [AssetList, setAssetList] = useState([]);

  const handleSplitChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...AssetList];
    list[index][name] = value;
    setAssetList(list);
    setForm({ ...form, split: list });
  };

  const handleSplitRemove = (index) => {
    const list = [...AssetList];
    list.splice(index, 1);
    setAssetList(list);
  };

  const handleSplitAdd = () => {
    setAssetList([...AssetList, { user: "", share: "" }]);
  };

  const [distributions, setDistributions] = useState([
    "Africori",
    "Amuse",
    "AWAL",
    "Believe Music",
    "CDBaby",
    "Cl",
    "DistroKid",
    "Ditto Music",
    "DIXTRIT Media",
    "FeeMe Digital",
    "Fresh Tunes",
    "FUGA",
    "Horus Music",
    "LANDR",
    "Merlin Vevo",
    "ONErpm",
    "RoutineNote",
    "Songtradr",
    "Soundrop",
    "Spinnup",
    "Stem Music",
    "Symphonic Distribution",
    "The-Source",
    "Tunecore",
    "UnitedMasters",
  ]);

  const [genres, setGenres] = useState([
    "African",
    "Afro-Pop",
    "Afrobeats",
    "Alternative",
    "Blues",
    "Children's Music",
    "Christian",
    "Classical",
    "Comedy",
    "Contemporary Classical",
    "Country",
    "Dance",
    "Electronic",
    "French Pop",
    "Hip-Hop/Rap",
    "Highlife",
    "Instrumental",
    "Jazz",
    "Opera",
    "Pop",
    "R&B",
    "Raggae",
    "Rock",
    "Soul",
    "Soundtrack",
    "Spoken Word",
    "Vocal",
    "Worldwide",
    "World",
  ]);

  const [subGenres, setSubGenres] = useState([
    "CCM",
    "Christian & Godpel",
    "Christian Metal",
    "Christian Pop",
    "Christian Rap",
    "Christian Rock",
    "Classic Christian",
    "Contemporary Gospel",
    "Gospel",
    "Praise & Worship",
    "Qawwali",
    "Southern Gospel",
    "Traditional Gospel",
    "Africa",
    "Afro-Beat",
    "Afrobeats",
    "Afro-Pop",
    "Calypso",
    "Caribbean",
    "Celtic Folk",
    "Contemporary Celtic",
    "Coupé-décalé",
    "Europe",
    "France",
    "Hawaii",
    "Middle East",
    "Polka",
    "South Africa",
    "Traditional Celtic",
    "Worldbeat",
  ]);

  const [form, setForm] = useState({
    upc: "",
    catalog: "",
    type: "Audio",
    signDate: "",
    displayArtist: "",
    title: "",
    label: "",
    status: "Live",
    artists: [],
  });

  const { upc, catalog, type, status, label, title, signDate, displayArtist } =
    form;

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
      .post(`https://api.royalti.io/product/`, form, {
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
      .get(`https://api.royalti.io/product/`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
          Authorization: "Bearer 7bd60554-4f63-4c62-a5f6-c29c3f67cb2a",
        },
      })
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        setOptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.royalti.io/asset/`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "applicatioon/json",
          Authorization: "Bearer 7bd60554-4f63-4c62-a5f6-c29c3f67cb2a",
        },
      })
      .then((res) => {
        setAsset(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={open ? "cont" : "cont end"}>
      <div
        className="p-4 rounded"
        style={{ border: "1px solid rgba(0,0,0,0.2)" }}
      >
        <div className="d-flex align-items-center">
          <span className="h4">Products</span>
          <button
            type="button"
            className="btn p-1 ms-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ backgroundColor: "rgb(211, 231, 211)" }}
          >
            Release
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
                <th>ISRC</th>
                <th>Artist</th>
                <th>Title</th>
                <th>Display Artist</th>
                <th>Type</th>
                <th>Genres</th>
                <th>Release Date</th>
                <th>Tracks</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Splits</th>
              </tr>
            </thead>
            <tbody>
              {products.map((x, index) => {
                return (
                  <tr key={index}>
                    <td>{x.Artists[0].artistName}</td>
                    <td>{x.Artists[0].artistName}</td>
                    <td>{x.title}</td>
                    <td>{x.displayArtist}</td>
                    <td>{x.type}</td>
                    <td>
                      {x.mainGenre ? x.mainGenre[0] : null}
                      {x.subGenre ? x.subGenre[0] : null}
                    </td>
                    <td>{x.releaseDate}</td>
                    <td>tracks</td>
                    <td>status</td>
                    <td>
                      <Link
                        to={`/edit-product/${x.id}`}
                        className="ms-1"
                        style={{ cursor: "pointer" }}
                      >
                        <BsPencilSquare />
                      </Link>
                      <span className="ms-2" style={{ cursor: "pointer" }}>
                        <BsTrash
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal3"
                        />
                      </span>
                    </td>
                    <td>
                      <span>2</span> <span>+</span>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td>765347740100</td>
                <td>Tunestar</td>
                <td>Follow Me</td>
                <td>Tunestar</td>
                <td>Audio</td>
                <td>Afro-Pop</td>
                <td>2021-07-07</td>
                <td>Live</td>
                <td>1</td>
                <td>
                  <span className="ms-1" style={{ cursor: "pointer" }}>
                    <BsPencilSquare
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                  <span className="ms-2" style={{ cursor: "pointer" }}>
                    <BsTrash
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </td>
                <td>
                  <span>2</span> <span>+</span>
                </td>
              </tr>
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
                    Add Product
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form className="p-3" onSubmit={handleSubmit}>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <span style={{ flex: "1" }} className="me-1">
                      <label htmlFor="artist-name" className="form-label">
                        UPC
                      </label>
                      <input
                        name="upc"
                        value={upc}
                        type="text"
                        className="form-control"
                        id="artist-name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Artist Name"
                        onChange={handleChange}
                      />
                    </span>
                    <span style={{ flex: "1" }} className="me-1">
                      <label htmlFor="artist-name" className="form-label">
                        Catalog
                      </label>
                      <input
                        name="catalog"
                        value={catalog}
                        type="text"
                        className="form-control"
                        id="artist-name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Artist Name"
                        onChange={handleChange}
                      />
                    </span>
                  </div>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <span style={{ flex: "1" }} className="me-1">
                      <label htmlFor="user" className="form-label">
                        Track Type
                      </label>
                      <select
                        name="type"
                        value={type}
                        className="form-select"
                        aria-label="Default select example"
                        id="user"
                        onChange={handleChange}
                      >
                        <option value="Audio">Audio</option>
                        <option value="Video">Video</option>
                      </select>
                    </span>
                    <span style={{ flex: "1" }} className="ms-1">
                      <label htmlFor="apartment" className="form-label">
                        Sign Date
                      </label>
                      <input
                        name="signDate"
                        value={signDate}
                        type="date"
                        className="form-control"
                        id="apartment"
                        onChange={handleChange}
                      />
                    </span>
                  </div>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <span style={{ flex: "1" }} className="custom-input">
                      <label htmlFor="user" className="form-label">
                        Artist(s)
                      </label>
                      <select
                        name=""
                        id=""
                        onChange={(e) =>
                          setForm({
                            ...form,
                            artists: [...e.target.selectedOptions].map(
                              (opt) => opt.value
                            ),
                          })
                        }
                        style={{ width: "100%" }}
                        multiple
                      >
                        {options.map((x, index) => (
                          <option key={index} value={x.id}>
                            {x.artistName}
                          </option>
                        ))}
                      </select>
                    </span>
                    <span style={{ flex: "1" }} className="m-2">
                      <label htmlFor="artist-name" className="form-label">
                        Dispay Artist
                      </label>
                      <input
                        name="displayArtist"
                        value={displayArtist}
                        type="text"
                        className="form-control"
                        id="artist-name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Artist Name"
                        onChange={handleChange}
                      />
                    </span>
                    <span style={{ flex: "1" }}>
                      <label htmlFor="artist-name" className="form-label">
                        Title
                      </label>
                      <input
                        name="title"
                        value={title}
                        type="text"
                        className="form-control"
                        id="artist-name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Artist Name"
                        onChange={handleChange}
                      />
                    </span>
                  </div>
                  <hr />
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <span style={{ flex: "1" }}>
                      <label htmlFor="artist-name" className="form-label">
                        Label
                      </label>
                      <input
                        name="label"
                        value={label}
                        type="text"
                        className="form-control"
                        id="artist-name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Artist Name"
                        onChange={handleChange}
                      />
                    </span>
                    <span className="m-2">
                      <label htmlFor="user" className="form-label">
                        Status
                      </label>
                      <select
                        name="status"
                        value={status}
                        className="form-select"
                        aria-label="Default select example"
                        id="user"
                        onChange={handleChange}
                      >
                        <option value="Live">Live</option>
                        <option value="Taken Down">Takeen Down</option>
                        <option value="Scheduled">Scheduled</option>
                      </select>
                    </span>
                    <span style={{ flex: "1" }} className="custom-input">
                      <label htmlFor="user" className="form-label">
                        Distribution
                      </label>
                      <select
                        name=""
                        id=""
                        onChange={(e) =>
                          setForm({
                            ...form,
                            distributions: [...e.target.selectedOptions].map(
                              (opt) => opt.value
                            ),
                          })
                        }
                        style={{ width: "100%" }}
                        multiple
                      >
                        {distributions.map((x, index) => (
                          <option key={index} value={x}>
                            {x}
                          </option>
                        ))}
                      </select>
                    </span>
                  </div>
                  <hr />
                  <div className="mb-3 custom-input d-flex align-items-center justify-content-between">
                    <span style={{ flex: "1" }} className="me-1">
                      <label htmlFor="user" className="form-label">
                        Main Genre
                      </label>
                      <select
                        name=""
                        id=""
                        onChange={(e) =>
                          setForm({
                            ...form,
                            mainGenre: [...e.target.selectedOptions].map(
                              (opt) => opt.value
                            ),
                          })
                        }
                        style={{ width: "100%" }}
                        multiple
                      >
                        {genres.map((x, index) => (
                          <option key={index} value={x}>
                            {x}
                          </option>
                        ))}
                      </select>
                    </span>
                    <span style={{ flex: "1" }} className="ms-1">
                      <label htmlFor="user" className="form-label">
                        Sub Genre
                      </label>
                      <select
                        name=""
                        id=""
                        onChange={(e) =>
                          setForm({
                            ...form,
                            subGenre: [...e.target.selectedOptions].map(
                              (opt) => opt.value
                            ),
                          })
                        }
                        style={{ width: "100%" }}
                        multiple
                      >
                        {subGenres.map((x, index) => (
                          <option key={index} value={x}>
                            {x}
                          </option>
                        ))}
                      </select>
                    </span>
                  </div>
                  <hr />
                  <div className="mb-3">
                    <label htmlFor="artist-split" className="form-label">
                      <span>ASSETS</span>
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
                    {AssetList.map((singleSplit, index) => (
                      <div className="input-group mb-3 d-flex" key={index}>
                        <span style={{ flex: "2" }} className="style">
                          <input
                            name="user"
                            type="text"
                            list="data"
                            onChange={(e) => handleSplitChange(e, index)}
                          />
                          <datalist id="data">
                            {asset.map((x, key) => (
                              <option key={key} dataValue={x} value={x.title} />
                            ))}
                          </datalist>
                        </span>
                        <span
                          className="ms-3"
                          style={{
                            color: "rgb(0, 102, 102)",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                        >
                          {AssetList.length > 0 && (
                            <AiFillMinusSquare
                              onClick={() => handleSplitRemove(index)}
                            />
                          )}
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
                    {loading ? "LOADING..." : "CREATE PRODUCT"}
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
                    Delete Product
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
                  <button type="button" className="btn btn-outline-danger">
                    Save changes
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

export default Products;
