import React from "react";
import styled from "styled-components";
import WeatherChart from "./WeatherChart";

const Content = ({
  input,
  setInput,
  weatherData,
  isFetched,
  selectedDay,
  setSelectedDay,
}) => {
  console.log(weatherData);

  const categories = weatherData?.data?.map(
    (item) => item.datetime.split("-")[2]
  );

  const cityName = weatherData?.city_name;

  const highTemp = weatherData?.data?.map((item) => item.high_temp);
  const lowTemp = weatherData?.data?.map((item) => item.low_temp);

  return (
    <ContentBox>
      {!input && (
        <div className="nocity">
          <h4>No City Is Selected!</h4>
          <p>Type any city name to get weekly forecast data</p>
        </div>
      )}
      {weatherData
        ? isFetched && (
            <div className="content">
              <div className="left">
                <WeatherChart
                  cityName={cityName}
                  categories={categories}
                  highTemp={highTemp}
                  lowTemp={lowTemp}
                  setSelectedDay={setSelectedDay}
                />
              </div>
              <div className="right">
                <div className="city-card">
                  <div className="degree">
                    {weatherData?.data?.[selectedDay]?.temp?.toFixed(0)} C
                  </div>
                  <div className="city-and-day">
                    <div className="city">{weatherData?.city_name}</div>
                    <div className="day">
                      {weatherData?.data?.[selectedDay]?.valid_date}
                    </div>
                  </div>
                  <div className="icon">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={`/icons/${weatherData?.data?.[selectedDay]?.weather?.icon}.png`}
                        alt=""
                        style={{ width: "32px", height: "32px" }}
                      />
                    </div>
                    <div style={{ marginLeft: "5px", marginBottom: "7px" }}>
                      Overcast clouds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        : isFetched && (
            <div className="nofound">
              <h4>City doesn't exist!</h4>
              <p>Type a valid city name to get weekly forecast data</p>
            </div>
          )}
    </ContentBox>
  );
};

export default Content;

const ContentBox = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  .content {
    min-height: 600px;
    display: flex;

    .left {
      flex: 3;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .right {
      flex: 2;
      display: flex;
      align-items: center;
      justify-content: center;

      .city-card {
        width: 250px;
        height: 293px;
        box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.25);
        background-color: #ffffff;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 20px;

        .city-and-day {
          .city {
            font-size: 28px;
            color: #545454;
          }

          .day {
            font-size: 14px;
            color: #545454;
            text-align: center;
          }
        }

        .degree {
          font-size: 40px;
          color: #77b6ea;
        }

        .icon {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  .nocity {
    margin-top: 148px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
      font-size: 32px;
      margin-bottom: 8px;
      color: #545454;
    }

    p {
      font-size: 24px;
      margin-top: 0;
    }
  }

  .nofound {
    margin-top: 148px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
      font-size: 32px;
      margin-bottom: 8px;
      color: #cd7b7b;
    }

    p {
      font-size: 24px;
      margin-top: 0;
    }
  }
`;
