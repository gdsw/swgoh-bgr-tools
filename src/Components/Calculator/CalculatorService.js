const ZAM_UNIQUE_BONUS_PERCENTAGE = 1.20,
      ZAM_SHARED_BONUS_PERCENTAGE = 0.20,
      MAUL_VADER_BONUS = 40,
      SPEED_UP_BONUS_PERCENTAGE = 1.25,
      DARTH_MAUL_TM_BONUS_PERCENTAGE = 20,
      KYLE_TM_BONUS_PERCENTAGE = 30;

export class CalculatorService {
    calculateZamSpeed = (speed) => {
        speed = parseFloat(speed);
        let zamSpeed = Math.floor(speed * ZAM_UNIQUE_BONUS_PERCENTAGE),
        sharedSpeed = Math.floor(zamSpeed * ZAM_SHARED_BONUS_PERCENTAGE);

        return {zamSpeed, sharedSpeed};
    }

    calculateMaulSpeed = (speed) => {
        speed = parseFloat(speed);
        let maulSpeed = Math.floor((speed + MAUL_VADER_BONUS) * SPEED_UP_BONUS_PERCENTAGE);
        return maulSpeed;
    }

    calculateDarthMaulSpeed = (speed) => {
        speed = parseFloat(speed);
        let darthMaulSpeed = Math.floor(speed * (100 / (100 - DARTH_MAUL_TM_BONUS_PERCENTAGE)));
        return darthMaulSpeed;
    }

    calculateKyleSpeed = (speed) => {
        speed = parseFloat(speed);
        let kyleSpeed = Math.floor(speed * (100 / (100 - KYLE_TM_BONUS_PERCENTAGE)));
        return kyleSpeed;
    }
}

const calculatorService = new CalculatorService();
export default calculatorService;