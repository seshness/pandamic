import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/SvgIcon';

let Epidemic = (props) => (
  <SvgIcon viewBox="0 0 1000 1000" {...props}>
    <path d="M403.46 50.27c-4.29 1.64-16.16 7.16-26.39 12.48-62.39 32.32-110.45 89.39-131.52 156.27-18.82 59.52-15.34 131.73 9.2 185.93 3.27 7.16 5.93 13.3 5.93 13.5 0 .41-6.14 1.23-13.5 2.05-20.45 2.05-51.95 10.23-72 18.61C67.39 483.71.3 594.16 11.14 709.12c1.23 13.3 2.46 24.34 2.86 24.75.41.41 1.43-7.77 2.25-18.21 9.21-118.84 115.17-210.89 236.26-205.57 39.68 1.84 72.41 12.07 103.71 32.52 14.73 9.61 37.84 30.89 47.25 43.16l4.3 5.93 15.14-8.39 15.14-8.39-1.43-8.59c-2.25-12.07.82-28.43 7.57-40.91 6.34-11.66 21.07-24.54 32.32-28.23l7.16-2.45v-17.18c0-16.16-.21-17.18-4.5-18-38.25-7.36-56.86-14.32-81.61-30.27-131.93-85.09-128.86-293.93 5.32-374.93 12.65-7.56 12.85-8.59.58-4.09zM597.78 54.57c36.62 22.09 68.32 59.73 85.09 101.05 40.91 100.43 6.34 217.64-80.8 274.09-24.34 15.55-43.16 22.5-81 29.86-4.5.82-4.7 1.84-4.7 18v17.18l7.16 2.45c25.57 8.39 44.18 40.3 39.89 68.53l-1.43 9.2 15.14 8.39 15.14 8.39 4.3-5.93c9.41-12.27 32.52-33.54 47.25-43.16 17.8-11.66 39.68-21.27 62.39-27.41 23.52-6.54 75.89-6.54 101.25 0 99.19 24.95 168.94 104.11 176.3 200.45.82 10.43 1.84 18.62 2.25 18.21.41-.41 1.64-11.45 2.86-24.75 11.46-122.53-65.45-238.71-183.47-277.16-16.98-5.52-50.93-12.48-61.36-12.48-5.73 0-5.73-.21-.82-9.82 6.34-12.68 14.11-37.23 18.61-59.32 5.32-26.39 5.73-70.36 1.02-97.57C748.33 169.73 693.3 97.11 617.83 60.5 589.8 47 580.6 44.34 597.78 54.57z"/><path d="M469.33 313.12c-18.2 2.45-39.27 7.77-55.23 13.7-14.52 5.52-41.32 19.02-48.68 24.75l-4.71 3.48 11.45 13.91c6.34 7.77 12.68 14.32 14.32 14.93 1.43.61 6.55-1.43 11.45-4.3 34.77-22.09 90.82-32.32 134.39-24.75 27.2 4.71 51.75 13.5 72.41 25.98l7.77 4.7 5.32-5.11c3.07-2.66 9-9.41 13.5-14.93l8.18-10.23-4.91-3.68c-8.38-6.34-39.07-21.48-54.82-26.79-32.72-11.05-79.15-15.96-110.44-11.66zM254.55 557.96c0 35.8 9.41 76.91 24.75 107.39 17.39 34.77 47.45 70.36 77.52 91.43 14.73 10.23 32.93 20.66 36.2 20.66 1.84 0 7.77-13.71 11.86-27.41l2.66-8.8-18.61-12.48c-32.93-21.48-56.86-48.68-73.84-84.48-12.48-25.77-17.8-46.64-19.02-75.89l-1.23-23.93-9.41-2.05c-5.11-1.02-14.32-2.66-20.05-3.48l-10.83-1.42v20.46zM723.58 541.18c-7.98 1.43-15.54 3.07-16.57 3.89-1.02.61-2.46 11.04-2.86 23.11-.61 12.48-3.07 29.66-5.73 39.48-5.32 21.07-19.23 51.14-31.5 68.32-12.48 17.59-40.29 43.57-58.91 55.23-8.79 5.32-15.95 10.23-15.95 10.64 0 4.29 13.3 35.59 15.14 35.59 1.43 0 10.63-4.91 20.45-10.84 73.43-44.6 117.61-123.14 117.81-209.67 0-21.47 1.84-20.04-21.88-15.75z"/><path d="M438.85 610.52c-10.02 5.73-14.32 9.41-13.71 11.45.41 1.64 3.27 9.41 5.93 17.39 7.98 22.71 10.23 40.5 9 68.73-2.25 54.41-23.93 102.27-63.41 141.75-69.14 68.93-172.43 87.75-255.48 46.84-22.5-11.25-22.5-10.02-.2 5.93 45.82 32.93 98.59 49.7 157.09 49.5 56.05-.21 103.5-14.93 150.34-46.43 18.61-12.68 48.27-40.91 60.95-58.09 5.11-7.16 10.02-12.89 10.64-12.89.61 0 5.52 5.73 10.64 12.89 12.68 17.18 42.34 45.41 60.95 58.09 30.48 20.46 62.39 34.16 98.79 41.93 31.5 6.75 77.93 6.34 109.23-1.02 39.68-9.2 73.02-24.34 104.52-47.86 7.98-5.93 14.73-11.25 14.73-11.45 0-.41-9 3.89-19.84 9.21-121.29 59.93-272.87-9.21-312.75-142.77-4.29-14.52-5.52-23.93-6.34-46.02-1.23-31.09 1.84-51.96 11.05-74.86 2.86-7.16 4.91-13.3 4.5-13.7-.41-.41-7.16-4.3-14.93-8.8l-14.11-8.18-8.8 6.55c-11.66 9-21.48 12.07-37.64 12.07s-25.98-3.07-37.64-12.07l-8.8-6.75-14.71 8.56z"/>
  </SvgIcon>
);
Epidemic = pure(Epidemic);
Epidemic.displayName = 'Epidemic';
Epidemic.muiName = 'SvgIcon';

export default Epidemic;
