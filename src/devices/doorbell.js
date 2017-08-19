import { batteryService } from "./_shared";

export default ({ Characteristic, Service }) => {
  return {
    type: "doorbell",
    group: "doorbells",
    services: [
      {
        service: Service.MotionSensor,
        supported: state => state.motion !== undefined,
        characteristics: [
          {
            characteristic: Characteristic.MotionDetected,
            get: state => state.motion
          }
        ]
      },
      batteryService({
        Characteristic,
        Service,
        notCharging: true
      })
    ]
  };
};
