import React, { useState, useEffect } from "react";
import StyledCalculator, { GlowingHeading } from "./Styled";
const Calculator = () => {
  const electricityMilge = 35;

  const [electricityCostPerUnit, setElectricityCostPerUnit] = useState(11);
  const [petrolMileage, setPetrolMileage] = useState(25);
  const [petrolCostPerLiter, setPetrolCostPerLiter] = useState(160);
  const [dailyTravel, setDailyTravel] = useState(25);

  const [fuelCostOfEVPA, setFuelCostOfEVPA] = useState(0);
  const [fuelCostOfPVPA, setFuelCostOfPVPA] = useState(0);

  useEffect(() => {
    setFuelCostOfEVPA(
      (electricityCostPerUnit / electricityMilge) * dailyTravel * 365
    );
    setFuelCostOfPVPA((petrolCostPerLiter / petrolMileage) * dailyTravel * 365);
  }, [electricityCostPerUnit, petrolCostPerLiter, petrolMileage, dailyTravel]);
  return (
    <StyledCalculator>
      <GlowingHeading>FUEL SAVINGS</GlowingHeading>
      <p className="title">
        Most of us know electric is cheaper over time. But by how much exactly?
        Let’s do the math.
      </p>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              <p>
                PROJECT <span className="blue">ONE</span>
              </p>
            </th>
            <th>
              <p>
                PETROL <span className="red">BIKE</span>
              </p>
            </th>
          </tr>
          <tr>
            <td>
              <p className="title">Mileage</p>
            </td>
            <td><p>35 km/kWh</p></td>
            <td>
              <p>{petrolMileage}</p>
              <input
                type="range"
                min="25"
                max="40"
                value={petrolMileage}
                onChange={(e) => setPetrolMileage(e.target.value || 0)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p className="title">Fuel unit cost</p>
            </td>
            <td>
              <span>NPR.</span>
              <input
                type="number"
                value={electricityCostPerUnit}
                onChange={(e) => setElectricityCostPerUnit(e.target.value || 0)}
              />{" "}
              <span>per kWh</span>
            </td>
            <td>
              <span>NRP.</span>
              <input
                type="number"
                value={petrolCostPerLiter}
                onChange={(e) => setPetrolCostPerLiter(e.target.value || 0)}
              />
              <span>per liter</span>
            </td>
          </tr>
          <tr>
            <td>
              <p className="title">Distance travelled</p>
            </td>
            <td>
              <input
                type="number"
                value={dailyTravel}
                onChange={(e) => setDailyTravel(e.target.value || 0)}
              />
              <p>{dailyTravel * 365} km/year</p>
              <p>{dailyTravel * 365*5} km/5years</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="title">Fuel cost</p>
            </td>
            <td>
              <p>{(fuelCostOfEVPA/365).toFixed(2)}/day</p>
              <p>{(fuelCostOfEVPA).toFixed(2)}/year</p>
              <p><span className="blue">{(fuelCostOfEVPA*5).toFixed(2)}</span>/5years</p>
            </td>
            <td>
              <p>{(fuelCostOfPVPA/365).toFixed(2)}/day</p>
              <p>{(fuelCostOfPVPA).toFixed(2)}/year</p>
              <p><span className="red">{(fuelCostOfPVPA*5).toFixed(2)}</span>/5years</p>
            </td>
          </tr>
        </tbody>
      </table>

      <p >
      That’s a savings of NPR.<span className="blue">{((fuelCostOfPVPA-fuelCostOfEVPA)*5).toFixed()}</span> over 5 years in fuel alone! Minimal maintenance cost adds to your savings even further.
      </p>

    </StyledCalculator>
  );
};

export default Calculator;
