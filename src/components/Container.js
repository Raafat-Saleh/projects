/** @format */

import React from "react";
import Card from "./Card";

export default function Container() {
  return (
    <div>
      <div className="p">
        <Card
          color={"city"}
          className={"pp"}
          url={"https://cody-net.netlify.app/"}
          name={"CodY"}
          type={"QR webesite"}
          description={
            "Website make QR for Social and Personal info to easily anyone can find you"
          }
          video={"./videos/2.webm"}
        />
        <Card
          color={"ski"}
          className={"ppp"}
          class_name={"yodawy"}
          url={"https://Raafat-Saleh.github.io/yodawy"}
          name={"Yodawy"}
          type={"E-commerce site"}
          description={"Website for buy and sell medical products"}
          video={"./videos/4.webm"}
        />
      </div>
      <div className="p">
        <Card
          color={"beach"}
          className={"pp"}
          url={"https://weather-678.netlify.app"}
          name={"City Weather"}
          type={"Weather site"}
          description={
            "Website to Get current, weekly and each three hours weather"
          }
          video={"./videos/1.webm"}
        />
        <Card
          color={"camping"}
          className={"ppp"}
          class_name={"yodawy"}
          url={"https://search-unsplash.web.app/"}
          name={"Photo Unsplash"}
          type={"Photos site"}
          description={"get pictures for certain thing"}
          video={"./videos/7.webm"}
        />
      </div>

      <div className="p">
        <Card
          color={"ski"}
          className={"pp"}
          url={"https://Raafat-Saleh.github.io/wellcome_to_egypt"}
          name={"Welcome Egypt"}
          type={"Animation site"}
          description={
            "Animation website Show The most important tourist attractions"
          }
          video={"./videos/3.webm"}
        />
        <Card
          color={"city"}
          className={"pppp"}
          class_name={"yodawy"}
          url={"https://menu-cbf73.web.app/"}
          name={"Resturant menu"}
          type={"menu site"}
          description={"get Food for certain Meal"}
          video={"./videos/6.webm"}
        />
      </div>
    </div>
  );
}
