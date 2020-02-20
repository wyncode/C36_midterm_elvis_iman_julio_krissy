export const aqiToCig = 1 / 72; // converts the AQI to approximate number of cigarettes smoked per day

export const hazardLevels = [
  {
    level: {
      hazard: 'Good',
      range: 50,
      color: 'green'
    }
  },
  {
    level: {
      hazard: 'Moderate',
      range: 100,
      color: 'yellow'
    }
  },
  {
    level: {
      hazard: 'Unhealthy for sensitive groups',
      range: 150,
      color: 'orange'
    }
  },
  {
    level: {
      hazard: 'Unhealthy',
      range: 200,
      color: 'red'
    }
  },
  {
    level: {
      hazard: 'Very Unhealthy',
      range: 300,
      color: 'purple'
    }
  },
  {
    level: {
      hazard: 'Hazardous',
      range: 500,
      color: 'maroon'
    }
  }
];

export const monthToMonth = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};
