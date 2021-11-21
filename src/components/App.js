// import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HotelGallery from "./HotelsGallery";
import HotelCard from "./HotelCard";
import CallNowButton from "./CallNowButton";

export class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Router>
          <div>
            Welcome to Hotel PhoneBook
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "white",
                width: "300px",
                height: "500px",
                border: "15px solid black",
                borderRadius: "10px",
                padding: "2px",
                margin: "20px",
                justifyContent: "center",
                overflow: "auto",
              }}
              className="content"
            >
              <Routes>
                {Hoteldatabase.map((hotel) => {
                  return (
                    <Route
                      key={hotel.שם}
                      path={`/${encodeURIComponent(hotel.שם)}`}
                      exact
                      element={<HotelCard hotelJson={hotel} />}
                    />
                  );
                })}
                {Hoteldatabase.map((hotel) => {
                  return (
                    <Route
                      key={hotel.שם}
                      path={`/calling${encodeURIComponent(hotel.שם)}`}
                      exact
                      element={
                        <CallNowButton
                          hotelJson={hotel}
                          url={`/${encodeURIComponent(hotel.שם)}`}
                        />
                      }
                    />
                  );
                })}
                <Route
                  exact
                  path="/"
                  element={<HotelGallery database={Hoteldatabase} />}
                />
              </Routes>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

const Hoteldatabase = [
  {
    שם: "מלון מרום",
    רחוב: "פלמח",
    בית: "051",
    טלפון: "8254355",
  },
  {
    שם: "אלישע בעמ",
    רחוב: "כץ יאיר",
    בית: "012",
    טלפון: "8309009",
  },
  {
    שם: "אירוח הר הכרמל",
    רחוב: "דרך הים",
    בית: "103",
    טלפון: "8381414",
  },
  {
    שם: "מלון הר הכרמל",
    רחוב: "שושנת הכרמל",
    בית: "067",
    טלפון: "8381414",
  },
  {
    שם: "קראון פלזה חיפה",
    רחוב: "יפה נוף",
    בית: "111",
    טלפון: "8350800",
  },
  {
    שם: "מלון דביר",
    רחוב: "יפה נוף",
    בית: "124",
    טלפון: "8389139",
  },
  {
    שם: "מלון נוף",
    רחוב: "שדרות הנשיא",
    בית: "101",
    טלפון: "8354311",
  },
  {
    שם: "מלון דן פנורמה",
    רחוב: "שדרות הנשיא",
    בית: "105",
    טלפון: "8334510",
  },
  {
    שם: "בית שלום כרמל",
    רחוב: "שדרות הנשיא",
    בית: "110",
    טלפון: "8377481",
  },
  {
    שם: "מלון יערות הכרמל",
    רחוב: "יערות הכרמל",
    בית: "31900",
    טלפון: "1809442791",
  },
  {
    שם: "מלון וילה כרמל",
    רחוב: "היינריך היינה",
    בית: "1",
    טלפון: "8375777/8",
  },
  {
    שם: "מלון גלרי חיפה",
    רחוב: "הרצל",
    בית: "061",
    טלפון: "8616161",
  },
  {
    שם: "מלון ליאונרדו",
    רחוב: "דוד אלעזר",
    בית: "10",
    טלפון: "8508888",
  },
];

export default App;
