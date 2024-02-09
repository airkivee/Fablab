import React from "react";
import { connect } from "react-redux";
import { setRole } from "../redux/action";
import HomeImg from "../img/template.webp";
import HomeImg1 from "../img/template2.webp";
import HomeImg2 from "../img/template3.webp";
import HomeImg3 from "../img/i (7).webp";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import Draft  from "../components/Draft";
import Carousel from "react-bootstrap/Carousel";
import Form from "../components/Form";
const Home = ({ role, setRole }) => {
  // Your component logic here
  const containerStyle = {
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    padding: "20px",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };
  return (
    <>
      <div className="container">
        <h1 className="mt-5">Добро пожаловать в FAB LAB Бишкек!</h1>
        <div className="row">
          <div className="col-md-8">

            <p>
              Цифровая лаборатория и мастерская для всех, кто хочет воплотить
              свои идеи в реальность! 🚀
            </p>
            <p>
              Наша цифровая лаборатория предоставляет уникальную возможность для
              индивидуального самостоятельного изготовления различных изделий и
              деталей. Мы поддерживаем творчество и исследования в области
              цифровых технологий, помогая воплощать ваши проекты в жизнь.
            </p>
            <h3 className="mt-5">Бесплатные курсы:</h3>
            <ul>
              <li>💻 3D Моделирование</li>
              <li>📡 3D Сканирование</li>
              <li>🏛 Макетирование</li>
              <li>🤖 Ардуино</li>
              <li>⚡️ Лазерная резка</li>
              <li>🔩 DIY (Сделай сам)</li>
              <li>📐 Практические занятия</li>
            </ul>
            <p>
              🔝 У нас есть уютное пространство для творчества - Maker space,
              где вы можете воплощать свои идеи вместе с единомышленниками.
            </p>
      
          </div>
          <div className="col-md-4 text-center">
            <div className="">
              <img src={HomeImg3} alt="" />
            </div>
            <h4 className="mt-4">
              {" "}
              <a href="">регистрация для учителя</a>
              <br />
              <a href="">личный кабинет студента</a>{" "}
            </h4>
          </div>
        </div>
      </div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 h-5"
            src={HomeImg}
            style={{ height: "150px" }}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={HomeImg1}
            style={{ height: "150px" }}
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "150px" }}
            src={HomeImg2}
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container row mt-5 mb-5" style={{"justifyContent":"space-between"}}>
        <div className="col-lg-6">
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <p>
              <FaMapMarkerAlt
                style={{
                  fontSize: "30px",
                  margin: "0 20px 0 30px",
                  color: "#478AC9",
                }}
              />
            </p>
          </div>
          <p>
            пр. Ч. Айтматова 66, КГТУ, к. 1/324, Bishkek, Kyrgyzstan{" "}
            <a
              className="dg-widget-link"
              style={{ color: "#478AC9" }}
              href="https://www.google.com/maps/dir/42.8699284,74.6049057//@42.8698989,74.522505,12z/data=!4m4!4m3!1m1!4e1!1m0?entry=ttu"
            >
              google map
            </a>
          </p>
        </div>
        <div className="d-flex ">
          <div className="d-flex align-items-center">
            <p>
              <MdAccessTimeFilled
                style={{
                  fontSize: "30px",
                  margin: "0 20px 0 30px",
                  color: "#478AC9",
                }}
              />
            </p>
          </div>
          <p>
            Режим работы офиса: Понедельник - Пятница 8:30-17:00 Обед:
            12:00-13:00 Выходные: Суббота, Воскресенье
          </p>
        </div>
        <div className="d-flex ">
          <div className="d-flex align-items-center">
            <p>
              <GrMail
                style={{
                  fontSize: "30px",
                  margin: "0 20px 0 30px",
                  color: "#478AC9",
                }}
              />
            </p>
          </div>

          <p>
            <a href="mailto:fablabbishkek@gmail. " style={{ color: "#478AC9" }}>
              fablabbishkek@gmail.com
            </a>
          </p>
        </div>
        <div className="d-flex ">
          <div className="d-flex align-items-center">
            <p>
              <FaPhoneAlt
                style={{
                  fontSize: "30px",
                  margin: "0 20px 0 30px",
                  color: "#478AC9",
                }}
              />
            </p>
          </div>
          <div>
            Телефон для справок:
            <div className="d-flex" style={{ flexDirection: "column" }}>
              <a href="tel:  +996 507 194 533" style={{ color: "#478AC9" }}>
                +996 507 194 533
              </a>
            </div>
          </div>
        </div>
        </div>
        <Form />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  role: state.role,
});

const mapDispatchToProps = {
  setRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
