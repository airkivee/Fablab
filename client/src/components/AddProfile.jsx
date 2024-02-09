import React, {
    useCallback,
    useContext,
    useState,
    useRef,
    useEffect,
  } from "react";
  import { useHttp } from "../hooks/http.hook";
  import Input from "./input/Input";
  import axios from "axios";
  import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import Platzhalter from "../img/Platzhalter-1.jpg";
  import { FaCog } from 'react-icons/fa';
  import {AiFillDelete} from 'react-icons/ai'
  import Draft from "../components/Draft"; 
  const ImageThumb = ({ image }) => {
    return (
      <img
        src={URL.createObjectURL(image)}
        alt={image.name}
        style={{ maxWidth: "280px" }}
      />
    );
  };
  const AddProfile = (props) => {
    let _id = props._id
    const data = JSON.parse(localStorage.getItem('localST'))
    const [userInfo, setuserInfo] = useState({
      file: [],
      filepreview: null,
    });
    const { loading, request, error, clearError } = useHttp()
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState("");
    const [title, setTitle] = useState(_id);
    const [description, setDescription] = useState("");
    const [cardId, setCardId] = useState("")
    const ref = useRef();
  
    const fetchData = useCallback(async () => {
      if (_id) {
        try {
          const response = await request('', 'POST', { _id: _id })
          const data = response // Полученные данные с сервера
  
          // Обновляем состояния данными с сервера
          const fileUrl = `${window.location.protocol + '//' + window.location.host + '/upload/profile/' + data.imageSrc}`; // Замените на ваш URL файла
          const responseImg = await fetch(fileUrl);
          const blob = await responseImg.blob();
          setFile(blob); // Сохраняем содержимое файла в состояние
          const file = new File([blob], data.imageSrc, { type: blob.type });
          setuserInfo({
            ...userInfo,
            file: file, // Сохраняем содержимое файла в состояние userInfo
            filepreview: URL.createObjectURL(file),
          });
  
          setTitle(data.title);
          setDescription(data.description);
        }
        catch (e) {
          if (e.message === 'Network Error') {
            toast.error('Network error. Please check your internet connection.', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            clearError()
          } else {
            toast.error(`An error occurred: ${e.message}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            clearError()
          }
        }
      }
    });
  
    function imghandleUpload(event) {
      setFile("")
      setuserInfo({
        file: [],
        filepreview: null,
      })
      setFile(event.target.files[0]);
  
      setuserInfo({
        ...userInfo,
        file: event.target.files[0],
        filepreview: URL.createObjectURL(event.target.files[0]),
      });
  
    }
    const createHandler = useCallback(async () => {
      try {
        setIsLoading(true);
        if (
          false
        ) {
          toast.error("заполните все поля формы", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsLoading(false);
        } else {
          const formdata = new FormData();
          formdata.append("image", userInfo.file);
          formdata.append("image", title);
          formdata.append("image", description);
          if (_id) {
            formdata.append("image", _id);
          }
          axios
            .post(
              `${window.location.protocol +
              "//" +
              window.location.host +
              props.path
              }/save`,
              formdata,
              {
                headers: {
                  Authorization: `Bearer ${data.token}`,
                  "Content-Type": "multipart/form-data",
                },
              }
            )
            .then((res) => {
              setIsLoading(false);
              toast.info(`${res.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              props.update();
            })
            .catch(function (error) {
              let message = error.message;
  
              setIsLoading(false);
              toast.error(`${message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
        }
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    }, [description, file, title ]);
  
    const handleImageError = (e) => {
      // Функция для обработки ошибки загрузки изображения
      e.target.src = Platzhalter;
    };
    
    const ChangeCardById = (data) => {
      setCardId(data)
    }
    const DelateCardById = (data) => {
      DelateCard(data);
    }
    const DelateCard = useCallback(async (data) => {
      console.log(data);
      try {
        if (data) {
          const response = await request('/api/vacancies/delete', 'POST', {_id:data},{Authorization: `Bearer ${data.token}`})
          toast.info(`${response.m}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          fetchData();
  
        }else{
          toast.error('нет _id colaction', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return 
        }
      } catch (e) {
        if (e.message === 'Network Error') {
          toast.error('Network error. Please check your internet connection.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          clearError()
        } else {
          toast.error(`An error occurred: ${e.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          clearError()
        }
      }
    });
    function removeHandler() {
      setTitle("");
      setDescription("");
      setFile("");
      ref.current.value = "";
      if (_id) {
        props.setId("")
      }
      setIsLoading(false);
    }
    const handleTextChange = (text) => {
      setDescription(text);
    };
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
  

            {_id ? <p>изминение карточки id:{_id}</p> : ""}
            {file && <ImageThumb image={file} />}
            <div className="form-group  ">
              <label
                className="mb-2"
                style={{
                  color: "#566885",
                  fontWeight: 700,
                }}
              >
                Загрузите изображение
              </label>
              <input
                onChange={imghandleUpload}
                type="file"
                ref={ref}
                accept="image/png, image/jpeg"
                className="form-control"
                placeholder="img"
              />
  
            </div>
            <div className="form-group mt-5 ">
              {/* <textarea
                className="form-control"
                id="textAreaExample6"
                rows="7"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Введите описание ..."
                cols={50}
                style={{ border: "#566885 solid 2px", "::placeholder": { color: "#566885" } }}
              /> */}
              <Draft onTextChange={handleTextChange}/>
            </div>
  
            <div className="col-lg-7 mt-5">
              <button
                className="btn btn-success"
                onClick={() => createHandler()}
                style={{ marginRight: "20px" }}
                disabled={isLoading}
              >
                {isLoading ? "Загрузка..." : "Создать"}
              </button>
              <button className=" btn btn-danger" onClick={() => removeHandler()}>
                стереть
              </button>
            </div>
      </>
    );
  };
  export default AddProfile;