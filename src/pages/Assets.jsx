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

const Assets = ({ open }) => {
  const [assets, setAssets] = useState([]);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);

  const [Contributor, setContributor] = useState([]);

  const [form, setForm] = useState({
    isrc: "",
    iswc: "",
    type: "Audio",
    title: "",
    version: "",
    displayArtist: "",
    externalId: "",
    artists: [],
  });

  const { isrc, iswc, type, title, version, displayArtist, externalId } = form;

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
      .post(`https://api.royalti.io/asset/`, form, {
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

  const handleContributorChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...Contributor];
    list[index][name] = value;
    setContributor(list);
    setForm({ ...form, Contributor: list });
  };

  const handleContributorRemove = (index) => {
    const list = [...Contributor];
    list.splice(index, 1);
    setContributor(list);
  };

  const handleContributorAdd = () => {
    setContributor([...Contributor, { user: "", share: "" }]);
  };

  const [AssetId, setAssetId] = useState([]);

  const handleAssetIdChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...AssetId];
    list[index][name] = value;
    setAssetId(list);
    setForm({ ...form, AssetId: list });
  };

  const handleAssetIdRemove = (index) => {
    const list = [...AssetId];
    list.splice(index, 1);
    setAssetId(list);
  };

  const handleAssetIdAdd = () => {
    setAssetId([...AssetId, { user: "", share: "" }]);
  };

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
        setAssets(res.data);
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

  return (
    <div className={open ? "cont" : "cont end"}>
      <div
        className="p-4 rounded"
        style={{ border: "1px solid rgba(0,0,0,0.2)" }}
      >
        <div className="d-flex align-items-center">
          <span className="h4">Assets</span>
          <button
            type="button"
            className="btn p-1 ms-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ backgroundColor: "rgb(211, 231, 211)" }}
          >
            Create Tracks
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
                <th>ISR</th>
                <th>Artist</th>
                <th>Title</th>
                <th>Display Artist</th>
                <th>Type</th>
                <th>Genres</th>
                <th>Producer</th>
                <th>Products</th>
                <th>Actions</th>
                <th>Splits</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((x, index) => {
                return (
                  <tr key={index}>
                    <td>{x.isrc}</td>
                    <td>{x.Artists[0].artistName}</td>
                    <td>{x.title}</td>
                    <td>{x.displayArtist}</td>
                    <td>{x.type}</td>
                    <td>
                      {x.mainGenre ? x.mainGenre[0] : null}
                      {x.subGenre ? x.subGenre[0] : null}
                    </td>
                    <td>Samklef</td>
                    <td>{x.Products.length}</td>
                    <td>
                      <Link
                        to={`/edit-asset/${x.id}`}
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
                <td>USLZJ1790578</td>
                <td>Tunestar</td>
                <td>Follow Me</td>
                <td>Tunestar</td>
                <td>Audio</td>
                <td>Afro-Pop</td>
                <td>Samklef</td>
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
                    Add Asset
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
                    <span style={{ flex: "1" }}>
                      <label htmlFor="artist-name" className="form-label">
                        ISRC
                      </label>
                      <input
                        name="isrc"
                        value={isrc}
                        type="text"
                        className="form-control"
                        id="artist-name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Artist Name"
                        onChange={handleChange}
                      />
                    </span>
                    <span style={{ flex: "1" }} className="custom-input m-2">
                      <label htmlFor="user" className="form-label">
                        User
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
                      {/* </div> */}
                    </span>
                    <span>
                      <label htmlFor="user" className="form-label">
                        Track Type
                      </label>
                      <select
                        name="type"
                        value={type}
                        className="form-select"
                        aria-label="Default select example"
                        id="user"
                      >
                        <option value="Audio">Audio</option>
                        <option value="Video">Video</option>
                      </select>
                    </span>
                  </div>
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <span>
                      <label htmlFor="artist-name" className="form-label">
                        Display Artist
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
                    <span className="m-2">
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
                    <span>
                      <label htmlFor="artist-name" className="form-label">
                        Version
                      </label>
                      <input
                        name="version"
                        value={version}
                        type="text"
                        className="form-control"
                        id="artist-name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Artist Name"
                        onChange={handleChange}
                      />
                    </span>
                  </div>
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
                      <span>CONTRIBUTORS</span>
                      <span
                        className="ms-3"
                        style={{
                          color: "rgb(0, 102, 102)",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                      >
                        <BsFillPlusSquareFill onClick={handleContributorAdd} />
                      </span>
                    </label>
                    {Contributor.map((singleSplit, index) => (
                      <div className="input-group mb-3 d-flex" key={index}>
                        <span style={{ flex: "1" }} className="style me-1">
                          <label htmlFor="user" className="form-label">
                            Role
                          </label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            id="user"
                          >
                            <option value="">Composer</option>
                            <option value="">Drums</option>
                            <option value="">Engineer</option>
                            <option value="">Guitarist</option>
                            <option value="">Instrumentalist</option>
                            <option value="">Keyboardist</option>
                            <option value="">Lyricist</option>
                            <option value="">Mixer</option>
                            <option value="">Producer</option>
                            <option value="">Songwriter</option>
                            <option value="">Trumpet</option>
                            <option value="">Writer</option>
                          </select>
                        </span>
                        <span style={{ flex: "2" }} className="ms-1">
                          <label htmlFor="user" className="form-label">
                            Separate multiple with pipes "|"
                          </label>
                          <span className="d-flex">
                            <input
                              name="share"
                              type="number"
                              className="form-control"
                              onChange={(e) =>
                                handleContributorChange(e, index)
                              }
                            />
                            <span
                              className="ms-3"
                              style={{
                                color: "rgb(0, 102, 102)",
                                fontSize: "20px",
                                cursor: "pointer",
                              }}
                            >
                              {Contributor.length > 0 && (
                                <AiFillMinusSquare
                                  onClick={() => handleContributorRemove(index)}
                                />
                              )}
                            </span>
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <hr />
                  <div className="mb-3 d-flex align-items-center justify-content-between">
                    <span style={{ flex: "1" }} className="me-1">
                      <label htmlFor="user" className="form-label">
                        ISWC
                      </label>
                      <input
                        name="iswc"
                        vaue={iswc}
                        type="text"
                        className="form-control"
                        id="artist-name"
                        aria-describedby="emailHelp"
                        placeholder="Enter Artist Name"
                        onChange={handleChange}
                      />
                    </span>
                    <span style={{ flex: "1" }} className="ms-1">
                      <label htmlFor="user" className="form-label">
                        External ID
                      </label>
                      <input
                        name="externalId"
                        value={externalId}
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
                  <div className="mb-3">
                    <label htmlFor="artist-split" className="form-label">
                      <span>ASSET IDS</span>
                      <span
                        className="ms-3"
                        style={{
                          color: "rgb(0, 102, 102)",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                      >
                        <BsFillPlusSquareFill onClick={handleAssetIdAdd} />
                      </span>
                    </label>
                    {AssetId.map((singleSplit, index) => (
                      <div className="input-group mb-3 d-flex" key={index}>
                        <span style={{ flex: "2" }} className="ms-1">
                          <span className="d-flex">
                            <input
                              name="share"
                              type="text"
                              className="form-control"
                              onChange={(e) => handleAssetIdChange(e, index)}
                            />
                            <span
                              className="ms-3"
                              style={{
                                color: "rgb(0, 102, 102)",
                                fontSize: "20px",
                                cursor: "pointer",
                              }}
                            >
                              {AssetId.length > 0 && (
                                <AiFillMinusSquare
                                  onClick={() => handleAssetIdRemove(index)}
                                />
                              )}
                            </span>
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
                    {loading ? "LOADING..." : "CREATE ASSET"}
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
                    Delete Asset
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

export default Assets;
